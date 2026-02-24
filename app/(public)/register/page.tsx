import { Card } from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center px-6">
      <Card className="w-full space-y-4">
        <h1 className="text-2xl font-semibold">Register</h1>
        <p className="text-sm text-slate-600">
          Student self-signup can be enabled here. Enrollment into courses remains admin-managed.
        </p>
      </Card>
    </main>
  );
}
