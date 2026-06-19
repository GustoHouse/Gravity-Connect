import React from 'react';
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
          title="The Open Standard for VPP & OEM Integrations"
          desc="Connect a DER flee to dozens of utility programs with one integration, powering reliable demand response with near-real-time control and visibility."
          button="Get Started"
          link="/docs/getting-started"
          className='HomeBanner'
        />
      </main>
    </Layout>
  );
}