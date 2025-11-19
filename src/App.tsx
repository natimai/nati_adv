 

import {  Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeOne from "./components/homes/home-1";
import ErrorBoundary from "./components/ErrorBoundary";
import HomeTwo from "./components/homes/home-2";
import HomeThree from "./components/homes/home-3";
import AboutOne from "./components/abouts/about-1";
import AboutTwo from "./components/abouts/about-2";
import AboutThree from "./components/abouts/about-3";
import Service from "./components/service";
import ServiceDetails from "./components/single-service";
import PortfolioOne from "./components/portfolio-1";
import PortfolioTwo from "./components/portfolio-2";
import PortfolioThree from "./components/portfolio-3";
import PortfolioDetails from "./components/single-portfolio";
import Team from "./components/team";
import TeamDetails from "./components/single-team";
import Faq from "./components/faq";
import Pricing from "./components/pricing";
import Blog from "./components/blog";
import BlogDetails from "./components/single-blog";
import Contactus1 from "./components/contact-us1";
import Contactus2 from "./components/contact-us2";
import Contactus3 from "./components/contact-us3";
import { PrivacyPolicy, TermsOfUse, AccessibilityStatement } from "./components/legal";
import NotFound from "./error";
import SchemaMarkup from "./common/SchemaMarkup";




const router = createBrowserRouter([
  { path: "/", element: <HomeOne /> },
  { path: "/about", element: <AboutOne /> },
  { path: "/service", element: <Service /> },
  { path: "/single-service", element: <ServiceDetails /> },
  { path: "/portfolio", element: <PortfolioOne /> },
  { path: "/portfolio/:id", element: <PortfolioDetails /> },
  { path: "/team", element: <Team /> },
  { path: "/single-team", element: <TeamDetails /> },
  { path: "/faq", element: <Faq /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:id", element: <BlogDetails /> },
  { path: "/contact", element: <Contactus1 /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms-of-use", element: <TermsOfUse /> },
  { path: "/accessibility-statement", element: <AccessibilityStatement /> },


  { path: "*", element: <NotFound /> },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }
});

function App() {
  return (
    <ErrorBoundary>
      <SchemaMarkup />
      <Suspense fallback={<div className="preloader">
        <div className="preloader-inner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>

  );
}

export default App;
