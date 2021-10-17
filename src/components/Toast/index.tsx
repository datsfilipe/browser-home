import React from 'react'

import { Toaster } from 'react-hot-toast'

export function Toast() {
  return (
    <Toaster
      toastOptions={{
        duration: 5000,
        style: {
          background: '#252131',
          color: '#fefefe',
        }
      }}
    />
  )
}
