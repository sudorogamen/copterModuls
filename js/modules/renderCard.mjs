
function createCard(item){
  //создание элемента
let li = document.createElement('li')
li.innerHTML = ` <div class="product-image">
              <img src=${item.photo} alt="" class="image-card" />
            </div>
            <div class="product-description">
              <h3 class="product-title">${item.model}</h3>
            </div>
            <div class="product-price">
              <span class="price">${item.prices[0]}</span><span>₽</span>
            </div>
            <button type="button" class="buy-button">В корзину</button>`
li.classList.add('js-product-item')
return li
}
//пробегаем по массиву и собираем элементы в контейнер
function renderCard(products){
    const cardList = document.querySelector(".js-products-list")
    cardList.innerHTML =''
    products.forEach((product) => {
        let item = createCard(product)
        cardList.append(item)

    }) ;
}



export default renderCard