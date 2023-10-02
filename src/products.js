const products = [
    {
        id:"1",
        name:"Supreme (2000pff)",
        price: 10650,
        category: "2000PFF",
        img:"https://d22fxaf9t8d39k.cloudfront.net/e72145acc3b81a125d48c47440f96f36de0298a879e4487ffc04cb9590884a06123526.jpg",
        stock:15,
        description:"Un vaporizador de 2000pff perfecto para vos"
    },
    {
        id:"2",
        name:"Supreme (5000pff)",
        price: 14900,
        category: "5000PFF",
        img:"https://d22fxaf9t8d39k.cloudfront.net/875fd1f1640e66a262ea520d22cb64d08157410f4504e063cd97faa09c5c0107123526.jpg",
        stock:19,
        description:"El mejor vaporizador precio/calidad del mercado"
    },
    {
        id:"3",
        name:"Supreme (7000pff)",
        price: 16500,
        category: "7000PFF",
        img:"https://d22fxaf9t8d39k.cloudfront.net/78cbf6215fd1d92306b5ad99f55d6aa2450242744a50a5f4a4853ebb3a833e84123526.jpg",
        stock:10,
        description:"El mejor del mercado, solo aqui, en nuestra tienda"
    }

]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
           resolve(products) 
        }, 500);
    } )
}

export const getProductById = (ProductId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === ProductId))
        },200)
    })
}

export const getProductsByCategory = (ProductCategoryId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === ProductCategoryId))
        },200)
    })
}