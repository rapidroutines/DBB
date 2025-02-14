import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import type { Course } from "@shared/schema";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{course.description}</p>
        <Badge variant="secondary">{course.difficulty}</Badge>
      </CardContent>
      <CardFooter>
        <Link href={`/course/${course.id}`}>
          <Button className="w-full">Continue Learning</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
