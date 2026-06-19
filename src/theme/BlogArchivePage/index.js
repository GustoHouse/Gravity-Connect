import React from 'react';
import BlogArchivePage from '@theme-original/BlogArchivePage';
import {useSetPageBanner, bannerFromFrontMatter} from '@site/src/contexts/pageBanner';

// Wraps the blog archive page (/blog/archive) to give it a banner.
// "Unsafe" theme component: the archive page exposes no title, so we set a
// static one here — change it to taste.
export default function BlogArchivePageWrapper(props) {
  useSetPageBanner(bannerFromFrontMatter({title: 'Archive'}));
  return <BlogArchivePage {...props} />;
}