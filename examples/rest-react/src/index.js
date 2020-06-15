import React from 'react'
import ReactDOM from 'react-dom'
import { LoginForm } from './LoginForm'
import axios from 'axios'

async function init(){
  // Start the mocking conditionally.
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks')
  }

  axios.get('/ping').then(()=>{
    ReactDOM.render(<LoginForm />, document.getElementById('root'))
  })
}

init()
