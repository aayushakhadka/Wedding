import React from 'react'
import { ApiDataProvider } from './components/ApiDataProvider';
import { Memories } from './components/Memories';

const Memory = () => {
  return (
    <ApiDataProvider>
    <div>
        <Memories/>
    </div>

    </ApiDataProvider>
  )
}
 export default Memory;