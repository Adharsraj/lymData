import React from 'react'
import { useLoaderData } from 'react-router-dom'


const TestskeltandLoader = () => {
   const a= useLoaderData()
   console.log(a)
  return (
    <div>TestskeltandLoader
    </div>
  )
}

export default TestskeltandLoader