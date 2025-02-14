import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import type { Course, Module } from "@shared/schema";
import { ScrollArea } from "@/components/ui/scroll-area";
import ModuleList from "@/components/module-list";
import VideoPlayer from "@/components/video-player";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CoursePage() {
  const [, params] = useRoute("/course/:id");
  const courseId = parseInt(params?.id || "0");
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);

  const { data: course } = useQuery<Course>({
    queryKey: ["/api/courses", courseId],
  });

  const { data: modules } = useQuery<Module[]>({
    queryKey: ["/api/courses", courseId, "modules"],
  });

  const selectedModule = modules?.find((m) => m.id === selectedModuleId);

  return (
    <div className="min-h-screen grid grid-cols-[300px_1fr]">
      <ScrollArea className="h-screen border-r">
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">{course?.title}</h1>
          <ModuleList
            modules={modules || []}
            selectedModuleId={selectedModuleId}
            onSelectModule={setSelectedModuleId}
          />
        </div>
      </ScrollArea>

      <main className="p-6">
        {selectedModule ? (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">{selectedModule.title}</h2>
            <VideoPlayer url={selectedModule.videoUrl} />
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Description</h3>
              <p className="text-muted-foreground">{selectedModule.description}</p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Homework</h3>
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: selectedModule.homework }} />
              </div>
              <Button className="mt-4">Submit Homework</Button>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground">
            Select a module to begin
          </div>
        )}
      </main>
    </div>
  );
}
