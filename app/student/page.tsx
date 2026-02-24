import { Card } from "@/components/ui/card";

export default function StudentDashboardPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Student Dashboard</h1>
      <Card>
        <p className="text-sm text-slate-600">Track enrolled courses, lessons, submissions, and your current average.</p>
      </Card>
    </section>
  );
}
