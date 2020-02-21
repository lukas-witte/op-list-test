'use strict'
import express from 'express'
import * as Utils from './Utils'

let app = express()

app.get('/', (req, res) => {
  res.send([
    {vorgangsnr: 123123, agentur: "ivu", status: 'lieferbar'},
    {vorgangsnr: 1232133, agentur: "lwi", status: 'offen'},
    {vorgangsnr: 345345, agentur: "lwi", status: 'geschlossen'},
    {vorgangsnr: 657567576, agentur: "ivu", status: 'lieferbar'}
  ])
})

let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`server running at port http://localhost/${server.address().port}`)
})
