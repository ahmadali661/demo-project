import React from 'react'

export default function PrimeFooter() {

    const year = new Date().getFullYear();

  return (
    <footer className='bak mt-0'>
   <div className="container">
    <div className="row">
        <div className="col">
            <p className='mb-0 text-center text-white'>&copy; {year}. All Rights Reserved</p>
        </div>
    </div>
   </div>
    </footer>
  )
}
