import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-bold tracking-wide">Qskill</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link className="hover:text-blue-600" to="/">Internships</Link>
          <Link className="hover:text-blue-600" to="/verify">Verify</Link>
          <Link className="hover:text-blue-600" to="/">About Us</Link>
          <Link className="hover:text-blue-600" to="/">Contact Us</Link>
          <Button className="rounded-2xl">Login</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3 text-sm">
          <Link to="/" onClick={() => setOpen(false)}>Internships</Link>
          <Link to="/verify" onClick={() => setOpen(false)}>Verify</Link>
          <Link to="/" onClick={() => setOpen(false)}>About Us</Link>
          <Link to="/" onClick={() => setOpen(false)}>Contact Us</Link>
          <Button className="rounded-xl w-full">Login</Button>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid gap-6 md:grid-cols-2 text-center md:text-left">
        <div>
          <h2 className="text-xl font-semibold text-white">Qskill</h2>
          <p className="mt-2 text-sm">Professional training with real-world hands-on projects.</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
          <span>Internships</span>
          <span>Verify</span>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Login</span>
        </div>
      </div>
      <div className="text-center text-xs pb-6">© {new Date().getFullYear()} Qskill. All rights reserved.</div>
    </footer>
  );
}

function Home() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Card className="rounded-2xl shadow-xl max-w-xl w-full">
          <CardContent className="p-6 md:p-10 text-center">
            <h1 className="text-2xl md:text-4xl font-bold">We’re Renovating 🚧</h1>
            <p className="mt-4 text-zinc-600 text-sm md:text-base">
              Our website is currently under renovation. We’re building something powerful for internships,
              verification, and career growth.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild className="rounded-2xl w-full sm:w-auto">
                <Link to="/verify">Verify Certificate</Link>
              </Button>
              <Button variant="outline" className="rounded-2xl w-full sm:w-auto">
                Explore Internships
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

function Verify() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-zinc-50 to-blue-100 px-4">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <Card className="rounded-2xl shadow-xl w-full max-w-lg">
          <CardContent className="p-6 md:p-8 text-center">
            <h2 className="text-xl md:text-2xl font-semibold">Verify Certificate</h2>
            <p className="text-sm text-zinc-600 mt-2">Enter your Certificate ID to verify authenticity.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-2">
              <input
                className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Certificate ID"
              />
              <Button className="rounded-xl w-full sm:w-auto">Search</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
