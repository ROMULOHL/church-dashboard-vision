
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Filter, Download } from "lucide-react";

interface RelatorioHeaderProps {
  title: string;
}

export const RelatorioHeader: React.FC<RelatorioHeaderProps> = ({ title }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-church-text">{title}</h1>
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
  );
};
