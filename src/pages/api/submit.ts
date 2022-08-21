import { MailService } from "@sendgrid/mail";
import * as z from "zod";

export const emailSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Please enter a name" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().optional(),
  needs: z.enum(["", "new-website", "rebuild", "other"]),
  contactMessage: z
    .string()
    .min(1, { message: "Please enter a message" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
  rebuildUrl: z.string().optional(),
});

type Email = z.infer<typeof emailSchema>;

export async function post({ request }: { request: Request }) {
  const data = await request.json();
  try {
    const email = emailSchema.parse(data);
    if (email) {
      const sgMail = new MailService();
      sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY as string);
      const msgTemplate = {
        name: email.name,
        email: email.email,
        phone: email.phone,
        needs: email.needs,
        rebuildUrl: email.rebuildUrl || "",
        message: email.contactMessage,
      };
      const result = await sgMail.send({
        to: "daniel@beanlea.com",
        from: "website@beanlea.com",
        subject: "New message from website",
        dynamicTemplateData: msgTemplate,
        templateId: "d-6406644e646144fa9db04057c20b9677",
      });
      if (result[0].statusCode === 202) {
        return new Response("", { status: 200 });
      } else {
        return new Response("", { status: result[0].statusCode });
      }
    } else {
      return new Response("", { status: 400 });
    }
  } catch (e) {
    console.log(e);
    return new Response("", { status: 400 });
  }
}
