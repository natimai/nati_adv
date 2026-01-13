 

import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import SchemaMarkup from "./common/SchemaMarkup";
import SkeletonLoader from "./components/common/SkeletonLoader";

// Eager load home page for better initial load
import HomeOne from "./components/homes/home-1";

// Lazy load other routes
const AboutOne = lazy(() => import("./components/abouts/about-1"));
const Service = lazy(() => import("./components/service"));
const ServiceDetails = lazy(() => import("./components/single-service"));
const PortfolioOne = lazy(() => import("./components/portfolio-1"));
const PortfolioDetails = lazy(() => import("./components/single-portfolio"));
const Team = lazy(() => import("./components/team"));
const TeamDetails = lazy(() => import("./components/single-team"));
const Faq = lazy(() => import("./components/faq"));
const Pricing = lazy(() => import("./components/pricing"));
const Blog = lazy(() => import("./components/blog"));
const BlogDetails = lazy(() => import("./components/single-blog"));
const Contactus1 = lazy(() => import("./components/contact-us1"));
const ServiceAreas = lazy(() => import("./components/legal/ServiceAreas"));
const CityPage = lazy(() => import("./components/legal/CityPage"));
const NotFound = lazy(() => import("./error"));

// Lazy load legal pages
const PrivacyPolicy = lazy(() => import("./components/legal").then(m => ({ default: m.PrivacyPolicy })));
const TermsOfUse = lazy(() => import("./components/legal").then(m => ({ default: m.TermsOfUse })));
const AccessibilityStatement = lazy(() => import("./components/legal").then(m => ({ default: m.AccessibilityStatement })));




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
      <Suspense fallback={<SkeletonLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
