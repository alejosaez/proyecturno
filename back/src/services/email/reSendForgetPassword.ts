import { Resend } from "resend";
import { RESENDAPIKEY } from "../../config/envs";

const resend = new Resend(`${RESENDAPIKEY}`);

export async function resendPasswordFunction(password: string, username: string, email: string) {
    try {
        console.log("estoy en el resendddd")
        const { data, error } = await resend.emails.send({
            from: 'HealthCare Medical Center <medicalcenter@resend.dev>',
            to: [`${email}`],
            subject: 'Hello to Medical Center!',
            html: `
            <div style="font-family: Arial, sans-serif; color: #333; background-color: #f4f4f4; padding: 20px;">
            <h1 style="color: #0066cc;">Password Recovery Successful</h1>
            <p style="font-size: 16px;">Here are your login details:</p>
            <ul>
                <li><strong>Username:</strong> ${username}</li>
                <li><strong>Password:</strong> ${password}</li>
            </ul>
            <p style="font-size: 14px;">Please make sure to keep your login details secure and do not share them with anyone.</p>
        </div>        
        `,
        });
        console.log("se envio el email")
        if (error) {
            throw new Error("No se pudo enviar el email");
        }

        console.log({ data });
    } catch (error) {
        console.error({ error });
    }
}