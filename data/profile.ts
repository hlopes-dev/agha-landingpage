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
  price: string;
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
    title: "Unique tiles",
    price: "€120",
    imageUrl: "/artworks/unique-tiles.webp",
    url: "https://checkout.revolut.com/pay/a1a64a9c-a833-4467-8333-b2e60b7c32a5",
  },
  {
    title: "The quartet",
    price: "€460",
    imageUrl: "/artworks/the-quartet.webp",
    url: "https://checkout.revolut.com/pay/0adbe8f3-8ba9-4f1b-add4-e4d2b0e80411",
  },
  {
    title: "Coral",
    price: "€2,200",
    imageUrl: "/artworks/coral.webp",
    url: "https://checkout.revolut.com/pay/deb6a5a8-8397-48c6-9391-c1821ba3248d",
  },
  {
    title: "Colors through texture",
    price: "€3,600",
    imageUrl: "/artworks/colors-through-texture.webp",
    url: "https://checkout.revolut.com/pay/638f6902-ca8f-47cd-8bad-b4f985665fce",
  },
];
