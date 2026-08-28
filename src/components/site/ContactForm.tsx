import { useState } from "react";
import { Send } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const fieldClass =
  "w-full rounded-sm border border-input bg-background/60 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";
const labelClass = "mb-2 block font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = [
      `Enquiry for PKM Open Well Contractor`,
      `Name: ${data.get("name")}`,
      `Mobile: ${data.get("mobile")}`,
      `Location: ${data.get("location")}`,
      `Work Required: ${data.get("work")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="mobile">
            Mobile Number
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            inputMode="tel"
            className={fieldClass}
            placeholder="10-digit mobile number"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="location">
            Location
          </label>
          <input
            id="location"
            name="location"
            required
            className={fieldClass}
            placeholder="Village / Town, District"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="work">
            Work Required
          </label>
          <select id="work" name="work" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select work type
            </option>
            <option>Open Well Digging</option>
            <option>Well Deepening</option>
            <option>Earth Excavation</option>
            <option>Well Desilting &amp; Cleaning</option>
            <option>Site Excavation</option>
            <option>Machinery With Operator</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={fieldClass}
          placeholder="Tell us about your site and requirement"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-primary px-8 py-4 font-mono text-base font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-hard transition-all hover:-translate-y-0.5 hover:bg-primary/90"
      >
        <Send className="size-4" aria-hidden="true" />
        Send Enquiry
      </button>

      <p aria-live="polite" className="min-h-5 text-sm text-muted-foreground">
        {sent
          ? "Thanks! Your enquiry opened in WhatsApp — press send there, or call 9952627754 directly."
          : "Your enquiry is sent to PKM through WhatsApp."}
      </p>
    </form>
  );
}
