import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { ENTRADA_CATEGORIAS, SAIDA_CATEGORIAS, PAYMENT_METHODS, TransactionType, PaymentMethod } from "@/lib/financeiro";

export type TransactionRecord = {
  id?: string;
  tipo: TransactionType;
  categoria: string;
  descricao: string | null;
  valor: number;
  data: string;
  forma_pagamento: PaymentMethod;
  member_id: string | null;
};

type MemberOption = { id: string; nome: string };

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  tipo: TransactionType;
  initial?: TransactionRecord | null;
  onSaved?: () => void;
}

const today = () => new Date().toISOString().slice(0, 10);

export const TransactionDialog: React.FC<Props> = ({ open, onOpenChange, tipo, initial, onSaved }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState<MemberOption[]>([]);
  const [form, setForm] = useState<TransactionRecord>({
    tipo,
    categoria: "",
    descricao: "",
    valor: 0,
    data: today(),
    forma_pagamento: "pix",
    member_id: null,
  });

  const categorias = tipo === "entrada" ? ENTRADA_CATEGORIAS : SAIDA_CATEGORIAS;
  const isDizimo = tipo === "entrada" && form.categoria === "Dízimo";

  useEffect(() => {
    if (!open) return;
    if (initial) setForm({ ...initial });
    else setForm({ tipo, categoria: "", descricao: "", valor: 0, data: today(), forma_pagamento: "pix", member_id: null });
  }, [open, initial, tipo]);

  useEffect(() => {
    if (!open || !user) return;
    supabase
      .from("members")
      .select("id, nome")
      .order("nome")
      .then(({ data }) => setMembers((data ?? []) as MemberOption[]));
  }, [open, user]);

  const handleSave = async () => {
    if (!user) { toast.error("Não autenticado"); return; }
    if (!form.categoria) { toast.error("Selecione uma categoria"); return; }
    if (!form.valor || form.valor <= 0) { toast.error("Informe um valor válido"); return; }
    setLoading(true);
    const payload = {
      user_id: user.id,
      tipo: form.tipo,
      categoria: form.categoria,
      descricao: form.descricao || null,
      valor: form.valor,
      data: form.data,
      forma_pagamento: form.forma_pagamento,
      member_id: isDizimo ? form.member_id : null,
    };
    const res = initial?.id
      ? await supabase.from("transactions").update(payload).eq("id", initial.id)
      : await supabase.from("transactions").insert(payload);
    setLoading(false);
    if (res.error) { toast.error(res.error.message); return; }
    toast.success(initial?.id ? "Lançamento atualizado" : "Lançamento criado");
    onOpenChange(false);
    onSaved?.();
  };

  const title = `${initial?.id ? "Editar" : "Nova"} ${tipo === "entrada" ? "Entrada" : "Saída"}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader><DialogTitle>{title}</DialogTitle></DialogHeader>
        <div className="grid gap-3 py-2">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Data</Label>
              <Input type="date" value={form.data} onChange={(e) => setForm({ ...form, data: e.target.value })} />
            </div>
            <div>
              <Label>Valor (R$)</Label>
              <Input type="number" step="0.01" min="0" value={form.valor || ""} onChange={(e) => setForm({ ...form, valor: parseFloat(e.target.value) || 0 })} />
            </div>
          </div>
          <div>
            <Label>Categoria</Label>
            <Select value={form.categoria} onValueChange={(v) => setForm({ ...form, categoria: v, member_id: v === "Dízimo" ? form.member_id : null })}>
              <SelectTrigger><SelectValue placeholder="Selecione..." /></SelectTrigger>
              <SelectContent className="bg-popover z-50">
                {categorias.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Forma de pagamento</Label>
            <Select value={form.forma_pagamento} onValueChange={(v: PaymentMethod) => setForm({ ...form, forma_pagamento: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent className="bg-popover z-50">
                {PAYMENT_METHODS.map((p) => <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          {isDizimo && (
            <div>
              <Label>Membro (dizimista)</Label>
              <Select value={form.member_id ?? ""} onValueChange={(v) => setForm({ ...form, member_id: v })}>
                <SelectTrigger><SelectValue placeholder={members.length ? "Selecione um membro" : "Nenhum membro cadastrado"} /></SelectTrigger>
                <SelectContent className="bg-popover z-50 max-h-72">
                  {members.map((m) => <SelectItem key={m.id} value={m.id}>{m.nome}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          )}
          <div>
            <Label>Descrição</Label>
            <Textarea rows={2} value={form.descricao ?? ""} onChange={(e) => setForm({ ...form, descricao: e.target.value })} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>Cancelar</Button>
          <Button onClick={handleSave} disabled={loading} className={tipo === "entrada" ? "bg-church-income hover:bg-church-income/90" : "bg-church-expense hover:bg-church-expense/90"}>
            {loading ? "Salvando..." : "Salvar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
