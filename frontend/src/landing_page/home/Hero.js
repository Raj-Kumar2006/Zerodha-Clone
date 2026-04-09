import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='row text-center'>
                    <img src='media/Images/homeHero.png' alt='Zerodha home hero' className=' mt-5' />
                    <h1 className='mt-5 mb-2'>Invest in everything</h1>
                    <p className='fs-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='p-2 btn btn-primary fs-5 mt-3 fw-semibold' style={{width:"20%", margin: "0 auto"}}>Sign up for free</button>
                </div>
            </div>
        </div>
     );
}

export default Hero;