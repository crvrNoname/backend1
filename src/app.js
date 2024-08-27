import express from 'express';

const app = express();

const PORT = 8080;

app.listen(PORT,()=> console.log(`listening on ${PORT}`))


app.get('/',(req,res)=>{
    res.send("Hola Express")
})

const products =[
    
        
          {
            "id": 1,
            "title": "Manzana",
            "description": "Una fruta dulce y crujiente con un vibrante color rojo.",
            "code": "MAN001",
            "price": 1.5,
            "status": true,
            "stock": 150,
            "category": "Frutas",
            "thumbnails": ["images/manzana1.png", "images/manzana2.png"]
          },
          {
            "id": 2,
            "title": "Banana",
            "description": "Una fruta suave y cremosa, rica en potasio.",
            "code": "BAN002",
            "price": 0.5,
            "status": true,
            "stock": 200,
            "category": "Frutas",
            "thumbnails": ["images/banana1.png", "images/banana2.png"]
          },
          {
            "id": 3,
            "title": "Naranja",
            "description": "Una jugosa fruta cítrica llena de vitamina C.",
            "code": "NAR003",
            "price": 1.0,
            "status": true,
            "stock": 180,
            "category": "Frutas",
            "thumbnails": ["images/naranja1.png", "images/naranja2.png"]
          },
          {
            "id": 4,
            "title": "Pera",
            "description": "Una fruta jugosa y suave con un sabor dulce y delicado.",
            "code": "PER004",
            "price": 1.3,
            "status": true,
            "stock": 120,
            "category": "Frutas",
            "thumbnails": ["images/pera1.png", "images/pera2.png"]
          },
          {
            "id": 5,
            "title": "Uva",
            "description": "Pequeñas frutas dulces y jugosas, perfectas para comer frescas o en vino.",
            "code": "UVA005",
            "price": 2.0,
            "status": true,
            "stock": 100,
            "category": "Frutas",
            "thumbnails": ["images/uva1.png", "images/uva2.png"]
          },
          {
            "id": 6,
            "title": "Fresa",
            "description": "Una fruta pequeña y roja con un sabor dulce y ligeramente ácido.",
            "code": "FRE006",
            "price": 1.8,
            "status": true,
            "stock": 140,
            "category": "Frutas",
            "thumbnails": ["images/fresa1.png", "images/fresa2.png"]
          },
          {
            "id": 7,
            "title": "Piña",
            "description": "Una fruta tropical dulce con una pulpa amarilla y jugosa.",
            "code": "PIN007",
            "price": 2.5,
            "status": true,
            "stock": 90,
            "category": "Frutas",
            "thumbnails": ["images/pina1.png", "images/pina2.png"]
          },
          {
            "id": 8,
            "title": "Mango",
            "description": "Una fruta tropical con una pulpa suave y dulce, rica en vitaminas.",
            "code": "MAN008",
            "price": 2.2,
            "status": true,
            "stock": 110,
            "category": "Frutas",
            "thumbnails": ["images/mango1.png", "images/mango2.png"]
          },
          {
            "id": 9,
            "title": "Cereza",
            "description": "Pequeñas frutas rojas con un sabor dulce y jugoso.",
            "code": "CER009",
            "price": 3.0,
            "status": true,
            "stock": 60,
            "category": "Frutas",
            "thumbnails": ["images/cereza1.png", "images/cereza2.png"]
          },
          {
            "id": 10,
            "title": "Manzana",
            "description": "Una fruta grande y jugosa con pulpa roja y semillas negras.",
            "code": "SAN010",
            "price": 3.5,
            "status": true,
            "stock": 50,
            "category": "Frutas",
            "thumbnails": ["images/sandia1.png", "images/sandia2.png"]
          }
        ]
app.get('/api/products',(req,res)=>{
    console.log(req.query);
    const {title} = req.query;
    
    if(!title){
        
        return res.send({
            products:products
        });
    }
    else{
        const filteredProducts = products.filter(p=>p.title === title )
        return res.send({
            products:filteredProducts
        })
    }
})
//pid = productId
app.get('/api/products/:pid',(req,res)=>{
    try{
    console.log(req.params)
    const {pid}= req.params;
    const productId= parseInt(pid);
    const product = products.find(p=>p.id === productId);
    if(product){
        
        res.send(product);
    }else {
        res.send("Producto no encontrado");
    }
}catch(error){
    res.send("Algo salio mal");
}
})
app.get('/pid',(request,response)=>{
    res.send("Trae producto seleccionado")
})