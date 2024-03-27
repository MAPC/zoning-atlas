import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import facebook from '../images/fb-social-image.png';

export const SEO = ({ title, description, pathname, summary = "", children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, author } = useSiteMetadata()
  if (title == null) {
    title = defaultTitle;
  } else {
    title = `${title} | ${defaultTitle}`;
  }

  const seo = {
    title,
    description: description || defaultDescription,
    // image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    author,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="summary" content={summary} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={`https://zoningatlas.mapc.org/${facebook}`} />
      {/*<meta name="image" content={seo.image} />*/}
      <meta name="twitter:card" content={summary} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      {/*<meta name="twitter:image" content={seo.image} />*/}
      <meta name="twitter:creator" content={seo.author} />
      {children}
    </>
  )
}

export default SEO;
