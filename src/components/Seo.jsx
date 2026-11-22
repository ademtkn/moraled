import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { htmlLang } from '../i18n';

const SITE_NAME = 'MoralEd';
const SITE_URL = 'https://moraled.com';
// 1200×630 social card (public/og-image.jpg) — regenerate with scripts/og-image.html
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

function Seo({ title, titleKey, description, descriptionKey, path = '', image = DEFAULT_IMAGE, noIndex = false }) {
  const { t, i18n } = useTranslation();
  const resolvedTitle = titleKey ? t(titleKey) : title;
  const resolvedDescription = descriptionKey ? t(descriptionKey) : description;
  const fullTitle = resolvedTitle ? `${resolvedTitle} | ${SITE_NAME}` : `${SITE_NAME} – Character Education in Action`;
  const url = `${SITE_URL}${path}`;

  // Helmet renders its own <title>; drop the static one from index.html once it exists.
  useEffect(() => {
    document.querySelector('title[data-seo-static]')?.remove();
  }, []);

  return (
    <Helmet>
      <html lang={htmlLang(i18n.language)} />
      <title>{fullTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      {image === DEFAULT_IMAGE && <meta property="og:image:width" content="1200" />}
      {image === DEFAULT_IMAGE && <meta property="og:image:height" content="630" />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default Seo;
