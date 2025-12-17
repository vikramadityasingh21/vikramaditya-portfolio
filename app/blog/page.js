'use client';

import { useState } from 'react';

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'Why I Built This: From Gene Therapy to AI-First Leadership',
      slug: 'gene-therapy-to-ai-leadership',
      date: '2025-01-15',
      readTime: '8 min read',
      tags: ['Career Journey', 'AI', 'Biotech', 'Leadership'],
      featured: true,
      excerpt: 'My unconventional journey from analyzing DNA mutations at Northwestern Memorial to leading AI-powered platforms serving millions.',
      content: `
        <p class="text-xl text-slate-700 leading-relaxed mb-8">
          People ask me how I went from analyzing DNA mutations to building AI-powered platforms 
          serving millions. The answer isn't a career pivot — it's about applying the same 
          systems-level thinking across different domains.
        </p>

        <h2 class="text-3xl font-bold text-slate-900 mb-4 mt-8">The Scientific Foundation</h2>
        <p class="text-slate-700 leading-relaxed mb-4">
          At Northwestern Memorial Hospital, I wasn't just studying cells in a lab. I was engineering 
          regulatory T cell (Treg) therapies to prevent organ rejection in transplant patients. 
          This work taught me something critical: complex biological systems require hypothesis-driven 
          thinking, evidence-based validation, and respect for long-term consequences.
        </p>

        <p class="text-slate-700 leading-relaxed mb-4">
          When you're working on therapies that could save lives — or cause harm — you learn that 
          speed isn't the goal. Understanding the system is the goal.
        </p>

        <h2 class="text-3xl font-bold text-slate-900 mb-4 mt-8">From Molecules to Platforms</h2>
        <p class="text-slate-700 leading-relaxed mb-4">
          That same mindset carried over when I moved into AI and product leadership. At Exicure, 
          I developed gold nanoparticle platforms embedded with miRNA for targeted gene therapy. 
          At TPI, I designed bioprocesses that achieved 2.1 g/L IFN-Beta yield — 20 times better 
          than Amgen's commercial process.
        </p>

        <p class="text-slate-700 leading-relaxed mb-4">
          The lesson? Whether it's a biological pathway, a machine learning model, or an enterprise 
          platform — systems thinking is systems thinking. You identify feedback loops, understand 
          constraints, validate hypotheses, and optimize for outcomes.
        </p>

        <h2 class="text-3xl font-bold text-slate-900 mb-4 mt-8">Applying It to GovTech</h2>
        <p class="text-slate-700 leading-relaxed mb-4">
          Fast forward to today. I'm leading AI-powered transformation for Ontario Government platforms 
          serving 15 million residents. The domain changed, but the approach didn't.
        </p>

        <p class="text-slate-700 leading-relaxed mb-4">
          When we built the AI-powered OCR system for vital events registration, reducing processing 
          time by 60%, it wasn't just about deploying technology. It was about understanding the entire 
          value chain — from paper intake to downstream workflows — and designing interventions that 
          improved the system without breaking stakeholder trust.
        </p>

        <h2 class="text-3xl font-bold text-slate-900 mb-4 mt-8">Why This Combination Is Rare</h2>
        <p class="text-slate-700 leading-relaxed mb-4">
          Most product managers don't have deep scientific training in high-consequence environments. 
          Most scientists don't have MBA-level business judgment. Most AI enthusiasts don't understand 
          systems thinking from first principles.
        </p>

        <p class="text-slate-700 leading-relaxed mb-4">
          But when you combine all three — scientific rigor + business judgment + AI fluency — you 
          can lead in complex, regulated, high-stakes environments where most people struggle.
        </p>

        <div class="bg-purple-50 border-l-4 border-purple-600 p-6 my-8 rounded-r-lg">
          <p class="text-slate-900 font-semibold mb-2">Key Takeaway</p>
          <p class="text-slate-700">
            Your unconventional background isn't a liability — it's your competitive advantage. 
            The question isn't "How do I fit into existing categories?" It's "What unique value 
            do I create by combining what others keep separate?"
          </p>
        </div>
      `
    },
    {
      id: 2,
      title: 'Team Topologies in Government: Lessons from BXP',
      slug: 'team-topologies-government',
      date: '2025-01-10',
      readTime: '6 min read',
      tags: ['Team Topologies', 'GovTech', 'Platform', 'Leadership'],
      excerpt: 'How applying Team Topologies principles helped us structure parallel delivery streams and reduce dependencies in a complex government platform.',
      content: `
        <p class="text-xl text-slate-700 leading-relaxed mb-8">
          When I joined the Business Experience Platform (BXP) project at Ontario Government, 
          I found a 40-50 person team stuck in waterfall practices, frequent direction changes, 
          and no clear roadmap. Here's how Team Topologies principles helped us turn it around.
        </p>

        <h2 class="text-3xl font-bold text-slate-900 mb-4 mt-8">The Problem: Too Many Dependencies</h2>
        <p class="text-slate-700 leading-relaxed mb-4">
          The original structure had everyone working on "the platform" as one monolithic effort. 
          This created constant blockers, unclear ownership, and delivery gridlock.
        </p>

        <h2 class="text-3xl font-bold text-slate-900 mb-4 mt-8">The Solution: Parallel Streams</h2>
        <p class="text-slate-700 leading-relaxed mb-4">
          I restructured delivery into four parallel streams based on Team Topologies principles:
        </p>
        <ul class="list-disc list-inside text-slate-700 mb-4 space-y-2 ml-4">
          <li><strong>Core Platform</strong> - Foundation infrastructure, APIs, authentication</li>
          <li><strong>Services</strong> - Business logic, service orchestration</li>
          <li><strong>eForms</strong> - 22 ministry forms requiring discovery and redesign</li>
          <li><strong>Migration</strong> - Data migration from legacy SOAB system</li>
        </ul>

        <h2 class="text-3xl font-bold text-slate-900 mb-4 mt-8">Results</h2>
        <p class="text-slate-700 leading-relaxed mb-4">
          By reducing inter-team dependencies and creating clear ownership boundaries, we:
        </p>
        <ul class="list-disc list-inside text-slate-700 mb-4 space-y-2 ml-4">
          <li>Reduced delivery blockers by ~40%</li>
          <li>Enabled parallel execution across streams</li>
          <li>Improved team autonomy and morale</li>
          <li>Accelerated path to UAT</li>
        </ul>

        <div class="bg-purple-50 border-l-4 border-purple-600 p-6 my-8 rounded-r-lg">
          <p class="text-slate-900 font-semibold mb-2">Key Lesson</p>
          <p class="text-slate-700">
            In government, you can't always change the organization chart. But you CAN restructure 
            delivery streams to minimize dependencies and maximize team autonomy.
          </p>
        </div>
      `
    },
    {
      id: 3,
      title: 'The Renaissance PM: Why Diverse Interests Make Better Product Leaders',
      slug: 'renaissance-product-manager',
      date: '2025-01-05',
      readTime: '7 min read',
      tags: ['Product Management', 'Systems Thinking', 'Leadership'],
      excerpt: 'How martial arts, music theory, languages, and calligraphy shaped my approach to complex product challenges.',
      content: `
        <p class="text-xl text-slate-700 leading-relaxed mb-8">
          I'm a black belt in Okinawa Goju Ryu. I play guitar and study jazz theory. I speak Spanish 
          and practice calligraphy. None of these are "product management skills" — yet they've made 
          me a better product leader than any PM framework ever could.
        </p>

        <h2 class="text-3xl font-bold text-slate-900 mb-4 mt-8">Martial Arts: Discipline & Patience</h2>
        <p class="text-slate-700 leading-relaxed mb-4">
          Earning a black belt taught me that mastery requires patience, precision, and respect for 
          consequences. In product management, this translates to knowing when to move fast — and 
          when to slow down and get it right.
        </p>

        <h2 class="text-3xl font-bold text-slate-900 mb-4 mt-8">Music Theory: Patterns & Improvisation</h2>
        <p class="text-slate-700 leading-relaxed mb-4">
          Jazz theory teaches you to see patterns, understand structure, and improvise within constraints. 
          Product roadmaps are the same — you need a structure, but you must adapt when reality changes.
        </p>

        <h2 class="text-3xl font-bold text-slate-900 mb-4 mt-8">Languages: Perspective & Communication</h2>
        <p class="text-slate-700 leading-relaxed mb-4">
          Learning Spanish (and other languages) taught me that the same concept can be expressed 
          differently depending on context. In product, this is crucial — you need to translate between 
          technical, business, and user perspectives.
        </p>

        <h2 class="text-3xl font-bold text-slate-900 mb-4 mt-8">Calligraphy: Precision & Patience</h2>
        <p class="text-slate-700 leading-relaxed mb-4">
          Calligraphy demands precision. Every stroke matters. In product definition, every word in a 
          PRD matters. Every edge case matters. Attention to detail isn't optional.
        </p>

        <div class="bg-purple-50 border-l-4 border-purple-600 p-6 my-8 rounded-r-lg">
          <p class="text-slate-900 font-semibold mb-2">The Real Lesson</p>
          <p class="text-slate-700">
            "T-shaped" skills aren't enough anymore. The best product leaders are Renaissance thinkers — 
            drawing insights from diverse disciplines to solve complex problems in novel ways.
          </p>
        </div>
      `
    }
  ];

  const allTags = ['All', ...new Set(articles.flatMap(article => article.tags))];
  
  const filteredArticles = selectedTag === 'All' 
    ? articles 
    : articles.filter(article => article.tags.includes(selectedTag));

  if (selectedArticle) {
    const article = articles.find(a => a.id === selectedArticle);
    
    return (
      <div className="min-h-screen bg-white">
        <div className="h-20"></div>
        
        <article className="container mx-auto px-6 py-20 max-w-4xl">
          <button 
            onClick={() => setSelectedArticle(null)}
            className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all posts
          </button>

          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map(tag => (
                <span key={tag} className="text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-slate-600">
              <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </header>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-3xl">
                👨‍💼
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Vikramaditya Singh
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  AI-First Product & Platform Leader with background in biotech research, 
                  systems thinking, and enterprise transformation. Currently leading product 
                  strategy for Ontario Government platforms serving 15M residents.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="h-20"></div>

      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16 fade-in-up">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Writing & <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Thoughts on AI-first product leadership, systems thinking, and navigating complexity
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedTag === tag
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-purple-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {filteredArticles.map((article, index) => (
            <button
              key={article.id}
              onClick={() => setSelectedArticle(article.id)}
              className="block w-full text-left group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <article className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
                {article.featured && (
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold uppercase rounded-full mb-4">
                    Featured
                  </span>
                )}
                
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                      <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {article.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                      <svg className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
