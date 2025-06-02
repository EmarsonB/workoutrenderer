import React from 'react'

type FitnessCard = {
    name: string;
    description?: string;
    discpline?: string;
    duration: string;
    variant: 'pink';
    render?: string;
    intensity?: string;
}

function FitnessCard({
    name,
    discpline,
    duration,
    description,
    variant,
    render,
    intensity
}: FitnessCard) {

  const color = {
    'orange': 'bg-orange-100 text-black', 
    'black': 'bg-stone-900', 
  }

  const classNames = `${color[variant]}`

  return (
    <div className={`rounded-lg ${classNames} p-5 max-w-4xl  text-left my-3`}>
        
        <h2 className='text-xl font-semibold'>{name}</h2>
        <p className='text-sm my-5 max-w-[500px]'>{description}</p>

        <div className='flex justify-between mt-3'>
            
            {/* 
                Reusable approach:
                Segment types of cards has render, intensity, render.
            */}
            {
                render ? 
                (
                    <span>
                        <p className='text-sm opacity-50'>Render</p>
                        <h5 className='text-lg font-semibold'>{render}</h5>
                    </span>

                ):
                (
                    <span>
                        <p className='text-sm opacity-50'>Discipline</p>
                        <h5 className='text-lg font-semibold'>{discpline}</h5>
                    </span>

                )
            }
            {
                intensity ?
                (
                    <span>
                        <p className='text-sm opacity-50'>Intensity</p>
                        <h5 className='text-lg font-semibold'>{intensity}</h5>
                    </span>

                ):
                (
                    <span>
                        <p className='text-sm opacity-50'>Duration</p>
                        <h5 className='text-lg font-semibold'>{duration}</h5>
                    </span>

                )
            }
            
           
        </div>
    </div>
  )
}

export default FitnessCard