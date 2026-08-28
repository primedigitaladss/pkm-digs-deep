import { MapPin, Phone } from "lucide-react";
import { ADDRESS, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

const quickLinks = NAV_LINKS.filter((l) => l.label !== "Why Us");

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface pb-28 pt-16 md:pb-16">
      <div className="shell grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="hazard-stripe h-10 w-2.5 rounded-sm" aria-hidden="true" />
            <span className="font-display text-xl text-primary">PKM OPEN WELL CONTRACTOR</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Professional Open Well Digging &amp; Machinery Services
          </p>
          <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            {ADDRESS}
          </p>
          <a
            href={PHONE_TEL}
            className="mt-3 inline-flex items-center gap-2 font-mono text-lg font-bold tracking-wide text-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Enquiries
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={PHONE_TEL} className="transition-colors hover:text-primary">
                Call {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                WhatsApp +919952627754
              </a>
            </li>
            <li>Open well digging &amp; deepening</li>
            <li>Earth excavation across Tamil Nadu</li>
          </ul>
        </div>
      </div>

      <div className="shell mt-14 border-t border-border pt-6">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 PKM Open Well Contractor. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
