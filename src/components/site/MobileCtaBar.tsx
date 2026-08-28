import { MessageCircle, Phone } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
      <a
        href={PHONE_TEL}
        className="flex min-h-16 items-center justify-center gap-2 bg-primary font-mono text-base font-bold uppercase tracking-[0.14em] text-primary-foreground"
        aria-label="Call PKM Open Well Contractor now"
      >
        <Phone className="size-5" aria-hidden="true" />
        Call Now
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-16 items-center justify-center gap-2 bg-surface font-mono text-base font-bold uppercase tracking-[0.14em] text-primary"
        aria-label="Message PKM Open Well Contractor on WhatsApp"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
