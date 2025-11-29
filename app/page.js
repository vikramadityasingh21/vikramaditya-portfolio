export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        {/* Main Heading with Cherry Red Metallic */}
        <h1 className="text-6xl md:text-8xl font-bold">
          <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent animate-pulse">
            Hello World!
          </span>
        </h1>
        
        {/* Subheading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-300">
          I'm Vikramaditya Singh
        </h2>
        
        {/* Title */}
        <p className="text-xl md:text-2xl text-gray-400">
          Principal Product Manager
        </p>
        
        {/* Description */}
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Building innovative products at the intersection of technology and business.
          This is my digital home on the internet.
        </p>
        
        {/* CTA Button */}
        <div className="pt-8">
          <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            Coming Soon...
          </button>
        </div>
        
        {/* Footer Note */}
        <p className="text-sm text-gray-600 pt-12">
          🚀 Deployed on Vercel • Built with Next.js
        </p>
      </div>
    </div>
  );
}