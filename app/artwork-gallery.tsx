"use client";

import { useEffect, useRef, useState } from "react";
import type { Artwork } from "@/data/profile";

const INITIAL_ARTWORKS = 8;
const ARTWORKS_PER_LOAD = 6;
const PRICE_PLACEHOLDER = "Price coming soon";

export default function ArtworkGallery({
  artworks,
}: {
  artworks: Artwork[];
}) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_ARTWORKS);
  const loadTriggerRef = useRef<HTMLDivElement>(null);
  const visibleArtworks = artworks.slice(0, visibleCount);

  useEffect(() => {
    const loadTrigger = loadTriggerRef.current;
    if (!loadTrigger || visibleCount >= artworks.length) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisibleCount(artworks.length);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((count) =>
            Math.min(count + ARTWORKS_PER_LOAD, artworks.length),
          );
        }
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(loadTrigger);
    return () => observer.disconnect();
  }, [artworks.length, visibleCount]);

  return (
    <>
      <div className="artworkGrid">
        {visibleArtworks.map((artwork, index) => (
          <article className="artwork" key={artwork.url}>
            <div className="artworkImage">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                loading={index < INITIAL_ARTWORKS ? "eager" : "lazy"}
              />
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
      {visibleCount < artworks.length && (
        <div
          className="galleryLoadTrigger"
          ref={loadTriggerRef}
          role="status"
          aria-live="polite"
        >
          Loading more works…
        </div>
      )}
    </>
  );
}
