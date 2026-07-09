import React from 'react';

import './colorband.css';

export default function ColorBand({color, image, children}) {
  return (
    <section className={`colorband ${color ? `colorband--${color}` : ''}`}>
        <div className="container">
            <div className="row">
                {image ? (
                    <>
                        <div className='col col--6'>
                            {children}
                        </div>
                        <div className='col col--6'>
                            <img src={image} alt='' />
                        </div>
                    </>
                ) : (
                    <div className='col col--12'>
                        {children}
                    </div>
                )}
            </div>
        </div>
    </section>
  );
}






