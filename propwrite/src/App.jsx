import { useState } from 'react';
import './index.css';

const TABS = ['All', 'Reports', 'Listings', 'Blog Posts'];
const CONTENT_TYPES = ['Market Analysis Report', 'Property Listing', 'Blog Post'];

const FEATURES = [
  {
    title: 'Market Analysis Reports',
    description: 'Comprehensive market reports with data-driven insights tailored to any neighborhood or property type.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
  },
  {
    title: 'Property Listings',
    description: 'Compelling listing descriptions that highlight key features and attract qualified buyers faster.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
  },
  {
    title: 'Blog Posts & Articles',
    description: 'SEO-optimized content that positions you as a market expert and drives organic traffic to your site.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />,
  },
];

const STATS = [
  { value: '10,000+', label: 'Reports Generated' },
  { value: '2,500+', label: 'Active Agents' },
  { value: '50+', label: 'Countries Served' },
  { value: '4.9 / 5', label: 'User Rating' },
];

const SAMPLES = [
  {
    type: 'Reports',
    title: 'Q2 2025 Manhattan Market Report',
    body: `The Manhattan residential market showed resilience in Q2 2025, with median sale prices rising 4.2% YoY to $1.35M. Inventory remains tight at 2.8 months of supply, keeping conditions firmly in seller territory.

Key Highlights:
• Median sale price: $1,350,000 (+4.2% YoY)
• Days on market: 34 (down from 42 in Q1)
• Sale-to-list ratio: 98.6%
• New listings: 2,847 units (-8% YoY)

The luxury segment ($3M+) saw 12% volume growth driven by international buyers returning post-pandemic. Co-op inventory tightened most severely in the Upper West Side and Upper East Side submarkets.

Outlook: With the Fed signaling one additional rate cut in H2 2025, demand is expected to remain strong through year-end. Buyers should anticipate continued competition for well-priced listings under $2M.`,
  },
  {
    type: 'Listings',
    title: '347 Park Ave Unit 12B — Listing Description',
    body: `Breathtaking views meet timeless elegance in this sun-drenched 2BR/2BA corner residence perched on the 12th floor of a premier Park Avenue full-service building.

Soaring 10-ft beamed ceilings, a chef's kitchen outfitted with Sub-Zero refrigerator, Wolf range, and Calacatta marble countertops, and wide-plank white oak floors throughout set this home apart from the rest.

The expansive living and dining area flows seamlessly onto a private 180 sq ft terrace overlooking the iconic midtown skyline — perfect for morning coffee or evening entertaining.

The king-size primary suite features a spa-inspired bath with radiant heat floors and dual vanities. The second bedroom doubles as a home office with custom built-ins.

Building amenities: 24-hr doorman, fitness center, rooftop garden, bike storage, and on-site garage. Pied-à-terre and co-purchasing allowed. Pets welcome.

Offered at $2,750,000 | Common charges: $2,180/mo | Taxes: $3,120/mo`,
  },
  {
    type: 'Blog Posts',
    title: '5 Mistakes First-Time Buyers Make in 2025',
    body: `Navigating today's real estate market as a first-time buyer is no small feat. With interest rates stabilizing and inventory slowly improving, buyers face a unique set of challenges. Here are the five most common mistakes — and how to avoid them.

1. Skipping Mortgage Pre-Approval
Many buyers start their search before knowing their true budget. A pre-approval letter not only clarifies your ceiling — it signals to sellers that you're a serious, qualified buyer in a competitive market.

2. Underestimating Closing Costs
Beyond the down payment, expect to budget 2–5% of the purchase price for closing costs: title insurance, attorney fees, transfer taxes, and lender fees. On a $600K home, that's $12,000–$30,000 in additional cash needed.

3. Making Emotional Decisions
It's easy to fall in love with a property and overlook red flags. Always complete a professional home inspection — even in "as-is" markets — and be prepared to walk away if the numbers don't work.

4. Ignoring the Neighborhood's Trajectory
A home is only as valuable as the block it sits on. Research school ratings, pending development projects, and 5-year price appreciation trends before committing.

5. Not Working With a Buyer's Agent
In most states, the seller pays both agents' commissions. A skilled buyer's agent costs you nothing and negotiates on your behalf. Don't leave that expertise on the table.`,
  },
];

