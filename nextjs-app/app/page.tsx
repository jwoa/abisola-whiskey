import Image from 'next/image'

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-whiskey.jpg"
            alt="Abisola Whiskey bottle with ambient lighting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/40" />
        </div>
        <div className="container relative z-10 text-cream">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-7xl mb-6">
              Triple Oak Aged Excellence
            </h1>
            <p className="text-lg md:text-xl mb-8 text-cream/90">
              A smooth tasting whiskey crafted with three distinct oak profiles, 
              delivering notes of vanilla, waffle cone, caramel, and spice.
            </p>
            <a 
              href="/stockists" 
              className="inline-block bg-amber hover:bg-gold transition-colors px-8 py-3 rounded text-cream font-medium"
            >
              Find Near You
            </a>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-charcoal">
                Crafted with Nigerian Spirit
              </h2>
              <p className="text-lg mb-6 text-charcoal/80">
                Founded by a young Nigerian visionary, Abisola Whiskey represents 
                the perfect blend of tradition and innovation. Our unique triple oak 
                aging process creates a whiskey that's both bold and sophisticated.
              </p>
              <a 
                href="/about" 
                className="text-amber hover:text-gold transition-colors font-medium inline-flex items-center"
              >
                Discover Our Story
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/founder.jpg"
                alt="Abisola Whiskey founder"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tasting Notes Section */}
      <section className="py-20 bg-charcoal text-cream">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            Distinctive Tasting Notes
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Vanilla', desc: 'Sweet and creamy' },
              { name: 'Waffle Cone', desc: 'Toasted and aromatic' },
              { name: 'Caramel', desc: 'Rich and smooth' },
              { name: 'Spice', desc: 'Warm and complex' },
            ].map((note) => (
              <div key={note.name} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-serif text-2xl text-gold">{note.name[0]}</span>
                </div>
                <h3 className="font-serif text-xl mb-2">{note.name}</h3>
                <p className="text-cream/60">{note.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-amber/10">
        <div className="container max-w-xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Join the Journey
          </h2>
          <p className="text-lg mb-8 text-charcoal/80">
            Subscribe to receive exclusive tasting notes, cocktail recipes, and 
            updates from the world of Abisola Whiskey.
          </p>
          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded bg-cream border border-amber/20 focus:border-amber focus:ring-1 focus:ring-amber outline-none"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="bg-amber hover:bg-gold transition-colors px-8 py-3 rounded text-cream font-medium"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
