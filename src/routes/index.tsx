import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Droplets,
  Hammer,
  HardHat,
  MapPin,
  MessageSquare,
  Mountain,
  Phone,
  Quote,
  Shovel,
  Star,
  Truck,
  Users,
  Wrench,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";
import { ContactForm } from "@/components/site/ContactForm";
import { Faq, FAQ_ITEMS } from "@/components/site/Faq";
import { CallButton, SectionHeading, WhatsAppButton } from "@/components/site/Actions";
import {
  ADDRESS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_AREAS,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/site";

import heroImage from "@/assets/hero-hitachi-open-well-water.jpg";
import aboutImage from "@/assets/about-machinery-site.jpg";
import machineryImage from "@/assets/machinery-dark.jpg";
import workDigging from "@/assets/work-open-well-digging.jpg";
import workDeepening from "@/assets/work-well-deepening.jpg";
import workAgri from "@/assets/work-agri-excavation.jpg";
import workSoil from "@/assets/work-soil-removal.jpg";
import workCompleted from "@/assets/work-completed-well.jpg";
import workOperator from "@/assets/work-operator.jpg";

const TITLE =
  "PKM Open Well Contractor | Open Well Digging & Excavation Services Across Tamil Nadu";
const DESCRIPTION =
  "PKM Open Well Contractor provides professional open-well digging, well deepening, excavation and machinery services across Tamil Nadu. Based in Sankagiri, Salem District. Call 9952627754.";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://pkmopenwellcontractor.com/#business",
  name: "PKM Open Well Contractor",
  description: DESCRIPTION,
  telephone: "+919952627754",
  url: "/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "West Garden, Sankagiri",
    addressLocality: "Sankagiri",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: { "@type": "State", name: "Tamil Nadu" },
  knowsAbout: [
    "Open well digging",
    "Open well deepening",
    "Earth excavation",
    "Well desilting",
    "JCB and excavator machinery services",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "open well contractor Tamil Nadu, open well digging contractor Tamil Nadu, open well excavation, well deepening contractor, JCB open well digging, excavator open well digging, open well contractor Salem, open well digging Sankagiri",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "PKM Open Well Contractor - Open Well Digging & Earth Excavation Across Tamil Nadu",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "/og-image.jpg" },
      {
        name: "twitter:image:alt",
        content: "PKM Open Well Contractor - Open Well Digging & Earth Excavation Across Tamil Nadu",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: HomePage,
});

const quickServices = [
  { icon: Shovel, label: "Open Well Digging" },
  { icon: Droplets, label: "Well Deepening" },
  { icon: Mountain, label: "Earth Excavation" },
  { icon: HardHat, label: "Machinery With Operator" },
];

const services = [
  {
    no: "01",
    icon: Shovel,
    title: "Open Well Digging",
    text: "Professional machine-assisted digging for new open wells, subject to site conditions.",
    image: workDigging,
    alt: "Excavator digging a deep new open well at a farm site in Tamil Nadu",
  },
  {
    no: "02",
    icon: Droplets,
    title: "Well Deepening",
    text: "Machinery-based deepening work for suitable existing open wells.",
    image: workDeepening,
    alt: "Excavator bucket deepening an existing open well with water at the bottom",
  },
  {
    no: "03",
    icon: Mountain,
    title: "Earth Excavation",
    text: "Heavy machinery excavation and earth-removal services.",
    image: workAgri,
    alt: "Yellow excavator carrying out earth excavation work on agricultural land",
  },
  {
    no: "04",
    icon: Wrench,
    title: "Well Desilting & Cleaning",
    text: "Removal of accumulated soil, mud and debris from suitable existing wells.",
    image: workCompleted,
    alt: "Cleaned open well with stone-lined walls on farmland in Tamil Nadu",
  },
  {
    no: "05",
    icon: Truck,
    title: "Site Excavation",
    text: "Suitable digging and earthwork services for agricultural, residential and land-related requirements.",
    image: workSoil,
    alt: "Tipper truck loaded with excavated soil by an excavator at a site in Tamil Nadu",
  },
  {
    no: "06",
    icon: HardHat,
    title: "Machinery With Operator",
    text: "Heavy machinery services supported by experienced machine operators.",
    image: workOperator,
    alt: "Experienced machine operator working the controls inside a JCB excavator cabin",
  },
];

