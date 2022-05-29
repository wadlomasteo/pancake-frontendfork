import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "",
    items: [
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
      },
      {
        label: "",
        href: "",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "",
    items: [
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
    ],
  },
  {
    label: "",
    items: [
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
    ],
  },
];

export const socials = [
  {
    label: "",
    icon: TwitterIcon,
    href: "",
  },
  {
    label: "",
    icon: TelegramIcon,
    items: [
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
    ],
  },
  {
    label: "",
    icon: RedditIcon,
    href: "",
  },
  {
    label: "",
    icon: InstagramIcon,
    href: "",
  },
  {
    label: "",
    icon: GithubIcon,
    href: "",
  },
  {
    label: "",
    icon: DiscordIcon,
    href: "",
  },
  {
    label: "",
    icon: MediumIcon,
    href: "",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
