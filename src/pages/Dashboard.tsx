
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { CardChurch, CardContent, CardHeader, CardTitle } from "@/components/ui/card-church";
import { StatCard } from "@/components/dashboard/StatCard";
import { Users, DollarSign, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  Legend
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

// Mock data for financial chart
const financialData = [
  { name: "Jan", receitas: 12500, despesas: 10200 },
  { name: "Fev", receitas: 13200, despesas: 11000 },
  { name: "Mar", receitas: 14800, despesas: 12300 },
  { name: "Abr", receitas: 15350, despesas: 10630 },
  { name: "Mai", receitas: 16100, despesas: 11400 },
  { name: "Jun", receitas: 14700, despesas: 12500 },
];

// Mock data for pie chart
const membersData = [
  { name: "Homens", value: 104 },
  { name: "Mulheres", value: 144 },
];

const COLORS = ["#2563EB", "#D946EF"];

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-church-button mb-6">Painel de Controle</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total de Membros"
          value="248"
          icon={<Users size={24} />}
          description="Membros ativos"
          trend="up"
          trendValue="12%"
        />
        <StatCard
          title="Dízimos do Mês"
          value="R$ 15.350,00"
          icon={<DollarSign size={24} />}
          description="Abril 2025"
          trend="up"
          trendValue="8%"
          valueClass="text-church-income"
        />
        <StatCard
          title="Ofertas do Mês"
          value="R$ 4.720,00"
          icon={<DollarSign size={24} />}
          description="Abril 2025"
          trend="neutral"
          trendValue="2%"
          valueClass="text-church-income"
        />
        <StatCard
          title="Saldo Atual"
          value="R$ 32.450,75"
          icon={<DollarSign size={24} />}
          description="Atualizado hoje"
          trend="up"
          trendValue="15%"
          valueClass="text-church-income"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <CardChurch>
          <CardHeader>
            <CardTitle>Acesso Rápido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/membros">
                <Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-church-button hover:bg-church-button/90 shadow-md">
                  <Users size={24} />
                  <span>Cadastro de Membros</span>
                </Button>
              </Link>
              <Link to="/financeiro">
                <Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-church-button hover:bg-church-button/90 shadow-md">
                  <DollarSign size={24} />
                  <span>Financeiro</span>
                </Button>
              </Link>
              <Link to="/relatorios">
                <Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-church-button hover:bg-church-button/90 shadow-md">
                  <FileText size={24} />
                  <span>Relatórios</span>
                </Button>
              </Link>
              <Link to="/secretaria">
                <Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-church-button hover:bg-church-button/90 shadow-md">
                  <Settings size={24} />
                  <span>Painel Secretaria</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </CardChurch>
        
        <CardChurch>
          <CardHeader>
            <CardTitle>Próximos Eventos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                <p className="text-sm font-medium text-church-text">Culto de Celebração</p>
                <p className="text-xs text-gray-500">Domingo, 12 de Abril - 19:00</p>
              </div>
              <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                <p className="text-sm font-medium text-church-text">Reunião de Líderes</p>
                <p className="text-xs text-gray-500">Segunda, 13 de Abril - 20:00</p>
              </div>
              <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                <p className="text-sm font-medium text-church-text">Culto de Oração</p>
                <p className="text-xs text-gray-500">Quarta, 15 de Abril - 19:30</p>
              </div>
            </div>
          </CardContent>
        </CardChurch>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CardChurch className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Resumo Financeiro</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={financialData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-3 border shadow-md rounded-md">
                            <p className="text-sm font-medium">{payload[0].payload.name}</p>
                            <p className="text-xs text-church-income">
                              Receitas: R$ {payload[0].value.toLocaleString()}
                            </p>
                            <p className="text-xs text-church-expense">
                              Despesas: R$ {payload[1].value.toLocaleString()}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Legend />
                  <Bar dataKey="receitas" fill="#10B981" name="Receitas" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="despesas" fill="#EF4444" name="Despesas" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </CardChurch>
        
        <CardChurch>
          <CardHeader>
            <CardTitle>Aniversariantes do Mês</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-church-button flex items-center justify-center text-white font-medium shadow-sm">JS</div>
                <div>
                  <p className="text-sm font-medium text-church-text">João Silva</p>
                  <p className="text-xs text-gray-500">15 de Abril</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-church-button flex items-center justify-center text-white font-medium shadow-sm">MR</div>
                <div>
                  <p className="text-sm font-medium text-church-text">Maria Rodrigues</p>
                  <p className="text-xs text-gray-500">18 de Abril</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-church-button flex items-center justify-center text-white font-medium shadow-sm">PS</div>
                <div>
                  <p className="text-sm font-medium text-church-text">Pedro Santos</p>
                  <p className="text-xs text-gray-500">22 de Abril</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-church-button flex items-center justify-center text-white font-medium shadow-sm">AS</div>
                <div>
                  <p className="text-sm font-medium text-church-text">Ana Sousa</p>
                  <p className="text-xs text-gray-500">29 de Abril</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <h4 className="text-sm font-medium text-church-text mb-3">Distribuição de Gênero</h4>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={membersData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      fill="#8884d8"
                      paddingAngle={3}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {membersData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </CardChurch>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
