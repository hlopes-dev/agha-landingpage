import { profileData } from "@/data/profile";

export default function HomePage() {
  return (
    <main className="page">
      <section className="card">
        <img className="avatar" src={profileData.avatarUrl} alt="Logo da artista" />
        <p className="bio">{profileData.bio}</p>

        <div className="links">
          {profileData.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="linkButton"
              target="_blank"
              rel="noreferrer"
            >
              {link.title}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
