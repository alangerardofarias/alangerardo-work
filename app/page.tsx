export default function Home() {
  return (
    <main className="bg-[#F7F5F2] text-[#111111] min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="mt-6 flex items-center justify-between rounded-full border border-black/5 bg-[#F7F5F2]/80 px-6 py-3 backdrop-blur-md">
            <a
              href="#"
              className="text-sm font-medium tracking-tight"
            >
              Alan Gerardo
            </a>

            <div className="flex items-center gap-6 text-sm text-black/60">
              <a href="#thinking" className="hover:text-[#7A7F6B] transition-colors">
                Thinking
              </a>

              <a href="#about" className="hover:text-[#7A7F6B] transition-colors">
                About
              </a>

              <a href="#contact" className="hover:text-[#7A7F6B] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 pt-40 pb-32">
        <h1 className="text-7xl md:text-[8rem] font-medium tracking-tight leading-[0.9] max-w-5xl">
          Designing clarity
          <br />
          in complexity.
        </h1>

        <p className="mt-20 max-w-xl text-lg md:text-xl leading-relaxed text-black/60">
          The best organizations don't move faster because they work harder.
          <br />
          <br />
          They move faster because clarity turns alignment into action.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-8 md:px-16 py-24">
        <div className="h-px bg-gradient-to-r from-transparent via-[#7A7F6B]/30 to-transparent" />
      </section>

      {/* Why clarity matters */}
      <section id="why" className="max-w-4xl mx-auto px-8 md:px-16 py-32">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-12">
          Why clarity matters
        </h2>

        <p className="text-xl leading-relaxed text-black/70">
          Organizations today operate in environments shaped by accelerating
          technology, competing priorities, and increasing uncertainty.
          <br />
          <br />
          Most challenges aren't caused by a lack of talent.
          They're caused by a lack of clarity.
          <br />
          <br />
          Clarity creates alignment. Alignment enables action.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-8 md:px-16 py-40">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-24">
          How I Think
        </h2>

        <div className="space-y-16">
          {[
            "Clarity over complexity.",
            "Systems over heroics.",
            "Progress over perfection.",
            "Technology in service of people.",
            "Design beyond interfaces.",
          ].map((principle, index) => (
            <div
              key={principle}
              className="flex items-start gap-8 border-b border-black/10 pb-12"
            >
              <span className="text-[#7A7F6B] text-xl md:text-2xl font-medium">
                0{index + 1}
              </span>

              <p className="text-3xl md:text-5xl leading-tight tracking-tight font-medium">
                {principle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Areas of focus */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-32">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-20">
          Areas of focus
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-medium mb-4">
              Design Leadership
            </h3>
            <p className="text-black/70 leading-relaxed">
              From team structure to decision-making environments, I focus on
              creating the conditions for design teams to do their best work.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">
              Strategic Storytelling
            </h3>
            <p className="text-black/70 leading-relaxed">
              Complex ideas only create value when they can be understood,
              shared, and acted upon.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">
              Systems & Operations
            </h3>
            <p className="text-black/70 leading-relaxed">
              Designing workflows, frameworks, and operating models that reduces friction and improve execution.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">
              AI-Augmented Work
            </h3>
            <p className="text-black/70 leading-relaxed">
              Technology should reduce friction, not add complexity. I'm
              interested in how AI can amplify human capability and judgment.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 md:px-16 py-48">
        <p className="text-5xl md:text-7xl leading-tight tracking-tight font-medium">
          Clarity is not simplicity.
          <br />
          <span className="text-[#7A7F6B]">
            It is the ability to move forward with confidence.
          </span>
        </p>
      </section>

      {/* Thinking */}
      <section id="thinking" className="max-w-6xl mx-auto px-8 md:px-16 py-32">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-20">
          Thinking
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-medium mb-2">
              Designing clarity in AI workflows
            </h3>
            <p className="text-black/60">
              How teams can move beyond experimentation and create meaningful
              adoption.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-2">
              The hidden cost of organizational complexity
            </h3>
            <p className="text-black/60">
              Why complexity slows decision-making more than execution.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-2">
              From designer to design leader
            </h3>
            <p className="text-black/60">
              What changes when responsibility shifts from craft to outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 md:px-16 py-56">
        <p className="text-5xl md:text-7xl leading-tight tracking-tight font-medium">
          The goal isn't simplicity.
          <br />
          <span className="text-[#7A7F6B]">
            The goal is clarity.
          </span>
        </p>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-8 md:px-16 py-32">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-12">
          About
        </h2>

        <p className="text-xl leading-relaxed text-black/70">
          I'm Alan Gerardo.
          <br />
          <br />
          I started in industrial design, creating products and experiences for
          real people. Over the past 15 years, my work has expanded across
          product development, brand leadership, and consulting.
          <br />
          <br />
          Along the way, I realized that the most challenging design problems
          aren't about form or function. They're about helping organizations make
          sense of complexity, align around a shared direction, and move forward
          with confidence.
          <br />
          <br />
          Today, I work at PwC at the intersection of design, systems, strategy,
          and emerging technology.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-8 md:px-16 pt-40 pb-24"
      >
        <div className="border-t border-black/10 pt-16">
          <div className="flex flex-col md:flex-row md:justify-between gap-10">
            <div>
              <p className="text-sm uppercase tracking-wider text-black/40 mb-4">
                Get in touch
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/in/alangerardo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 hover:text-[#7A7F6B] transition-colors"
                >
                  LinkedIn
                </a>

                <a
                  href="mailto:hello@alangerardo.work"
                  className="text-black/70 hover:text-[#7A7F6B] transition-colors"
                >
                  Email
                </a>
              </div>
            </div>

            <div className="text-sm text-black/40">
              © 2026 Alan Gerardo
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}