function generateContent(type, topic) {
  const t = topic.trim() || 'your property';
  if (type === 'Market Analysis Report') {
    return `# Market Analysis Report: ${t}

## Executive Summary
The ${t} market is showing strong fundamentals heading into the current quarter. Median prices have appreciated 3.8% year-over-year, supported by constrained inventory and steady buyer demand.

## Key Metrics
• Median Sale Price: $485,000 (+3.8% YoY)
• Average Days on Market: 28 days
• List-to-Sale Ratio: 98.2%
• Active Inventory: 1.4 months of supply
• New Listings (30-day): 312 units

## Market Conditions
Supply remains below the 3-month threshold that signals a balanced market, keeping negotiating power firmly with sellers. Homes priced correctly are receiving multiple offers within the first week of listing.

## Demand Drivers
Remote work flexibility continues to attract buyers from higher-cost metros. First-time buyer activity is up 11% driven by stabilizing mortgage rates in the 6.5–6.8% range.

## Price Forecast
Based on current absorption rates and historical seasonality, prices are projected to rise an additional 2–4% over the next 6 months. A significant inventory increase could moderate this, but no large-scale additions are anticipated.

## Recommendation
For sellers: list now before seasonal slowdown. For buyers: act decisively on well-priced properties — hesitation costs in this market.`;
  }

  if (type === 'Property Listing') {
    return `# Property Listing: ${t}

## Description
Welcome to this exceptional property — a rare opportunity combining sophisticated design with everyday livability. Thoughtfully updated and meticulously maintained, this home is truly move-in ready.

## Highlights
• Bright, open-concept living and dining area with hardwood floors throughout
• Fully renovated chef's kitchen: quartz countertops, stainless appliances, custom cabinetry
• Spacious primary suite with walk-in closet and en-suite bath featuring double vanity
• Two additional bedrooms ideal for guests, family, or a dedicated home office
• Private backyard with deck — perfect for entertaining or relaxing

## Location
Nestled on a quiet, tree-lined street minutes from top-rated schools, neighborhood parks, and vibrant local dining. Easy access to major commuter routes and public transit.

## Details
Bedrooms: 3 | Bathrooms: 2 | Square Footage: 1,850 sq ft | Lot Size: 6,200 sq ft | Year Built: 1998 | Garage: 2-car attached

## Asking Price
$649,000

Don't miss this one — properties at this price point with these finishes move fast. Schedule your private showing today.`;
  }

  return `# Blog Post: ${t}

## Introduction
Whether you're a seasoned investor or stepping into real estate for the first time, understanding the dynamics of ${t} is essential to making smart, confident decisions in today's market.

## Why This Matters Now
The real estate landscape has shifted meaningfully in the past 18 months. Interest rate stabilization, evolving work patterns, and changing buyer demographics have created new pockets of opportunity — and new risks.

## Key Insights

**1. Timing Is Less Critical Than Pricing**
Many buyers wait for the "perfect" market moment. The data consistently shows that buying a well-priced property in a strong location outperforms market timing over any 5-year horizon.

**2. Local Beats National**
National headlines rarely reflect your specific submarket. A zip code 10 minutes away can behave completely differently. Focus on hyper-local data: absorption rates, price-per-sqft trends, and days-on-market.

**3. Your Agent Is Your Edge**
In a data-rich world, the agent's value has shifted from information provider to skilled negotiator and advisor. Choose someone with a proven track record in your specific target area.

## Action Steps
- Define your non-negotiables vs. nice-to-haves before viewing properties
- Get pre-approved and understand your true all-in monthly cost
- Review at least 6 months of comparable sales before making an offer
- Build a 3% cushion above your maximum budget for negotiation flexibility

## Conclusion
Success in real estate comes from preparation, local knowledge, and decisive action. Use the insights above to approach ${t} with clarity and confidence.`;
}

