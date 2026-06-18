import React from 'react';
import clsx from 'clsx';
import Layout from '@theme-original/Layout';
import Link from '@docusaurus/Link';
import {usePageBanner} from '@site/src/contexts/pageBanner';

export default function LayoutWrapper(props) {
  const {children, ...rest} = props;
  const banner = usePageBanner();

  return (
    <Layout {...rest}>
      {banner && (
        <div>
            <h1>{banner.title}</h1>
            {banner.desc && <p >{banner.desc}</p>}
            {banner.button && banner.link && (
              <Link
                className='button button--primary button--lg'
                to={banner.link}>
                {banner.button}
              </Link>
            )}
        </div>
      )}
      {children}
    </Layout>
  );
}