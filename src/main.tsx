import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import {MultipleContainers} from './MultipleContainers/MultipleContainers.tsx'
// import {data} from './data'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MultipleContainers
      vertical
      // items={data}
    />
  </React.StrictMode>,
)