// ── Icons ────────────────────────────────────────────────
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
function XIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
function ChevronIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  );
}
function CopyIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

// ── Modal shell ───────────────────────────────────────────
function Modal({ title, onClose, wide, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8 overflow-y-auto" onClick={onClose}>
      <div
        className={`bg-white rounded-2xl shadow-2xl w-full ${wide ? 'max-w-2xl' : 'max-w-md'} p-8 relative my-auto`}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
          <XIcon className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-slate-900 mb-6">{title}</h2>
        {children}
      </div>
    </div>
  );
}

// ── Auth modal ────────────────────────────────────────────
function AuthModal({ mode, onClose, onSwitch, onAuth }) {
  const isSignIn = mode === 'signin';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuth(email || 'user@example.com');
    onClose();
  };

  return (
    <Modal title={isSignIn ? 'Sign In' : 'Create your account'} onClose={onClose}>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {!isSignIn && (
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1 block">Full Name</label>
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Jane Smith"
              className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition" />
          </div>
        )}
        <div>
          <label className="text-xs font-medium text-slate-600 mb-1 block">Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="you@example.com"
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition" />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-600 mb-1 block">Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="••••••••"
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition" />
        </div>
        <button type="submit"
          className="bg-brand text-white font-semibold py-2.5 rounded-lg hover:bg-brand-dark transition-colors mt-2">
          {isSignIn ? 'Sign In' : 'Create Account — Free'}
        </button>
      </form>
      <p className="text-xs text-center text-slate-400 mt-4">
        {isSignIn ? "Don't have an account? " : 'Already have an account? '}
        <button onClick={onSwitch} className="text-brand font-semibold hover:underline">
          {isSignIn ? 'Sign up free' : 'Sign in'}
        </button>
      </p>
    </Modal>
  );
}

