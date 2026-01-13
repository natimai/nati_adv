 

import {  Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeOne from "./components/homes/home-1";
import ErrorBoundary from "./components/ErrorBoundary";
import AboutOne from "./components/abouts/about-1";
import Service from "./components/service";
import ServiceDetails from "./components/single-service";
import PortfolioOne from "./components/portfolio-1";
import PortfolioDetails from "./components/single-portfolio";
import Team from "./components/team";
import TeamDetails from "./components/single-team";
import Faq from "./components/faq";
import Pricing from "./components/pricing";
import Blog from "./components/blog";
import BlogDetails from "./components/single-blog";
import Contactus1 from "./components/contact-us1";
import { PrivacyPolicy, TermsOfUse, AccessibilityStatement } from "./components/legal";
import ServiceAreas from "./components/legal/ServiceAreas";
import CityPage from "./components/legal/CityPage";
import NotFound from "./error";
import SchemaMarkup from "./common/SchemaMarkup";




const router = createBrowserRouter([
  { path: "/", element: <HomeOne /> },
  { path: "/about", element: <AboutOne /> },
  { path: "/service", element: <Service /> },
  { path: "/service/:id", element: <ServiceDetails /> },
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
  { path: "/service-areas", element: <ServiceAreas /> },
  { path: "/service-areas/:city", element: <CityPage /> },
  { path: "*", element: <NotFound /> },
]);

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
