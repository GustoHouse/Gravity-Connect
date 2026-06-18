import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import {useSetPageBanner, bannerFromFrontMatter} from '@site/src/contexts/pageBanner';

export default function BlogPostItemWrapper(props) {
  const {metadata, isBlogPostPage} = useBlogPost();
  // isBlogPostPage guard: BlogPostItem also renders once per card in the blog
  // list view — only a post's own page should set a banner.
  useSetPageBanner(
    isBlogPostPage ? bannerFromFrontMatter(metadata.frontMatter) : null,
  );
  return <BlogPostItem {...props} />;
}