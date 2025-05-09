
import React, { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CardChurch, CardContent, CardHeader, CardTitle } from "@/components/ui/card-church";

export const MembrosTab: React.FC = () => {
  const [filtroIdade, setFiltroIdade] = useState("todos");
  const [filtroEstadoCivil, setFiltroEstadoCivil] = useState("todos");

  return (
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
  );
};
