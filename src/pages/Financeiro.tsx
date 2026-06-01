import React, { useEffect, useMemo, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { CardChurch, CardContent, CardHeader, CardTitle } from "@/components/ui/card-church";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/dashboard/StatCard";
import { PlusCircle, MinusCircle, Download, DollarSign, Pencil, Eye } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { TransactionDialog, TransactionRecord } from "@/components/financeiro/TransactionDialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { formatBRL, formatDate, PAYMENT_METHODS } from "@/lib/financeiro";
import { toast } from "sonner";

type Row = {
  id: string;
  tipo: "entrada" | "saida";
  categoria: string;
  descricao: string | null;
  valor: number;
  data: string;
  forma_pagamento: string;
  member_id: string | null;
  created_at: string;
  members?: { nome: string } | null;
};

const formaLabel = (v: string) => PAYMENT_METHODS.find((p) => p.value === v)?.label ?? v;

const Financeiro: React.FC = () => {
  const { user } = useAuth();
  const [rows, setRows] = useState<Row[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTipo, setDialogTipo] = useState<"entrada" | "saida">("entrada");
  const [editing, setEditing] = useState<TransactionRecord | null>(null);
  const [viewing, setViewing] = useState<Row | null>(null);

  const load = async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from("transactions")
      .select("*, members(nome)")
      .order("data", { ascending: false })
      .order("created_at", { ascending: false });
    if (error) { toast.error(error.message); return; }
    setRows((data ?? []) as Row[]);
  };

  useEffect(() => { load(); }, [user]);

  const entradas = useMemo(() => rows.filter((r) => r.tipo === "entrada"), [rows]);
  const saidas = useMemo(() => rows.filter((r) => r.tipo === "saida"), [rows]);

  const monthFilter = (r: Row) => {
    const d = new Date(r.data + "T00:00:00");
    const now = new Date();
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  };
  const entradasMes = entradas.filter(monthFilter).reduce((s, r) => s + Number(r.valor), 0);
  const saidasMes = saidas.filter(monthFilter).reduce((s, r) => s + Number(r.valor), 0);
  const saldoMes = entradasMes - saidasMes;
  const saldoTotal = entradas.reduce((s, r) => s + Number(r.valor), 0) - saidas.reduce((s, r) => s + Number(r.valor), 0);

  const openNew = (tipo: "entrada" | "saida") => {
    setDialogTipo(tipo);
    setEditing(null);
    setOpenDialog(true);
  };
  const openEdit = (r: Row) => {
    setDialogTipo(r.tipo);
    setEditing({
      id: r.id, tipo: r.tipo, categoria: r.categoria, descricao: r.descricao,
      valor: Number(r.valor), data: r.data, forma_pagamento: r.forma_pagamento as any, member_id: r.member_id,
    });
    setOpenDialog(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Excluir este lançamento?")) return;
    const { error } = await supabase.from("transactions").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Lançamento excluído"); load(); }
  };

  const renderActions = (r: Row) => (
    <div className="flex gap-1">
      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(r)} title="Editar"><Pencil className="h-4 w-4" /></Button>
      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setViewing(r)} title="Visualizar"><Eye className="h-4 w-4" /></Button>
      <Button variant="ghost" size="icon" className="h-8 w-8 text-church-expense" onClick={() => handleDelete(r.id)} title="Excluir">×</Button>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
        <h1 className="text-2xl font-bold text-church-text">Financeiro</h1>
        <div className="flex gap-2 flex-wrap">
          <Button onClick={() => openNew("entrada")} className="bg-church-income hover:bg-church-income/90 flex items-center gap-2">
            <PlusCircle size={18} /> Nova Entrada
          </Button>
          <Button onClick={() => openNew("saida")} className="bg-church-expense hover:bg-church-expense/90 flex items-center gap-2">
            <MinusCircle size={18} /> Nova Saída
          </Button>
          <Button variant="outline" className="flex items-center gap-2" onClick={() => toast.info("Exportação detalhada chegará na Fase 2 (PDF/Excel com filtros).")}>
            <Download size={18} /> Exportar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard title="Entradas do Mês" value={formatBRL(entradasMes)} icon={<PlusCircle size={24} className="text-church-income" />} description="Mês atual" valueClass="text-church-income" className="border-l-4 border-church-income" />
        <StatCard title="Saídas do Mês" value={formatBRL(saidasMes)} icon={<MinusCircle size={24} className="text-church-expense" />} description="Mês atual" valueClass="text-church-expense" className="border-l-4 border-church-expense" />
        <StatCard title="Saldo do Mês" value={formatBRL(saldoMes)} icon={<DollarSign size={24} />} description="Mês atual" valueClass={saldoMes >= 0 ? "text-church-income" : "text-church-expense"} />
        <StatCard title="Saldo Total" value={formatBRL(saldoTotal)} icon={<DollarSign size={24} />} description="Histórico completo" valueClass={saldoTotal >= 0 ? "text-church-income" : "text-church-expense"} />
      </div>

      <Tabs defaultValue="entradas" className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="entradas" className="data-[state=active]:bg-church-income data-[state=active]:text-white">Entradas</TabsTrigger>
          <TabsTrigger value="saidas" className="data-[state=active]:bg-church-expense data-[state=active]:text-white">Saídas</TabsTrigger>
        </TabsList>

        <TabsContent value="entradas">
          <CardChurch>
            <CardHeader><CardTitle>Entradas Recentes</CardTitle></CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      {["Categoria", "Membro", "Forma", "Valor", "Data", "Ações"].map((h) => (
                        <th key={h} className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {entradas.length === 0 && (
                      <tr><td colSpan={6} className="p-6 text-center text-gray-400">Nenhuma entrada registrada. Clique em "Nova Entrada" para começar.</td></tr>
                    )}
                    {entradas.map((r) => (
                      <tr key={r.id} className="hover:bg-gray-50">
                        <td className="p-3 text-sm"><span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">{r.categoria}</span></td>
                        <td className="p-3 text-sm">{r.members?.nome ?? "-"}</td>
                        <td className="p-3 text-sm">{formaLabel(r.forma_pagamento)}</td>
                        <td className="p-3 text-sm font-medium text-church-income">{formatBRL(Number(r.valor))}</td>
                        <td className="p-3 text-sm">{formatDate(r.data)}</td>
                        <td className="p-3 text-sm">{renderActions(r)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </CardChurch>
        </TabsContent>

        <TabsContent value="saidas">
          <CardChurch>
            <CardHeader><CardTitle>Saídas Recentes</CardTitle></CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      {["Categoria", "Descrição", "Forma", "Valor", "Data", "Ações"].map((h) => (
                        <th key={h} className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {saidas.length === 0 && (
                      <tr><td colSpan={6} className="p-6 text-center text-gray-400">Nenhuma saída registrada. Clique em "Nova Saída" para começar.</td></tr>
                    )}
                    {saidas.map((r) => (
                      <tr key={r.id} className="hover:bg-gray-50">
                        <td className="p-3 text-sm"><span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-red-100 text-red-800">{r.categoria}</span></td>
                        <td className="p-3 text-sm">{r.descricao ?? "-"}</td>
                        <td className="p-3 text-sm">{formaLabel(r.forma_pagamento)}</td>
                        <td className="p-3 text-sm font-medium text-church-expense">{formatBRL(Number(r.valor))}</td>
                        <td className="p-3 text-sm">{formatDate(r.data)}</td>
                        <td className="p-3 text-sm">{renderActions(r)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </CardChurch>
        </TabsContent>
      </Tabs>

      <TransactionDialog open={openDialog} onOpenChange={setOpenDialog} tipo={dialogTipo} initial={editing} onSaved={load} />

      <Dialog open={!!viewing} onOpenChange={(o) => !o && setViewing(null)}>
        <DialogContent className="sm:max-w-[480px]">
          <DialogHeader><DialogTitle>Detalhes do lançamento</DialogTitle></DialogHeader>
          {viewing && (
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Tipo</span><span className="font-medium">{viewing.tipo === "entrada" ? "Entrada" : "Saída"}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Categoria</span><span className="font-medium">{viewing.categoria}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Valor</span><span className={`font-bold ${viewing.tipo === "entrada" ? "text-church-income" : "text-church-expense"}`}>{formatBRL(Number(viewing.valor))}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Data</span><span>{formatDate(viewing.data)}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Forma de pagamento</span><span>{formaLabel(viewing.forma_pagamento)}</span></div>
              {viewing.members?.nome && <div className="flex justify-between"><span className="text-gray-500">Membro</span><span>{viewing.members.nome}</span></div>}
              <div className="border-t pt-2"><span className="text-gray-500">Descrição</span><p className="mt-1">{viewing.descricao || "-"}</p></div>
              <div className="text-xs text-gray-400 pt-2 border-t">Criado em {new Date(viewing.created_at).toLocaleString("pt-BR")}</div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default Financeiro;
