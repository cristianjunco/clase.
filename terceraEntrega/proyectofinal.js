
const items = document.getElementById('items')
const cards = document.getElementById('cards')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const templateCarritoDeCompras = document.getElementById('carritoDecompras').content
const fragment = document.createDocumentFragment()
let carritoDeCompras = {}
document.addEventListener('DOMContentLoaded', () => {
     fetchData()
     if(localStorage.getItem('carrito compras')){
        carritoDeCompras = JSON.parse(localStorage.getItem('carrito compras'))
        pCarritoCompras() 
    } 
})
cards.addEventListener('click', e => {
     addAgregarCompra(e)
} )
 items.addEventListener('click', e => {
     btnSumarRestar(e)
 })

const fetchData = async () =>  {
    try {
        const res = await fetch('proyectofinal.json')
        const data = await res.json()
    // console.log(data)
        pintarCard(data)
    } catch (error){
        console.log(error)
    }
}

const pintarCard = data => {
    data.forEach(producto =>{
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute('src',producto.thumbnailUrl)
        templateCard.querySelector('.btn-dark').dataset.id = producto.id
        const clone = templateCard.cloneNode(true)
         fragment.appendChild(clone) 
    } )
    cards.appendChild(fragment)
}
const addAgregarCompra = e => {
   if (e.target.classList.contains('btn-dark')) { 
      setAgregarCompra(e.target.parentElement)
   }
   e.stopPropagation()
 }


const setAgregarCompra = objeto => {
console.log(objeto)
const producto = {
    id: objeto.querySelector('.btn-dark').dataset.id,
    title: objeto.querySelector('h5').textContent,
    precio: objeto.querySelector('p').textContent,
    cantidad: 1
}
if (carritoDeCompras.hasOwnProperty(producto.id)){
    producto.cantidad = carritoDeCompras[producto.id].cantidad + 1
}
carritoDeCompras[producto.id] = {...producto}
pCarritoCompras()
//console.log(carritoDeCompras)
}
const pCarritoCompras = () => {
    //console.log(carritoDeCompras)
    items.innerHTML= ""
    Object.values(carritoDeCompras).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent= producto.cantidad * producto.precio
    const clone = templateCarrito.cloneNode(true)
    fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    pFooter()
   localStorage.setItem('carrito compras', JSON.stringify(carritoDeCompras))
}


const pFooter = ()  => {
footer.innerHTML = ''
if(Object.keys(carritoDeCompras).length === 0){
    footer.innerHTML =' <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>'
    return
}
const Tcantidad = Object.values(carritoDeCompras).reduce((acc, {cantidad})=> acc + cantidad, 0)
const Tprecio = Object.values(carritoDeCompras).reduce((acc, {cantidad, precio})=> acc + cantidad * precio, 0)

templateFooter.querySelectorAll('td')[0].textContent =Tcantidad
templateFooter.querySelectorAll('span')[0].textContent =Tprecio

const clone = templateFooter.cloneNode(true)
fragment.appendChild(clone)
footer.appendChild(fragment)

const btnEliminar = document.getElementById('vaciarCarrito')
btnEliminar.addEventListener('click', () =>{
    carritoDeCompras = {}
    pCarritoCompras()
})

}
const btnSumarRestar = e => {
   // console.log(e.target)
    if(e.target.classList.contains('btn-info')){
        carritoDeCompras[e.target.dataset.id]
    const producto =  carritoDeCompras[e.target.dataset.id]
    producto.cantidad =  carritoDeCompras[e.target.dataset.id].cantidad + 1
    carritoDeCompras[e.target.dataset.id] = {...producto}
    pCarritoCompras()
    }

}