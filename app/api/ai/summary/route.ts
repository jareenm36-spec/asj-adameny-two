import OpenAI from "openai";
import { NextResponse } from "next/server";
import { z } from "zod";
import { assertRole } from "@/lib/auth";

const summarySchema = z.object({
  courseName: z.string(),
  averageScore: z.number(),
  submissionRate: z.number(),
  mode: z.enum(["excel", "certificate"])
});

export async function POST(request: Request) {
  try {
    assertRole(["ADMIN"], request.headers);
    const payload = summarySchema.parse(await request.json());

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        summary: `Course ${payload.courseName} has ${payload.averageScore.toFixed(2)} average with ${payload.submissionRate.toFixed(2)}% submissions.`
      });
    }

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const prompt =
      payload.mode === "excel"
        ? "Write a concise academic summary for an Excel report."
        : "Write a short congratulatory certificate message for a student.";

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You summarize data only. Never alter grades or business rules." },
        {
          role: "user",
          content: `${prompt} Course: ${payload.courseName}; average: ${payload.averageScore}; submission rate: ${payload.submissionRate}`
        }
      ]
    });

    return NextResponse.json({ summary: completion.choices[0]?.message?.content ?? "No summary generated." });
  } catch (error) {
    return NextResponse.json({ message: "Invalid summary request", error: `${error}` }, { status: 400 });
  }
}
