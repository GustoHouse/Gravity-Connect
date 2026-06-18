import React, {createContext, useContext, useEffect, useState} from 'react';

const PageBannerContext = createContext(undefined);

export function PageBannerProvider({children}) {
  const [banner, setBanner] = useState(null);
  return (
    <PageBannerContext.Provider value={{banner, setBanner}}>
      {children}
    </PageBannerContext.Provider>
  );
}

// Read the current page's banner. Used by the Layout slot.
export function usePageBanner() {
  const ctx = useContext(PageBannerContext);
  return ctx ? ctx.banner : null;
}

// Set the banner for the current page, clearing it automatically on unmount
// (e.g. when navigating to another page). Pass null for pages with no banner.
export function useSetPageBanner(banner) {
  const ctx = useContext(PageBannerContext);
  const setBanner = ctx && ctx.setBanner;
  // Stable dependency: only re-run when the banner's contents actually change,
  // not on every render (the object identity changes each render).
  const key = banner ? JSON.stringify(banner) : null;
  useEffect(() => {
    if (!setBanner) {
      return undefined;
    }
    setBanner(banner ?? null);
    return () => setBanner(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, setBanner]);
}

// Normalizes the nested `banner:` frontmatter object into the shape the slot
// renders. Returns null when a page hasn't opted in (no banner.title).
export function bannerFromFrontMatter(frontMatter) {
  const b = frontMatter && frontMatter.banner;
  if (!b || !b.title) {
    return null;
  }
  return {
    title: b.title,
    desc: b.desc ?? null,
    button: b.button ?? null,
    link: b.link ?? null,
  };
}