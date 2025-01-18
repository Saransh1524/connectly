
import StreamVideoProvider from '@/providers/StreamClientProvider'
import React from 'react'
import {ReactNode} from 'react'

// this component will wrap all of the pages withing it 
// childern is of type ReactNode which is a type that represents any valid React child
const layout = ({children} : {children: ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
      </main>
  )
}

export default layout