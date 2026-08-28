import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { WhatsAppButton } from "./Actions";

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="PKM Open Well Contractor home">
      <span className="hazard-stripe h-11 w-2.5 rounded-sm" aria-hidden="true" />
      <span className="leading-none">
        <span className="block font-display text-2xl tracking-tight text-primary">PKM</span>
        <span className="mt-1 block font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Open Well Contractor
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "bg-gradient-to-b from-background/90 to-transparent",
      )}
    >
      <div className="shell flex h-[76px] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main navigation" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.12em] text-foreground transition-colors hover:text-primary sm:flex xl:hidden"
          >
            <Phone className="size-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <WhatsAppButton size="sm" className="hidden md:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-primary hover:text-primary xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-border bg-background xl:hidden"
        >
          <ul className="shell grid gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-3 py-3 font-mono text-base font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
