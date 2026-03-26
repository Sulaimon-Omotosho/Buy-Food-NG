import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// const API_URL =
//   process.env.NODE_ENV === 'development'
//     ? 'http:localhost:3000' // Development API URL
//     : 'https://buy-food-ng.vercel.app' // Production API URL

// const getData = async (category) => {
//   const res = await fetch(`${API_URL}/api/products?cat=${category}`, {
//     cache: 'no-store',
//   })

//   if (!res.ok) {
//     throw new Error('Failed!')
//   }
//   return res.json()
// }

const getData = pizzas

const CategoryPage = async ({ params }) => {
  // const products = await getData(params.category)
  const products = getData

  return (
    <div
      className='flex flex-wrap text-red-500 border-l-2
border-red-500'
    >
      {products.map((item) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className='w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50 '
        >
          {/* Image Container */}
          {item.img && (
            <div className='relative h-[80%]'>
              <Image
                src={item.img}
                alt={item.title}
                fill
                className='object-contain'
              />
            </div>
          )}
          {/* Text Container */}
          <div className='flex items-center justify-between font-bold'>
            <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
            <h2 className='group-hover:hidden'>N{item.price}</h2>
            <button className='hidden group-hover:block bg-red-500 text-white uppercase rounded-md p-2'>
              Add To Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage
