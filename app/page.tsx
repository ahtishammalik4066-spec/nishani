import Image from "next/image";
import CareGallery from "./CareGallery";

type StoryCardProps = {
  number: string;
  title: string;
  eyebrow: string;
  image: string;
  alt: string;
  description: string;
};

const occasions = [
  ["Wedding & Nikkah", "Qubool hai", "#wedding-story"],
  ["Baby memories", "Khush aamdeed", "#baby"],
  ["Family", "Apna sa ghar", "#family"],
  ["Birthdays", "Ek aur saal", "#birthdays"],
  ["Anniversaries", "Hamesha tum", "#anniversaries"],
  ["Graduation", "Fakhr ka lamha", "#graduation"],
];

const prices = [
  ["Birthday figurine", "7,499"],
  ["Graduation figurine", "7,999"],
  ["Professional desk gift", "8,999"],
  ["Newborn keepsake", "7,299"],
  ["Maternity figurine", "7,999"],
  ["Wedding couple", "10,999"],
  ["Honeymoon / anniversary", "10,499"],
  ["Memorial figurine", "7,999"],
  ["Family of 3", "14,499"],
  ["Family of 4", "17,499"],
];

const faqs = [
  {
    question: "How do I create my Nishaani?",
    answer:
      "Get in touch with the photograph and occasion you have in mind. We’ll help you choose a keepsake, talk through the details, and share your design for approval before it is made.",
  },
  {
    question: "What kind of photograph should I send?",
    answer:
      "Choose a clear, well-lit photo where the people or details you want us to capture are easy to see. If you have a few favourites, share them with us and we can help you decide which works best.",
  },
  {
    question: "Can I review my design before it is made?",
    answer:
      "Yes. Your design is shared with you for approval before production, so you can review the concept and request any agreed changes before your keepsake is made.",
  },
  {
    question: "How long does it take to make a keepsake?",
    answer:
      "Timing depends on your design and delivery destination. We’ll confirm the expected production and delivery time when you enquire, before you place your order.",
  },
  {
    question: "How much does a Nishaani cost?",
    answer:
      "Our 90-day launch prices are listed in PKR in the pricing section. Shipping costs can vary by destination and model; we’ll confirm the total with you before you order.",
  },
  {
    question: "Can I create a keepsake for any occasion?",
    answer:
      "Absolutely. Weddings, anniversaries, new arrivals, birthdays, graduations, family milestones and the everyday moments that matter are all lovely places to start.",
  },
  {
    question: "How will my keepsake be packaged?",
    answer:
      "Your keepsake is carefully protected and packed in a gift-ready presentation, with thoughtful details that make opening it part of the experience.",
  },
  {
    question: "How do I get started or ask another question?",
    answer:
      "Send us a note at hello@nishaani.com with the moment you want to remember. We’ll help you explore the next steps and answer any questions about your design.",
  },
];

