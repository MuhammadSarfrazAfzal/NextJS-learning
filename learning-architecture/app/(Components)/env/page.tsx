import { configDotenv } from 'dotenv'
import React from 'react'
require('dotenv').config()

const page = () => {
    console.log(process.env.API_KEY)
  return (
    <div>
      
    </div>
  )
}

export default page
