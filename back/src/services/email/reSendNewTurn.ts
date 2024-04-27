import { Resend } from "resend";
import { RESENDAPIKEY } from "../../config/envs";

const resend = new Resend(`${RESENDAPIKEY}`);

export async function reSendNewTurn (email:string, date:Date, time: string,observation:string,medical_specialty:string,phone_number:string, name: string) {
    try {
        console.log("estoy en el resendddd")
        const { data, error } = await resend.emails.send({
            from: 'HealthCare Medical Center <medicalcenter@resend.dev>',
            to: [`${email}`],
            subject: 'Hello to Medical Center!',
            html: `
            <div style="font-family: Arial, sans-serif; color: #333; background-color: #f4f4f4; padding: 20px;">
            <h1 style="color: #0066cc;">Welcome to HealthCare Medical Center, ${name}!</h1>
            <p style="font-size: 16px;">Thank you for scheduling a new appointment with us. Below are the details of your appointment:</p>
            <ul>
                <li><strong>Date:</strong> ${date}</li>
                <li><strong>Time:</strong> ${time}</li>
                <li><strong>Observation:</strong> ${observation}</li>
                <li><strong>Medical Specialty:</strong> ${medical_specialty}</li>
                <li><strong>Phone Number:</strong> ${phone_number}</li>
            </ul>
            <p style="font-size: 14px;">Please ensure to attend your appointment on the scheduled date and time.</p>
            <p style="font-size: 14px;">If you are unable to attend, please notify us at least 24 hours in advance.</p>
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