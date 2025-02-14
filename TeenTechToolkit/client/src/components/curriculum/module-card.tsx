import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Module } from "@shared/schema";
import { PlayCircle } from "lucide-react";
import { Link } from "wouter";

interface ModuleCardProps {
  module: Module;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{module.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{module.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/module/${module.id}`}>
            <PlayCircle className="mr-2 h-4 w-4" />
            Start Learning
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
