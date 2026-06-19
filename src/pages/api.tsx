import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

import PageBanner from '@site/src/components/PageBanner';

export default function ApiReference() {
  return (
    <Layout title="API Documentation" description="Gravity Connect API Reference">
      
      <PageBanner title="Gravity Connect API" />

      <BrowserOnly fallback={<div style={{padding: '2rem'}}>Loading API reference…</div>}>
        {() => {
          const {RedocStandalone} = require('redoc');
          return (
            <RedocStandalone
              specUrl="/Gravity-Connect/vp-api.yaml"
              options={{
                nativeScrollbars: true,
                theme: {
                  colors: {
                    primary: {main: '#0066cc'},
                  },
                },
              }}
            />
          );
        }}
      </BrowserOnly>
    </Layout>
  );
}