import { Card } from "@/components/ui/card";

const stats = [
  { label: "Total Students", value: "0" },
  { label: "Total Courses", value: "0" },
  { label: "Active Enrollments", value: "0" }
];

export default function AdminDashboardPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.label}>
            <p className="text-sm text-slate-600">{s.label}</p>
            <p className="mt-2 text-3xl font-bold text-primary">{s.value}</p>
          </Card>
        ))}
      </div>
      <Card>
        <h2 className="text-lg font-semibold">Recent activity</h2>
        <p className="mt-2 text-sm text-slate-600">Latest enrollments and submissions will appear here.</p>
      </Card>
    </section>
  );
}
