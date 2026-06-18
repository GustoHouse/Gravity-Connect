import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import {useSetPageBanner, bannerFromFrontMatter} from '@site/src/contexts/pageBanner';

export default function DocItemLayoutWrapper(props) {
  const {frontMatter} = useDoc();
  useSetPageBanner(bannerFromFrontMatter(frontMatter));
  return <Layout {...props} />;
}