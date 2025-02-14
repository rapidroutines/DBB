import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Module } from "@shared/schema";
import VideoPlayer from "@/components/curriculum/video-player";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ModuleView() {
  const [, params] = useRoute("/module/:id");
  const { toast } = useToast();
  const moduleId = parseInt(params?.id || "0");

  const { data: module } = useQuery<Module>({
    queryKey: [`/api/modules/${moduleId}`],
  });

  const form = useForm<{ submission: string }>();

  const onSubmit = async (data: { submission: string }) => {
    try {
      await apiRequest("POST", `/api/modules/${moduleId}/submit`, data);
      queryClient.invalidateQueries({ queryKey: ["/api/modules"] });
      toast({
        title: "Success!",
        description: "Your assignment has been submitted.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit assignment.",
        variant: "destructive",
      });
    }
  };

  if (!module) return null;

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{module.title}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <VideoPlayer url={module.videoUrl} />
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Module Description</h2>
              <p className="text-muted-foreground">{module.description}</p>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Assignment Submission</h3>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <Textarea
                    placeholder="Enter your assignment submission here..."
                    {...form.register("submission")}
                  />
                  <Button type="submit" className="w-full">
                    Submit Assignment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
