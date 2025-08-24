export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required" });
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,   // ✅ required
        accessToken: process.env.EMAILJS_PRIVATE_KEY, // ✅ required for server
        template_params: {
          from_name: name,
          from_email: email,
          subject,
          message,
        },
      }),
    });

    if (!response.ok) throw new Error(await response.text());

    return res.status(200).json({ success: true, message: "Email sent!" });
  } catch (err) {
    return res.status(500).json({ error: err.message || "Server error" });
  }
}
