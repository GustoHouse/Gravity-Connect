import React from 'react';
import Link from '@docusaurus/Link';

// Presentational banner. Render it directly in a custom React page (flash-free),
// or let the swizzled Layout render it from context for MDX content.
// Pass structured fields, or pass children for full control.
export default function PageBanner({title, desc, button, link, children, className}) {
  return (
    <section className='banner'>
        <div className='container'>
            <h1>{title}</h1>
            {desc && <p >{desc}</p>}
            {button && link && (
                <Link
                className='button button--primary button--lg'
                to={link}>
                    {button}
                </Link>
            )}
        </div>
    </section>
  );
}