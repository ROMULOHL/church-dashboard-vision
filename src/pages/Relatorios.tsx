
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RelatorioHeader } from "@/components/relatorios/RelatorioHeader";
import { FinanceiroTabs } from "@/components/relatorios/FinanceiroTabs";
import { MembrosTab } from "@/components/relatorios/MembrosTab";

const Relatorios: React.FC = () => {
  return (
    <DashboardLayout>
      <RelatorioHeader title="Relatórios" />

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
