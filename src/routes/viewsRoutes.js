import { Router } from "express"
import fs from 'fs'

const router = Router()


router.get('/products',async(req,res)=>{
    const data = await fs.promises.readFile("data/products.json",'utf-8')
    const products = JSON.parse(data)
res.status(200).render("index",{products})
})|

router.get('/realTimeProducts',async(req,res)=>{
res.status(200).render("realTimeProducts",{})
})
export default router