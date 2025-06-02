import React from 'react'


// Displays a name of the segments to which block will be contained in
// This serves as a separator in between segments
function CardWrapper({
    name,
    children,
}) {
  return (
    <div className='p-5 bg-stone-950 rounded-lg my-5 text-left'>

        <h2 className='text-xl font-semibold'>{name}</h2>
        
        <div className='py-3'>
            {children}

        </div>
    </div>
  )
}

export default CardWrapper