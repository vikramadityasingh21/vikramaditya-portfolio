'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // For now, just show success message
    // TODO: Connect to free service later (Mailchimp, Buttondown, etc)
    setStatus('success');
    
    // Log to console so you can see submissions during testing
    console.log('Newsletter signup:', email);
    
    // Clear email after 3 seconds
    setTimeout(() => {
      setEmail('');
      setStatus('idle');
    }, 3000);
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Systems Thinking Newsletter
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Bi-weekly insights on AI-first product leadership, team topologies, and navigating 
              complexity in regulated environments. Real lessons from government, enterprise, and Fortune 500.
            </p>

            {/* Form */}
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-300 rounded-lg p-6 max-w-md mx-auto">
                <div className="flex items-center gap-3 text-green-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-semibold">Thanks! You'll hear from me soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-lg border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-slate-900"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}

            {/* Privacy Note */}
            <p className="text-slate-500 text-sm mt-6">
              No spam ever. Unsubscribe anytime. Read by product leaders at Ontario Government, 
              FirstAmerican, Grainger, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 
 * FUTURE: Connect to free newsletter service
 * 
 * FREE OPTIONS:
 * 
 * 1. Mailchimp Free Tier (up to 500 subscribers)
 *    - Sign up at mailchimp.com
 *    - Create audience
 *    - Get signup form code
 *    - Replace this form
 * 
 * 2. Buttondown (free for 100 subscribers)
 *    - buttondown.email
 *    - Very simple, markdown-based
 *    - Great for technical writing
 * 
 * 3. Substack (completely free)
 *    - substack.com
 *    - Handles everything
 *    - Can embed signup form
 * 
 * 4. Email collection to Vercel Edge Config (free)
 *    - Store emails in Vercel
 *    - Export to CSV
 *    - Send manually until you grow
 * 
 * For now: This shows a success message.
 * Emails logged to console during development.
 * Ready to connect to any service later!
 */
