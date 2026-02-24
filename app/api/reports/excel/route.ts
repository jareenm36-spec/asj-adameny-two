import { NextResponse } from "next/server";
import ExcelJS from "exceljs";
import { z } from "zod";
import { assertRole } from "@/lib/auth";

const reportSchema = z.object({
  courseName: z.string().min(1),
  students: z.array(
    z.object({
      fullName: z.string(),
      averageScore: z.number(),
      submissions: z.number().int(),
      remark: z.enum(["On time", "Bit late", "Always late"])
    })
  )
});

export async function POST(request: Request) {
  try {
    assertRole(["ADMIN"], request.headers);
    const payload = reportSchema.parse(await request.json());

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet(payload.courseName);
    sheet.columns = [
      { header: "Student", key: "fullName", width: 30 },
      { header: "Average", key: "averageScore", width: 12 },
      { header: "Submissions", key: "submissions", width: 12 },
      { header: "Remark", key: "remark", width: 16 }
    ];

    [...payload.students]
      .sort((a, b) => a.fullName.localeCompare(b.fullName))
      .forEach((student) => sheet.addRow(student));

    const buffer = await workbook.xlsx.writeBuffer();
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${payload.courseName}-report.xlsx"`
      }
    });
  } catch (error) {
    return NextResponse.json({ message: "Invalid report request", error: `${error}` }, { status: 400 });
  }
}
