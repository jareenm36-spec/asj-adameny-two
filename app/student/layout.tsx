import { Sidebar } from "@/components/layout/sidebar";

const studentItems = [
  { href: "/student", label: "Dashboard" },
  { href: "/student/courses/1", label: "My Courses" },
  { href: "/student/submissions", label: "Submissions" }
];

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[16rem_1fr]">
      <Sidebar items={studentItems} title="Student" />
      <main>{children}</main>
    </div>
  );
}
