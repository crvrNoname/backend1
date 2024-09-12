import { Router } from "express";
import fs from 'fs'

const router = Router()

router.get('/:id',async (req,res)=>{
    const {id} = req.params
    const data = await fs.promises.readFile('data/carts.json','utf-8')
    const carts = JSON.parse(data)
    const product = carts.find(cart => cart.id === id)
   
    res.status(200).json(product)
})

router.post('/:cid/product/:pid',async (req,res)=>{
    const {cid,pid}= req.params
    const {quantity} = req.body
    const data = await fs.promises.readFile('data/carts.json','utf-8')
    const carts = JSON.parse(data)
    const newCarts = carts.map(cart => {
        if(cart.id == cid){
            const index = cart.products.findIndex(product => product.id === pid)
            if(index === -1){
                cart.products.push({id:pid,quantity})
            }else{
                cart.product[index]={id:pid,quantity:cart.products[index].quantity + quantity}
            }
            return cart
        }
        return cart
    })
    await fs.promises.writeFile('data/carts.json',JSON.stringify(carts,null,2))
    res.json({messge:"Producto agregado al carrito exitosamente"})
})
 
export default router