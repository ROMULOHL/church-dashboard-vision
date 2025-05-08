
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { CardChurch, CardContent, CardHeader, CardTitle } from "@/components/ui/card-church";
import { Button } from "@/components/ui/button";
import { Download, Calendar, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Relatorios: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-church-text">Relatórios</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar size={18} />
            <span>Abril 2025</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={18} />
            <span>Filtrar</span>
          </Button>
          <Button className="bg-church-button hover:bg-church-button/90 flex items-center gap-2">
            <Download size={18} />
            <span>Exportar</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="financeiro" className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="financeiro" className="data-[state=active]:bg-church-button data-[state=active]:text-white">Financeiro</TabsTrigger>
          <TabsTrigger value="membros" className="data-[state=active]:bg-church-button data-[state=active]:text-white">Membros</TabsTrigger>
          <TabsTrigger value="atividades" className="data-[state=active]:bg-church-button data-[state=active]:text-white">Atividades</TabsTrigger>
        </TabsList>
        
        <TabsContent value="financeiro">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <CardChurch>
              <CardHeader>
                <CardTitle>Resumo Financeiro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64">
                  <div className="text-center text-gray-500">
                    <p>O gráfico financeiro aparecerá aqui</p>
                  </div>
                </div>
              </CardContent>
            </CardChurch>
            
            <CardChurch>
              <CardHeader>
                <CardTitle>Comparativo de Períodos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5 mt-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-church-text">Janeiro</span>
                      <span className="text-sm font-medium text-church-text">R$ 18.230,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-church-income h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-church-text">Fevereiro</span>
                      <span className="text-sm font-medium text-church-text">R$ 19.580,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-church-income h-2.5 rounded-full" style={{ width: "81%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-church-text">Março</span>
                      <span className="text-sm font-medium text-church-text">R$ 20.760,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-church-income h-2.5 rounded-full" style={{ width: "86%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-church-text">Abril</span>
                      <span className="text-sm font-medium text-church-text">R$ 22.350,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-church-income h-2.5 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CardChurch>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <CardChurch>
              <CardHeader>
                <CardTitle>Resumo de Entradas e Saídas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Janeiro</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fevereiro</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Março</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Abril</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 bg-green-50">
                        <td className="p-3 text-sm font-medium">Dízimos</td>
                        <td className="p-3 text-sm">R$ 12.450,00</td>
                        <td className="p-3 text-sm">R$ 13.280,00</td>
                        <td className="p-3 text-sm">R$ 14.120,00</td>
                        <td className="p-3 text-sm">R$ 15.230,00</td>
                        <td className="p-3 text-sm font-medium">R$ 55.080,00</td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-green-50">
                        <td className="p-3 text-sm font-medium">Ofertas</td>
                        <td className="p-3 text-sm">R$ 3.620,00</td>
                        <td className="p-3 text-sm">R$ 4.150,00</td>
                        <td className="p-3 text-sm">R$ 4.380,00</td>
                        <td className="p-3 text-sm">R$ 4.720,00</td>
                        <td className="p-3 text-sm font-medium">R$ 16.870,00</td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-green-50">
                        <td className="p-3 text-sm font-medium">Campanhas</td>
                        <td className="p-3 text-sm">R$ 1.500,00</td>
                        <td className="p-3 text-sm">R$ 1.450,00</td>
                        <td className="p-3 text-sm">R$ 1.620,00</td>
                        <td className="p-3 text-sm">R$ 1.850,00</td>
                        <td className="p-3 text-sm font-medium">R$ 6.420,00</td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-green-50">
                        <td className="p-3 text-sm font-medium">Doações</td>
                        <td className="p-3 text-sm">R$ 660,00</td>
                        <td className="p-3 text-sm">R$ 700,00</td>
                        <td className="p-3 text-sm">R$ 640,00</td>
                        <td className="p-3 text-sm">R$ 550,00</td>
                        <td className="p-3 text-sm font-medium">R$ 2.550,00</td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-green-50">
                        <td className="p-3 text-sm font-bold">Total Entradas</td>
                        <td className="p-3 text-sm font-bold">R$ 18.230,00</td>
                        <td className="p-3 text-sm font-bold">R$ 19.580,00</td>
                        <td className="p-3 text-sm font-bold">R$ 20.760,00</td>
                        <td className="p-3 text-sm font-bold">R$ 22.350,00</td>
                        <td className="p-3 text-sm font-bold">R$ 80.920,00</td>
                      </tr>
                      
                      <tr className="hover:bg-gray-50 bg-red-50">
                        <td className="p-3 text-sm font-medium">Salário Pastoral</td>
                        <td className="p-3 text-sm">R$ 3.500,00</td>
                        <td className="p-3 text-sm">R$ 3.500,00</td>
                        <td className="p-3 text-sm">R$ 3.500,00</td>
                        <td className="p-3 text-sm">R$ 3.500,00</td>
                        <td className="p-3 text-sm font-medium">R$ 14.000,00</td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-red-50">
                        <td className="p-3 text-sm font-medium">Aluguel</td>
                        <td className="p-3 text-sm">R$ 5.000,00</td>
                        <td className="p-3 text-sm">R$ 5.000,00</td>
                        <td className="p-3 text-sm">R$ 5.000,00</td>
                        <td className="p-3 text-sm">R$ 5.000,00</td>
                        <td className="p-3 text-sm font-medium">R$ 20.000,00</td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-red-50">
                        <td className="p-3 text-sm font-medium">Energia</td>
                        <td className="p-3 text-sm">R$ 380,00</td>
                        <td className="p-3 text-sm">R$ 420,00</td>
                        <td className="p-3 text-sm">R$ 440,00</td>
                        <td className="p-3 text-sm">R$ 450,00</td>
                        <td className="p-3 text-sm font-medium">R$ 1.690,00</td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-red-50">
                        <td className="p-3 text-sm font-medium">Água</td>
                        <td className="p-3 text-sm">R$ 150,00</td>
                        <td className="p-3 text-sm">R$ 165,00</td>
                        <td className="p-3 text-sm">R$ 170,00</td>
                        <td className="p-3 text-sm">R$ 180,00</td>
                        <td className="p-3 text-sm font-medium">R$ 665,00</td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-red-50">
                        <td className="p-3 text-sm font-medium">Internet</td>
                        <td className="p-3 text-sm">R$ 120,00</td>
                        <td className="p-3 text-sm">R$ 120,00</td>
                        <td className="p-3 text-sm">R$ 120,00</td>
                        <td className="p-3 text-sm">R$ 120,00</td>
                        <td className="p-3 text-sm font-medium">R$ 480,00</td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-red-50">
                        <td className="p-3 text-sm font-medium">Limpeza</td>
                        <td className="p-3 text-sm">R$ 320,00</td>
                        <td className="p-3 text-sm">R$ 280,00</td>
                        <td className="p-3 text-sm">R$ 350,00</td>
                        <td className="p-3 text-sm">R$ 350,00</td>
                        <td className="p-3 text-sm font-medium">R$ 1.300,00</td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-red-50">
                        <td className="p-3 text-sm font-bold">Total Saídas</td>
                        <td className="p-3 text-sm font-bold">R$ 9.470,00</td>
                        <td className="p-3 text-sm font-bold">R$ 9.485,00</td>
                        <td className="p-3 text-sm font-bold">R$ 9.580,00</td>
                        <td className="p-3 text-sm font-bold">R$ 9.600,00</td>
                        <td className="p-3 text-sm font-bold">R$ 38.135,00</td>
                      </tr>
                      
                      <tr className="bg-gray-100">
                        <td className="p-3 text-sm font-bold">SALDO</td>
                        <td className="p-3 text-sm font-bold">R$ 8.760,00</td>
                        <td className="p-3 text-sm font-bold">R$ 10.095,00</td>
                        <td className="p-3 text-sm font-bold">R$ 11.180,00</td>
                        <td className="p-3 text-sm font-bold">R$ 12.750,00</td>
                        <td className="p-3 text-sm font-bold text-church-button">R$ 42.785,00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </CardChurch>
          </div>
        </TabsContent>
        
        <TabsContent value="membros">
          <div className="grid grid-cols-1 gap-6">
            <CardChurch>
              <CardHeader>
                <CardTitle>Estatísticas de Membros</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="text-gray-500 text-sm font-medium">Total de Membros</h3>
                    <p className="text-3xl font-bold text-church-text mt-2">248</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="text-gray-500 text-sm font-medium">Membros Batizados</h3>
                    <p className="text-3xl font-bold text-church-text mt-2">205</p>
                    <p className="text-xs text-gray-500 mt-1">82% do total</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="text-gray-500 text-sm font-medium">Dizimistas</h3>
                    <p className="text-3xl font-bold text-church-text mt-2">175</p>
                    <p className="text-xs text-gray-500 mt-1">70% do total</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center h-64 mt-6">
                  <div className="text-center text-gray-500">
                    <p>O gráfico de estatísticas de membros aparecerá aqui</p>
                  </div>
                </div>
              </CardContent>
            </CardChurch>
            
            <CardChurch>
              <CardHeader>
                <CardTitle>Distribuição por Faixa Etária</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mt-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-church-text">Até 18 anos</span>
                      <span className="text-sm font-medium text-church-text">32 membros (13%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-church-button h-2.5 rounded-full" style={{ width: "13%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-church-text">19 a 30 anos</span>
                      <span className="text-sm font-medium text-church-text">58 membros (23%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-church-button h-2.5 rounded-full" style={{ width: "23%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-church-text">31 a 45 anos</span>
                      <span className="text-sm font-medium text-church-text">87 membros (35%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-church-button h-2.5 rounded-full" style={{ width: "35%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-church-text">46 a 60 anos</span>
                      <span className="text-sm font-medium text-church-text">45 membros (18%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-church-button h-2.5 rounded-full" style={{ width: "18%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-church-text">Acima de 60 anos</span>
                      <span className="text-sm font-medium text-church-text">26 membros (11%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-church-button h-2.5 rounded-full" style={{ width: "11%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CardChurch>
          </div>
        </TabsContent>
        
        <TabsContent value="atividades">
          <div className="grid grid-cols-1 gap-6">
            <CardChurch>
              <CardHeader>
                <CardTitle>Atividades e Eventos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evento</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participantes</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responsável</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 text-sm font-medium">Culto de Celebração</td>
                        <td className="p-3 text-sm">05/04/2025</td>
                        <td className="p-3 text-sm">186</td>
                        <td className="p-3 text-sm">Pastor João</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 text-sm font-medium">Culto de Oração</td>
                        <td className="p-3 text-sm">08/04/2025</td>
                        <td className="p-3 text-sm">78</td>
                        <td className="p-3 text-sm">Pastor João</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 text-sm font-medium">Escola Bíblica</td>
                        <td className="p-3 text-sm">05/04/2025</td>
                        <td className="p-3 text-sm">95</td>
                        <td className="p-3 text-sm">Diác. Maria</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 text-sm font-medium">Grupo de Jovens</td>
                        <td className="p-3 text-sm">06/04/2025</td>
                        <td className="p-3 text-sm">32</td>
                        <td className="p-3 text-sm">Pedro Santos</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 text-sm font-medium">Reunião de Mulheres</td>
                        <td className="p-3 text-sm">07/04/2025</td>
                        <td className="p-3 text-sm">45</td>
                        <td className="p-3 text-sm">Ana Sousa</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </CardChurch>
            
            <CardChurch>
              <CardHeader>
                <CardTitle>Frequência de Atividades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-64">
                  <div className="text-center text-gray-500">
                    <p>O gráfico de frequência de atividades aparecerá aqui</p>
                  </div>
                </div>
              </CardContent>
            </CardChurch>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Relatorios;
