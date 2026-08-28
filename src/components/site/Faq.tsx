import { Plus } from "lucide-react";

export const FAQ_ITEMS = [
  {
    q: "Do you provide open-well digging using machinery?",
    a: "Yes. PKM provides machinery-based open-well digging services based on site requirements.",
  },
  {
    q: "Do you provide well deepening?",
    a: "Yes. Well-deepening work can be discussed based on the existing well and site conditions.",
  },
  {
    q: "Do you provide machinery with an operator?",
    a: "Yes. Machinery work is supported by experienced machine operators.",
  },
  {
    q: "Do you provide site visits?",
    a: "Customers can contact PKM to discuss their location and work requirement.",
  },
  {
    q: "Which areas do you serve?",
    a: "PKM is based in West Garden, Sankagiri, Salem District and accepts suitable work across Tamil Nadu.",
  },
  {
    q: "How can I get a quotation?",
    a: "Call or WhatsApp 9952627754 with your location and work requirement.",
  },
];

export function Faq() {
  return (
    <div className="divide-y divide-border overflow-hidden rounded-sm border border-border bg-card">
      {FAQ_ITEMS.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-secondary/60 md:px-7">
            <h3 className="text-base font-semibold normal-case tracking-normal md:text-lg">
              {item.q}
            </h3>
            <Plus
              className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="px-5 pb-6 text-sm leading-relaxed text-muted-foreground md:px-7 md:text-base">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
