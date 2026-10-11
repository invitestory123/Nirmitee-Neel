/**
 * Single source of truth for one couple's invitation.
 * Duplicate the project, edit this file, swap the images in src/assets, deploy.
 */

export const invitation = {
  couple: {
    bride: "Nirmitee",
    brideShort: "Nirmitee",
    groom: "Neel",
    groomShort: "Neel",
    hashtag: "#NirmiteeAndNeel",
  },
  invite: {
    kicker: "Together with their families",
    line: "cordially invite you to celebrate their engagement ceremony",
  },
  event: {
    title: "The Engagement Ceremony of Nirmitee & Neel",
    /** ISO with timezone offset — India Standard Time */
    startsAt: "2026-12-25T18:00:00+05:30",
    endsAt: "2026-12-25T23:00:00+05:30",
    dateLabel: "25 . 12 . 2026",
    dayLabel: "Friday",
    timeLabel: "6:00 PM onwards",
    dressCode: "Traditional / Festive Indian Attire",
    note: "Celebrations & dinner to follow",
  },
  venue: {
    name: "Amanora The Fern Pune, Series by Marriott",
    address: "Amanora Park Town, Amanora Magarpatta Road, Hadapsar, Pune, Maharashtra 411028",
    mapsQuery:
      "Amanora The Fern Pune, Series by Marriott, Amanora Park Town, Hadapsar, Pune, Maharashtra 411028",
    url: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bc2c22161862853:0x5ed70272d869e104?entry=s&sa=X&ved=2ahUKEwjWp-ywo62XAxXLjOEIHUlCDlEQ4kB6BAgTEAA&hl=en",
    lat: 18.5173,
    lng: 73.9351,
  },
  quote: {
    line: "From walks around New International Hostel Manipal to a lifetime hand in hand — every step led us to each other.",
    attribution: "Nirmitee & Neel",
  },
  storyTitle: "Our Story",
  storySubtitle: "From NIH Rounds to Forever ♡",
  story: [
    {
      year: "2023",
      title: "When Our Paths Crossed ✨",
      text: "Two strangers who met in Manipal, not knowing that a simple acquaintance would someday turn into something so special.",
      image: "",
    },
    {
      year: "2024",
      title: "From Acquaintances to Friends 💕",
      text: "Somewhere between casual conversations, laughter and little moments, a beautiful friendship began to grow.",
      image: "",
    },
    {
      year: "The NIH Era",
      title: "His Mission: Convince Her! 😂",
      text: "Countless rounds around NIH, endless conversations and his not-so-subtle attempts to convince her that they belonged together. He kept dropping hints. She kept pretending not to notice!",
      image: "",
    },
    {
      year: "2026",
      title: "From Maybe to Forever 💍",
      text: "What started as a simple friendship turned into a love story neither of them could have imagined.\n\nAnd now, after all those walks, conversations and a little convincing…\n\nShe said YES to forever! ♡",
      image: "",
    },
  ],
  rsvp: {
    title: "RSVP",
    subtitle: "We would be honored by your gracious presence",
    note: "Kindly confirm your presence with us on WhatsApp or give us a call.",
    phone: "+91 8217649056",
  },
  blessing: {
    line: "May your intentions be one, may your hearts beat as one.",
    translation:
      "Two souls united by destiny, blessed by love, and beginning a lifetime of luminous happiness together.",
    source: "A blessing from both families",
  },
  footer: {
    families: "With love & warm wishes from the Families",
    contacts: [] as readonly { name: string; phone: string }[],
  },
  meta: {
    title: "Nirmitee & Neel — Engagement Ceremony Invitation",
    description:
      "Together with their families, Nirmitee and Neel cordially invite you to celebrate their engagement ceremony on Friday, December 25, 2026 at Amanora The Fern Pune, Series by Marriott.",
    url: "https://nirmitee-neel.inviteby.top",
    image: "https://nirmitee-neel.inviteby.top/og-image.jpg",
    siteName: "Nirmitee & Neel Engagement Ceremony",
  },
} as const;

export type Invitation = typeof invitation;
