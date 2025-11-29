import './globals.css'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vikramaditya Singh - Principal Product Manager',
  description: 'Building innovative products at the intersection of technology and business.',
  keywords: 'Product Manager, Product Management, Tech Leadership, AI, Real Estate Technology',
  authors: [{ name: 'Vikramaditya Singh' }],
  openGraph: {
    title: 'Vikramaditya Singh - Principal Product Manager',
    description: 'Building innovative products at the intersection of technology and business.',
    url: 'https://vikramaditya.tech',
    siteName: 'Vikramaditya Singh',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vikramaditya Singh - Principal Product Manager',
    description: 'Building innovative products at the intersection of technology and business.',
  },
}

export default function RootLayout({ children }) {
  const gaId = 'G-ZK59N91V4C';
  const clarityProjectId = 'udrqvph77u';

    // TEST - Check if variables are loading
  console.log('GA ID:', gaId);
  console.log('Clarity ID:', clarityProjectId);
  
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        
        {/* Google Analytics */}
        {gaId && <GoogleAnalytics gaId={gaId} />}
        
        {/* Microsoft Clarity */}
        {clarityProjectId && (
          <Script
            id="clarity-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${clarityProjectId}");
              `,
            }}
          />
        )}
      </body>
    </html>
  )
}