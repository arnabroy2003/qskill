import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { useState } from "react";
import axios from "axios";
import { ShieldCheck, Search, Loader2, Award, ExternalLink } from "lucide-react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-left">
  <img
    src="https://res.cloudinary.com/dvqqjadcf/image/upload/v1771142458/qskill_logo_trans_rv9jn5.png"
    alt="Qskill Logo"
    className="h-8 md:h-10 w-auto"
  />
</Link>


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

function DetailItem({ label, value, mono }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-zinc-900/60 p-4 transition-all hover:border-white/20 hover:bg-zinc-900/80">
      <p className="text-xs uppercase tracking-wider text-zinc-500">{label}</p>
      <p className={`mt-1 text-sm font-medium text-white ${mono ? "font-mono" : ""}`}>
        {value || "—"}
      </p>
    </div>
  );
}

function Verify() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!certId) return;

    try {
      setLoading(true);
      setError("");
      setResult(null);

      const res = await axios.get(`https://qskill-backend-1.onrender.com/verify/${certId}`);
      setResult(res.data);
    } catch (err) {
      setError("❌ Certificate not found");
    } finally {
      setLoading(false);
    }
  };

  return (
  <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 py-16 selection:bg-blue-500/30">
    {/* Ambient Glows */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-[15%] -left-[15%] h-[45%] w-[45%] rounded-full bg-blue-600/15 blur-[140px]" />
      <div className="absolute -bottom-[15%] -right-[15%] h-[45%] w-[45%] rounded-full bg-indigo-600/15 blur-[140px]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-500/10 to-transparent" />
    </div>

    <div className="relative w-full max-w-2xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 p-3 shadow-[0_0_40px_rgba(59,130,246,0.25)]">
          <ShieldCheck className="h-9 w-9 text-blue-400 drop-shadow" />
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Verification Portal
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400 md:text-base">
          Instantly validate official credentials with cryptographic-grade confidence.
        </p>
      </div>

      {/* Search Card */}
      <div className="group relative rounded-[2rem] border border-white/10 bg-zinc-900/60 p-2 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/20">
        {/* subtle top gradient */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="flex flex-col gap-2 p-2 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              className="w-full rounded-2xl border border-zinc-700/50 bg-zinc-800/60 px-11 py-4 text-white outline-none transition-all placeholder:text-zinc-500 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/40"
              placeholder="Enter Certificate ID (e.g. QS-2026-0193)"
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={loading}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(79,70,229,0.35)] transition-all active:scale-95 disabled:opacity-70"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Verify"}
            </span>
            {/* hover sheen */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-red-400/20 bg-red-400/10 py-3 text-red-300 animate-in fade-in slide-in-from-top-2">
          <span className="text-xs font-medium">{error}</span>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md animate-in fade-in zoom-in-95 duration-500">
          {/* top glow line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

          <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-blue-400" />
              <span className="font-medium text-white">Credential Details</span>
            </div>
            <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-300 ring-1 ring-emerald-500/20">
              Verified
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2">
            <DetailItem label="Recipient Name" value={result.name || result["﻿name"] || "—"} />
            <DetailItem label="Credential Domain" value={result.domain} />
            <DetailItem label="Duration" value={result.duration} />
            <DetailItem label="Email Address" value={result.email} />
            <DetailItem label="Certificate ID" value={result.id} mono />
          </div>

          <div className="px-8 pb-8">
            <a
              href={result.link}
              target="_blank"
              rel="noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-800/80 py-4 text-white transition-all hover:bg-zinc-700/80 hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]"
            >
              <span>View Full Certificate</span>
              <ExternalLink className="h-4 w-4 text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400" />
            </a>
          </div>
        </div>
      )}
    </div>
  </section>
);
}

function Apply() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100">
      <Card className="rounded-2xl shadow-xl w-[90vw] max-w-md">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-semibold">Qskill Internship</h2>
          <p className="text-sm text-zinc-600 mt-2">
            Apply now to join our internship program and work on real-world projects.
          </p>

          <div className="mt-6">
            <Button
              className="rounded-xl w-full"
              onClick={() => window.location.href = "https://forms.gle/QJAQS8AkiMKuRYEF8"}
            >
              Apply for Internship
            </Button>
          </div>
        </CardContent>
      </Card>
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
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
