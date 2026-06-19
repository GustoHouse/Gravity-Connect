import React from 'react';
import Layout from '@theme/Layout';
import { RedocStandalone } from 'redoc';

import PageBanner from '@site/src/components/PageBanner';
 
export default function ApiReference() {
  return (
    <Layout title="API Documentation" description="Gravity Connect API Reference">
      <PageBanner 
        title="Gravity Connect API"
      />
      <RedocStandalone
        specUrl="/Gravity-Connect/vp-api.yaml"
        options={{
          nativeScrollbars: true,
          theme: {
            colors: {
              primary: {
                main: '#0066cc',
              },
            },
          },
        }}
      />
    </Layout>
  );
}