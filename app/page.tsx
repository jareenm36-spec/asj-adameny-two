import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-16">
      <Card className="w-full space-y-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">ASJ Academy</p>
        <h1 className="text-4xl font-bold">Nightly classes. Clear course flow. Academic-first LMS.</h1>
        <p className="max-w-2xl text-slate-600">
          Manage courses, lessons, enrollments, submissions, and grading summaries in one minimal platform.
        </p>
        <div className="flex gap-3">
          <Link href="/login" className="rounded-xl bg-primary px-4 py-2 text-white">
            Login
          </Link>
          <Link href="/register" className="rounded-xl border border-red-100 px-4 py-2">
            Register
          </Link>
        </div>
      </Card>
    </main>
  );
}
