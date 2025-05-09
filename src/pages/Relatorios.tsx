
import React, { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { CardChurch, CardContent, CardHeader, CardTitle } from "@/components/ui/card-church";
import { Button } from "@/components/ui/button";
import { Download, Calendar, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const metodoPagamento = [
  { label: "Todos", value: "todos" },
  { label: "PIX", value: "pix" },
  { label: "Cartão", value: "cartao" },
  { label: "Dinheiro", value: "dinheiro" }
];

const categoriasDespesas = {
  "Despesas Operacionais e Administrativas": [
    "Aluguel do Templo/Salão",
    "Contas de Consumo - Água",
    "Contas de Consumo - Luz",
    "Contas de Consumo - Internet",
    "Materiais de Escritório",
    "Limpeza e Conservação"
  ],
  "Despesas com Pessoal e Liderança": [
    "Salário Pastoral",
    "Ajudas de Custo",
    "Salários de Funcionários"
  ],
  "Despesas com Ministérios": [
    "Departamento Infantil",
    "Ministério de Louvor",
    "Ministério de Ação Social"
  ]
};

const Relatorios: React.FC = () => {
  const [filtroIdade, setFiltroIdade] = useState("todos");
  const [filtroEstadoCivil, setFiltroEstadoCivil] = useState("todos");
  const [filtroMetodoPagamento, setFiltroMetodoPagamento] = useState("todos");

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
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="financeiro" className="data-[state=active]:bg-church-button data-[state=active]:text-white">Financeiro</TabsTrigger>
          <TabsTrigger value="membros" className="data-[state=active]:bg-church-button data-[state=active]:text-white">Membros</TabsTrigger>
        </TabsList>
        
        <TabsContent value="financeiro">
          <Tabs defaultValue="entradas" className="w-full mb-6">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="entradas" className="data-[state=active]:bg-church-income data-[state=active]:text-white">Entradas</TabsTrigger>
              <TabsTrigger value="saidas" className="data-[state=active]:bg-church-expense data-[state=active]:text-white">Saídas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="entradas">
              <div className="grid grid-cols-1 gap-6">
                <CardChurch>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Entradas por Categoria</CardTitle>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Método de Pagamento:</span>
                        <select 
                          className="text-sm border rounded p-1"
                          value={filtroMetodoPagamento}
                          onChange={(e) => setFiltroMetodoPagamento(e.target.value)}
                        >
                          {metodoPagamento.map(metodo => (
                            <option key={metodo.value} value={metodo.value}>{metodo.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Tipo</TableHead>
                          <TableHead>Descrição</TableHead>
                          <TableHead>Membro</TableHead>
                          <TableHead>Método</TableHead>
                          <TableHead>Valor</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-green-50">
                          <TableCell className="font-medium">Dízimo</TableCell>
                          <TableCell>Dízimo Mensal</TableCell>
                          <TableCell>João Silva</TableCell>
                          <TableCell>PIX</TableCell>
                          <TableCell>R$ 450,00</TableCell>
                        </TableRow>
                        <TableRow className="bg-green-50">
                          <TableCell className="font-medium">Dízimo</TableCell>
                          <TableCell>Dízimo Mensal</TableCell>
                          <TableCell>Maria Santos</TableCell>
                          <TableCell>Cartão</TableCell>
                          <TableCell>R$ 380,00</TableCell>
                        </TableRow>
                        <TableRow className="bg-green-50">
                          <TableCell className="font-medium">Oferta</TableCell>
                          <TableCell>Oferta Domingo</TableCell>
                          <TableCell>-</TableCell>
                          <TableCell>Dinheiro</TableCell>
                          <TableCell>R$ 220,00</TableCell>
                        </TableRow>
                        <TableRow className="bg-green-50">
                          <TableCell className="font-medium">Campanha</TableCell>
                          <TableCell>Construção</TableCell>
                          <TableCell>-</TableCell>
                          <TableCell>Cartão</TableCell>
                          <TableCell>R$ 1.850,00</TableCell>
                        </TableRow>
                        <TableRow className="bg-green-50">
                          <TableCell className="font-medium">Doação</TableCell>
                          <TableCell>Doação Específica</TableCell>
                          <TableCell>Carlos Ferreira</TableCell>
                          <TableCell>PIX</TableCell>
                          <TableCell>R$ 1.000,00</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                    <div className="mt-6 border-t pt-4">
                      <h3 className="text-lg font-semibold mb-4">Resumo de Entradas por Categoria</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="text-sm font-medium text-gray-500">Dízimos</h4>
                          <p className="text-xl font-bold text-church-income mt-1">R$ 15.230,00</p>
                          <p className="text-xs text-gray-500">68% do total</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="text-sm font-medium text-gray-500">Ofertas</h4>
                          <p className="text-xl font-bold text-church-income mt-1">R$ 4.720,00</p>
                          <p className="text-xs text-gray-500">21% do total</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="text-sm font-medium text-gray-500">Campanhas</h4>
                          <p className="text-xl font-bold text-church-income mt-1">R$ 1.850,00</p>
                          <p className="text-xs text-gray-500">8% do total</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="text-sm font-medium text-gray-500">Doações</h4>
                          <p className="text-xl font-bold text-church-income mt-1">R$ 550,00</p>
                          <p className="text-xs text-gray-500">3% do total</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 border-t pt-4">
                      <h3 className="text-lg font-semibold mb-4">Resumo por Método de Pagamento</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="text-sm font-medium text-gray-500">PIX</h4>
                          <p className="text-xl font-bold text-blue-600 mt-1">R$ 12.450,00</p>
                          <p className="text-xs text-gray-500">55% do total</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="text-sm font-medium text-gray-500">Cartão</h4>
                          <p className="text-xl font-bold text-purple-600 mt-1">R$ 7.230,00</p>
                          <p className="text-xs text-gray-500">32% do total</p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg">
                          <h4 className="text-sm font-medium text-gray-500">Dinheiro</h4>
                          <p className="text-xl font-bold text-amber-600 mt-1">R$ 2.670,00</p>
                          <p className="text-xs text-gray-500">13% do total</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 border-t pt-4">
                      <h3 className="text-xl font-bold text-church-text">Total Geral: <span className="text-church-income">R$ 22.350,00</span></h3>
                    </div>
                  </CardContent>
                </CardChurch>
              </div>
            </TabsContent>
            
            <TabsContent value="saidas">
              <div className="grid grid-cols-1 gap-6">
                <CardChurch>
                  <CardHeader>
                    <CardTitle>Saídas por Categoria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {Object.entries(categoriasDespesas).map(([categoria, subcategorias], index) => (
                        <div key={index} className="border rounded-lg overflow-hidden">
                          <h3 className="p-3 bg-gray-100 font-medium">{categoria}</h3>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Subcategoria</TableHead>
                                <TableHead>Descrição</TableHead>
                                <TableHead>Valor</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody className="bg-red-50">
                              {subcategorias.map((subcategoria, idx) => (
                                <TableRow key={idx}>
                                  <TableCell className="font-medium">{subcategoria}</TableCell>
                                  <TableCell>Pagamento de {subcategoria.toLowerCase()}</TableCell>
                                  <TableCell className="text-church-expense font-medium">
                                    {subcategoria.includes("Salário") ? "R$ 3.500,00" : 
                                     subcategoria.includes("Aluguel") ? "R$ 5.000,00" : 
                                     subcategoria.includes("Água") ? "R$ 180,00" :
                                     subcategoria.includes("Luz") ? "R$ 450,00" :
                                     subcategoria.includes("Internet") ? "R$ 120,00" :
                                     subcategoria.includes("Limpeza") ? "R$ 350,00" :
                                     subcategoria.includes("Ajudas") ? "R$ 500,00" :
                                     "R$ 250,00"}
                                  </TableCell>
                                </TableRow>
                              ))}
                              <TableRow className="bg-red-100">
                                <TableCell colSpan={2} className="font-bold">Subtotal {categoria}</TableCell>
                                <TableCell className="text-church-expense font-bold">
                                  {categoria.includes("Operacionais") ? "R$ 6.100,00" : 
                                   categoria.includes("Pessoal") ? "R$ 4.000,00" : 
                                   "R$ 750,00"}
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 border-t pt-4">
                      <h3 className="text-xl font-bold text-church-text">Total Geral de Despesas: <span className="text-church-expense">R$ 10.850,00</span></h3>
                    </div>
                  </CardContent>
                </CardChurch>
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>
        
        <TabsContent value="membros">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <CardChurch>
              <CardHeader>
                <CardTitle>Filtros</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Faixa Etária</label>
                    <select className="w-full border rounded p-2 text-sm" value={filtroIdade} onChange={(e) => setFiltroIdade(e.target.value)}>
                      <option value="todos">Todas as idades</option>
                      <option value="ate18">Até 18 anos</option>
                      <option value="19a30">19 a 30 anos</option>
                      <option value="31a45">31 a 45 anos</option>
                      <option value="46a60">46 a 60 anos</option>
                      <option value="acima60">Acima de 60 anos</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estado Civil</label>
                    <select className="w-full border rounded p-2 text-sm" value={filtroEstadoCivil} onChange={(e) => setFiltroEstadoCivil(e.target.value)}>
                      <option value="todos">Todos</option>
                      <option value="solteiro">Solteiro(a)</option>
                      <option value="casado">Casado(a)</option>
                      <option value="divorciado">Divorciado(a)</option>
                      <option value="viuvo">Viúvo(a)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Função na Igreja</label>
                    <select className="w-full border rounded p-2 text-sm">
                      <option value="todos">Todas</option>
                      <option value="pastor">Pastor</option>
                      <option value="diacono">Diácono</option>
                      <option value="lider">Líder de Ministério</option>
                      <option value="tesoureiro">Tesoureiro</option>
                      <option value="secretario">Secretário(a)</option>
                      <option value="musico">Músico</option>
                      <option value="membro">Membro Regular</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="batizado" className="mr-2" />
                        <label htmlFor="batizado" className="text-sm">Batizado</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="dizimista" className="mr-2" />
                        <label htmlFor="dizimista" className="text-sm">Dizimista</label>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-2 bg-church-button hover:bg-church-button/90">Aplicar Filtros</Button>
                </div>
              </CardContent>
            </CardChurch>

            <CardChurch className="col-span-2">
              <CardHeader>
                <CardTitle>Estatísticas de Membros</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="text-gray-500 text-sm font-medium">Novos no Mês</h3>
                    <p className="text-3xl font-bold text-church-text mt-2">12</p>
                    <p className="text-xs text-gray-500 mt-1">+5% no mês</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-md font-semibold mb-3">Distribuição por Gênero</h3>
                  <div className="flex items-center">
                    <div className="w-2/3 bg-gray-200 rounded-full h-4">
                      <div className="bg-blue-500 h-4 rounded-full" style={{ width: "42%" }}></div>
                    </div>
                    <div className="ml-4 flex items-center text-sm">
                      <span className="inline-block w-3 h-3 bg-blue-500 mr-1 rounded-sm"></span>
                      <span className="mr-4">Masculino: 42%</span>
                      <span className="inline-block w-3 h-3 bg-pink-500 mr-1 rounded-sm"></span>
                      <span>Feminino: 58%</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-md font-semibold mb-3">Distribuição por Estado Civil</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-church-text">Casados</span>
                        <span className="text-sm font-medium text-church-text">55%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "55%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-church-text">Solteiros</span>
                        <span className="text-sm font-medium text-church-text">32%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "32%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-church-text">Divorciados</span>
                        <span className="text-sm font-medium text-church-text">8%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: "8%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-church-text">Viúvos</span>
                        <span className="text-sm font-medium text-church-text">5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "5%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CardChurch>
          </div>

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
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Relatorios;
