"use client";

import { useState } from "react";
import { Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";

import Reveal from "../Reveal";
import LocalTime from "../LocalTime";
import { SocialIcon } from "../Icons";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { profile, services, socials } from "@/lib/data";
import { cn } from "@/lib/utils";

const serviceOptions = [...services.map((s) => s.title), "Something else"];

const initialForm = { name: "", email: "", phone: "", service: "", message: "" };

const Field = ({ label, htmlFor, optional, children }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={htmlFor} className="text-sm font-medium">
      {label}
      {optional && <span className="ml-1 font-normal text-subtle">(optional)</span>}
    </label>
    {children}
  </div>
);

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
      aria-label={copied ? "Email copied" : "Copy email address"}
    >
      {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </button>
  );
};

const ContactRow = ({ icon: Icon, label, value, href, action }) => (
  <li className="relative flex items-center gap-4 rounded-2xl border border-line bg-background/40 p-4 transition-colors hover:border-accent/30">
    <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent min-[400px]:grid">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
    <div className="min-w-0 flex-1">
      <p className="text-xs uppercase tracking-widest text-subtle">{label}</p>
      {href ? (
        <a
          href={href}
          className="block font-medium [overflow-wrap:anywhere] after:absolute after:inset-0 hover:text-accent"
        >
          {value}
        </a>
      ) : (
        <p className="font-medium [overflow-wrap:anywhere]">{value}</p>
      )}
    </div>
    {action}
  </li>
);

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sent | error

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }
    const subject = encodeURIComponent(`New project inquiry from ${form.name.trim()}`);
    const details = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.service && `Service: ${form.service}`,
    ]
      .filter(Boolean)
      .join("\n");
    const body = encodeURIComponent(`${details}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    setForm(initialForm);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 md:py-32">
      <div className="container">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-line bg-surface p-6 shadow-card sm:p-10 lg:p-14">
            <div
              className="absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl dark:opacity-40"
              style={{ background: "radial-gradient(closest-side, rgb(var(--glow) / 0.35), transparent)" }}
              aria-hidden="true"
            />
            <div className="bg-grid absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_top_left,#000_10%,transparent_60%)]" aria-hidden="true" />

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
              {/* intro + details */}
              <div className="flex flex-col lg:col-span-5">
                <span className="eyebrow">
                  <span className="h-px w-6 bg-accent" aria-hidden="true" />
                  Contact
                </span>
                <h2
                  id="contact-title"
                  className="text-balance mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl"
                >
                  Have a project in mind? Let&apos;s <em className="accent-serif">talk.</em>
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-muted">
                  Looking for a developer who cares about craft? Tell me about your idea and let&apos;s build
                  something great together.
                </p>

                <ul className="mt-10 flex flex-col gap-3">
                  <ContactRow
                    icon={Mail}
                    label="Email"
                    value={profile.email}
                    href={`mailto:${profile.email}`}
                    action={<CopyEmail />}
                  />
                  <ContactRow icon={Phone} label="Phone" value={profile.phone} href={profile.phoneHref} />
                  <ContactRow
                    icon={MapPin}
                    label="Location"
                    value={
                      <>
                        {profile.location} · <LocalTime />
                      </>
                    }
                  />
                </ul>

                <div className="mt-8 flex items-center gap-2 lg:mt-auto lg:pt-10">
                  {socials.map((s) => (
                    <a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                    >
                      <SocialIcon name={s.id} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* form */}
              <form
                onSubmit={submit}
                noValidate
                className="flex flex-col gap-5 rounded-3xl border border-line bg-background/50 p-5 backdrop-blur sm:p-8 lg:col-span-7"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" htmlFor="name">
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={update}
                      required
                      aria-invalid={status === "error" && !form.name.trim() ? true : undefined}
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={update}
                      required
                      aria-invalid={status === "error" && !form.email.trim() ? true : undefined}
                    />
                  </Field>
                </div>
                <Field label="Phone" htmlFor="phone" optional>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+234 ..."
                    value={form.phone}
                    onChange={update}
                  />
                </Field>

                <fieldset>
                  <legend className="mb-3 text-sm font-medium">
                    What can I help with? <span className="font-normal text-subtle">(optional)</span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((option) => {
                      const checked = form.service === option;
                      return (
                        <label
                          key={option}
                          className={cn(
                            "cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent",
                            checked
                              ? "border-foreground bg-foreground text-background"
                              : "border-line text-muted hover:border-accent/40 hover:text-foreground"
                          )}
                        >
                          <input
                            type="radio"
                            name="service"
                            value={option}
                            checked={checked}
                            onChange={update}
                            className="sr-only"
                          />
                          {option}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <Field label="Project details" htmlFor="message">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, timeline and goals…"
                    value={form.message}
                    onChange={update}
                    required
                    aria-invalid={status === "error" && !form.message.trim() ? true : undefined}
                  />
                </Field>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p aria-live="polite" className="order-2 text-sm sm:order-1">
                    {status === "sent" && (
                      <span className="text-accent">Opening your email app to send the message…</span>
                    )}
                    {status === "error" && (
                      <span className="text-red-600 dark:text-red-400">
                        Please add your name, email and a short message.
                      </span>
                    )}
                  </p>
                  <button
                    type="submit"
                    className="group order-1 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-semibold text-background transition-transform hover:-translate-y-0.5 sm:order-2"
                  >
                    Send message
                    <Send
                      className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
