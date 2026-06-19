import React from 'react';
import BlogListPage from '@theme-original/BlogListPage';
import {useSetPageBanner, bannerFromFrontMatter} from '@site/src/contexts/pageBanner';

export default function BlogListPageWrapper(props) {
    
  // props.metadata holds the list page's info (blogTitle, blogDescription, etc.).
  // The list page has no per-post frontmatter, so we synthesize a banner from it.

  const {blogTitle} = props.metadata ?? {};
  useSetPageBanner(
    bannerFromFrontMatter({title: blogTitle ?? 'Resources'}),
  );
  return <BlogListPage {...props} />;
}