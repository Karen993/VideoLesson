import express from 'express'
import path from 'path'
import {requestTime} from './middlewears.js'
import {logger} from './middlewears.js'

const __dirname = path.resolve()
const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname,'ejs'))

app.get('/',(req, res)=>{
    res.render('index', {title: 'main page'})
})

app.get('/features',(req, res)=>{
    res.render('features', {title: 'features page'})
})

// app.get('/',(req, res)=>{
//     //res.send('<h1>hello express</h1>')
//     res.sendfile(path.resolve(__dirname, 'static', 'index.html'))
// })
//
// app.get('/features',(req, res)=>{
//     res.sendfile(path.resolve(__dirname, 'static', 'features.html'))
// })

app.get('/download',(req, res)=>{
    console.log(req.requestTime)
    res.download(path.resolve(__dirname, 'static', 'index.html'))
})

app.listen(PORT, ()=>{
    console.log(`server has been started on port ${PORT}...`)
})