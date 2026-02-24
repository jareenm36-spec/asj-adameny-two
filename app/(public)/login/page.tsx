import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center px-6">
      <Card className="w-full space-y-4">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-sm text-slate-600">Use Clerk or JWT auth wiring in Phase 3. Demo routes below.</p>
        <div className="flex gap-2">
          <Link href="/admin" className="rounded-lg bg-primary px-4 py-2 text-sm text-white">
            Enter as Admin
          </Link>
          <Link href="/student" className="rounded-lg border px-4 py-2 text-sm">
            Enter as Student
          </Link>
        </div>
      </Card>
    </main>
  );
}