// ── Sample reports modal ──────────────────────────────────
function SamplesModal({ onClose }) {
  const [active, setActive] = useState(0);
  return (
    <Modal title="Sample Reports" onClose={onClose} wide>
      <div className="flex gap-2 mb-5 flex-wrap">
        {SAMPLES.map((s, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${active === i ? 'bg-brand text-white border-brand' : 'border-slate-200 text-slate-500 hover:border-brand hover:text-brand'}`}>
            {s.type}
          </button>
        ))}
      </div>
      <div className="bg-canvas rounded-xl p-5 border border-slate-200 max-h-80 overflow-y-auto">
        <p className="text-xs font-semibold text-brand mb-2">{SAMPLES[active].type.toUpperCase()}</p>
        <h3 className="text-sm font-bold text-slate-900 mb-3">{SAMPLES[active].title}</h3>
        <pre className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap font-sans">{SAMPLES[active].body}</pre>
      </div>
    </Modal>
  );
}

// ── New content / generate modal ──────────────────────────
function NewContentModal({ onClose, onSave }) {
  const [type, setType] = useState(CONTENT_TYPES[0]);
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setResult(generateContent(type, topic));
      setLoading(false);
    }, 1800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    onSave({ type, title: topic, body: result });
    onClose();
  };

  if (result) {
    return (
      <Modal title="Generated Content" onClose={onClose} wide>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-brand bg-brand-muted px-2 py-0.5 rounded-full">{type}</span>
          <button onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-brand transition-colors border border-slate-200 px-3 py-1.5 rounded-lg hover:border-brand">
            <CopyIcon className="w-3.5 h-3.5" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="bg-canvas rounded-xl p-5 border border-slate-200 max-h-72 overflow-y-auto mb-5">
          <pre className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-sans">{result}</pre>
        </div>
        <div className="flex gap-3">
          <button onClick={handleSave}
            className="flex-1 bg-brand text-white font-semibold py-2.5 rounded-lg hover:bg-brand-dark transition-colors">
            Save to My Content
          </button>
          <button onClick={() => setResult(null)}
            className="flex-1 border border-slate-200 text-slate-600 font-medium py-2.5 rounded-lg hover:border-brand hover:text-brand transition-colors">
            Regenerate
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal title="Create New Content" onClose={onClose}>
      <form className="flex flex-col gap-4" onSubmit={handleGenerate}>
        <div>
          <label className="text-xs font-medium text-slate-600 mb-1 block">Content Type</label>
          <select value={type} onChange={e => setType(e.target.value)}
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition bg-white">
            {CONTENT_TYPES.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-slate-600 mb-1 block">
            {type === 'Market Analysis Report' ? 'Neighborhood / City' :
             type === 'Property Listing' ? 'Property Address or Description' :
             'Blog Topic'}
          </label>
          <input type="text" value={topic} onChange={e => setTopic(e.target.value)}
            placeholder={
              type === 'Market Analysis Report' ? 'e.g. Brooklyn, NY' :
              type === 'Property Listing' ? 'e.g. 3BR condo in Austin, TX' :
              'e.g. First-time buyer tips in 2025'
            }
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition" />
        </div>
        <button type="submit" disabled={!topic.trim() || loading}
          className="bg-brand text-white font-semibold py-2.5 rounded-lg hover:bg-brand-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed mt-2 flex items-center justify-center gap-2">
          {loading ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              Generating…
            </>
          ) : 'Generate Content'}
        </button>
      </form>
    </Modal>
  );
}

// ── Content detail modal ──────────────────────────────────
function ContentDetailModal({ item, onClose, onDelete }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(item.body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Modal title={item.title} onClose={onClose} wide>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-brand bg-brand-muted px-2 py-0.5 rounded-full">{item.type}</span>
        <div className="flex gap-2">
          <button onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-brand transition-colors border border-slate-200 px-3 py-1.5 rounded-lg hover:border-brand">
            <CopyIcon className="w-3.5 h-3.5" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button onClick={onDelete}
            className="text-xs text-red-400 hover:text-red-600 transition-colors border border-red-100 px-3 py-1.5 rounded-lg hover:border-red-300">
            Delete
          </button>
        </div>
      </div>
      <div className="bg-canvas rounded-xl p-5 border border-slate-200 max-h-80 overflow-y-auto">
        <pre className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-sans">{item.body}</pre>
      </div>
    </Modal>
  );
}

// ── Feature card ──────────────────────────────────────────
function FeatureCard({ title, description, icon }) {
  return (
    <div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-brand hover:shadow-lg transition-all duration-200 cursor-default">
      <div className="w-12 h-12 rounded-xl bg-brand-muted flex items-center justify-center mb-5 group-hover:bg-brand transition-colors duration-200">
        <svg className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState('All');
  const [modal, setModal] = useState(null);
  const [user, setUser] = useState(null);
  const [contents, setContents] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const closeModal = () => setModal(null);
  const handleAuth = (email) => setUser({ email });
  const handleLogout = () => setUser(null);

  const handleSave = (item) => {
    setContents(prev => [{
      id: Date.now(),
      ...item,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    }, ...prev]);
  };

  const handleDelete = (id) => {
    setContents(prev => prev.filter(c => c.id !== id));
    setSelectedItem(null);
  };

  const filtered = activeTab === 'All'
    ? contents
    : contents.filter(c => {
        if (activeTab === 'Reports') return c.type === 'Market Analysis Report';
        if (activeTab === 'Listings') return c.type === 'Property Listing';
        if (activeTab === 'Blog Posts') return c.type === 'Blog Post';
        return true;
      });

  return (
    <div className="min-h-screen bg-canvas font-sans">

      {/* ── Modals ── */}
      {(modal === 'signin' || modal === 'signup') && (
        <AuthModal mode={modal} onClose={closeModal}
          onSwitch={() => setModal(modal === 'signin' ? 'signup' : 'signin')}
          onAuth={handleAuth} />
      )}
      {modal === 'samples' && <SamplesModal onClose={closeModal} />}
      {modal === 'newcontent' && <NewContentModal onClose={closeModal} onSave={handleSave} />}
      {selectedItem && (
        <ContentDetailModal item={selectedItem} onClose={() => setSelectedItem(null)}
          onDelete={() => handleDelete(selectedItem.id)} />
      )}

      {/* ── Navbar ── */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center shadow-sm">
                <HouseIcon className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                PropWrite<span className="text-brand"> AI</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-7">
              {['Features', 'Pricing', 'About'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`}
                  className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">{link}</a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              {user ? (
                <>
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs bg-brand-muted text-brand px-3 py-1.5 rounded-full font-semibold">
                    Credits:&nbsp;<strong>{Math.max(0, 10 - contents.length)}</strong>
                  </span>
                  <span className="text-sm text-slate-600 font-medium hidden sm:block">{user.email}</span>
                  <button onClick={handleLogout}
                    className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs bg-brand-muted text-brand px-3 py-1.5 rounded-full font-semibold">
                    Credits:&nbsp;<strong>10</strong>
                  </span>
                  <button onClick={() => setModal('signin')}
                    className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">
                    Sign in
                  </button>
                  <button onClick={() => setModal('signup')}
                    className="bg-brand text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors shadow-sm">
                    Get Started
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-muted to-canvas pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
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
            PropWrite AI helps you create market analysis reports, property listings, and blog posts — trusted by thousands of real estate professionals worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={() => setModal('newcontent')}
              className="w-full sm:w-auto bg-brand text-white font-bold px-8 py-3 rounded-xl hover:bg-brand-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm">
              Start Free — No Card Required
            </button>
            <button onClick={() => setModal('samples')}
              className="w-full sm:w-auto bg-white text-slate-600 font-medium px-8 py-3 rounded-xl border border-slate-200 hover:border-brand hover:text-brand transition-all text-sm shadow-sm">
              View Sample Reports →
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-4">10 free generations · Cancel anytime</p>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Everything you need to write better</h2>
            <p className="text-sm md:text-base text-slate-500 max-w-lg mx-auto">Save hours every week. Generate professional-grade content in seconds.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FEATURES.map(f => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-14 bg-canvas border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-extrabold text-brand mb-1">{s.value}</div>
                <div className="text-xs md:text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dashboard ── */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Your Content</h2>
              <p className="text-sm text-slate-500 mt-0.5">Manage all your AI-generated content</p>
            </div>
            <button onClick={() => setModal('newcontent')}
              className="inline-flex items-center gap-2 bg-brand text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-dark transition-colors shadow-sm">
              <PlusIcon className="w-4 h-4" />
              New Content
            </button>
          </div>

          <div className="flex gap-1 p-1 bg-canvas border border-slate-200 rounded-xl w-fit mb-6">
            {TABS.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab ? 'bg-white text-brand shadow-sm border border-slate-200' : 'text-slate-500 hover:text-slate-900'
                }`}>
                {tab}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="flex flex-col gap-3">
              {filtered.map(item => (
                <button key={item.id} onClick={() => setSelectedItem(item)}
                  className="flex items-center justify-between p-5 bg-white border border-slate-200 rounded-xl hover:border-brand hover:shadow-sm transition-all text-left w-full">
                  <div>
                    <span className="text-xs font-semibold text-brand bg-brand-muted px-2 py-0.5 rounded-full">{item.type}</span>
                    <h3 className="text-sm font-semibold text-slate-900 mt-2">{item.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{item.date}</p>
                  </div>
                  <ChevronIcon className="w-4 h-4 text-slate-300 flex-shrink-0" />
                </button>
              ))}
            </div>
          ) : (
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-16 text-center bg-canvas">
              <div className="w-14 h-14 bg-brand-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">No content yet</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6 leading-relaxed">
                Start creating professional real estate content. Market reports, listings, and more — all in seconds.
              </p>
              <button onClick={() => setModal('newcontent')}
                className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-dark transition-colors shadow-sm">
                <PlusIcon className="w-4 h-4" />
                Create first content
              </button>
            </div>
          )}
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
              <a key={link} href="#" className="text-xs text-slate-500 hover:text-brand transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
