
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { CardChurch, CardContent, CardHeader, CardTitle } from "@/components/ui/card-church";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/dashboard/StatCard";
import { PlusCircle, MinusCircle, Download, DollarSign, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockEntradasRecentes = [
  { id: 1, tipo: "Dízimo", membro: "João Silva", valor: "R$ 450,00", data: "05/04/2025" },
  { id: 2, tipo: "Oferta", membro: "-", valor: "R$ 220,00", data: "05/04/2025" },
  { id: 3, tipo: "Dízimo", membro: "Maria Rodrigues", valor: "R$ 380,00", data: "04/04/2025" },
  { id: 4, tipo: "Doação", membro: "Carlos Ferreira", valor: "R$ 1.000,00", data: "03/04/2025" },
  { id: 5, tipo: "Campanha", membro: "-", valor: "R$ 1.850,00", data: "01/04/2025" },
];

const mockSaidasRecentes = [
  { id: 1, categoria: "Energia", descricao: "Conta de Luz Abril", valor: "R$ 450,00", data: "10/04/2025" },
  { id: 2, categoria: "Salário Pastoral", descricao: "Salário Pastor", valor: "R$ 3.500,00", data: "05/04/2025" },
  { id: 3, categoria: "Água", descricao: "Conta de Água Abril", valor: "R$ 180,00", data: "05/04/2025" },
  { id: 4, categoria: "Internet", descricao: "Serviço de Internet", valor: "R$ 120,00", data: "03/04/2025" },
  { id: 5, categoria: "Limpeza", descricao: "Material de Limpeza", valor: "R$ 350,00", data: "01/04/2025" },
];

const Financeiro: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-church-text">Financeiro</h1>
        <div className="flex gap-2">
          <Button className="bg-church-income hover:bg-church-income/90 flex items-center gap-2">
            <PlusCircle size={18} />
            <span>Nova Entrada</span>
          </Button>
          <Button className="bg-church-expense hover:bg-church-expense/90 flex items-center gap-2">
            <MinusCircle size={18} />
            <span>Nova Saída</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download size={18} />
            <span>Exportar</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Entradas do Mês"
          value="R$ 22.350,00"
          icon={<PlusCircle size={24} className="text-church-income" />}
          description="Abril 2025"
          trend="up"
          trendValue="8%"
          className="border-l-4 border-church-income"
        />
        <StatCard
          title="Saídas do Mês"
          value="R$ 15.780,00"
          icon={<MinusCircle size={24} className="text-church-expense" />}
          description="Abril 2025"
          trend="down"
          trendValue="5%"
          className="border-l-4 border-church-expense"
        />
        <StatCard
          title="Saldo do Mês"
          value="R$ 6.570,00"
          icon={<DollarSign size={24} />}
          description="Abril 2025"
          trend="up"
          trendValue="15%"
        />
        <StatCard
          title="Saldo Total"
          value="R$ 32.450,75"
          icon={<DollarSign size={24} />}
          description="Atualizado hoje"
          trend="up"
          trendValue="7%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <CardChurch className="lg:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center w-full">
              <CardTitle>Resumo Financeiro</CardTitle>
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar size={18} />
                <span>Abril 2025</span>
              </Button>
            </div>
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
            <CardTitle>Distribuição de Receitas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-church-text">Dízimos</span>
                  <span className="text-sm font-medium text-church-text">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-church-income h-2.5 rounded-full" style={{ width: "68%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-church-text">Ofertas</span>
                  <span className="text-sm font-medium text-church-text">21%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-church-income h-2.5 rounded-full" style={{ width: "21%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-church-text">Campanhas</span>
                  <span className="text-sm font-medium text-church-text">8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-church-income h-2.5 rounded-full" style={{ width: "8%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-church-text">Doações</span>
                  <span className="text-sm font-medium text-church-text">3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-church-income h-2.5 rounded-full" style={{ width: "3%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </CardChurch>
      </div>

      <Tabs defaultValue="entradas" className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="entradas" className="data-[state=active]:bg-church-income data-[state=active]:text-white">Entradas</TabsTrigger>
          <TabsTrigger value="saidas" className="data-[state=active]:bg-church-expense data-[state=active]:text-white">Saídas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="entradas">
          <CardChurch>
            <CardHeader>
              <CardTitle>Entradas Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                      <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Membro</th>
                      <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                      <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                      <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {mockEntradasRecentes.map((entrada) => (
                      <tr key={entrada.id} className="hover:bg-gray-50">
                        <td className="p-3 text-sm whitespace-nowrap">
                          <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                            {entrada.tipo}
                          </span>
                        </td>
                        <td className="p-3 text-sm whitespace-nowrap">{entrada.membro}</td>
                        <td className="p-3 text-sm whitespace-nowrap font-medium text-church-income">{entrada.valor}</td>
                        <td className="p-3 text-sm whitespace-nowrap">{entrada.data}</td>
                        <td className="p-3 text-sm whitespace-nowrap">
                          <div className="flex space-x-2">
                            <Button variant="ghost" className="h-8 w-8 p-0" title="Editar">
                              <span className="sr-only">Editar</span>
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                              </svg>
                            </Button>
                            <Button variant="ghost" className="h-8 w-8 p-0" title="Visualizar">
                              <span className="sr-only">Visualizar</span>
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                              </svg>
                            </Button>
                          </div>
                        </td>
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
            <CardHeader>
              <CardTitle>Saídas Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
                      <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                      <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                      <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                      <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {mockSaidasRecentes.map((saida) => (
                      <tr key={saida.id} className="hover:bg-gray-50">
                        <td className="p-3 text-sm whitespace-nowrap">
                          <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-red-100 text-red-800">
                            {saida.categoria}
                          </span>
                        </td>
                        <td className="p-3 text-sm whitespace-nowrap">{saida.descricao}</td>
                        <td className="p-3 text-sm whitespace-nowrap font-medium text-church-expense">{saida.valor}</td>
                        <td className="p-3 text-sm whitespace-nowrap">{saida.data}</td>
                        <td className="p-3 text-sm whitespace-nowrap">
                          <div className="flex space-x-2">
                            <Button variant="ghost" className="h-8 w-8 p-0" title="Editar">
                              <span className="sr-only">Editar</span>
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                              </svg>
                            </Button>
                            <Button variant="ghost" className="h-8 w-8 p-0" title="Visualizar">
                              <span className="sr-only">Visualizar</span>
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </CardChurch>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Financeiro;
