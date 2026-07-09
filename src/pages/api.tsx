import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';

export default function ApiReference() {
  return (
    <Layout>
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