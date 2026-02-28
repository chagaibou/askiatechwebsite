import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// CETTE LIGNE EST LA CLÉ : Elle empêche l'erreur "Failed to collect page data"
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  // On vérifie la clé seulement au moment de l'exécution
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json({ error: "Clé API manquante" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, service, message } = await req.json();

    const data = await resend.emails.send({
      from: 'ASKIA-Tech Contact <onboarding@resend.dev>',
      to: ['askiatech3301@gmail.com'],
      subject: `Nouveau Besoin Client : ${service}`,
      html: `
        <div style="font-family: sans-serif; color: #003366; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #008080;">Nouvelle demande de projet - ASKIA-Tech</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Service :</strong> ${service}</p>
          <hr />
          <p><strong>Message :</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
  }
}