import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import PageBanner from '@site/src/components/PageBanner';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}: open integration standard`}
      description="Gravity Connect is an open standard for connecting distributed energy resources to utility programs through a single API.">
      <main>
        <PageBanner 
          title="One integration. Every grid program."
          desc="Publish device data and respond to grid events through a single API."
          button="Start building"
          link="/docs/getting-started"
        />
      </main>
    </Layout>
  );
}