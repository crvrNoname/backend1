const socket = io()
const realTimeProducts = document.getElementById("realTimeProducts")
socket.emit('products')
socket.on("products",(data)=>{
    realTimeProducts.insertAdjacentHTML=""
    data.forEach(item=>{
        const element = document.createElement("div") 
        element.innerHTML =`        
        <h3>${item.title}<h3/>
        <span>${item.price}<span/>
        <span>${item.stock}<span/>
        <button id="${item.id}" class="deleteItem">Eliminar</button>
        `
    realTimeProducts.append(element)
        })
  })

const formCreateProduct = document.getElementById("formCreateProduct")

formCreateProduct.addEventListener("submit", async (e) => {
    e.preventDefault()
    const title = document.getElementById("title").value
    const price = document.getElementById("price").value
    const stock = document.getElementById("stock").value
    const product ={
        title,
        price,
        stock
    }
    await fetch('http://localhost:8080/api/products',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(product)
    })
    socket.emit('products')
    formCreateProduct.reset()
})