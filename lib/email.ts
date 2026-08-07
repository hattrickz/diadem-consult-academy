import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendAppointmentNotification(data: {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  serviceInterest: string;
  message?: string;
}) {
  if (!resend) {
    console.warn("RESEND_API_KEY not set — skipping email send.");
    return { skipped: true };
  }

  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || "admin@diademconsultacademy.com";

  return resend.emails.send({
    from: "Diadem Consult Academy <no-reply@diademconsultacademy.com>",
    to: adminEmail,
    subject: `New Appointment Request — ${data.name}`,
    html: `
      <h2>New Appointment Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
      <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>
      <p><strong>Service Interested In:</strong> ${data.serviceInterest}</p>
      <p><strong>Message:</strong> ${data.message || "—"}</p>
    `,
  });
}
