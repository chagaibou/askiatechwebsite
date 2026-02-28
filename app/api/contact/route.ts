import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, service, message } = await req.json();

    const data = await resend.emails.send({
      from: 'ASKIA-Tech Contact <onboarding@resend.dev>', // Au début, Resend n'autorise que cette adresse
      to: ['askiatech3301@gmail.com'], // REMPLACEZ PAR VOTRE ADRESSE MAIL
      subject: `Nouveau Besoin Client : ${service}`,
      html: `
        <div style="font-family: sans-serif; color: #003366; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #008080;">Nouvelle demande de projet - ASKIA-Tech</h2>
          <p><strong>Nom du prospect :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Service concerné :</strong> ${service}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message / Besoins :</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: "Échec de l'envoi" }, { status: 500 });
  }
}