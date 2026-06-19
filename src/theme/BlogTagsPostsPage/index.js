import React from 'react';
import BlogTagsPostsPage from '@theme-original/BlogTagsPostsPage';
import {useSetPageBanner, bannerFromFrontMatter} from '@site/src/contexts/pageBanner';

// Wraps the per-tag blog page (/blog/tags/foo) to give it a banner.
// "Unsafe" theme component: if props change in a future minor version,
// re-check props.tag here.
export default function BlogTagsPostsPageWrapper(props) {
  const label = props.tag?.label ?? 'Tag';
  const count = props.tag?.count;
  useSetPageBanner(
    bannerFromFrontMatter({
      banner: {
        title: `Posts tagged "${label}"`,
        desc: count ? `${count} ${count === 1 ? 'post' : 'posts'}` : null,
      },
    }),
  );
  return <BlogTagsPostsPage {...props} />;
}