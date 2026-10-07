
const featuredPoems = [
  {
    number: "001",
    title: "The Things We Never Said",
    category: "Longing",
    excerpt: "Some words arrive only after the moment has passed.",
    language: "English",
  },
  {
    number: "002",
    title: "A Quiet Kind of Love",
    category: "Love",
    excerpt: "Not everything beautiful needs to be spoken aloud.",
    language: "English",
  },
  {
    number: "003",
    title: "Letters to the Moon",
    category: "Memories",
    excerpt: "I left a little of my heart in every unfinished sentence.",
    language: "English",
  },
];

export default function Home() {
  return (
    <main className="journal">
      <header className="site-header">
        <a className="wordmark" href="/">
          between lines<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#collection">The collection</a>
          <a href="#feelings">By feeling</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">A PERSONAL POETRY ARCHIVE</p>
        <p className="handwritten hero-note">
          a little corner of the world
        </p>

        <h1>
          Words left
          <br />
          <span>between lines.</span>
        </h1>

        <p className="hero-description">
          Poems, feelings, and the meanings hidden
          behind the words. A collection of things
          that needed somewhere to belong.
        </p>

        <a className="primary-link" href="#collection">
          Wander through the pages <span>↗</span>
        </a>

        <p className="hero-footnote">
          Written quietly. Kept here.
        </p>
      </section>

      <section className="collection" id="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE WRITTEN COLLECTION</p>
            <h2>Pages from the heart</h2>
          </div>
          <a className="text-link" href="/poems">
            All poems ↗
          </a>
        </div>

        <div className="poem-grid">
          {featuredPoems.map((poem) => (
            <article className="poem-card" key={poem.number}>
              <p className="poem-number">
                NO. {poem.number}
                <span>{poem.category}</span>
              </p>

              <h3>{poem.title}</h3>
              <p className="poem-excerpt">{poem.excerpt}</p>

              <div className="poem-card-footer">
                <span>{poem.language}</span>
                <span aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
        <p className="placeholder-note">
          Sample entries for the initial design. Your real poems
          will come from the database in a later step.
        </p>
      </section>

      <section className="feelings" id="feelings">
        <p className="eyebrow">NOT EVERY FEELING HAS A NAME</p>
        <h2>What does your heart feel like today?</h2>

        <div className="feeling-list">
          <a href="/explore?emotion=love">love</a>
          <a href="/explore?emotion=longing">longing</a>
          <a href="/explore?emotion=nostalgia">nostalgia</a>
          <a href="/explore?emotion=hope">hope</a>
          <a href="/explore?emotion=heartbreak">heartbreak</a>
          <a href="/explore?emotion=peace">peace</a>
        </div>
      </section>

      <section className="about-note" id="about">
        <p className="handwritten">A note from the writer</p>
        <h2>
          Some things are easier
          <br />
          to write than to say.
        </h2>
        <p>
          This is a growing collection of poems and the
          meanings they hold. Every page has a feeling
          behind it, even when the words cannot explain it all.
        </p>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="/">
          between lines<span>.</span>
        </a>
        <p>A quiet archive of words and feelings.</p>
        <a href="/explore">Explore the collection ↗</a>
      </footer>
    </main>
  );
}