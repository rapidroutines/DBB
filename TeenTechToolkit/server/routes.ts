import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { z } from "zod";
import { insertCourseSchema, insertModuleSchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  setupAuth(app);

  // Get all courses
  app.get("/api/courses", async (_req, res) => {
    const courses = await storage.getCourses();
    res.json(courses);
  });

  // Get specific course
  app.get("/api/courses/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const course = await storage.getCourse(id);
    if (!course) return res.sendStatus(404);
    res.json(course);
  });

  // Get modules for a course
  app.get("/api/courses/:id/modules", async (req, res) => {
    const id = parseInt(req.params.id);
    const modules = await storage.getModules(id);
    res.json(modules);
  });

  // Update progress for a module
  app.post("/api/courses/:courseId/modules/:moduleId/progress", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);

    const courseId = parseInt(req.params.courseId);
    const moduleId = parseInt(req.params.moduleId);
    const userId = req.user!.id;

    const progress = await storage.updateProgress(userId, moduleId);
    res.json(progress);
  });

  const httpServer = createServer(app);
  return httpServer;
}