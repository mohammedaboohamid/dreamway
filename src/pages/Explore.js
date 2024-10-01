import React from 'react'
import { data } from '../data/data'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
  
        <div>
    
          <div className='flex flex-col items-center'>
            <div>
            <h1 className='text-blue-800 font-bold text-5xl py-10 text-center'>Explore our travelling packages</h1>
            </div>
           
            <div className='flex gap-10 items-center px-36 r'>
              {
                data.map((item)=>{
                  return(
                    <div key={item.id} className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 ">
                      <Link to={`/explore/${item.id}`}>
                      <img src={item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{item.tittle}</h2>
                <p className="dark:text-gray-800">{item.discription}</p>
            </div>
            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
        </div>
                      </Link>
    
    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      )
    }

export default Explore