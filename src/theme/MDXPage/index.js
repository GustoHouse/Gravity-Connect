import React from 'react';
import MDXPage from '@theme-original/MDXPage';
import {useSetPageBanner, bannerFromFrontMatter} from '@site/src/contexts/pageBanner';

export default function MDXPageWrapper(props) {
  // Standalone pages expose frontmatter on the content component.
  const frontMatter = props.content && props.content.frontMatter;
  useSetPageBanner(bannerFromFrontMatter(frontMatter));
  return <MDXPage {...props} />;
}