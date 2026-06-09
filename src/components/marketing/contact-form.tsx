"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-5 rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur-xl"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Input required placeholder="Full name" className="h-12 rounded-2xl border-white/12 bg-slate-950/60 text-white placeholder:text-slate-500" />
        <Input required type="email" placeholder="Work email" className="h-12 rounded-2xl border-white/12 bg-slate-950/60 text-white placeholder:text-slate-500" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Input placeholder="Company" className="h-12 rounded-2xl border-white/12 bg-slate-950/60 text-white placeholder:text-slate-500" />
        <Input placeholder="Estimated team size" className="h-12 rounded-2xl border-white/12 bg-slate-950/60 text-white placeholder:text-slate-500" />
      </div>
      <Textarea required placeholder="Tell us about your use case, requirements, or timeline." className="min-h-36 rounded-3xl border-white/12 bg-slate-950/60 text-white placeholder:text-slate-500" />
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm leading-6 text-slate-400">This form is wired for frontend presentation and can be connected to your CRM, email workflow, or Paddle buyer process next.</p>
        <Button type="submit" className="rounded-full bg-cyan-300 px-5 text-slate-950 hover:bg-cyan-200">
          Send inquiry
          <Send className="h-4 w-4" />
        </Button>
      </div>
      {submitted ? (
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
          Your inquiry has been staged on the frontend. The next step is connecting this form to your preferred backend or CRM endpoint.
        </div>
      ) : null}
    </form>
  );
}
