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

export const artworks: Artwork[] = [
  {
    title: "Coral",
    category: "contemporary fiber",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/image00015.jpg?v=1769951161",
    url: "https://agha.studio/products/coral",
  },
  {
    title: "Contrast, the set",
    category: "contemporary fiber",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/20241105_170818.jpg?v=1766086594",
    url: "https://agha.studio/products/contrast-the-set",
  },
  {
    title: "Majorelle set",
    category: "contemporary fiber",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/20250430_190632.jpg?v=1766086403",
    url: "https://agha.studio/products/majorelle-set",
  },
  {
    title: "Majorelle",
    category: "contemporary fiber",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/Screenshot2025-08-10202017.png?v=1754853710",
    url: "https://agha.studio/products/majorelle",
  },
  {
    title: "Organic Collection",
    category: "contemporary fiber",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/Screenshot2025-08-10202713.png?v=1754854237",
    url: "https://agha.studio/products/organic",
  },
  {
    title: "Nudo",
    category: "contemporary fiber",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/1000110848-04.jpg?v=1766085868",
    url: "https://agha.studio/products/nudo",
  },
  {
    title: "Obaluaê",
    category: "ancestral adornment",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/obaluae_bienal_2025.png?v=1770551515",
    url: "https://agha.studio/products/obaluae",
  },
  {
    title: "7 Chakras",
    category: "ancestral adornment",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/WhatsAppImage2026-02-08at10.46.01.jpg?v=1770547904",
    url: "https://agha.studio/products/7-chakras",
  },
  {
    title: "Taurus",
    category: "ancestral adornment",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/20240825_174219.jpg?v=1768327451",
    url: "https://agha.studio/products/taurus",
  },
  {
    title: "Cocar",
    category: "ancestral adornment",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/20231013_141457.jpg?v=1770549853",
    url: "https://agha.studio/products/cocar",
  },
  {
    title: "Yaga",
    category: "ancestral adornment",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/1000112150-01.jpg?v=1766086954",
    url: "https://agha.studio/products/yaga",
  },
  {
    title: "Cleó",
    category: "ancestral adornment",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/20240206_130541.jpg?v=1766085660",
    url: "https://agha.studio/products/cleo",
  },
  {
    title: "Incense Holder",
    category: "wood",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/20231012_112222.jpg?v=1770549546",
    url: "https://agha.studio/products/incense-holder-copia-1",
  },
  {
    title: "Incense Holder",
    category: "wood",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/20231013_144320.jpg?v=1770549349",
    url: "https://agha.studio/products/incense-holder-copia",
  },
  {
    title: "Jewelry Holder",
    category: "wood",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/20231013_122406.jpg?v=1770548997",
    url: "https://agha.studio/products/jewelry-holder-copia-1",
  },
  {
    title: "Incense Holder",
    category: "wood",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/20241029_115145.jpg?v=1768328603",
    url: "https://agha.studio/products/incense-holder",
  },
  {
    title: "Jewelry Holder",
    category: "wood",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/20231021_165941_5d8ff3c3-a8f1-4a14-9d34-e010d860dbee.jpg?v=1768328548",
    url: "https://agha.studio/products/jewelry-holder-copia",
  },
  {
    title: "Solitude",
    category: "wood",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0920/7123/1863/files/20231013_141819-03.jpg?v=1768327556",
    url: "https://agha.studio/products/solitude",
  },
];
