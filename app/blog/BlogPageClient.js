'use client';

import { useState, useMemo } from 'react';

export default function BlogPageClient({ initialArticles }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date-desc');
  const [dateFilter, setDateFilter] = useState('all');
  const [showTagDropdown, setShowTagDropdown] = useState(false);

  const articles = initialArticles;

  const allTags = useMemo(() => {
    if (!articles || articles.length === 0) return [];
    return [...new Set(articles.flatMap(a => a.tags || []))].sort();
  }, [articles]);
  
  const allYears = useMemo(() => {
    if (!articles || articles.length === 0) return ['all'];
    return ['all', ...new Set(articles.map(a => {
      try {
        return new Date(a.date).getFullYear();
      } catch {
        return new Date().getFullYear();
      }
    }))];
  }, [articles]);

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllTags = () => {
    setSelectedTags([]);
  };

  const filteredAndSortedArticles = useMemo(() => {
    if (!articles) return [];
    let filtered = articles;

    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(a => 
        a.tags && selectedTags.some(tag => a.tags.includes(tag))
      );
    }

    // Search in title, slug (filename), and tags
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(a => 
        a.title.toLowerCase().includes(query) ||
        a.slug.toLowerCase().includes(query) ||
        (a.tags && a.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }

    // Filter by year
    if (dateFilter !== 'all') {
      filtered = filtered.filter(a => {
        try {
          return new Date(a.date).getFullYear().toString() === dateFilter;
        } catch {
          return false;
        }
      });
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return new Date(b.date) - new Date(a.date);
        case 'date-asc':
          return new Date(a.date) - new Date(b.date);
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [articles, selectedTags, searchQuery, dateFilter, sortBy]);

  if (selectedArticle) {
    const article = articles.find(a => a.id === selectedArticle);
    if (!article) return null;

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="h-20"></div>
        
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          <button
            onClick={() => setSelectedArticle(null)}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all articles
          </button>

          <header className="mb-12">
            {article.featured && (
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
                Featured
              </span>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-6">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {article.readTime && (
                <>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </>
              )}
            </div>

            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-sm font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none whitespace-pre-wrap">
            {article.content}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="h-20"></div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Insights & <span className="gradient-text">Perspectives</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto px-4">
            Systems thinking, AI-first leadership, and lessons from navigating complexity
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="glass rounded-2xl p-4 md:p-6 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title, filename, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 md:py-4 pl-12 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-slate-900"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Sort, Year, Count */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-slate-900"
                >
                  <option value="date-desc">Newest First</option>
                  <option value="date-asc">Oldest First</option>
                  <option value="title-asc">Title (A-Z)</option>
                  <option value="title-desc">Title (Z-A)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Year</label>
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-slate-900"
                >
                  {allYears.map(year => (
                    <option key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <div className="w-full px-4 py-3 bg-purple-50 rounded-lg text-purple-700 font-medium text-center">
                  {filteredAndSortedArticles.length} {filteredAndSortedArticles.length === 1 ? 'article' : 'articles'}
                </div>
              </div>
            </div>

            {/* Topic Multi-Select Dropdown */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Filter by Topics</label>
              <div className="relative">
                <button
                  onClick={() => setShowTagDropdown(!showTagDropdown)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-slate-900 text-left flex items-center justify-between bg-white"
                >
                  <span className="text-slate-600">
                    {selectedTags.length === 0 ? 'Select topics...' : `${selectedTags.length} topic${selectedTags.length > 1 ? 's' : ''} selected`}
                  </span>
                  <svg className={`w-5 h-5 text-slate-400 transition-transform ${showTagDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showTagDropdown && (
                  <div className="absolute z-10 w-full mt-2 bg-white border-2 border-slate-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
                    <div className="p-2">
                      {allTags.map(tag => (
                        <label
                          key={tag}
                          className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 rounded-lg cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedTags.includes(tag)}
                            onChange={() => toggleTag(tag)}
                            className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                          />
                          <span className="text-sm text-slate-700">{tag}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Selected Tags Pills */}
            {selectedTags.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium text-slate-700">Active filters:</span>
                {selectedTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                  >
                    {tag}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                ))}
                <button
                  onClick={clearAllTags}
                  className="text-sm text-slate-500 hover:text-slate-700 underline"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredAndSortedArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTags([]);
                setDateFilter('all');
              }}
              className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {filteredAndSortedArticles.map((article) => (
              <button
                key={article.id}
                onClick={() => setSelectedArticle(article.id)}
                className="group text-left w-full"
              >
                <article className="glass rounded-2xl overflow-hidden h-full hover:shadow-2xl transition-all duration-300">
                  <div className="p-6">
                    {article.tags && article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 2 && (
                          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                            +{article.tags.length - 2}
                          </span>
                        )}
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    {article.excerpt && (
                      <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base line-clamp-3">
                        {article.excerpt}
                      </p>
                    )}

                    <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-200">
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                      {article.readTime && <span>{article.readTime}</span>}
                    </div>
                  </div>
                </article>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}