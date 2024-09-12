import express from 'express';
import productsRoutes from './routes/productsRoutes.js'
import cartsRoutes from './routes/cartsRoutes.js'

const app = express();
app.use(express.urlencoded({ extended:true}))
app.use(express.json())

const PORT = 8080;

app.listen(PORT,()=> console.log(`listening on ${PORT}`))


app.use('/api/products',productsRoutes)
app.use('/api/carts',cartsRoutes)
