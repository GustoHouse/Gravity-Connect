import React from 'react';
import Layout from '@theme/Layout';
import { RedocStandalone } from 'redoc';
 
export default function ApiReference() {
  return (
    <Layout title="API Documentation" description="Gravity Connect API Reference">
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