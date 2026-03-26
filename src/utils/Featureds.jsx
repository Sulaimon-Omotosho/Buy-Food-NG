import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

// const API_URL =
//   process.env.NODE_ENV === 'development'
//     ? 'http:localhost:3000' // Development API URL
//     : 'https://buy-food-ng.vercel.app' // Production API URL

// const getData = async () => {
//   const res = await fetch(`${API_URL}/api/products`, {
//     cache: 'no-store',
//   })

//   if (!res.ok) {
//     throw new Error('Failed!')
//   }
//   return res.json()
// }

const getData = featuredProducts

const Featureds = async () => {
  const featuredProducts = getData
  // const featuredProducts = featuredProducts()

  return (
    <div>
      <div className='w-screen overflow-x-scroll  text-red-500 '>
        {/* Wrapper */}
        <div className='w-max flex'>
          {/* Single Item */}
          {featuredProducts.map((item) => (
            <div
              key={item.id}
              className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] md:h-[75vh] xl:w-[33vw] xl:h-[90vh]'
            >
              {/* Image Container */}
              <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className='object-contain'
                  />
                )}
              </div>
              {/* Text Container */}
              <div className='flex-1 flex flex-col gap-4 justify-center items-center text-center'>
                <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>
                  {item.title}
                </h1>
                <p className='p-4 xl:p-8 '>{item.desc}</p>
                <span className='text-xl font-bold'>N{item.price}</span>
                <button className='bg-red-500 text-white p-2 rounded-md'>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Featureds
