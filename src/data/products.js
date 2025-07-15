const products = [
  {
    id: 1,
    name: "Remera Estampada",
    description: "100% algodón",
    price: 20000,
    stock: 5,
    image: "/img/remera.jpg",
    category: "Remeras"
  },
  {
    id: 2,
    name: "Remera Algodón",
    description: "100% algodón",
    price: 15000,
    stock: 5,
    image: "/img/remeraBlanca.jpg",
    category: "Remeras"
  },
  {
    id: 3,
    name: "Remera Mariposa",
    description: "100% algodón",
    price: 30000,
    stock: 5,
    image: "/img/remeraMariposa.jpg",
    category: "Remeras"
  },
  {
    id: 4,
    name: "Vestido Corazón",
    description: "Con corazones, todo bordado",
    price: 35000,
    stock: 10,
    image: "/img/vestidoConCorazon.jpg",
    category: "Vestidos Verano"
  },
  {
    id: 5,
    name: "Vestido Floreado",
    description: "Tela delicada de lino",
    price: 25000,
    stock: 10,
    image: "/img/vestido.jpg",
    category: "Vestidos Verano"
  },
  {
    id: 6,
    name: "Vestido Floreado 2",
    description: "Tela delicada",
    price: 25000,
    stock: 10,
    image: "/img/vestidoFlores.jpg",
    category: "Vestidos Verano"
  },
  {
    id: 7,
    name: "Bufanda",
    description: "100% algodón, súper calentita",
    price: 16000,
    stock: 16,
    image: "/img/bufanda.jpg",
    category: "Accesorios"
  },
  {
    id: 8,
    name: "Bufanda Cuadrillé",
    description: "100% algodón, súper calentita",
    price: 15000,
    stock: 16,
    image: "/img/BufandaCuadrille.jpg",
    category: "Accesorios"
  },
  {
    id: 9,
    name: "Maxi-Bufanda",
    description: "100% algodón, súper calentita",
    price: 14000,
    stock: 16,
    image: "/img/bufandaMaxi.jpg",
    category: "Accesorios"
  }
];
const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};
const getProductById = (productId) => {
  return new Promise ((resolve, reject)=>{
    setTimeout (()=>{
//filtras lista de productos y traer uno a traves de su ID
const product = products.find((product)=> product.id===Number(productId))
resolve(product);
    },3000);
  })
}
export {getProducts, getProductById};
