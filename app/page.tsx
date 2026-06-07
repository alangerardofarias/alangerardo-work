import LightBeam from "@/components/LightBeam";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="relative bg-[#F7F5F2] text-[#111111] min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-6xl px-8 md:px-16">
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
      <LightBeam className="mx-auto max-w-6xl px-8 md:px-16 pt-52 pb-24">
        <FadeIn>
          <section>
            <h1 className="text-4xl md:text-[8rem] font-medium tracking-tight leading-[0.95] max-w-5xl font-instrument">
              Designing clarity
              <br />
              in complexity.
            </h1>
            <div className="mt-14 mb-14 ml-1">
              <div className="w-px h-28 bg-linear-to-b from-[#7A7F6B]/40 to-transparent" />
            </div>
            <p className="mt-24 max-w-xl text-lg md:text-lg leading-relaxed text-black/50">
              The best organizations don't move faster because they work harder.
              <br />
              <br />
              They move faster because clarity turns alignment into action.
            </p>
          </section>
        </FadeIn>
      </LightBeam>

      <FadeIn>
        <section className="mx-auto max-w-6xl px-8 md:px-16 py-24">
          <div className="h-px bg-linear-to-r from-transparent via-[#7A7F6B]/30 to-transparent" />
        </section>
      </FadeIn>

      {/* Why clarity matters (removed) */}

      <FadeIn>
        <section className="mx-auto max-w-6xl px-8 md:px-16 py-24">
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
      <FadeIn>
        <section className="mx-auto max-w-6xl px-8 md:px-16 py-24">
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
      </FadeIn>

      <FadeIn>
        <section className="mx-auto max-w-5xl px-8 md:px-16 py-24">
          <p className="text-5xl md:text-7xl leading-tight tracking-tight font-medium font-instrument">
            Clarity is not simplicity.
            <br />
            <span className="text-[#7A7F6B]">
              It is the ability to move forward with confidence.
            </span>
          </p>
        </section>
      </FadeIn>

      {/* Thinking */}
      <FadeIn>
        <section id="thinking" className="mx-auto max-w-6xl px-8 md:px-16 py-32">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-20">
          Thinking
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-medium mb-2 font-instrument">
              Designing clarity in AI workflows
            </h3>
            <p className="text-black/60">
              How teams can move beyond experimentation and create meaningful
              adoption.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-2 font-instrument">
              The hidden cost of organizational complexity
            </h3>
            <p className="text-black/60">
              Why complexity slows decision-making more than execution.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-2 font-instrument">
              From designer to design leader
            </h3>
            <p className="text-black/60">
              What changes when responsibility shifts from craft to outcomes.
            </p>
          </div>
        </div>
      </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto max-w-5xl px-8 md:px-16 py-24">
          <p className="text-5xl md:text-7xl leading-tight tracking-tight font-medium font-instrument">
            The goal isn't simplicity.
            <br />
            <span className="text-[#7A7F6B]">
              The goal is clarity.
            </span>
          </p>
        </section>
      </FadeIn>

      {/* About */}
      <FadeIn>
        <section id="about" className="mx-auto max-w-6xl px-8 md:px-16 py-32">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-12">
              About
            </h2>

            <p className="text-medium leading-relaxed text-black/70">
              I'm Alan Gerardo. I started in industrial design, creating products
              and experiences for real people. Most designers go deeper into craft
              from there, I went sideways.
              <br />
              <br />
              Today I work at PwC Mexico, at the intersection of design, systems,
              strategy, and emerging technology. Much of my work revolves around
              helping organizations navigate complexity with greater clarity.
              <br />
              <br />
              I'm interested in a broad mix of things, from furniture design and
              artificial intelligence to Latin American contemporary literature and
              bouldering. Most of my work today revolves around a simple question:
              how can we create more clarity in increasingly complex environments?
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Contact */}
      <FadeIn>
        <section
          id="contact"
          className="mx-auto max-w-6xl px-8 md:px-16 pt-40 pb-24"
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
      </FadeIn>
    </main>
  );
}