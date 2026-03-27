import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "2.5rem 1.5rem 4rem",
        fontFamily: "var(--font-newsreader), Georgia, serif",
        lineHeight: 1.6,
      }}
    >
      {/* Theme toggle */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "3rem",
        }}
      >
        <ThemeToggle />
      </div>

      {/* Name */}
      <h1
        style={{
          fontSize: "2.4rem",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          margin: "0 0 1.5rem",
          lineHeight: 1.15,
          color: "var(--fg)",
        }}
      >
        Ansh Tandon
      </h1>

      {/* About */}
      <section style={{ marginBottom: "2.5rem" }}>
        <p
          style={{
            fontSize: "1.15rem",
            margin: "0 0 1rem",
            color: "var(--fg)",
          }}
        >
          I&apos;m a Purdue student studying computer science with a minor in
          math. During my time at Purdue, I&apos;ve been involved with{" "}
          <a
            href="https://mlpurdue.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Purdue&apos;s Machine Learning Club
          </a>
          {""},{" "}
          <a
            href="https://boilerblockchain.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            BoilerBlockchain
          </a>
          {""}, and worked as a undergraduate{" "}
          <a
            href="https://www.cs.purdue.edu/hiring/uta.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            TA
          </a>
          {""}.
        </p>
        <p
          style={{
            fontSize: "1.15rem",
            margin: "0 0 1rem",
            color: "var(--fg)",
          }}
        >
          I&apos;m currently interested in ML systems, infrastructure, and AI
          agents.
        </p>
        <p
          style={{
            fontSize: "1.15rem",
            margin: "0",
            color: "var(--fg)",
          }}
        >
          Previously, I worked on AI at{" "}
          <a
            href="https://apple.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple
          </a>{" "}
          and vehicle software platforms at{" "}
          <a
            href="https://tesla.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tesla
          </a>
          . I was fortunate to learn from great mentors throughout my early
          career.
        </p>
      </section>

      {/* Divider */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--border)",
          margin: "2.5rem 0",
        }}
      />

      {/* Outside work */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2
          style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            margin: "0 0 0.75rem",
            color: "var(--fg)",
          }}
        >
          Outside of work
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            margin: "0",
            color: "var(--fg)",
          }}
        >
          I'm big into sports (playing and watching), music, travel, cooking,
          and photography. Also in intramural volleyball on campus!
        </p>
      </section>

      {/* Divider */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--border)",
          margin: "2.5rem 0",
        }}
      />

      {/* Contact */}
      <section>
        <h2
          style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            margin: "0 0 0.75rem",
            color: "var(--fg)",
          }}
        >
          Contact me
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.45rem",
          }}
        >
          <li>
            <a
              href="https://twitter.com/atan184"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.1rem" }}
            >
              @atan184
            </a>
          </li>
          <li>
            <a
              href="http://linkedin.com/in/ansh-t"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.1rem" }}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
