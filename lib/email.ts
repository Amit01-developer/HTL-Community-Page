import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const WELCOME_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_WELCOME_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const COMMUNITY_EMAIL = "hacktolearn001@gmail.com";

export async function sendWelcomeEmail(to_name: string, to_email: string) {
  return emailjs.send(
    SERVICE_ID,
    WELCOME_TEMPLATE,
    {
      to_name,
      to_email,
      from_name: "HACKtoLEARN Community",
      from_email: COMMUNITY_EMAIL,
      reply_to: COMMUNITY_EMAIL,
    },
    PUBLIC_KEY
  );
}
