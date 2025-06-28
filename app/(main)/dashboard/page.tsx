import Dashboard from '@/components/Dashboard/Dashboard'
import { Suspense } from 'react'
import React from 'react'

const page = () => {
  return (
    <div>
      <Suspense >
        <Dashboard />
        </Suspense>
    </div>
  )
}

export default page