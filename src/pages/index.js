import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import PageBanner from '@site/src/components/PageBanner';
import ColorBand from '@site/src/components/ColorBand';

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

        <section className='container'>
          <div className='row'>

            <ColorBand color='grey'>

              <h2>VPPs and Demand Response Programs</h2>
              <p className='callout'>Integrating with Demand Response programs means integrating with each VPP and DERMS vendor operating those programs. </p>
              <p className='callout'>Gravity Connect OEM partners are compatible with an array of programs managed by VPP partners.</p>
              
            </ColorBand>

          </div>
        </section>

      </main>
    </Layout>
  );
}