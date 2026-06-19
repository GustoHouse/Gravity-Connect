import React from 'react';
import BlogTagsListPage from '@theme-original/BlogTagsListPage';
import {useSetPageBanner, bannerFromFrontMatter} from '@site/src/contexts/pageBanner';

// Wraps the blog tags index (/blog/tags) to give it a banner.
// "Unsafe" theme component: it exposes no page title, so we set a static one.
export default function BlogTagsListPageWrapper(props) {
  useSetPageBanner(bannerFromFrontMatter({title: 'Tags'}));
  return <BlogTagsListPage {...props} />;
}