import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  )
}
