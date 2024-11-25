import type { IconType } from "react-icons";
import {
  RiCalendarLine,
  RiEarthLine,
  RiFacebookLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiMailLine,
  RiNpmjsLine,
  RiPhoneLine,
  RiTelegramLine,
  RiTwitterLine,
} from "react-icons/ri";
import { Social } from "@/types";

export const WEBSITE = {
  name: "Haekal Sutrisna",
  author: "Haekal Sutrisna",
  tagline: "CTO, Software Architect, Technical Lead, 3X Founder.",
  description:
    "CTO, Software Engineer, Technical Lead, and Founder. Striving for Excellence",
  keywords: [""],
  about: "",
  color: "#f13024",
};

export const SOCIALS: Record<
  Social,
  { name: string; title: string; icon: IconType; link: string }
> = {
  [Social.Email]: {
    name: "Email",
    title: `Email ${WEBSITE.author}`,
    icon: RiMailLine,
    link: "mailto:haekalsutrisna18@gmail.com",
  },
  [Social.Phone]: {
    name: "Phone",
    title: `Call ${WEBSITE.author}`,
    icon: RiPhoneLine,
    link: "tel:+6281524577105",
  },
  [Social.Facebook]: {
    name: "Facebook",
    title: `${WEBSITE.author} on Facebook`,
    icon: RiFacebookLine,
    link: "",
  },
  [Social.Instagram]: {
    name: "Instagram",
    title: `${WEBSITE.author} on Instagram`,
    icon: RiInstagramLine,
    link: "https://instagram.com/haekalsutrisna",
  },
  [Social.Twitter]: {
    name: "Twitter",
    title: `${WEBSITE.author} on Twitter`,
    icon: RiTwitterLine,
    link: "https://x.com/idimetrix",
  },
  [Social.LinkedIn]: {
    name: "LinkedIn",
    title: `${WEBSITE.author} on LinkedIn`,
    icon: RiLinkedinLine,
    link: "https://www.linkedin.com/in/dimetrix",
  },
  [Social.Telegram]: {
    name: "Telegram",
    title: `${WEBSITE.author} on Telegram`,
    icon: RiTelegramLine,
    link: "https://t.me/dmitrii_selikhov",
  },
  [Social.Npm]: {
    name: "NPM",
    title: `${WEBSITE.author} on NPM`,
    icon: RiNpmjsLine,
    link: "https://www.npmjs.com/~dimetrix",
  },
  [Social.Website]: {
    name: "Website",
    title: `Visit ${WEBSITE.author}’s Website`,
    icon: RiEarthLine,
    link: "https://dmitrii-selikhov.vercel.app",
  },
  [Social.Calendly]: {
    name: "Calendly",
    title: `Schedule with ${WEBSITE.author} on Calendly`,
    icon: RiCalendarLine,
    link: "https://calendly.com/haekalsutrisna",
  },
  [Social.GitHub]: {
    name: "GitHub",
    title: `${WEBSITE.author} on GitHub`,
    icon: RiGithubLine,
    link: "https://github.com/haekalsutrisna",
  },
};

export * from "./competencies";
export * from "./rewards";
export * from "./variants";