const whyUs = [
  {
    icon: HardHat,
    title: "Experienced Operators",
    text: "Skilled operators with practical excavation experience.",
  },
  {
    icon: Hammer,
    title: "Machinery-Based Work",
    text: "Suitable heavy machinery for demanding digging requirements.",
  },
  {
    icon: CheckCircle2,
    title: "Reliable Service",
    text: "Professional communication and dependable execution.",
  },
  {
    icon: Clock3,
    title: "Efficient Work",
    text: "Focused on completing suitable work efficiently.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    text: "Discuss the work requirement before starting.",
  },
  {
    icon: MapPin,
    title: "Tamil Nadu Service",
    text: "Based in Sankagiri, Salem District and accepting suitable work across Tamil Nadu.",
  },
];

const steps = [
  { no: "01", title: "Contact Us", text: "Call or WhatsApp us with your requirement." },
  { no: "02", title: "Discuss Your Site", text: "Share your location and type of work required." },
  { no: "03", title: "Plan the Work", text: "Understand the work requirement and machinery needed." },
  { no: "04", title: "Machinery at Work", text: "Our operator and team carry out the agreed work." },
];

const gallery = [
  { image: workDigging, alt: "JCB excavator digging open well in Tamil Nadu" },
  { image: workDeepening, alt: "Open well deepening work using heavy machinery" },
  { image: workAgri, alt: "Excavator working at an agricultural site excavation in Tamil Nadu" },
  { image: workSoil, alt: "Soil excavation and removal by machinery at a rural work site" },
  { image: workOperator, alt: "Experienced machine operator handling excavator controls" },
  { image: workCompleted, alt: "Completed open well with water at a farm in Tamil Nadu" },
];

const testimonials = [
  {
    name: "Customer Name",
    place: "Salem District",
    text: "The machinery work was handled properly and the operator knew exactly how to dig at our site. Communication was clear from the first call.",
  },
  {
    name: "Customer Name",
    place: "Erode District",
    text: "Our old open well was deepened as discussed. The team explained the work before starting and finished it without delays.",
  },
  {
    name: "Customer Name",
    place: "Namakkal District",
    text: "Reliable service for our farm excavation. Machinery arrived as planned and the work was completed efficiently.",
  },
];

