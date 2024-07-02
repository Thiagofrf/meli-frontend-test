import express from 'express';
import cors from 'cors'
// import productRoutes from './routes/products.js'
// import searchRoutes from './routes/search.js'

const app = express();
app.use(cors())
// app.use(productRoutes)
// app.use(searchRoutes)

app.get('/items/:id', (req, res) => {
    console.log('api called: ', req)
})

app.get('/api/items?q=:query', (req, res) => {
    console.log('search api called: ', req)
})

app.use((req, res) => {
    res.status(404).json({
      someBody: 'Route not found or missing resource.....'
    })
  })

app.listen(8080, () => {
    console.log('server listening on port 8080')
})
