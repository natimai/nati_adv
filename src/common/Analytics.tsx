import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: object) => void;
  }
}

const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || ""; // קח מ-environment variables

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!TRACKING_ID) return;

    // Initialize GA script if not present
    const scriptId = 'ga-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`;
      document.head.appendChild(script);

      const inlineScript = document.createElement('script');
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${TRACKING_ID}');
      `;
      document.head.appendChild(inlineScript);
    }
  }, []);

  useEffect(() => {
    if (!TRACKING_ID || !window.gtag) return;
    
    window.gtag('config', TRACKING_ID, {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

export default Analytics;