const stories: StoryCardProps[] = [
  {
    number: "01",
    title: "A day for everyone. A little forever just for you.",
    eyebrow: "WEDDING & NIKKAH",
    image: "/images/keepsake.jpg",
    alt: "Personalized 3D wedding couple keepsake in detailed bridal outfits",
    description:
      "The outfits, the flowers, the way you looked at each other. Keep the little details of your biggest day close, long after the celebrations.",
  },
  {
    number: "02",
    title: "A promise made. A hand held for a lifetime.",
    eyebrow: "THE LITTLE DETAILS",
    image: "/images/wedding-hands.jpg",
    alt: "Wedding handhold keepsake with bridal bangles, rings and wedding outfit details",
    description:
      "From the rings to the smallest details of your wedding look, turn the photograph you love into something you can hold.",
  },
  {
    number: "03",
    title: "Before we meet, you're already my world.",
    eyebrow: "MATERNITY & BABY SHOWERS",
    image: "/images/maternity.jpg",
    alt: "Maternity keepsake concept in a blue dress with a personalized display base",
    description:
      "Celebrate the beautiful waiting, the little kicks and all the love that is already here, before your newest chapter begins.",
  },
  {
    number: "04",
    title: "Their first chapter. Your whole heart.",
    eyebrow: "BABY'S FIRST MEMORIES",
    image: "/images/baby.jpg",
    alt: "Personalized baby birth keepsake surrounded by soft baby clothes",
    description:
      "A name, a date, a tiny new person who changed everything. Make their very first story part of your home.",
  },
  {
    number: "05",
    title: "A little piece of home.",
    eyebrow: "FAMILY",
    image: "/images/family.jpg",
    alt: "Personalized 3D family keepsake inspired by a family photograph",
    description:
      "The people who make every place feel like home, brought together in a keepsake made just for your family.",
  },
  {
    number: "06",
    title: "They won't stay this little. The memory can.",
    eyebrow: "NEWBORN & TINY FIRSTS",
    image: "/images/newborn.jpg",
    alt: "Newborn keepsake in a pink wrap on a personalized display base",
    description:
      "That impossibly tiny bundle, their first sleepy stretch, the days you wish could slow down. Keep this chapter near.",
  },
  {
    number: "07",
    title: "The tiniest feet. The biggest place in your heart.",
    eyebrow: "TINY FOOTPRINTS",
    image: "/images/footprints.jpg",
    alt: "Baby footprint keepsake on a heart-shaped plaque with floral details",
    description:
      "A tiny footprint becomes a lasting reminder of the little person who made your world feel so much bigger.",
  },
  {
    number: "08",
    title: "Their love built your whole world.",
    eyebrow: "FOR PARENTS & GRANDPARENTS",
    image: "/images/parents.jpg",
    alt: "Keepsake concept of an older couple sitting together on a bench",
    description:
      "For the ones who have always been there. Give them a one-of-a-kind reminder of the family and love they built.",
  },
  {
    number: "09",
    title: "They grow up. The little things stay with you.",
    eyebrow: "BIRTHDAYS",
    image: "/images/birthday.jpg",
    alt: "Personalized birthday keepsake of a boy in a green kurta beside his cake",
    description:
      "Save the candles, the cake-covered smile and the birthday they couldn't stop talking about.",
  },
  {
    number: "10",
    title: "Years pass. You're still my person.",
    eyebrow: "ANNIVERSARIES",
    image: "/images/milestone.jpg",
    alt: "Personalized anniversary keepsake with names, rings and floral details",
    description:
      "Celebrate all the years, all the ordinary days and the person you would choose all over again.",
  },
  {
    number: "11",
    title: "Your hard work. Their proudest moment.",
    eyebrow: "GRADUATION",
    image: "/images/graduation-reference.jpg",
    alt: "Graduation keepsake concept with diploma, bouquet and books",
    description:
      "A cap tossed, a degree earned, a whole new world ahead. Honour the moment it all paid off.",
  },
  {
    number: "12",
    title: "A name earned. A journey worth honouring.",
    eyebrow: "PROFESSIONAL MILESTONES",
    image: "/images/professional.jpg",
    alt: "Personalized professional keepsake and named desk display",
    description:
      "For the first day, the big achievement or the dream they worked so hard to reach. Make their milestone theirs.",
  },
];

