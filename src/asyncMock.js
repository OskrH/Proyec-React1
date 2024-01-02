const products = [
    {
        id: '6v4yf6TInK1TIo0cTRvO',
        nombre: 'Need for Speed™ Unbound',
        precio: 55900,
        category: 'Deportes y Carreras',
        img: 'https://media.contentapi.ea.com/content/dam/ea/need-for-speed-unbound/common/nfs-ub-standard-featured-image.jpg.adapt.crop191x100.628p.jpg',
        stock: 5,
        description: '¡Hazte notar en las calles de Lakeshore! Need for Speed™ Unbound Vol. 5 ofrece nuevas formas de ganar XP y fondos.'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}