function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
          <img
            src={heroImage}
            alt="Hitachi excavator working at a wide open well filled with water at an agricultural site in Tamil Nadu"
            width={1920}
            height={1280}
            className="absolute inset-0 size-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
            aria-hidden="true"
          />

          <div className="shell relative z-10 pb-16 pt-32 md:pb-24">
            <div className="max-w-3xl rise">
              <p className="eyebrow">PKM Open Well Contractor</p>
              <h1 className="mt-5 text-[2.6rem] leading-[0.95] sm:text-6xl lg:text-7xl">
                Open Well Digging &amp; Machinery Services Across Tamil Nadu
              </h1>
              <p className="mt-4 font-display text-lg text-primary sm:text-2xl">
                Open well digging, powered by machinery.
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Professional open-well digging, well deepening and excavation services with powerful
                machinery and experienced operators.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <CallButton size="lg" />
                <WhatsAppButton size="lg" />
              </div>

              <a
                href={PHONE_TEL}
                className="mt-6 inline-flex items-center gap-3 font-mono text-2xl font-bold tracking-wide text-foreground transition-colors hover:text-primary sm:text-3xl"
              >
                <Phone className="size-6 text-primary" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>

              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                {["Experienced Operators", "Powerful Machinery", "Reliable Service"].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-foreground/85"
                  >
                    <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* QUICK SERVICE BAR */}
        <section aria-label="Service highlights" className="border-y border-border bg-surface">
          <div className="shell grid grid-cols-2 gap-px lg:grid-cols-4">
            {quickServices.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 px-4 py-8 text-center md:flex-row md:gap-4 md:text-left"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-primary/12 text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h2 className="font-mono text-sm font-bold uppercase tracking-[0.14em] text-foreground">
                  {label}
                </h2>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-pad">
          <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="About PKM"
                title="Reliable Open Well Digging Services Across Tamil Nadu"
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  PKM Open Well Contractor provides professional machinery-based open-well digging,
                  well deepening and excavation services from our base in West Garden, Sankagiri,
                  Salem District, Tamil Nadu.
                </p>
                <p>
                  With suitable heavy machinery and experienced operators, we help customers with
                  open-well and excavation requirements based on site conditions and project needs.
                </p>
              </div>
              <p className="mt-8 border-l-4 border-primary bg-surface px-5 py-4 font-display text-lg text-foreground sm:text-xl">
                The right machinery. Experienced operation. Reliable work.
              </p>
              <div className="mt-8">
                <CallButton label="Talk to PKM" />
              </div>
            </div>

            <div className="relative">
              <div
                className="hazard-stripe absolute -left-3 top-6 h-24 w-2.5 rounded-sm"
                aria-hidden="true"
              />
              <img
                src={aboutImage}
                alt="Heavy JCB machinery excavating an open well site with an operator in the cabin"
                width={1440}
                height={1088}
                loading="lazy"
                className="w-full rounded-sm border border-border object-cover shadow-hard"
              />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section-pad border-t border-border bg-surface">
          <div className="shell">
            <SectionHeading
              eyebrow="Services"
              title="Our Open Well & Excavation Services"
              subtitle="Machinery-based solutions for open-well and earth excavation requirements."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ no, icon: Icon, title, text, image, alt }) => (
                <article
                  key={no}
                  className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={alt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-sm bg-primary px-2.5 py-1 font-mono text-xs font-bold tracking-[0.2em] text-primary-foreground">
                      {no}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="flex size-11 items-center justify-center rounded-sm bg-primary/12 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-xl">{title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.14em] text-primary transition-all hover:gap-3"
                    >
                      Enquire Now
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MACHINERY */}
        <section className="relative overflow-hidden border-y border-border bg-background">
          <div className="surface-grid absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="shell section-pad relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Machinery"
                title="Powerful Machinery. Experienced Operators."
                subtitle="The right equipment and skilled operation help make excavation work more efficient and dependable."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Suitable heavy machinery",
                  "Experienced operators",
                  "Efficient excavation",
                  "Professional site work",
                  "Reliable service",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-base text-foreground/90">
                    <CheckCircle2 className="size-5 shrink-0 text-primary" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-3">
                <CallButton label="Get a Quote" />
                <WhatsAppButton />
              </div>
            </div>

            <img
              src={machineryImage}
              alt="Heavy tracked excavator with bucket ready for open well digging work"
              width={1600}
              height={1008}
              loading="lazy"
              className="w-full rounded-sm border border-border object-cover shadow-hard"
            />
          </div>
        </section>

        {/* WHY US */}
        <section id="why-us" className="section-pad bg-surface">
          <div className="shell">
            <SectionHeading
              eyebrow="Why PKM"
              title="Why Choose PKM Open Well Contractor?"
              align="center"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyUs.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-sm border border-border bg-card p-7 transition-colors hover:border-primary/60"
                >
                  <span className="flex size-12 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section-pad border-y border-border">
          <div className="shell">
            <SectionHeading eyebrow="Process" title="How It Works" align="center" />
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ no, title, text }) => (
                <li key={no} className="relative rounded-sm border border-border bg-card p-7">
                  <span className="font-display text-4xl text-primary/30">{no}</span>
                  <h3 className="mt-3 text-lg">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <CallButton size="lg" label="Start Your Enquiry" />
              <WhatsAppButton size="lg" />
            </div>
          </div>
        </section>

        {/* OUR WORK */}
        <section id="our-work" className="section-pad bg-surface">
          <div className="shell">
            <SectionHeading
              eyebrow="Our Work"
              title="Machines at Work"
              subtitle="Real machinery. Real excavation work. Professional service."
            />
            <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[260px] lg:grid-cols-3">
              {gallery.map((item) => (
                <figure
                  key={item.alt}
                  className={`group relative overflow-hidden rounded-sm border border-border ${
                    item.span ? "col-span-2 row-span-2" : ""
                  }`}

                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-4 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                    {item.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section id="service-areas" className="section-pad border-t border-border">
          <div className="shell">
            <SectionHeading
              eyebrow="Service Areas"
              title="Open Well Digging Services Across Tamil Nadu"
              subtitle="PKM Open Well Contractor is based in West Garden, Sankagiri, Salem District, Tamil Nadu. We accept suitable open-well digging, well deepening and machinery excavation requirements across Tamil Nadu."
            />
            <ul className="mt-10 flex flex-wrap gap-2.5">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-sm border border-border bg-card px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-foreground/85"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              And other suitable locations across Tamil Nadu.
            </p>
            <div className="mt-9">
              <WhatsAppButton size="lg" label="Check Availability for Your Location" />
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="section-pad border-t border-border bg-surface">
          <div className="shell grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Location"
                title="Based in Sankagiri, Serving Tamil Nadu"
              />
              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-3 text-base text-foreground/90">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  {ADDRESS}
                </li>
                <li>
                  <a
                    href={PHONE_TEL}
                    className="flex items-center gap-3 font-mono text-xl font-bold text-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="size-5 text-primary" aria-hidden="true" />
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-base text-foreground/90">
                  <MessageSquare className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  WhatsApp Available
                </li>
              </ul>
              <div className="mt-9 flex flex-wrap gap-3">
                <CallButton />
                <WhatsAppButton />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-sm border border-border bg-card">
              <div className="surface-grid aspect-[4/3] w-full opacity-60" aria-hidden="true" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MapPin className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl">West Garden, Sankagiri</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Salem District, Tamil Nadu — map location can be connected here.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=West+Garden+Sankagiri+Salem+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.14em] text-primary hover:gap-3"
                >
                  Open in Maps
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-pad border-t border-border">
          <div className="shell">
            <SectionHeading eyebrow="Testimonials" title="What Our Customers Say" align="center" />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <blockquote
                  key={i}
                  className="flex flex-col rounded-sm border border-border bg-card p-7"
                >
                  <Quote className="size-7 text-primary" aria-hidden="true" />
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    “{t.text}”
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <span className="flex size-10 items-center justify-center rounded-sm bg-primary/12 text-primary">
                      <Users className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <cite className="block font-mono text-sm font-bold uppercase not-italic tracking-[0.12em] text-foreground">
                        {t.name}
                      </cite>
                      <span className="text-xs text-muted-foreground">{t.place}</span>
                    </div>
                    <span className="ml-auto flex gap-0.5" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="size-3.5 fill-primary text-primary" />
                      ))}
                    </span>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-pad border-t border-border bg-surface">
          <div className="shell max-w-4xl">
            <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" align="center" />
            <div className="mt-10">
              <Faq />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden border-y border-border">
          <div className="hazard-stripe h-2.5 w-full" aria-hidden="true" />
          <div className="shell section-pad text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl">Need Open Well Digging?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              Tell us your location and requirement. Let&apos;s discuss the work.
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row">
              <CallButton size="lg" label={`Call ${PHONE_DISPLAY}`} className="sm:px-10" />
              <WhatsAppButton size="lg" label="WhatsApp Us" className="sm:px-10" />
            </div>
          </div>
          <div className="hazard-stripe h-2.5 w-full" aria-hidden="true" />
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-pad">
          <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow="Contact" title="Get in Touch With PKM" />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <aside className="rounded-sm border border-border bg-surface p-8">
              <h3 className="text-xl">PKM Open Well Contractor</h3>
              <p className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {ADDRESS}
              </p>
              <a
                href={PHONE_TEL}
                className="mt-5 flex items-center gap-3 font-mono text-2xl font-bold text-foreground transition-colors hover:text-primary"
              >
                <Phone className="size-5 text-primary" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <MessageSquare className="size-4 text-primary" aria-hidden="true" />
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
              <div className="mt-8 flex flex-col gap-3">
                <CallButton />
                <WhatsAppButton />
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
