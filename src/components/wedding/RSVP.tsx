import { useState } from "react";
import { CalendarPlus, Check, Copy, HeartHandshake, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { invitation } from "@/config/invitation";
import { googleCalendarUrl } from "@/lib/wedding";
import { Reveal } from "./Reveal";

export function RSVP() {
  const { rsvp, couple } = invitation;
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        toast.success("Invitation link copied to clipboard!");
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const hasPhone = Boolean(rsvp.phone && rsvp.phone.trim().length > 0);

  return (
    <section className="relative px-5 py-20">
      <Reveal className="mx-auto max-w-lg text-center">
        <h2 className="font-display text-3xl tracking-[0.14em] text-pine uppercase">
          {rsvp.title ?? "RSVP"}
        </h2>
        <p className="mt-2 text-xs tracking-[0.25em] text-ink/70 uppercase">{rsvp.subtitle}</p>
        <div className="mx-auto mt-4 w-24 gold-rule" />

        <div className="relative mt-9 overflow-hidden rounded-3xl border border-gold/45 bg-parchment-deep/65 p-7 sm:p-9 shadow-[0_20px_45px_-30px_var(--color-ink)] paper-grain">
          <div className="pointer-events-none absolute inset-3 rounded-[1.3rem] border border-gold/25" />

          <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-gold/60 bg-parchment/80 text-gold shadow-sm">
            <HeartHandshake className="size-6 text-pine" aria-hidden />
          </div>

          <h3 className="mt-5 font-display text-2xl text-pine">
            Celebrate with {couple.brideShort} &amp; {couple.groomShort}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-ink/80">{rsvp.note}</p>

          {hasPhone ? (
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://wa.me/${rsvp.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hi ${couple.brideShort} & ${couple.groomShort}, I am thrilled to attend your engagement ceremony!`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3 text-[0.68rem] tracking-[0.2em] text-parchment uppercase transition-transform active:scale-95"
              >
                <MessageCircle className="size-4 text-gold" aria-hidden />
                WhatsApp RSVP
              </a>
              <a
                href={`tel:${rsvp.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-parchment/70 px-6 py-3 text-[0.68rem] tracking-[0.2em] text-ink/80 uppercase transition-colors hover:bg-gold/15 active:scale-95"
              >
                <Phone className="size-4 text-gold" aria-hidden />
                Call: {rsvp.phone}
              </a>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-gold/30 bg-parchment/60 p-4 text-center">
              <span className="block text-[0.65rem] tracking-[0.3em] font-medium text-gold uppercase">
                Save The Date
              </span>
              <p className="mt-1 font-display text-lg text-pine">
                25th December, 2026 • 6:00 PM onwards
              </p>
            </div>
          )}

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={googleCalendarUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-pine px-5 py-3 text-[0.65rem] tracking-[0.2em] text-parchment uppercase transition-transform active:scale-95"
            >
              <CalendarPlus className="size-4 text-gold" aria-hidden />
              Add to Calendar
            </a>

            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-parchment/80 px-5 py-3 text-[0.65rem] tracking-[0.2em] text-ink/80 uppercase transition-colors hover:bg-gold/15 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="size-4 text-pine" aria-hidden />
                  Link Copied
                </>
              ) : (
                <>
                  <Copy className="size-4 text-gold" aria-hidden />
                  Share Invite
                </>
              )}
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
