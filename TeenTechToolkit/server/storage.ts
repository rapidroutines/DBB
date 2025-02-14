import { users, courses, modules, progress, type User, type Course, type Module, type Progress, type InsertUser } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import createMemoryStore from "memorystore";
import session from "express-session";

const MemoryStore = createMemoryStore(session);

export class DatabaseStorage {
  sessionStore: session.Store;

  constructor() {
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000,
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getCourses(): Promise<Course[]> {
    return await db.select().from(courses);
  }

  async getCourse(id: number): Promise<Course | undefined> {
    const [course] = await db.select().from(courses).where(eq(courses.id, id));
    return course;
  }

  async getModules(courseId: number): Promise<Module[]> {
    return await db
      .select()
      .from(modules)
      .where(eq(modules.courseId, courseId))
      .orderBy(modules.order);
  }

  async updateProgress(userId: number, moduleId: number): Promise<Progress> {
    const [existingProgress] = await db
      .select()
      .from(progress)
      .where(eq(progress.userId, userId))
      .where(eq(progress.moduleId, moduleId));

    if (existingProgress) {
      const [updated] = await db
        .update(progress)
        .set({ completed: true, completedAt: new Date() })
        .where(eq(progress.id, existingProgress.id))
        .returning();
      return updated;
    }

    const [newProgress] = await db
      .insert(progress)
      .values({
        userId,
        moduleId,
        completed: true,
        completedAt: new Date(),
      })
      .returning();
    return newProgress;
  }
}

export const storage = new DatabaseStorage();