"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { ctaClasses } from "@/components/CTAButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const enquirySchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a contact number."),
  eventType: z.enum([
    "Catering",
    "Wedding",
    "Birthday",
    "Corporate Function",
    "Event Planning",
    "Other",
  ]),
  eventDate: z.string().optional(),
  guests: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z
      .string()
      .optional()
      .refine((value) => !value || Number(value) > 0, "Please enter a valid guest count."),
  ),
  location: z.string().optional(),
  message: z.string().min(10, "Please tell us a little more about your event."),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

const eventTypes: EnquiryFormValues["eventType"][] = [
  "Catering",
  "Wedding",
  "Birthday",
  "Corporate Function",
  "Event Planning",
  "Other",
];

export function ContactForm() {
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      eventType: "Catering",
    },
  });

  const onSubmit = async (values: EnquiryFormValues) => {
    setSubmitState("submitting");
    try {
      await new Promise((resolve) => window.setTimeout(resolve, 700));
      console.info("Enquiry captured", values);
      setSubmitState("success");
      reset({ eventType: "Catering" });
    } catch {
      setSubmitState("error");
    }
  };

  const fieldClass =
    "mt-2 h-11 rounded-xl border-border bg-white/70 text-foreground shadow-none placeholder:text-muted-foreground focus-visible:ring-gold";
  const textAreaClass =
    "mt-2 min-h-[140px] rounded-xl border-border bg-white/70 text-foreground shadow-none placeholder:text-muted-foreground focus-visible:ring-gold";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" {...register("fullName")} className={fieldClass} />
          {errors.fullName ? (
            <p className="mt-2 text-sm text-destructive">{errors.fullName.message}</p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" {...register("email")} className={fieldClass} />
          {errors.email ? (
            <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" {...register("phone")} className={fieldClass} />
          {errors.phone ? (
            <p className="mt-2 text-sm text-destructive">{errors.phone.message}</p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="eventType">Type of Event</Label>
          <select
            id="eventType"
            {...register("eventType")}
            className={cn(fieldClass, "px-3")}
          >
            {eventTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="eventDate">Event Date</Label>
          <Input id="eventDate" type="date" {...register("eventDate")} className={fieldClass} />
        </div>

        <div>
          <Label htmlFor="guests">Number of Guests</Label>
          <Input
            id="guests"
            type="number"
            min="1"
            inputMode="numeric"
            {...register("guests")}
            className={fieldClass}
          />
          {errors.guests ? (
            <p className="mt-2 text-sm text-destructive">{errors.guests.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <Label htmlFor="location">Event Location</Label>
        <Input
          id="location"
          {...register("location")}
          className={fieldClass}
          placeholder="Venue, suburb or full address"
        />
      </div>

      <div>
        <Label htmlFor="message">Tell Us About Your Event</Label>
        <Textarea
          id="message"
          {...register("message")}
          className={textAreaClass}
          placeholder="Share the style of event, catering requirements, and anything else you'd like us to know."
        />
        {errors.message ? (
          <p className="mt-2 text-sm text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={submitState === "submitting"} className={ctaClasses("gold")}>
          {submitState === "submitting" ? "Sending..." : "Send Enquiry"}
        </button>
        <p className="text-sm text-muted-foreground">
          We'll use your details only to respond to this enquiry.
        </p>
      </div>

      <div aria-live="polite" className="space-y-3">
        {submitState === "success" ? (
          <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              Thanks for reaching out. We've received your enquiry and will get back to you
              as soon as possible.
            </span>
          </div>
        ) : null}
        {submitState === "error" ? (
          <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              Something went wrong while sending this enquiry. Please try again or contact
              {` ${site.phoneDisplay}`} directly.
            </span>
          </div>
        ) : null}
      </div>
    </form>
  );
}
