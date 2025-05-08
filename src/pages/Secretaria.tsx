
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { CardChurch, CardContent, CardHeader, CardTitle } from "@/components/ui/card-church";
import { Button } from "@/components/ui/button";
import { CalendarClock, PlusCircle, Check, X, Clock, FileText, User, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Secretaria: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-church-text">Painel Secretaria</h1>
        <div className="flex gap-2">
          <Button className="bg-church-button hover:bg-church-button/90 flex items-center gap-2">
            <PlusCircle size={18} />
            <span>Novo Agendamento</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <CardChurch className="bg-blue-50 border-l-4 border-church-button">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-church-button/20 text-church-button">
                <CalendarClock size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-church-text">8</h3>
                <p className="text-sm text-gray-500">Agendamentos para hoje</p>
              </div>
            </div>
          </CardContent>
        </CardChurch>
        
        <CardChurch className="bg-green-50 border-l-4 border-church-income">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-church-income/20 text-church-income">
                <Check size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-church-text">5</h3>
                <p className="text-sm text-gray-500">Agendamentos concluídos</p>
              </div>
            </div>
          </CardContent>
        </CardChurch>
        
        <CardChurch className="bg-yellow-50 border-l-4 border-yellow-500">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-yellow-500/20 text-yellow-500">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-church-text">3</h3>
                <p className="text-sm text-gray-500">Agendamentos pendentes</p>
              </div>
            </div>
          </CardContent>
        </CardChurch>
        
        <CardChurch className="bg-red-50 border-l-4 border-church-expense">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-church-expense/20 text-church-expense">
                <X size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-church-text">1</h3>
                <p className="text-sm text-gray-500">Agendamentos cancelados</p>
              </div>
            </div>
          </CardContent>
        </CardChurch>
      </div>

      <Tabs defaultValue="agendamentos" className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="agendamentos" className="data-[state=active]:bg-church-button data-[state=active]:text-white">Agendamentos</TabsTrigger>
          <TabsTrigger value="documentos" className="data-[state=active]:bg-church-button data-[state=active]:text-white">Documentos</TabsTrigger>
          <TabsTrigger value="visitantes" className="data-[state=active]:bg-church-button data-[state=active]:text-white">Visitantes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="agendamentos">
          <CardChurch>
            <CardHeader>
              <CardTitle>Agendamentos do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Horário</th>
                      <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Membro</th>
                      <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assunto</th>
                      <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 text-sm whitespace-nowrap">09:00</td>
                      <td className="p-3 text-sm whitespace-nowrap">João Silva</td>
                      <td className="p-3 text-sm whitespace-nowrap">Aconselhamento Pastoral</td>
                      <td className="p-3 text-sm whitespace-nowrap">
                        <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                          Concluído
                        </span>
                      </td>
                      <td className="p-3 text-sm whitespace-nowrap">
                        <Button variant="ghost" size="sm">
                          Ver detalhes
                        </Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 text-sm whitespace-nowrap">10:30</td>
                      <td className="p-3 text-sm whitespace-nowrap">Maria Rodrigues</td>
                      <td className="p-3 text-sm whitespace-nowrap">Solicitação de Certificado</td>
                      <td className="p-3 text-sm whitespace-nowrap">
                        <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                          Concluído
                        </span>
                      </td>
                      <td className="p-3 text-sm whitespace-nowrap">
                        <Button variant="ghost" size="sm">
                          Ver detalhes
                        </Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 text-sm whitespace-nowrap">11:15</td>
                      <td className="p-3 text-sm whitespace-nowrap">Pedro Santos</td>
                      <td className="p-3 text-sm whitespace-nowrap">Inscrição em Curso</td>
                      <td className="p-3 text-sm whitespace-nowrap">
                        <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                          Concluído
                        </span>
                      </td>
                      <td className="p-3 text-sm whitespace-nowrap">
                        <Button variant="ghost" size="sm">
                          Ver detalhes
                        </Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-yellow-50">
                      <td className="p-3 text-sm whitespace-nowrap">14:00</td>
                      <td className="p-3 text-sm whitespace-nowrap">Ana Sousa</td>
                      <td className="p-3 text-sm whitespace-nowrap">Reunião Administrativa</td>
                      <td className="p-3 text-sm whitespace-nowrap">
                        <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800">
                          Pendente
                        </span>
                      </td>
                      <td className="p-3 text-sm whitespace-nowrap">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="bg-church-income text-white hover:bg-church-income/90">
                            Concluir
                          </Button>
                          <Button variant="outline" size="sm" className="bg-church-expense text-white hover:bg-church-expense/90">
                            Cancelar
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-yellow-50">
                      <td className="p-3 text-sm whitespace-nowrap">15:30</td>
                      <td className="p-3 text-sm whitespace-nowrap">Carlos Ferreira</td>
                      <td className="p-3 text-sm whitespace-nowrap">Organização de Evento</td>
                      <td className="p-3 text-sm whitespace-nowrap">
                        <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800">
                          Pendente
                        </span>
                      </td>
                      <td className="p-3 text-sm whitespace-nowrap">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="bg-church-income text-white hover:bg-church-income/90">
                            Concluir
                          </Button>
                          <Button variant="outline" size="sm" className="bg-church-expense text-white hover:bg-church-expense/90">
                            Cancelar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </CardChurch>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <CardChurch>
              <CardHeader>
                <CardTitle>Próximos Agendamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <CalendarClock size={20} className="text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Reunião de Liderança</h4>
                      <p className="text-xs text-gray-500">Segunda, 13/04 - 19:00</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Ver
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <CalendarClock size={20} className="text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Ensaio de Louvor</h4>
                      <p className="text-xs text-gray-500">Terça, 14/04 - 20:00</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Ver
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <CalendarClock size={20} className="text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Culto de Oração</h4>
                      <p className="text-xs text-gray-500">Quarta, 15/04 - 19:30</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Ver
                    </Button>
                  </div>
                </div>
              </CardContent>
            </CardChurch>
            
            <CardChurch>
              <CardHeader>
                <CardTitle>Agendamentos Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-church-text">Aconselhamento</p>
                      <span className="inline-flex rounded-full px-2 text-xs font-semibold bg-green-100 text-green-800">
                        Concluído
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">João Silva - 05/04/2025</p>
                  </div>
                  
                  <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-church-text">Batismo</p>
                      <span className="inline-flex rounded-full px-2 text-xs font-semibold bg-green-100 text-green-800">
                        Concluído
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">Maria Rodrigues - 04/04/2025</p>
                  </div>
                  
                  <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-church-text">Inscrição em Curso</p>
                      <span className="inline-flex rounded-full px-2 text-xs font-semibold bg-green-100 text-green-800">
                        Concluído
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">Pedro Santos - 03/04/2025</p>
                  </div>
                </div>
              </CardContent>
            </CardChurch>
          </div>
        </TabsContent>
        
        <TabsContent value="documentos">
          <div className="grid grid-cols-1 gap-6">
            <CardChurch>
              <CardHeader>
                <div className="flex justify-between items-center w-full">
                  <CardTitle>Documentos</CardTitle>
                  <Button className="bg-church-button hover:bg-church-button/90 flex items-center gap-2">
                    <FileText size={18} />
                    <span>Novo Documento</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documento</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Solicitante</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 text-sm whitespace-nowrap">Certificado de Batismo</td>
                        <td className="p-3 text-sm whitespace-nowrap">Certificado</td>
                        <td className="p-3 text-sm whitespace-nowrap">Maria Rodrigues</td>
                        <td className="p-3 text-sm whitespace-nowrap">05/04/2025</td>
                        <td className="p-3 text-sm whitespace-nowrap">
                          <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                            Emitido
                          </span>
                        </td>
                        <td className="p-3 text-sm whitespace-nowrap">
                          <Button variant="outline" size="sm">
                            Visualizar
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 text-sm whitespace-nowrap">Declaração de Membro</td>
                        <td className="p-3 text-sm whitespace-nowrap">Declaração</td>
                        <td className="p-3 text-sm whitespace-nowrap">João Silva</td>
                        <td className="p-3 text-sm whitespace-nowrap">04/04/2025</td>
                        <td className="p-3 text-sm whitespace-nowrap">
                          <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                            Emitido
                          </span>
                        </td>
                        <td className="p-3 text-sm whitespace-nowrap">
                          <Button variant="outline" size="sm">
                            Visualizar
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 text-sm whitespace-nowrap">Certificado de Curso</td>
                        <td className="p-3 text-sm whitespace-nowrap">Certificado</td>
                        <td className="p-3 text-sm whitespace-nowrap">Pedro Santos</td>
                        <td className="p-3 text-sm whitespace-nowrap">03/04/2025</td>
                        <td className="p-3 text-sm whitespace-nowrap">
                          <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                            Emitido
                          </span>
                        </td>
                        <td className="p-3 text-sm whitespace-nowrap">
                          <Button variant="outline" size="sm">
                            Visualizar
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 bg-yellow-50">
                        <td className="p-3 text-sm whitespace-nowrap">Carta de Recomendação</td>
                        <td className="p-3 text-sm whitespace-nowrap">Carta</td>
                        <td className="p-3 text-sm whitespace-nowrap">Ana Sousa</td>
                        <td className="p-3 text-sm whitespace-nowrap">06/04/2025</td>
                        <td className="p-3 text-sm whitespace-nowrap">
                          <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800">
                            Pendente
                          </span>
                        </td>
                        <td className="p-3 text-sm whitespace-nowrap">
                          <Button variant="outline" size="sm" className="bg-church-income text-white hover:bg-church-income/90">
                            Emitir
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </CardChurch>
            
            <CardChurch>
              <CardHeader>
                <CardTitle>Modelos de Documentos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2 hover:bg-gray-50">
                    <FileText size={24} className="text-church-button" />
                    <span>Certificado de Batismo</span>
                  </Button>
                  
                  <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2 hover:bg-gray-50">
                    <FileText size={24} className="text-church-button" />
                    <span>Declaração de Membro</span>
                  </Button>
                  
                  <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2 hover:bg-gray-50">
                    <FileText size={24} className="text-church-button" />
                    <span>Carta de Recomendação</span>
                  </Button>
                  
                  <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-2 hover:bg-gray-50">
                    <FileText size={24} className="text-church-button" />
                    <span>Certificado de Curso</span>
                  </Button>
                </div>
              </CardContent>
            </CardChurch>
          </div>
        </TabsContent>
        
        <TabsContent value="visitantes">
          <div className="grid grid-cols-1 gap-6">
            <CardChurch>
              <CardHeader>
                <div className="flex justify-between items-center w-full">
                  <CardTitle>Visitantes Recentes</CardTitle>
                  <Button className="bg-church-button hover:bg-church-button/90 flex items-center gap-2">
                    <User size={18} />
                    <span>Novo Visitante</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefone</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data da Visita</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Como conheceu</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 text-sm whitespace-nowrap">Roberto Almeida</td>
                        <td className="p-3 text-sm whitespace-nowrap">(11) 99876-5432</td>
                        <td className="p-3 text-sm whitespace-nowrap">05/04/2025</td>
                        <td className="p-3 text-sm whitespace-nowrap">Indicação</td>
                        <td className="p-3 text-sm whitespace-nowrap">
                          <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800">
                            Acompanhamento
                          </span>
                        </td>
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
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 text-sm whitespace-nowrap">Cláudia Pereira</td>
                        <td className="p-3 text-sm whitespace-nowrap">(11) 98765-4321</td>
                        <td className="p-3 text-sm whitespace-nowrap">04/04/2025</td>
                        <td className="p-3 text-sm whitespace-nowrap">Redes Sociais</td>
                        <td className="p-3 text-sm whitespace-nowrap">
                          <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800">
                            Novo Contato
                          </span>
                        </td>
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
                      <tr className="hover:bg-gray-50">
                        <td className="p-3 text-sm whitespace-nowrap">Ricardo Gomes</td>
                        <td className="p-3 text-sm whitespace-nowrap">(11) 97654-3210</td>
                        <td className="p-3 text-sm whitespace-nowrap">01/04/2025</td>
                        <td className="p-3 text-sm whitespace-nowrap">Evento</td>
                        <td className="p-3 text-sm whitespace-nowrap">
                          <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                            Integrado
                          </span>
                        </td>
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
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </CardChurch>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CardChurch>
                <CardHeader>
                  <CardTitle>Mapa de Visitantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center text-gray-500">
                      <MapPin size={48} className="mx-auto mb-2 text-gray-400" />
                      <p>O mapa de distribuição geográfica dos visitantes aparecerá aqui</p>
                    </div>
                  </div>
                </CardContent>
              </CardChurch>
              
              <CardChurch>
                <CardHeader>
                  <CardTitle>Conversão de Visitantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mt-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-church-text">Novos Contatos</span>
                        <span className="text-sm font-medium text-church-text">24 (100%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-400 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-church-text">Em Acompanhamento</span>
                        <span className="text-sm font-medium text-church-text">15 (62%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: "62%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-church-text">Integrados</span>
                        <span className="text-sm font-medium text-church-text">8 (33%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-church-income h-2.5 rounded-full" style={{ width: "33%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-church-text">Novos Membros</span>
                        <span className="text-sm font-medium text-church-text">5 (21%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-church-button h-2.5 rounded-full" style={{ width: "21%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CardChurch>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Secretaria;
