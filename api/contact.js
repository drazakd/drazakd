// api/contact.js
const nodemailer = require('nodemailer');

// On peut éventuellement configurer Nodemailer ici (avec vos variables d'environnement)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // Utilisez le port 587 avec TLS
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }
  const { clientName, email, messages } = req.body;
  if (!clientName || !email || !messages) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `Nouveau message de contact de ${clientName}`,
    text: `Nom : ${clientName}\nEmail : ${email}\nMessage :\n${messages}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email envoyé :", info.response);
    return res.status(200).json({ success: "Message envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur d'envoi :", error);
    return res.status(500).json({ error: "Erreur lors de l'envoi du message." });
  }
};
