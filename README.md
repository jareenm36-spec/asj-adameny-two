# ASJ Academy

A simple, production-focused LMS foundation for Filipino students.

## Stack
- Next.js App Router + TypeScript + Tailwind CSS
- Prisma + PostgreSQL
- React Query
- Zod validation
- OpenAI (summary-only)
- ExcelJS for admin report exports

## Roles
- **ADMIN**: manage users, courses, lessons, enrollments, reports
- **STUDENT**: view courses, lessons, submissions, average

## Core Models
- User
- Course
- Lesson
- Enrollment
- Submission

## Run locally
```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run dev
```

## API notes
- `POST /api/reports/excel` (admin only via `x-role: ADMIN`)
- `POST /api/ai/summary` (admin only via `x-role: ADMIN`)

AI is read-only support for summaries/certificate text. It does not edit grades.
