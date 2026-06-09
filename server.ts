import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parsing middleware
  app.use(express.json());

  // API router goes FIRST
  app.post("/api/contact", async (req, res) => {
    try {
      const webhookUrl = process.env.VITE_N8N_WEBHOOK_URL || "https://letsgo.app.n8n.cloud/webhook/contact-form-submission";
      
      console.log(`Proxying contact form submission to n8n webhook URL: ${webhookUrl}`);
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...req.body,
          submittedAt: req.body.submittedAt || new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`n8n remote response status: ${response.status}`);
      }

      const resText = await response.text();
      let resJson = {};
      try {
        resJson = JSON.parse(resText);
      } catch (e) {
        resJson = { message: resText };
      }

      res.status(200).json({ success: true, count: 1, data: resJson });
    } catch (error: any) {
      console.error("n8n proxy error:", error);
      res.status(500).json({ success: false, error: error.message || "Failed to submit request" });
    }
  });

  // Vite middleware setup for assets/HMR and single page applications
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
