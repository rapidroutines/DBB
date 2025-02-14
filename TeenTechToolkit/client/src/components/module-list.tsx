import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Module } from "@shared/schema";
import { CheckCircle } from "lucide-react";

interface ModuleListProps {
  modules: Module[];
  selectedModuleId: number | null;
  onSelectModule: (id: number) => void;
}

export default function ModuleList({ modules, selectedModuleId, onSelectModule }: ModuleListProps) {
  return (
    <div className="space-y-2">
      {modules.map((module) => (
        <Button
          key={module.id}
          variant="ghost"
          className={cn(
            "w-full justify-start",
            selectedModuleId === module.id && "bg-accent text-accent-foreground",
          )}
          onClick={() => onSelectModule(module.id)}
        >
          <CheckCircle className="h-4 w-4 mr-2 opacity-0" />
          <span className="truncate">{module.title}</span>
        </Button>
      ))}
    </div>
  );
}
