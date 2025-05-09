
import React, { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CardChurch, CardContent, CardHeader, CardTitle } from "@/components/ui/card-church";
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

export const EntradasTab: React.FC = () => {
  const [filtroMetodoPagamento, setFiltroMetodoPagamento] = useState("todos");

  return (
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
  );
};

export const SaidasTab: React.FC = () => {
  return (
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
  );
};

export const FinanceiroTabs: React.FC = () => {
  return (
    <TabsContent value="financeiro">
      <Tabs defaultValue="entradas" className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="entradas" className="data-[state=active]:bg-church-income data-[state=active]:text-white">Entradas</TabsTrigger>
          <TabsTrigger value="saidas" className="data-[state=active]:bg-church-expense data-[state=active]:text-white">Saídas</TabsTrigger>
        </TabsList>
        
        <EntradasTab />
        <SaidasTab />
      </Tabs>
    </TabsContent>
  );
};

// We also need to export the Tabs components to avoid errors
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
export { Tabs, TabsList, TabsTrigger };
