import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function Banner() {
  return (
    <section className='banner'>
      <div className='container'>
        <div className='row'>
            <div className='col col--12'>
              
              <h1>The Open Standard for VPP & OEM Integrations</h1>
              <p>Connect a DER flee to dozens of utility programs with one integration, powering reliable demand response with near-real-time control and visibility.</p>
              
              <Link className="button button--primary button--lg" to='/docs/getting-started'>
                Start building
              </Link>

            </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}: open integration standard`}
      description="Gravity Connect is an open standard for connecting distributed energy resources to utility programs through a single API.">
      <main>
        <Banner />
      </main>
    </Layout>
  );
}