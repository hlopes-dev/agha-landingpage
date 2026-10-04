export type ProfileLink = {
  title: string;
  url: string;
};

export type ProfileData = {
  bio: string;
  avatarUrl: string;
  links: ProfileLink[];
};

export const profileData: ProfileData = {
  bio: "between silences and forms, my paths are here.",
  avatarUrl:
    "https://agha.studio/cdn/shop/files/agha_title_F9EFCF.png?v=1757017111&width=1200",
  links: [
    { title: "website", url: "https://agha.studio" },
    { title: "whatsapp", url: "https://wa.me/message/ZGOU6WF5QBKCD1" },
    { title: "email", url: "mailto:artecomagha@gmail.com" },
    { title: "instagram", url: "https://instagram.com/fernanda.agha_studio" },
  ],
};
