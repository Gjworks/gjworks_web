'use client'

import React, { useEffect } from 'react'

const Error = statusCode => {
  useEffect(() => {
    console.error(statusCode)
  }, [statusCode])
  return (
    <div className="text-center text-white py-20 text-lg">
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </div>
  )
}

// Error.getInitialProps = ({ res, err }) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404
//   return { statusCode }
// }

export default Error
