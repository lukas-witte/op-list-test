'use strict'
import express from 'express'
import * as Utils from './Utils'

let app = express()

app.get('/:id', (req, res) => {
  let apiKey = req.headers.authorization
  if (!apiKey) {
    return res.status(403).json({ error: 'No api key sent!' });
  }else{
    /**
     * Hier passiert später die Datenbeschaffung über die eigene Datenbank
     * Wo der authKey bestimmten vorgängen zugeordnet wird
     */
    //Zu testzwecken einfach ne einfache if über unterschiedliche auth keys
    if(apiKey === '1'){
      res.send([
        {vorgangsnr: 123123, agentur: "ivu", status: 'lieferbar'},
        {vorgangsnr: 1232133, agentur: "lwi", status: 'offen'},
        {vorgangsnr: 345345, agentur: "lwi", status: 'geschlossen'},
        {vorgangsnr: 657567576, agentur: "ivu", status: 'lieferbar'}
      ])
    }else if(apiKey === '2'){
      res.send([
        {vorgangsnr: 324324, agentur: "ahw", status: 'lieferbar'},
        {vorgangsnr: 349508, agentur: "prapp", status: 'offen'},
        {vorgangsnr: 956978, agentur: "lwi", status: 'geschlossen'},
        {vorgangsnr: 198908, agentur: "ivu", status: 'lieferbar'}
      ])
    }
  }
 
})

let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`server running at port http://localhost/${server.address().port}`)
})
