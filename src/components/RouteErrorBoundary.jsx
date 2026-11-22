import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Seo from './Seo';

// Pages are code-split: if a page chunk cannot be downloaded (offline, flaky network)
// or a page crashes while rendering, show the header and a retry button instead of a
// blank screen. Deploy-time missing chunks are already handled by a one-time reload
// in src/index.jsx (vite:preloadError); this is the fallback when that is not enough.
class Boundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorPath: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // Navigating away from the page that failed clears the error.
  static getDerivedStateFromProps(props, state) {
    if (state.hasError && state.errorPath !== null && props.pathname !== state.errorPath) {
      return { hasError: false, errorPath: null };
    }
    return null;
  }

  componentDidCatch(error) {
    console.error(error); // keep the original error visible in the browser console
    this.setState({ errorPath: this.props.pathname });
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    const { t } = this.props;
    return (
      <>
        <Seo titleKey="common.load_error_title" descriptionKey="common.load_error_text" noIndex />
        <Header />
        <main className="route-error" id="main">
          <h1>{t('common.load_error_title')}</h1>
          <p>{t('common.load_error_text')}</p>
          <button type="button" className="btn-primary" onClick={() => window.location.reload()}>
            {t('common.retry')} <i className="fas fa-rotate-right" aria-hidden="true"></i>
          </button>
        </main>
      </>
    );
  }
}

export default function RouteErrorBoundary({ children }) {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  return (
    <Boundary pathname={pathname} t={t}>
      {children}
    </Boundary>
  );
}
