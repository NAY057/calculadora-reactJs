import React from 'react'
// import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client';
import App from './App'

const root_id = document.getElementById('root')

const root = createRoot(root_id)

root.render(<App/>)
// ReactDOM.render(<App/>, document.getElementById('root') )