function StoryCard({
  number,
  title,
  eyebrow,
  image,
  alt,
  description,
}: StoryCardProps) {
  return (
    <article className="story-card">
      <div className="story-image">
        <Image src={image} alt={alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
        <span className="image-index">{number}</span>
      </div>
      <div className="story-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Nishaani home">
          <span className="brand-name">nishaani</span>
          <span className="brand-caption">YOUR MEMORIES, MADE PERSONAL</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#occasions">Collections</a>
          <a href="#pricing">Pricing</a>
          <a href="#transformation">Our story</a>
          <a href="#how-it-works">How it works</a>
          <a href="#packaging">Gift experience</a>
          <a href="#faq">FAQs</a>
        </nav>
        <div className="header-actions">
          <a className="button button-outline header-cta" href="#create">
            Create your Nishaani <span aria-hidden="true">↗</span>
          </a>
          <a className="bag-link" href="#create" aria-label="View saved keepsake">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 8.5h14l1 12H4l1-12Z" />
              <path d="M9 9V6a3 3 0 0 1 6 0v3" />
            </svg>
            <span>0</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home" aria-label="Personalized 3D keepsakes">
          <Image
            className="hero-image"
            src="/images/hero-reference.jpg"
            alt="A wedding photograph on a phone transformed into a personalized couple 3D keepsake"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-bottom">
            <span className="hero-note">
              PERSONALIZED 3D KEEPSAKES <i>·</i> MADE FROM YOUR PHOTOS
            </span>
            <div className="hero-actions">
              <a className="button button-cream" href="#create">
                Create your Nishaani <span aria-hidden="true">↗</span>
              </a>
              <a className="hero-how" href="#transformation">
                See how it works <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className="promise-strip" aria-label="Our promise">
          <div><span aria-hidden="true">◇</span> Created from your photos</div>
          <div><span aria-hidden="true">✧</span> Your design, your approval</div>
          <div><span aria-hidden="true">⌁</span> Personalized to your story</div>
        </section>

        <section className="intro-section section-pad" id="transformation">
          <div className="intro-copy">
            <span className="eyebrow">YOUR PHOTO. YOUR STORY. YOUR NISHAANI.</span>
            <h1>
              A memory on your phone.
              <br />
              <em>A keepsake in your hands.</em>
            </h1>
            <p>
              Some moments deserve more than a place in your camera roll. We
              turn your favourite photographs into personalized 3D keepsakes,
              made to be held onto.
            </p>
            <a className="text-link" href="#create">
              Start with your photograph <span aria-hidden="true">↗</span>
            </a>
          </div>
          <figure className="intro-visual">
            <div className="image-frame">
              <Image
                src="/images/transformation-reference.jpg"
                alt="A wedding photograph beside a personalized 3D couple model and gift packaging"
                fill
                sizes="(max-width: 760px) 100vw, 54vw"
              />
              <span className="frame-stamp">YOUR PHOTO, REIMAGINED</span>
            </div>
            <figcaption>
              Illustrative concept · Your design is reviewed before production.
              Final likeness varies with photographs, style and scale.
            </figcaption>
          </figure>
        </section>

        <section className="occasion-section section-pad" id="occasions">
          <div className="section-heading">
            <span className="eyebrow">WHO ARE YOU CELEBRATING?</span>
            <h2>
              Every kind of love.
              <br />
              <em>A Nishaani of its own.</em>
            </h2>
          </div>
          <div
            className="occasion-marquee"
            role="region"
            aria-label="Explore keepsakes by occasion"
          >
            <div className="occasion-track">
              {[false, true].map((duplicate) => (
                <div
                  className="occasion-set"
                  aria-hidden={duplicate || undefined}
                  key={duplicate ? "duplicate" : "original"}
                >
                  {occasions.map(([name, phrase, href], index) =>
                    duplicate ? (
                      <div className="occasion-card" key={name}>
                        <span className="occasion-number">0{index + 1}</span>
                        <span className="occasion-name">{name}</span>
                        <span className="occasion-phrase">{phrase}</span>
                        <span className="occasion-arrow" aria-hidden="true">↗</span>
                      </div>
                    ) : (
                      <a className="occasion-card" href={href} key={name}>
                        <span className="occasion-number">0{index + 1}</span>
                        <span className="occasion-name">{name}</span>
                        <span className="occasion-phrase">{phrase}</span>
                        <span className="occasion-arrow" aria-hidden="true">↗</span>
                      </a>
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing-section section-pad" id="pricing">
          <div className="section-heading">
            <span className="eyebrow">A LITTLE FOREVER, WITH CLEAR PRICING</span>
            <h2>
              Made for your moment.
              <br />
              <em>Priced with care.</em>
            </h2>
            <p>90-day launch prices · Pakistani rupees (PKR)</p>
          </div>
          <div className="price-list">
            {prices.map(([name, amount]) => (
              <article className="price-item" key={name}>
                <h3>{name}</h3>
                <p><span>Rs.</span> {amount}</p>
              </article>
            ))}
          </div>
          <p className="pricing-note">
            Shipping may vary for bulky models and some destinations. We’ll confirm your total before production.
          </p>
          <a className="button button-dark pricing-cta" href="mailto:hello@nishaani.com?subject=Keepsake%20order%20enquiry">
            Ask about your keepsake <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="stories-section section-pad" id="stories">
          <div className="story-section-heading">
            <span className="eyebrow">MADE FOR THE MOMENTS THAT MAKE YOU, YOU</span>
            <h2>
              A little forever,
              <br />
              <em>for every kind of story.</em>
            </h2>
            <p>
              Thoughtful keepsakes, created from the photographs and people
              you never want to forget.
            </p>
          </div>
          <div className="story-list">
            {stories.map((story, index) => (
              <div
                className="story-anchor"
                id={
                  [
                    "wedding-story",
                    "nikkah",
                    "maternity",
                    "baby",
                    "family",
                    "newborn",
                    "tiny-footprints",
                    "parents",
                    "birthdays",
                    "anniversaries",
                    "graduation",
                    "professional-gifts",
                  ][index]
                }
                key={story.number}
              >
                <StoryCard {...story} />
              </div>
            ))}
          </div>
        </section>

        <section className="steps-section section-pad" id="how-it-works">
          <div className="section-heading">
            <span className="eyebrow">FROM YOUR PHOTO TO YOUR NISHAANI</span>
            <h2>
              Your memory, made
              <br />
              <em>real in three little steps.</em>
            </h2>
          </div>
          <div className="steps-grid">
            <article className="step-card">
              <span className="step-number">01</span>
              <span className="step-icon" aria-hidden="true">↗</span>
              <h3>Share your photo</h3>
              <p>Choose the photograph and moment you would love to keep close.</p>
            </article>
            <article className="step-card">
              <span className="step-number">02</span>
              <span className="step-icon" aria-hidden="true">✧</span>
              <h3>Make it yours</h3>
              <p>We create your design and share it with you for approval.</p>
            </article>
            <article className="step-card">
              <span className="step-number">03</span>
              <span className="step-icon" aria-hidden="true">◇</span>
              <h3>Hold onto forever</h3>
              <p>Your finished keepsake is carefully made, packed and sent with love.</p>
            </article>
          </div>
          <a className="button button-dark" href="#create">
            Start with your photograph <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="gift-section section-pad" id="packaging">
          <div className="gift-image">
            <Image
              src="/images/packaging.jpg"
              alt="Nishaani dark green and gold gift box with a wrapped keepsake and thank-you card"
              fill
              sizes="(max-width: 760px) 100vw, 52vw"
            />
          </div>
          <div className="gift-copy">
            <span className="eyebrow">THE GIFT EXPERIENCE</span>
            <h2>
              The feeling begins
              <br />
              <em>before the ribbon opens.</em>
            </h2>
            <p>
              From the first look to the last little detail, your Nishaani is
              wrapped with the same care that went into making it.
            </p>
            <ul className="gift-points">
              <li><span>01</span> A keepsake made just for them</li>
              <li><span>02</span> Thoughtful, gift-ready packaging</li>
              <li><span>03</span> Carefully protected on its way to you</li>
            </ul>
            <a className="text-link" href="#gift-details">
              Discover the gift experience <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="care-section section-pad" id="gift-details">
          <CareGallery />
          <div className="care-copy">
            <span className="eyebrow">A LITTLE REASSURANCE</span>
            <h2>
              Care, at <em>every layer.</em>
            </h2>
            <p>
              Every keepsake gets a careful once-over, a safe little nest and
              packaging that makes opening it feel like part of the present.
            </p>
            <div className="care-included">
              <h3>Thoughtfully made, from start to finish</h3>
              <ul>
                <li>Personalized around your favourite photograph</li>
                <li>Carefully checked before it makes its way to you</li>
                <li>Protected, gift-ready packaging</li>
                <li>Designed to make opening it feel special</li>
              </ul>
            </div>
            <div className="care-actions">
              <a className="button button-gold" href="#create">
                Make a keepsake <span aria-hidden="true">↗</span>
              </a>
              <a className="care-secondary-link" href="#packaging">
                Explore the gift experience
              </a>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq" aria-labelledby="faq-title">
          <div className="faq-list">
            <div className="faq-heading">
              <span className="eyebrow">HERE TO HELP YOU HOLD ONTO A MOMENT</span>
              <h2 id="faq-title">Frequently asked questions</h2>
            </div>
            <div className="faq-questions">
              {faqs.map(({ question, answer }) => (
                <details className="faq-item" key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
          <figure className="faq-visual">
            <div className="faq-image">
              <Image
                src="/images/faq-tree-story.png"
                alt="Illustrated story treehouse with a keepsake message, reading area and replay button"
                fill
                sizes="(max-width: 760px) 100vw, 32vw"
              />
            </div>
            <figcaption>A little piece of your forever.</figcaption>
          </figure>
        </section>

        <section className="closing-quote">
          <span className="eyebrow">A MEMORY FOR YOU. A NISHAANI FOR ALWAYS.</span>
          <p>
            “Some things are too special
            <br />
            to stay in a photograph.”
          </p>
          <span className="quote-flourish" aria-hidden="true">✳</span>
        </section>

        <section className="final-cta" id="create">
          <div>
            <span className="eyebrow">YOUR STORY STARTS HERE.</span>
            <h2>
              A beautiful
              <br />
              <em>beginning.</em>
            </h2>
          </div>
          <div className="final-cta-action">
            <p>Tell us about the moment you want to hold onto.</p>
            <a className="button button-cream" href="mailto:hello@nishaani.com">
              Create your Nishaani <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand-column">
            <a className="brand footer-brand" href="#home" aria-label="Nishaani home">
              <span className="brand-name">nishaani</span>
              <span className="brand-caption">YOUR MEMORIES, MADE PERSONAL</span>
            </a>
            <p className="footer-tagline">A little piece of your forever.</p>
            <p className="footer-description">
              Thoughtful keepsakes, made from the photographs and people you
              never want to forget.
            </p>
          </div>

          <nav className="footer-links" aria-label="Explore Nishaani">
            <h2>Explore</h2>
            <a href="#occasions">The collections</a>
            <a href="#transformation">Our story</a>
            <a href="#how-it-works">How it works</a>
            <a href="#packaging">The gift experience</a>
          </nav>

          <nav className="footer-links" aria-label="Help and information">
            <h2>Here to help</h2>
            <a href="#faq">Frequently asked questions</a>
            <a href="#gift-details">Care & packaging</a>
            <a href="#create">Get in touch</a>
          </nav>

          <div className="footer-contact">
            <span className="footer-eyebrow">KEEP A MOMENT CLOSE</span>
            <p>Have a story in mind? We would love to hear it.</p>
            <a href="mailto:hello@nishaani.com">
              hello@nishaani.com <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright">
            © 2026 NISHAANI. MADE WITH MEANING.
          </span>
          <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </>
  );
}
