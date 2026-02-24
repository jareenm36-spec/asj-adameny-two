import { Card } from "@/components/ui/card";

export default function CoursePage({ params }: { params: { courseId: string } }) {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Course {params.courseId}</h1>
      <Card>
        <p className="text-sm text-slate-600">Lessons, assignment uploads, and simple grade average appear here.</p>
      </Card>
    </section>
  );
}
