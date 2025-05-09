
import React, { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RelatorioHeader } from "@/components/relatorios/RelatorioHeader";
import { FinanceiroTabs } from "@/components/relatorios/FinanceiroTabs";
import { MembrosTab } from "@/components/relatorios/MembrosTab";
import { CardChurch, CardContent } from "@/components/ui/card-church";

const Relatorios: React.FC = () => {
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  const toggleFilterPanel = () => {
    setShowFilterPanel(!showFilterPanel);
  };

  return (
    <DashboardLayout>
      <RelatorioHeader 
        title="Relatórios" 
      />

      {showFilterPanel && (
        <CardChurch className="mb-6 animate-fade-in">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Período</label>
                <div className="flex gap-2">
                  <input type="date" className="w-full p-2 border rounded" />
                  <input type="date" className="w-full p-2 border rounded" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                <select className="w-full border rounded p-2">
                  <option value="">Todas</option>
                  <option value="dizimos">Dízimos</option>
                  <option value="ofertas">Ofertas</option>
                  <option value="despesas">Despesas</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select className="w-full border rounded p-2">
                  <option value="">Todos</option>
                  <option value="concluido">Concluído</option>
                  <option value="pendente">Pendente</option>
                  <option value="cancelado">Cancelado</option>
                </select>
              </div>
            </div>
          </CardContent>
        </CardChurch>
      )}

      <Tabs defaultValue="financeiro" className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="financeiro" className="data-[state=active]:bg-church-button data-[state=active]:text-white">Financeiro</TabsTrigger>
          <TabsTrigger value="membros" className="data-[state=active]:bg-church-button data-[state=active]:text-white">Membros</TabsTrigger>
        </TabsList>
        
        <FinanceiroTabs />
        <MembrosTab />
      </Tabs>
    </DashboardLayout>
  );
};

export default Relatorios;
