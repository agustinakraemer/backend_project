const socket = io()
const form = document.getElementById('form')
const inputTitle = document.getElementById('title')
const inputPrice = document.getElementById('price')
const inputStock = document.getElementById('stock')
const buttonAdd = document.getElementById('addProduct')
const buttonDelete = document.getElementById('deleteProduct')

buttonAdd.onclick = () => {
    socket.emit('addProduct',(tite, price, stock))
}
buttonDelete.onclick = () => {
    socket.emit('buttonDelete',(title, price, stock))
}


form.onsubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title : inputTitle.value,
      price: parseInt(inputPrice.value),
      stock: parseInt(inputStock.value)
    };
    socket.emit('addProduct', newProduct);
  };