import express from 'express';
import cors from 'cors'
import searchRoutes from './routes/search.js'
import productRoutes from './routes/products.js'

const app = express();
app.use(cors())
app.use(express.json())

app.use(searchRoutes)
app.use(productRoutes)

app.use((req, res) => {
  res.status(404).json({
    someBody: 'Route not found or missing resource.....'
  })
})

app.listen(8080, () => {
  console.log('server listening on port 8080')
})
