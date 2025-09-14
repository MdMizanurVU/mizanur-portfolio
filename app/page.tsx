import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Navigation from '@/components/Navigation'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      
      <div className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
      
      <ChatWidget />
    </main>
  )
}