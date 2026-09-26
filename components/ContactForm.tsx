"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  toEmail: string;
};

export function ContactForm({ toEmail }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      name ? `Name: ${name}` : null,
      email ? `Email: ${email}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(
      subject || "ISRC-STM 2026 enquiry",
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("ready");
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
      <div className="contact-form-row">
        <label htmlFor="contact-name">
          Name
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </label>
        <label htmlFor="contact-email">
          Email
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>
      </div>
      <label htmlFor="contact-subject">
        Subject
        <input id="contact-subject" name="subject" type="text" required />
      </label>
      <label htmlFor="contact-message">
        Message
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
        />
      </label>
      <button type="submit" className="cta">
        Send message
      </button>
      {status === "ready" ? (
        <p className="contact-form-note">
          Your email app should open so you can send the message to {toEmail}.
        </p>
      ) : null}
    </form>
  );
}
