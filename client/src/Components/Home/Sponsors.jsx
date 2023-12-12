import React from 'react'
import giga from '../../Assets/giga.png'
import hp from '../../Assets/hp.png'
import roccat from '../../Assets/roccat.png'
import thermal from '../../Assets/thermal.png'
import msi from '../../Assets/msi.png'
import razer from '../../Assets/razer.png'
import adata from '../../Assets/adata.png'


function Sponsors() {
  return (
    <div className='flex gap-4 bg-[#fff] rounded-3xl'>
      <img  src={roccat} alt="sponsor" />
      <img src={msi} alt="sponsor" />
      <img src={razer} alt="sponsor" />
      <img src={thermal} alt="sponsor" />
      <img src={adata} alt="sponsor" />
      <img src={hp} alt="sponsor" />
      <img src={giga} alt="sponsor" />
    </div>
  )
}

export default Sponsors
