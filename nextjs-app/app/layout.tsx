import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: 'Abisola Whiskey',
  description: 'A smooth tasting whiskey with triple oak aging, blending bourbon and malt whiskey with notes of vanilla, waffle cone, caramel, and spice.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream text-charcoal antialiased">
        <header className="fixed top-0 w-full bg-cream/80 backdrop-blur-sm z-50">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-serif text-2xl text-amber hover:text-gold transition-colors">
              Abisola
            </a>
            <div className="flex gap-6 font-sans">
              <a href="/about" className="hover:text-amber transition-colors">About</a>
              <a href="/cocktails" className="hover:text-amber transition-colors">Cocktails</a>
              <a href="/blog" className="hover:text-amber transition-colors">Blog</a>
              <a href="/contact" className="hover:text-amber transition-colors">Contact</a>
              <a href="/stockists" className="hover:text-amber transition-colors">Stockists</a>
            </div>
          </nav>
        </header>
        <main className="pt-20">
          {children}
        </main>
        <footer className="bg-charcoal text-cream mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-serif text-xl mb-4">Abisola Whiskey</h3>
                <p className="text-sm opacity-80">A smooth tasting whiskey where tradition meets innovation.</p>
              </div>
              <div>
                <h4 className="font-serif text-lg mb-4">Quick Links</h4>
                <div className="flex flex-col space-y-2">
                  <a href="/about" className="hover:text-gold transition-colors">About</a>
                  <a href="/cocktails" className="hover:text-gold transition-colors">Cocktails</a>
                  <a href="/blog" className="hover:text-gold transition-colors">Blog</a>
                  <a href="/contact" className="hover:text-gold transition-colors">Contact</a>
                  <a href="/stockists" className="hover:text-gold transition-colors">Stockists</a>
                </div>
              </div>
              <div>
                <h4 className="font-serif text-lg mb-4">Connect</h4>
                <p className="text-sm mb-4">Join our newsletter for exclusive updates and tasting notes.</p>
                <form className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-4 py-2 rounded bg-cream/10 border border-cream/20 focus:border-gold outline-none flex-1"
                    aria-label="Email for newsletter"
                  />
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-amber hover:bg-gold transition-colors rounded text-cream"
                    aria-label="Subscribe to newsletter"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-cream/20 text-center text-sm opacity-60">
              {new Date().getFullYear()} Abisola Whiskey. Please drink responsibly.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
