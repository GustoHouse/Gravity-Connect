import React from 'react';
import {PageBannerProvider} from '@site/src/contexts/pageBanner';

// Root wraps the entire app (above Layout), so the banner context set by a
// page's layout is readable by the swizzled Layout that renders it.
export default function Root({children}) {
  return <PageBannerProvider>{children}</PageBannerProvider>;
}