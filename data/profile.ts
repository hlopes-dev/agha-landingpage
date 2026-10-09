export type ProfileLink = {
  title: string;
  url: string;
};

export type ProfileData = {
  bio: string;
  avatarUrl: string;
  links: ProfileLink[];
};

export type Artwork = {
  title: string;
  category: string;
  price?: string;
  imageUrl: string;
  url: string;
};

export const profileData: ProfileData = {
  bio: "between silences and forms, my paths are here.",
  avatarUrl:
    "https://agha.studio/cdn/shop/files/agha_title_F9EFCF.png?v=1757017111&width=1200",
  links: [
    { title: "website", url: "https://agha.studio" },
    { title: "shop the collection", url: "https://agha.studio/collections/all" },
    { title: "whatsapp", url: "https://wa.me/message/ZGOU6WF5QBKCD1" },
    { title: "email", url: "mailto:artecomagha@gmail.com" },
    { title: "instagram", url: "https://instagram.com/fernanda.agha_studio" },
  ],
};

export const artworkPaymentUrl = "https://agha.studio/collections/all";

export const artworks: Artwork[] = [
  {
    title: "1-12",
    category: "artwork",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/obaluae_bienal_2025.png?v=1770551515",
    url: artworkPaymentUrl,
  },
  {
    title: "Coral",
    category: "fiber sculpture",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/image00015.jpg?v=1769951161",
    url: artworkPaymentUrl,
  },
  {
    title: "Textile Big",
    category: "textile sculpture",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/20250430_190632.jpg?v=1766086403",
    url: artworkPaymentUrl,
  },
  {
    title: "DaVinci",
    category: "artwork",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/1000064639.png?v=1768328855",
    url: artworkPaymentUrl,
  },
];
