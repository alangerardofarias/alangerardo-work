import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="relative bg-[#F7F5F2] text-[#111111] min-h-screen">
      {/* Architectural light */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 h-1200px w-500px -translate-x-1/2"
          style={{
            background:
              "linear-gradient(to bottom, rgba(122,127,107,0.12), rgba(122,127,107,0))",
            filter: "blur(80px)",
          }}
        />
      </div>
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
      <section className="max-w-6xl mx-auto px-8 md:px-16 pt-40 pb-24">
        <h1 className="text-4xl md:text-[8rem] font-medium tracking-tight leading-[0.95] max-w-5xl">
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
        <div className="h-px bg-linear-to-r from-transparent via-[#7A7F6B]/30 to-transparent" />
      </section>

      {/* Why clarity matters (removed) */}

      <FadeIn>
        <section className="max-w-6xl mx-auto px-8 md:px-16 py-24">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-24">
            How I Think
          </h2>

          <div className="space-y-14">
            {[
              "Clarity over complexity.",
              "Systems over heroics.",
              "Progress over perfection.",
              "Technology in service of people.",
              "Design beyond interfaces.",
            ].map((principle, index) => (
              <div
                key={principle}
                className="flex items-start gap-10 border-b border-black/10 pb-8"
              >
                <span className="text-[#7A7F6B] text-xl md:text-2xl font-medium">
                  0{index + 1}
                </span>

                <p className="whitespace-pre-line text-3xl md:text-6xl leading-[0.95] tracking-tight font-medium max-2xl">            
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Areas of focus */}
      <section className="max-w-6xl mx-auto px-8 md:px-16 py-24">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-20">
          Areas of focus
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-medium mb-4">
              Design Leadership
            </h3>
            <p className="text-black/70 leading-relaxed">
              Building structure, rituals, and decision-making environments that help design teams scale effectively. 
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">
              Strategic Storytelling
            </h3>
            <p className="text-black/70 leading-relaxed">
              I translate complex strategies into narratives, presentations, and experiences that executives can act on and teams can rally around.
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

      <section className="max-w-5xl mx-auto px-8 md:px-16 py-24">
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

      <section className="max-w-5xl mx-auto px-8 md:px-16 py-24">
        <p className="text-5xl md:text-7xl leading-tight tracking-tight font-medium">
          The goal isn't simplicity.
          <br />
          <span className="text-[#7A7F6B]">
            The goal is clarity.
          </span>
        </p>
      </section>

      {/* About */}
      <FadeIn>
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
      </FadeIn>

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