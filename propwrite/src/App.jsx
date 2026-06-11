import { useState } from 'react';
import './index.css';

const TABS = ['All', 'Reports', 'Listings', 'Blog Posts'];

const FEATURES = [
  {
    title: 'Market Analysis Reports',
    description:
      'Comprehensive market reports with data-driven insights tailored to any neighborhood or property type.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
  },
  {
    title: 'Property Listings',
    description:
      'Compelling listing descriptions that highlight key features and attract qualified buyers faster.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
  },
  {
    title: 'Blog Posts & Articles',
    description:
      'SEO-optimized content that positions you as a market expert and drives organic traffic to your site.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    ),
  },
];

const STATS = [
  { value: '10,000+', label: 'Reports Generated' },
  { value: '2,500+', label: 'Active Agents' },
  { value: '50+',    label: 'Countries Served' },
  { value: '4.9 / 5', label: 'User Rating' },
];

function HouseIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  );
}

function PlusIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
    </svg>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-brand hover:shadow-lg transition-all duration-200 cursor-default">
      <div className="w-12 h-12 rounded-xl bg-brand-muted flex items-center justify-center mb-5 group-hover:bg-brand transition-colors duration-200">
        <svg
          className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="min-h-screen bg-canvas font-sans">

      {/* ── Navbar ── */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center shadow-sm">
                <HouseIcon className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                PropWrite<span className="text-brand"> AI</span>
              </span>
            </div>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-7">
              {['Features', 'Pricing', 'About'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Auth area */}
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1 text-xs bg-brand-muted text-brand px-3 py-1.5 rounded-full font-semibold">
                Credits:&nbsp;<strong>0</strong>
              </span>
              <button className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">
                Sign in
              </button>
              <button className="bg-brand text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors shadow-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-muted to-canvas pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            AI-Powered Real Estate Writing Tool
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
            Generate Expert<br />
            <span className="text-brand">Real Estate Content</span><br />
            in Seconds
          </h1>

          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
            PropWrite AI helps you create market analysis reports, property listings, and blog
            posts — trusted by thousands of real estate professionals worldwide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="w-full sm:w-auto bg-brand text-white font-bold px-8 py-3 rounded-xl hover:bg-brand-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm">
              Start Free — No Card Required
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-600 font-medium px-8 py-3 rounded-xl border border-slate-200 hover:border-brand hover:text-brand transition-all text-sm shadow-sm">
              View Sample Reports →
            </button>
          </div>

          <p className="text-xs text-slate-400 mt-4">
            10 free generations · Cancel anytime
          </p>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Everything you need to write better
            </h2>
            <p className="text-sm md:text-base text-slate-500 max-w-lg mx-auto">
              Save hours every week. Generate professional-grade content in seconds.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FEATURES.map(f => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-14 bg-canvas border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-extrabold text-brand mb-1">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dashboard ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Your Content</h2>
              <p className="text-sm text-slate-500 mt-0.5">
                Manage all your AI-generated content
              </p>
            </div>
            <button className="inline-flex items-center gap-2 bg-brand text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-dark transition-colors shadow-sm">
              <PlusIcon className="w-4 h-4" />
              New Content
            </button>
          </div>

          {/* Tab bar */}
          <div className="flex gap-1 p-1 bg-canvas border border-slate-200 rounded-xl w-fit mb-6">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-white text-brand shadow-sm border border-slate-200'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Empty state */}
          <div className="border-2 border-dashed border-slate-200 rounded-2xl p-16 text-center bg-canvas">
            <div className="w-14 h-14 bg-brand-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-7 h-7 text-brand"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">No content yet</h3>
            <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6 leading-relaxed">
              Start creating professional real estate content. Market reports, listings, and more — all in seconds.
            </p>
            <button className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-dark transition-colors shadow-sm">
              <PlusIcon className="w-4 h-4" />
              Create first content
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-canvas border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-brand flex items-center justify-center">
              <HouseIcon className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-bold text-slate-900">PropWrite AI</span>
          </div>

          <p className="text-xs text-slate-400">© 2025 PropWrite AI. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Contact'].map(link => (
              <a
                key={link}
                href="#"
                className="text-xs text-slate-500 hover:text-brand transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
