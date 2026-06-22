"use client"

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#1e1e2e]">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-slate-600 text-sm font-mono">
          Designed &amp; built by{" "}
          <span className="text-violet-500">Shubham Mittal</span>{" "}
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
