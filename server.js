import express from 'express';
import path from 'path';
import multer  from 'multer';
import {mergePdfs} from './merge.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const upload = multer({ dest: 'uploads/' })
const app = express()
app.use('/static',express.static('public'))
const port = 3000

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname,"templates/index.html"))
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
  let d = await mergePdfs(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))
  res.redirect(`http://localhost:3000/static/${d}.pdf`)
  // res.send({data: req.files})
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})