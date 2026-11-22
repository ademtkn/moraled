import React, { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Must come first: fixes the global CSS order for all (also lazy) pages.
import './styles/page-styles';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';
import RouteFallback from './components/RouteFallback';
import RouteErrorBoundary from './components/RouteErrorBoundary';

// The home page ships in the main bundle; every other page is its own chunk,
// downloaded the first time it is visited. React Router runs navigations as
// transitions, so the current page stays on screen until the next chunk is ready.
const OurStory = lazy(() => import('./pages/OurStory'));
const Team = lazy(() => import('./pages/Team'));
const Features = lazy(() => import('./pages/Features'));
const MoralEd = lazy(() => import('./pages/MoralEd'));
const Contact = lazy(() => import('./pages/Contact'));
const ScopeSequence = lazy(() => import('./pages/ScopeSequence'));
const ScopeSequenceAge = lazy(() => import('./pages/ScopeSequenceAge'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Research = lazy(() => import('./pages/Research'));
const AboutBullying = lazy(() => import('./pages/AboutBullying'));
const StudentVolunteers = lazy(() => import('./pages/StudentVolunteers'));
const Materials = lazy(() => import('./pages/Materials'));
const Events = lazy(() => import('./pages/Events'));
const ClassroomClimate = lazy(() => import('./pages/ClassroomClimate'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const VerifyCertificate = lazy(() => import('./pages/VerifyCertificate'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <RouteErrorBoundary>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/team" element={<Team />} />
              <Route path="/partners" element={<Navigate to="/contact" replace />} />
              <Route path="/for-schools" element={<Navigate to="/contact" replace />} />
              <Route path="/partner-with-us" element={<Navigate to="/contact" replace />} />
              <Route path="/features" element={<Features />} />
              <Route path="/scope-and-sequence" element={<ScopeSequence />} />
              <Route path="/scope-and-sequence/:band" element={<ScopeSequenceAge />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/research" element={<Research />} />
              <Route path="/about-bullying" element={<AboutBullying />} />
              <Route path="/student-volunteers" element={<StudentVolunteers />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/events" element={<Events />} />
              <Route path="/classroom-climate" element={<ClassroomClimate />} />
              <Route path="/moraled" element={<MoralEd />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/verify-certificate" element={<VerifyCertificate />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </RouteErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;
