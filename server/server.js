import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router-dom/server";
import App from '../src/App'

const PORT = 5252
const app = express()
const router = express.Router()

app.use('./build',express.static('build'))
app.get('*',(req,res)=>{

  const context={};
  const app=ReactDOMServer.renderToString(  
  <StaticRouter location={req.url} context={context}>
    <App />
  </StaticRouter>)


const indexfile=path.resolve('../build/index.html')
fs.readFile(indexfile,'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return res.status(500).send('An error occurred')
  }
  return res.send(data.replace('<div id="root"></div>',`<div id="root">${app}</div>`)
  )
})

})

router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }))
// tell the app to use the above rules
app.use(router)

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})
