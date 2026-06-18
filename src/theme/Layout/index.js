import React from 'react';
import Layout from '@theme-original/Layout';
import PageBanner from '@site/src/components/PageBanner';
import {usePageBanner} from '@site/src/contexts/pageBanner';

export default function LayoutWrapper(props) {
  const {children, ...rest} = props;
  const banner = usePageBanner();

  return (
    <Layout {...rest}>
      {banner && <PageBanner {...banner} />}
      {children}
    </Layout>
  );
}