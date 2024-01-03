import React from 'react'
import { ApiDataProvider } from './components/ApiDataProvider';
import { Traveldetails } from './components/Traveldetails';

const Traveldetail = () => {
  return (
    <ApiDataProvider>
        <div>
            <Traveldetails/>
        </div>
    </ApiDataProvider>
  )
}

export default Traveldetail;