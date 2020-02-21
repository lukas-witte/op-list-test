'use strict'
import express from 'express'
import * as Utils from './Utils'

const db = [
  {
    key: 1, 
    vorgang: [
      {vorgangsnr: 123123, agentur: "ivu", status: 'lieferbar'},
      {vorgangsnr: 1232133, agentur: "lwi", status: 'offen'},
      {vorgangsnr: 345345, agentur: "lwi", status: 'geschlossen'},
      {vorgangsnr: 657567576, agentur: "ivu", status: 'lieferbar'}
    ]
  },
  { 
    key: 2,
    vorgang: [
      {vorgangsnr: 324324, agentur: "ahw", status: 'lieferbar'},
      {vorgangsnr: 349508, agentur: "prapp", status: 'offen'},
      {vorgangsnr: 956978, agentur: "lwi", status: 'geschlossen'},
      {vorgangsnr: 198908, agentur: "ivu", status: 'lieferbar'}
    ]
  }
]

let app = express()

app.get('/', (req, res) => {
  let apiKey = req.headers.authorization;
  if (!apiKey) {
    return res.status(403).json({ error: 'No api key sent!' });
  }else{
    let erg = db.find(row => row.key === apiKey.key)
    if(!erg) res.status(404).json({ error: 'The api key is not known' }); 
    /**
     * Hier passiert später die Datenbeschaffung über die eigene Datenbank
     * Wo der authKey bestimmten vorgängen zugeordnet wird
     */
    res.send(erg)
    }
  });

let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`server running at port http://localhost/${server.address().port}`)
})
