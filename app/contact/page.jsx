"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import{
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info =[
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 8167256424",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "jimohabdulmajeed9@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "No 10, Onitsha Crescent Off Gimbiya Street, Area 11 Garki, Abuja",
  },
]

const CONTACT_EMAIL = "jimohabdulmajeed9@gmail.com";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceChange = (value) => {
    setForm((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(
      `New project inquiry from ${form.firstName} ${form.lastName}`.trim()
    );
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
    setForm(initialForm);
  };

  return(
     <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1, 
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, 
    }}
    className="py-6"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[70px]">
        {/* form */}
        <div className="xl:w-[54%] order-2 xl:order-none">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-card rounded-2xl border border-border">
            <h3 className="text-4xl text-accent">Let's work together</h3>
            <p className="text-white/60">Looking for a skilled and creative developer?
              Let’s collaborate to bring your ideas to life! Get in touch,
              and let's build something amazing together.
            </p>
            {/* input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="firstName"
                placeholder="Firstname"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Lastname"
                value={form.lastName}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            {/* select */}
            <Select value={form.service} onValueChange={handleServiceChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="w-full">
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="Web Development">Web Development</SelectItem>
                  <SelectItem value="UI/UX">UI/UX</SelectItem>
                  <SelectItem value="Graphics Design">Graphics Design</SelectItem>
                </SelectGroup>

              </SelectContent>
            </Select>
            {/* textarea */}
            <Textarea
            className="h-[200px]"
            placeholder="Type your message here..."
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            />
            {/* btn + status */}
            <div className="flex flex-col gap-3">
              <Button size="md" className="max-w-40" type="submit">
                Send Message
              </Button>
              {status === "sent" && (
                <p className="text-accent text-sm">Opening your email client to send this message…</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">Please fill in your name, email, and message.</p>
              )}
            </div>
          </form>
        </div>
        {/* info */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
          {info.map((item, index) => {
            return(
              <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-card border border-border text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                </div>
              </li>
            );
          })}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>
  );
};

export default Contact;