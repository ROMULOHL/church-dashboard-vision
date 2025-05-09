
import React, { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { CardChurch, CardContent, CardHeader, CardTitle } from "@/components/ui/card-church";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, UserPlus, Filter } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const mockMembers = [
  { id: 1, nome: "João Silva", telefone: "(11) 98765-4321", idade: 35, nascimento: "15/04/1990", profissao: "Engenheiro", funcao: "Líder de Louvor", batizado: true, dizimista: true },
  { id: 2, nome: "Maria Rodrigues", telefone: "(11) 99876-5432", idade: 42, nascimento: "18/07/1983", profissao: "Professora", funcao: "Professora EBD", batizado: true, dizimista: true },
  { id: 3, nome: "Pedro Santos", telefone: "(11) 97654-3210", idade: 28, nascimento: "22/11/1997", profissao: "Programador", funcao: "Mídia", batizado: true, dizimista: false },
  { id: 4, nome: "Ana Sousa", telefone: "(11) 96543-2109", idade: 31, nascimento: "29/03/1994", profissao: "Contadora", funcao: "Tesoureira", batizado: true, dizimista: true },
  { id: 5, nome: "Carlos Ferreira", telefone: "(11) 95432-1098", idade: 40, nascimento: "05/08/1985", profissao: "Advogado", funcao: "Secretário", batizado: true, dizimista: true },
];

const Membros: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [idade, setIdade] = useState("");
  const [funcao, setFuncao] = useState("");
  const { toast } = useToast();

  const handleFilter = () => {
    setShowFilters(!showFilters);
    // Implementação do filtro
  };

  const handleSaveMember = () => {
    // Aqui seria implementada a lógica de salvar o membro
    toast({
      title: "Membro adicionado",
      description: `${nome} foi adicionado com sucesso.`,
    });
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-church-button">Cadastro de Membros</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-church-button hover:bg-church-button/90 flex items-center gap-2">
              <UserPlus size={18} />
              <span>Novo Membro</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Adicionar novo membro</DialogTitle>
              <DialogDescription>
                Preencha todos os dados para cadastrar um novo membro na igreja.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="nome" className="text-right">
                  Nome
                </Label>
                <Input
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="telefone" className="text-right">
                  Telefone
                </Label>
                <Input
                  id="telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="idade" className="text-right">
                  Idade
                </Label>
                <Input
                  id="idade"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  type="number"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="funcao" className="text-right">
                  Função
                </Label>
                <select
                  id="funcao"
                  value={funcao}
                  onChange={(e) => setFuncao(e.target.value)}
                  className="col-span-3 border rounded-md p-2"
                >
                  <option value="">Selecione...</option>
                  <option value="pastor">Pastor</option>
                  <option value="diacono">Diácono</option>
                  <option value="lider">Líder de Ministério</option>
                  <option value="tesoureiro">Tesoureiro</option>
                  <option value="secretario">Secretário(a)</option>
                  <option value="musico">Músico</option>
                  <option value="membro">Membro Regular</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSaveMember} className="bg-church-button hover:bg-church-button/90">
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <CardChurch className="mb-6">
        <CardHeader>
          <CardTitle>Filtros e Pesquisa</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Pesquisar membros..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2" onClick={handleFilter}>
              <Filter size={18} />
              <span>Filtros</span>
            </Button>
            <Button className="bg-church-button hover:bg-church-button/90">Buscar</Button>
          </div>
          
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100">
              <div>
                <Label htmlFor="filterIdade">Idade</Label>
                <select id="filterIdade" className="w-full border rounded p-2 mt-1">
                  <option value="">Todas as idades</option>
                  <option value="ate18">Até 18 anos</option>
                  <option value="19a30">19 a 30 anos</option>
                  <option value="31a45">31 a 45 anos</option>
                  <option value="46a60">46 a 60 anos</option>
                  <option value="acima60">Acima de 60 anos</option>
                </select>
              </div>
              <div>
                <Label htmlFor="filterFuncao">Função</Label>
                <select id="filterFuncao" className="w-full border rounded p-2 mt-1">
                  <option value="">Todas</option>
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
                <Label htmlFor="filterStatus">Status</Label>
                <div className="flex flex-wrap gap-4 mt-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="batizado" className="mr-2" />
                    <Label htmlFor="batizado">Batizado</Label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="dizimista" className="mr-2" />
                    <Label htmlFor="dizimista">Dizimista</Label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </CardChurch>

      <CardChurch>
        <CardHeader>
          <CardTitle>Lista de Membros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefone</th>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Idade</th>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nascimento</th>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profissão</th>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Função</th>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batizado</th>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dizimista</th>
                  <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="p-3 text-sm whitespace-nowrap">{member.nome}</td>
                    <td className="p-3 text-sm whitespace-nowrap">{member.telefone}</td>
                    <td className="p-3 text-sm whitespace-nowrap">{member.idade}</td>
                    <td className="p-3 text-sm whitespace-nowrap">{member.nascimento}</td>
                    <td className="p-3 text-sm whitespace-nowrap">{member.profissao}</td>
                    <td className="p-3 text-sm whitespace-nowrap">{member.funcao}</td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      <span className={`inline-flex rounded-full px-2 text-xs font-semibold ${member.batizado ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {member.batizado ? 'Sim' : 'Não'}
                      </span>
                    </td>
                    <td className="p-3 text-sm whitespace-nowrap">
                      <span className={`inline-flex rounded-full px-2 text-xs font-semibold ${member.dizimista ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {member.dizimista ? 'Sim' : 'Não'}
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
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
              Exibindo <span className="font-medium">5</span> de <span className="font-medium">42</span> membros
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm" className="bg-church-button text-white hover:bg-church-button/90">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Próximo
              </Button>
            </div>
          </div>
        </CardContent>
      </CardChurch>
    </DashboardLayout>
  );
};

export default Membros;
