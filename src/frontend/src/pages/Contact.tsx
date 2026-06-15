import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import { Clock, Mail, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import { useSubmitContactMessage } from "../hooks/useBackend";

interface ContactForm {
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof ContactForm, string>>;

const CATEGORIES = [
  { value: "order", label: "Order Issue" },
  { value: "return", label: "Returns & Exchanges" },
  { value: "product", label: "Product Question" },
  { value: "other", label: "General Inquiry" },
];

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "support@luxestep.com",
    detail: "We respond within 24 hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (800) 555-0190",
    detail: "Monday–Friday, 9am–6pm ET",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri: 9am–6pm ET",
    detail: "Sat: 10am–4pm ET",
  },
];

const SOCIAL_LINKS = [
  { name: "Instagram", href: "#", handle: "@luxestep" },
  { name: "Pinterest", href: "#", handle: "@luxestep" },
  { name: "TikTok", href: "#", handle: "@luxestep" },
];

function validate(form: ContactForm): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.category) errors.category = "Please select a category.";
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }
  return errors;
}

const EMPTY_FORM: ContactForm = {
  name: "",
  email: "",
  category: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const submitMessage = useSubmitContactMessage();

  const setField = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const blurValidate = (field: keyof ContactForm) => {
    const errs = validate(form);
    if (errs[field]) setErrors((p) => ({ ...p, [field]: errs[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    try {
      const res = await submitMessage.mutateAsync({
        name: form.name,
        email: form.email,
        category: form.category,
        message: `Subject: ${form.subject}\n\n${form.message}`,
      });
      if (res && "err" in res && res.err) {
        toast.error("Failed to send message. Please try again.");
      } else {
        setSubmitted(true);
        toast.success("Message sent! We'll be in touch within 24 hours.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleChatClick = () => {
    toast.info(
      "Chat support coming soon. In the meantime, email us at support@luxestep.com",
    );
  };

  return (
    <Layout>
      {/* Page header */}
      <section className="bg-muted/40 border-b border-border py-14 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Support
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto">
            Have a question or need help? Our team is happy to assist.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto max-w-5xl px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div
                className="bg-card border border-primary/30 rounded-sm p-10 text-center"
                data-ocid="contact-success"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-semibold">
                  Message Received
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Thanks, {form.name}! We've received your message and will
                  reply to <strong>{form.email}</strong> within 24 hours.
                </p>
                <Button
                  className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(EMPTY_FORM);
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
                data-ocid="contact-form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-name"
                      className="text-xs uppercase tracking-widest font-semibold"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-name"
                      value={form.name}
                      onChange={(e) => setField("name", e.target.value)}
                      onBlur={() => blurValidate("name")}
                      placeholder="Your full name"
                      className={
                        errors.name
                          ? "border-destructive focus-visible:ring-destructive"
                          : ""
                      }
                      data-ocid="contact-name"
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-email"
                      className="text-xs uppercase tracking-widest font-semibold"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setField("email", e.target.value)}
                      onBlur={() => blurValidate("email")}
                      placeholder="you@example.com"
                      className={
                        errors.email
                          ? "border-destructive focus-visible:ring-destructive"
                          : ""
                      }
                      data-ocid="contact-email"
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-widest font-semibold">
                    Category <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={form.category}
                    onValueChange={(v) => setField("category", v)}
                  >
                    <SelectTrigger
                      className={errors.category ? "border-destructive" : ""}
                      data-ocid="contact-category"
                    >
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.category && (
                    <p className="text-xs text-destructive">
                      {errors.category}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label
                    htmlFor="contact-subject"
                    className="text-xs uppercase tracking-widest font-semibold"
                  >
                    Subject <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contact-subject"
                    value={form.subject}
                    onChange={(e) => setField("subject", e.target.value)}
                    onBlur={() => blurValidate("subject")}
                    placeholder="Brief description of your inquiry"
                    className={
                      errors.subject
                        ? "border-destructive focus-visible:ring-destructive"
                        : ""
                    }
                    data-ocid="contact-subject"
                  />
                  {errors.subject && (
                    <p className="text-xs text-destructive">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="contact-message"
                    className="text-xs uppercase tracking-widest font-semibold"
                  >
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                    onBlur={() => blurValidate("message")}
                    placeholder="Please describe your issue or question in detail (minimum 20 characters)..."
                    rows={6}
                    className={
                      errors.message
                        ? "border-destructive focus-visible:ring-destructive resize-none"
                        : "resize-none"
                    }
                    data-ocid="contact-message"
                  />
                  <div className="flex justify-between">
                    {errors.message ? (
                      <p className="text-xs text-destructive">
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <p className="text-xs text-muted-foreground ml-auto">
                      {form.message.length} chars
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={submitMessage.isPending}
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-11"
                  data-ocid="contact-submit"
                >
                  {submitMessage.isPending ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8" data-ocid="contact-sidebar">
            <div>
              <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-5 pb-3 border-b border-border">
                Contact Information
              </h2>
              <div className="space-y-5">
                {CONTACT_INFO.map((info) => (
                  <div key={info.label} className="flex gap-3">
                    <div className="h-9 w-9 rounded-sm bg-muted flex items-center justify-center shrink-0">
                      <info.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        {info.label}
                      </p>
                      <p className="text-sm font-medium mt-0.5">{info.value}</p>
                      <p className="text-xs text-muted-foreground">
                        {info.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-5 pb-3 border-b border-border">
                Follow Us
              </h2>
              <div className="space-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors group"
                  >
                    <span className="text-muted-foreground group-hover:text-primary transition-colors font-medium w-20">
                      {link.name}
                    </span>
                    <span className="text-muted-foreground">{link.handle}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-muted/40 border border-border rounded-sm p-5">
              <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-2">
                Quick Help
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For order tracking, visit{" "}
                <Link
                  to="/orders"
                  className="text-primary underline underline-offset-2 hover:no-underline"
                >
                  My Orders
                </Link>
                . For returns, see our{" "}
                <Link
                  to="/returns"
                  className="text-primary underline underline-offset-2 hover:no-underline"
                >
                  Returns Policy
                </Link>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Floating chat button */}
      <button
        type="button"
        onClick={handleChatClick}
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-smooth z-50 font-medium text-sm"
        aria-label="Chat with us"
        data-ocid="chat-trigger"
      >
        <MessageSquare className="h-4 w-4" />
        Chat with us
      </button>
    </Layout>
  );
}
