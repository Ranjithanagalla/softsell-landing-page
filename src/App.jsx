import React, { useState } from 'react';

export default function App() {
  // Theme State
  const [darkMode, setDarkMode] = useState(true);

  // Form States
  const [formData, setFormData] = useState({ name: '', email: '', software: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Chat Widget States
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hi! Looking to slash your enterprise software costs by up to 50%? Ask me anything about our licensing!' }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Handle Form Input Changes
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  // Form Validation and Submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid corporate email';
    }
    if (!formData.software) errors.software = 'Please select a software platform';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      console.log('Lead Captured:', formData);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', software: '' });
    }
  };

  // Chat Submission
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = { sender: 'user', text: chatInput };
    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput('');

    // Simulated Entrepreneurial Bot Reply
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Got it! Our license verification team can source that for you. Drop your email in our contact form above for a formal quote within 2 hours!' }
      ]);
    }, 1000);
  };

  return (
    <div className={darkMode ? 'dark bg-slate-955 text-slate-100 min-h-screen' : 'bg-slate-50 text-slate-900 min-h-screen'}>
      
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur-md border-b bg-white/70 dark:bg-slate-950/70 border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-blue-600 dark:text-blue-500">Soft<span className="text-slate-800 dark:text-white">Sell</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#process" className="hover:text-blue-500 transition">How it Works</a>
            <a href="#why-choose-us" className="hover:text-blue-500 transition">Value Proposition</a>
            <a href="#testimonials" className="hover:text-blue-500 transition">Testimonials</a>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-800 transition"
              aria-label="Toggle Theme"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition">
              Get Quote
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 lg:py-32 border-b border-slate-200 dark:border-slate-900">
        <div className="absolute inset-0 opacity-30 dark:opacity-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-6">
            🚀 Disrupting Enterprise Software Resale
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-slate-900 dark:text-white">
            Enterprise Software. <span className="text-blue-600 dark:text-blue-500">Half the Price.</span> Zero Friction.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            SoftSell helps growing companies buy fully verified, legally compliant secondary software licenses. Slash your IT procurement budget by up to 50% overnight.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-blue-500/20 transition duration-200 text-center">
              Browse Available Licenses
            </a>
            <a href="#process" className="border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold py-3 px-8 rounded-lg transition duration-200 text-center">
              See How it Works
            </a>
          </div>
        </div>
      </section>

      {/* THREE-STEP PROCESS SECTION */}
      <section id="process" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 border-b border-slate-200 dark:border-slate-900">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Our 3-Step Resale Process</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">Buying secondary tier-1 enterprise licenses has never been safer or faster.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Specify Needs', desc: 'Tell us the software platform, software versions, and corporate seat count requirements your business requires.' },
            { step: '02', title: 'Source & Verify', desc: 'Our proprietary ledger platform matches your request with legally verified, unutilized secondary licenses.' },
            { step: '03', title: 'Instant Deployment', desc: 'Receive certified license transfer documentation and access keys immediately upon secure payment clearance.' }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm relative">
              <span className="text-4xl font-black text-blue-600/10 dark:text-blue-500/10 absolute top-4 right-6">{item.step}</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section id="why-choose-us" className="py-20 bg-slate-100/50 dark:bg-slate-900/20 border-b border-slate-200 dark:border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Why Smart IT Teams Choose SoftSell</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">We bridge the gap between heavy software waste and strict corporate budgeting timelines.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '100% Legally Compliant', desc: 'Every single asset transaction complies fully with regional regulatory statutes and original publisher ownership frameworks.' },
              { title: 'Immediate Capital Reductions', desc: 'Free up crucial working corporate runway by avoiding expensive, forced monthly SaaS recurring cycles.' },
              { title: 'Full Traceable Audits', desc: 'Complete transparent paperwork trails provided for legal records and formal platform compliance checks.' }
            ].map((prop, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg">✓</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{prop.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <section id="testimonials" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 border-b border-slate-200 dark:border-slate-900">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Trusted by Industry Professionals</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">Discover how technical architects are optimizing asset procurement overhead.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { quote: "SoftSell saved our scaling series-A infrastructure team over ₹12 Lakhs on relational database deployment setup keys alone. The continuous certification auditing support was exceptional.", author: "Arjun Mehta", role: "Director of IT, Fintech ScaleUp" },
            { quote: "Migrating architecture layouts back to persistent desktop licenses via SoftSell sliced our recurring vendor platform dependencies cleanly in half with zero onboarding friction.", author: "Sarah Jenkins", role: "VP Infrastructure, CloudCore Solutions" }
          ].map((t, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
              <p className="text-slate-600 dark:text-slate-300 italic text-base leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.author}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
                <span className="text-yellow-500 text-sm">★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / LEAD FORM */}
      <section id="contact" className="py-20 max-w-md mx-auto px-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-xl relative text-slate-900 dark:text-white">
          <h2 className="text-2xl font-bold text-center tracking-tight">Talk to an Asset Portfolio Expert</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm text-center mt-2 mb-6">Drop your core targets below to receive a custom quote within 2 hours.</p>

          {formSubmitted ? (
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-400 rounded-xl p-6 text-center">
              <span className="text-3xl block mb-2">🎉</span>
              <h3 className="font-bold mb-1">Submission Successful!</h3>
              <p className="text-sm opacity-90">Our secondary enterprise portfolio analysts will trace verified pricing frameworks and contact your team directly.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-slate-700 dark:text-slate-300">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border rounded-lg text-sm transition focus:outline-none focus:ring-2 ${formErrors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-800 focus:ring-blue-500/20 focus:border-blue-500'}`}
                  placeholder="John Doe"
                />
                {formErrors.name && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-slate-700 dark:text-slate-300">Corporate Email Address</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border rounded-lg text-sm transition focus:outline-none focus:ring-2 ${formErrors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-800 focus:ring-blue-500/20 focus:border-blue-500'}`}
                  placeholder="john@company.com"
                />
                {formErrors.email && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-slate-700 dark:text-slate-300">Target Software Suite</label>
                <select
                  name="software"
                  value={formData.software}
                  onChange={handleFormChange}
                  className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border rounded-lg text-sm transition focus:outline-none focus:ring-2 ${formErrors.software ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-800 focus:ring-blue-500/20 focus:border-blue-500'}`}
                >
                  <option value="">Choose platform suite...</option>
                  <option value="microsoft">Microsoft Enterprise / Core Office</option>
                  <option value="adobe">Adobe Creative Infrastructure</option>
                  <option value="oracle">Oracle Secure Engines</option>
                  <option value="other">Other Legacy Custom Assets</option>
                </select>
                {formErrors.software && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.software}</p>}
              </div>

              <button type="submit" className="w-full bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 text-white font-semibold text-sm py-3 rounded-lg transition duration-150 mt-2 shadow-md">
                Request Asset Pricing Quote
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-900 py-8 text-center text-xs text-slate-500">
        <p>&copy; 2026 SoftSell Global Inc. Verified Secondary Software Clearinghouse. All rights reserved.</p>
      </footer>

      {/* FLOATING MOCK AI CHAT WIDGET */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {chatOpen && (
          <div className="w-80 h-96 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl mb-4 flex flex-col overflow-hidden text-slate-900 dark:text-white">
            <div className="bg-slate-900 dark:bg-blue-600 p-4 text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold text-sm">SoftSell AI Portfolio Bot</h3>
                <p className="text-xs text-emerald-400">● Online & Verification Ready</p>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white hover:opacity-70 text-xs">✕ Close</button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 dark:bg-slate-950 text-xs">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-xl p-3 ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleChatSubmit} className="p-3 border-t border-slate-200 dark:border-slate-800 flex gap-2 bg-white dark:bg-slate-900">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about compliance or pricing..."
                className="flex-1 px-3 py-1.5 border border-slate-200 dark:border-slate-800 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
              />
              <button type="submit" className="bg-slate-900 dark:bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg font-bold">Send</button>
            </form>
          </div>
        )}

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-500 transition-transform active:scale-95 duration-150 text-xl"
          aria-label="Open Support Chat"
        >
          💬
        </button>
      </div>

    </div>
  );
}

