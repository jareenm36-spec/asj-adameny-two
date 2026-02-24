import { Sidebar } from "@/components/layout/sidebar";

const adminItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/courses", label: "Courses" },
  { href: "/admin/lessons", label: "Lessons" },
  { href: "/admin/enrollments", label: "Enrollments" },
  { href: "/admin/reports", label: "Reports" }
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[16rem_1fr]">
      <Sidebar items={adminItems} title="Admin" />
      <main>{children}</main>
    </div>
  );
}
