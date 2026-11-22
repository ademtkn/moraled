import React from 'react';
import Header from './Header';

// Shown only on a direct visit to a code-split page while its chunk downloads:
// the real header appears immediately, the page body follows.
export default function RouteFallback() {
  return (
    <>
      <Header />
      <main className="route-fallback" id="main" aria-busy="true" />
    </>
  );
}
