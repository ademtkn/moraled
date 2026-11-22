// Global CSS order for every page and component (do not reorder).
//
// Pages are code-split (React.lazy in App.jsx), but their stylesheets are imported
// here, eagerly and in the original single-bundle order. Otherwise a page's CSS would
// arrive after responsive-fixes.css / polish.css / styles/inner.css and override them.
// Final order: tokens → index → [this list] → responsive-fixes → polish → inner
// (see src/index.jsx and DESIGN_SYSTEM.md §7).
import 'aos/dist/aos.css';
import '../pages/Home.css';
import '../components/Header.css';
import '../components/Footer.css';
import '../components/samples/SampleModal.css';
import '../components/partners/PartnersSection.css';
import '../pages/About.css';
import '../pages/OurStory.css';
import '../pages/Team.css';
import '../pages/Features.css';
import '../pages/MoralEd.css';
import '../components/gallery/GallerySlider.css';
import '../components/seminars/SeminarSection.css';
import '../pages/Contact.css';
import '../pages/ScopeSequence.css';
import '../pages/ScopeSequenceAge.css';
import '../pages/FAQ.css';
import '../pages/Research.css';
import '../pages/AboutBullying.css';
import '../pages/StudentVolunteers.css';
import '../pages/Materials.css';
import '../pages/Events.css';
import '../pages/ClassroomClimate.css';
import '../pages/NotFound.css';
import '../pages/PrivacyPolicy.css';
import '../pages/VerifyCertificate.css';
