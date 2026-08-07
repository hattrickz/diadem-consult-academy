import { NextRequest, NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validations";
import { sendAppointmentNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = appointmentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    await sendAppointmentNotification(parsed.data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Appointment submission error:", error);
    return NextResponse.json({ success: false, message: "Something went wrong." }, { status: 500 });
  }
}
