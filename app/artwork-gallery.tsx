import type { Artwork } from "@/data/profile";

const PRICE_PLACEHOLDER = "Price coming soon";

export default function ArtworkGallery({
  artworks,
}: {
  artworks: Artwork[];
}) {
  return (
    <div className="artworkGrid">
      {artworks.map((artwork) => (
        <article className="artwork" key={artwork.title}>
          <div className="artworkImage">
            <img src={artwork.imageUrl} alt={artwork.title} loading="lazy" />
            <a
              className="artworkCta"
              href={artwork.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Pay here for ${artwork.title}`}
            >
              Pay here <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="artworkCaption">
            <h3>
              <a href={artwork.url} target="_blank" rel="noreferrer">
                {artwork.title}
              </a>
            </h3>
            <p>{artwork.price ?? PRICE_PLACEHOLDER}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
