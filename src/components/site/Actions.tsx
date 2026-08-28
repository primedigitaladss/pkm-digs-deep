import { MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-6 py-3.5 text-base",
  lg: "px-8 py-4.5 text-lg",
};

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-sm font-mono font-bold uppercase tracking-[0.12em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function CallButton({
  size = "md",
  label,
  className,
}: {
  size?: Size;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={PHONE_TEL}
      aria-label={`Call PKM Open Well Contractor on ${PHONE_DISPLAY}`}
      className={cn(
        base,
        sizes[size],
        "bg-primary text-primary-foreground shadow-hard hover:-translate-y-0.5 hover:bg-primary/90 active:translate-y-0",
        className,
      )}
    >
      <Phone className="size-[1.1em] shrink-0" aria-hidden="true" />
      {label ?? "Call Now"}
    </a>
  );
}

export function WhatsAppButton({
  size = "md",
  label,
  variant = "outline",
  className,
}: {
  size?: Size;
  label?: string;
  variant?: "outline" | "solid";
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message PKM Open Well Contractor on WhatsApp"
      className={cn(
        base,
        sizes[size],
        variant === "solid"
          ? "bg-foreground text-background hover:bg-foreground/90"
          : "border-2 border-primary/70 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        "hover:-translate-y-0.5 active:translate-y-0",
        className,
      )}
    >
      <MessageCircle className="size-[1.1em] shrink-0" aria-hidden="true" />
      {label ?? "WhatsApp Us"}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <As className="text-3xl leading-[1.05] sm:text-4xl md:text-5xl">{title}</As>
      {subtitle ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
