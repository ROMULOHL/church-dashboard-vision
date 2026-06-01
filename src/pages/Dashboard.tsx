import React, { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { CardChurch, CardContent, CardHeader, CardTitle } from "@/components/ui/card-church";
import { StatCard } from "@/components/dashboard/StatCard";
import { Users, DollarSign, FileText, Settings, PlusCircle, MinusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { formatBRL } from "@/lib/financeiro";

type Tx = { tipo: "entrada" | "saida"; categoria: string; valor: number; data: string };

const MONTH_LABELS = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
const CAT_COLORS = ["#2563EB", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899", "#14B8A6", "#F97316"];

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [txs, setTxs] = useState<Tx[]>([]);
  const [memberCount, setMemberCount] = useState(0);

  useEffect(() => {
    if (!user) return;
    supabase.from("transactions").select("tipo, categoria, valor, data").then(({ data }) => {
      setTxs((data ?? []).map((t: any) => ({ ...t, valor: Number(t.valor) })));
    });
    supabase.from("members").select("id", { count: "exact", head: true }).then(({ count }) => setMemberCount(count ?? 0));
  }, [user]);

  const now = new Date();
  const thisMonth = (d: string) => {
    const dt = new Date(d + "T00:00:00");
    return dt.getMonth() === now.getMonth() && dt.getFullYear() === now.getFullYear();
  };
  const entradasMes = txs.filter((t) => t.tipo === "entrada" && thisMonth(t.data)).reduce((s, t) => s + t.valor, 0);
  const saidasMes = txs.filter((t) => t.tipo === "saida" && thisMonth(t.data)).reduce((s, t) => s + t.valor, 0);
  const saldoTotal = txs.reduce((s, t) => s + (t.tipo === "entrada" ? t.valor : -t.valor), 0);
  const dizimosMes = txs.filter((t) => t.tipo === "entrada" && t.categoria === "Dízimo" && thisMonth(t.data)).reduce((s, t) => s + t.valor, 0);

  // last 6 months series
  const series = Array.from({ length: 6 }).map((_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
    const m = d.getMonth(), y = d.getFullYear();
    const filt = (t: Tx) => { const dt = new Date(t.data + "T00:00:00"); return dt.getMonth() === m && dt.getFullYear() === y; };
    return {
      name: MONTH_LABELS[m],
      receitas: txs.filter((t) => t.tipo === "entrada" && filt(t)).reduce((s, t) => s + t.valor, 0),
      despesas: txs.filter((t) => t.tipo === "saida" && filt(t)).reduce((s, t) => s + t.valor, 0),
    };
  });

  const catEntradas = Object.entries(
    txs.filter((t) => t.tipo === "entrada").reduce<Record<string, number>>((acc, t) => {
      acc[t.categoria] = (acc[t.categoria] ?? 0) + t.valor; return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-church-button mb-6">Painel de Controle</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total de Membros" value={String(memberCount)} icon={<Users size={24} />} description="Cadastrados" />
        <StatCard title="Dízimos do Mês" value={formatBRL(dizimosMes)} icon={<DollarSign size={24} />} description="Mês atual" valueClass="text-church-income" />
        <StatCard title="Entradas do Mês" value={formatBRL(entradasMes)} icon={<PlusCircle size={24} />} description="Mês atual" valueClass="text-church-income" />
        <StatCard title="Saldo Total" value={formatBRL(saldoTotal)} icon={<DollarSign size={24} />} description="Histórico" valueClass={saldoTotal >= 0 ? "text-church-income" : "text-church-expense"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <CardChurch>
          <CardHeader><CardTitle>Acesso Rápido</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/membros"><Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-church-button hover:bg-church-button/90 shadow-md"><Users size={24} /><span>Cadastro de Membros</span></Button></Link>
              <Link to="/financeiro"><Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-church-button hover:bg-church-button/90 shadow-md"><DollarSign size={24} /><span>Financeiro</span></Button></Link>
              <Link to="/relatorios"><Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-church-button hover:bg-church-button/90 shadow-md"><FileText size={24} /><span>Relatórios</span></Button></Link>
              <Link to="/secretaria"><Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-church-button hover:bg-church-button/90 shadow-md"><Settings size={24} /><span>Painel Secretaria</span></Button></Link>
            </div>
          </CardContent>
        </CardChurch>

        <CardChurch>
          <CardHeader><CardTitle>Resumo do Mês</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between p-3 rounded-lg bg-green-50">
                <span className="font-medium">Entradas</span>
                <span className="font-bold text-church-income">{formatBRL(entradasMes)}</span>
              </div>
              <div className="flex justify-between p-3 rounded-lg bg-red-50">
                <span className="font-medium">Saídas</span>
                <span className="font-bold text-church-expense">{formatBRL(saidasMes)}</span>
              </div>
              <div className="flex justify-between p-3 rounded-lg bg-blue-50 border-t-2 border-blue-200">
                <span className="font-bold">Saldo</span>
                <span className={`font-bold ${entradasMes - saidasMes >= 0 ? "text-church-income" : "text-church-expense"}`}>{formatBRL(entradasMes - saidasMes)}</span>
              </div>
            </div>
          </CardContent>
        </CardChurch>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CardChurch className="lg:col-span-2">
          <CardHeader><CardTitle>Receitas x Despesas (6 meses)</CardTitle></CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={series} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(v: number) => formatBRL(v)} />
                  <Legend />
                  <Bar dataKey="receitas" fill="#10B981" name="Receitas" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="despesas" fill="#EF4444" name="Despesas" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </CardChurch>

        <CardChurch>
          <CardHeader><CardTitle>Entradas por Categoria</CardTitle></CardHeader>
          <CardContent>
            <div className="h-80">
              {catEntradas.length === 0 ? (
                <div className="flex items-center justify-center h-full text-gray-400 text-sm">Sem dados ainda</div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={catEntradas} cx="50%" cy="50%" innerRadius={50} outerRadius={90} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                      {catEntradas.map((_, i) => <Cell key={i} fill={CAT_COLORS[i % CAT_COLORS.length]} />)}
                    </Pie>
                    <Tooltip formatter={(v: number) => formatBRL(v)} />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
          </CardContent>
        </CardChurch>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
