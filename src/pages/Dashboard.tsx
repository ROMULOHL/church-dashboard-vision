
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { CardChurch, CardContent, CardHeader, CardTitle } from "@/components/ui/card-church";
import { StatCard } from "@/components/dashboard/StatCard";
import { Users, DollarSign, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-church-text mb-6">Painel de Controle</h1>
      
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
        />
        <StatCard
          title="Ofertas do Mês"
          value="R$ 4.720,00"
          icon={<DollarSign size={24} />}
          description="Abril 2025"
          trend="neutral"
          trendValue="2%"
        />
        <StatCard
          title="Saldo Atual"
          value="R$ 32.450,75"
          icon={<DollarSign size={24} />}
          description="Atualizado hoje"
          trend="up"
          trendValue="15%"
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
                <Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-church-button hover:bg-church-button/90">
                  <Users size={24} />
                  <span>Cadastro de Membros</span>
                </Button>
              </Link>
              <Link to="/financeiro">
                <Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-church-button hover:bg-church-button/90">
                  <DollarSign size={24} />
                  <span>Financeiro</span>
                </Button>
              </Link>
              <Link to="/relatorios">
                <Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-church-button hover:bg-church-button/90">
                  <FileText size={24} />
                  <span>Relatórios</span>
                </Button>
              </Link>
              <Link to="/secretaria">
                <Button className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-church-button hover:bg-church-button/90">
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
              <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                <p className="text-sm font-medium text-church-text">Culto de Celebração</p>
                <p className="text-xs text-gray-500">Domingo, 12 de Abril - 19:00</p>
              </div>
              <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                <p className="text-sm font-medium text-church-text">Reunião de Líderes</p>
                <p className="text-xs text-gray-500">Segunda, 13 de Abril - 20:00</p>
              </div>
              <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
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
            <div className="flex items-center justify-center h-64">
              <div className="text-center text-gray-500">
                <p>O gráfico de resumo financeiro aparecerá aqui</p>
              </div>
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
                <div className="w-8 h-8 rounded-full bg-church-button flex items-center justify-center text-white font-medium">JS</div>
                <div>
                  <p className="text-sm font-medium text-church-text">João Silva</p>
                  <p className="text-xs text-gray-500">15 de Abril</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-church-button flex items-center justify-center text-white font-medium">MR</div>
                <div>
                  <p className="text-sm font-medium text-church-text">Maria Rodrigues</p>
                  <p className="text-xs text-gray-500">18 de Abril</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-church-button flex items-center justify-center text-white font-medium">PS</div>
                <div>
                  <p className="text-sm font-medium text-church-text">Pedro Santos</p>
                  <p className="text-xs text-gray-500">22 de Abril</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-church-button flex items-center justify-center text-white font-medium">AS</div>
                <div>
                  <p className="text-sm font-medium text-church-text">Ana Sousa</p>
                  <p className="text-xs text-gray-500">29 de Abril</p>
                </div>
              </div>
            </div>
          </CardContent>
        </CardChurch>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
