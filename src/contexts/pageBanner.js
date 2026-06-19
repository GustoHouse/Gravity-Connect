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

// Set the banner for the current page, clearing it on unmount.
export function useSetPageBanner(banner) {
  const ctx = useContext(PageBannerContext);
  const setBanner = ctx && ctx.setBanner;
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

// Always returns a banner object, so the banner renders on every page.
// Title resolves in order: banner.title  ->  the page's frontmatter `title:`
//  ->  null (the component then shows a placeholder).
export function bannerFromFrontMatter(frontMatter) {
  const fm = frontMatter || {};
  const b = fm.banner || {};
  return {
    title: b.title ?? fm.title ?? null,
    desc: b.desc ?? null,
    button: b.button ?? null,
    link: b.link ?? null,
  };
}