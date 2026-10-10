import { artworks, profileData } from "@/data/profile";
import ArtworkGallery from "./artwork-gallery";

export default function HomePage() {
  return (
    <main className="page">
      <header className="siteHeader">
        <a className="wordmark" href="https://agha.studio" aria-label="Aghá Studio home">
          Aghá <span>Studio</span>
        </a>
        <nav className="headerLinks" aria-label="Artist links">
          {profileData.links
            .filter((link) => link.title === "email" || link.title === "instagram")
            .map((link) => (
              <a key={link.url} href={link.url}>
                {link.title}
              </a>
            ))}
        </nav>
      </header>

      <section className="gallerySection" id="artworks" aria-labelledby="gallery-title">
        <div className="sectionHeading">
          <div>
            <h2 id="gallery-title">The art.</h2>
          </div>
          <p className="sectionNote">Pick your artwork.</p>
        </div>

        <ArtworkGallery artworks={artworks} />
      </section>

      <section className="connectSection" aria-labelledby="connect-title">
        <p className="eyebrow">Stay close to the work</p>
        <h2 id="connect-title">Good things begin with a hello.</h2>
        <div className="links">
          {profileData.links
            .filter((link) => link.title !== "website")
            .map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="linkButton"
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:") ? undefined : "noreferrer"}
              >
                {link.title}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
        </div>
      </section>

      <footer className="siteFooter">
        <span>© {new Date().getFullYear()} Fernanda Aghá</span>
        <span>Made with intention.</span>
      </footer>
    </main>
  );
}
