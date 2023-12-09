const products = [
    {
        id: '1',
        nombre: 'Alan Wake 2',
        precio: 36.375,
        category: 'Accion',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202305/2420/83ef93949d474052cc87b86617a5498505d4b50390280394.jpg',
        stock: 5,
        description: 'Saga Anderson llega para investigar los asesinatos relacionados a rituales que ocurren en un pequeño pueblo. Alan Wake escribe una oscura historia para moldear la realidad que lo rodea. Estos dos héroes están conectados de alguna forma. ¿Podrán convertirse en los héroes que necesitan ser?'
    },
    {id: '2',
    nombre: 'Hogwarts Legacy',
    precio: 39.999,
    category: 'Aventura',
    img: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/0921/dR9KJAKDW2izPbptHQbh3rnj.png',
    stock: 5,
    description: 'Hogwarts Legacy es un RPG de acción en un mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.'},
{id: '3',
nombre: 'EA SPORTS FC™ 24 Edición Estándar',
precio: 55.999,
category: 'Deportes y Carreras',
img: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000061749/bd653d83bdcc1613cfacae62845933633ce97fffc52e7e4070014eb41f9e75f7',
stock: 5,
description: 'EA SPORTS FC™ 24 te da la bienvenida al Juego de Todos: la experiencia futbolística más realista hasta el momento con HyperMotionV, los Estilos de juego optimizados por Opta y un motor Frostbite™ mejorado.'},
{id: '4',
nombre: 'The Lord of the Rings™: Return to Moria™',
precio: 16.359,
category: 'Rol y Estrategia',
img: 'https://cdn1.epicgames.com/spt-assets/2ae760629a384d5199cbefc612db7ac8/the-lord-of-the-rings-return-to-moria-rxsxh.jpg',
stock: 5,
description: 'The Lord of the Rings: Return to Moria sigue a los enanos en una nueva aventura para recuperar su legendario hogar de Moria, bajo las Montañas Nubladas. Los jugadores unirán fuerzas para sobrevivir, fabricar, construir y explorar las emblemáticas y extensas minas. Los valientes expedicionarios deberán mantenerse alerta, ya que los acechan peligros misteriosos.'}
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.filter(prod => prod.id === categoryId))
        }, 500)
    })
}