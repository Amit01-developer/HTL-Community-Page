import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const WELCOME_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_WELCOME_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export async function sendWelcomeEmail(to_name: string, to_email: string) {
  return emailjs.send(
    SERVICE_ID,
    WELCOME_TEMPLATE,
    { to_name, to_email },
    PUBLIC_KEY
  );
}
