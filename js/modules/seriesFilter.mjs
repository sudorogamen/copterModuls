

import renderCard from "./renderCard.mjs";


function seriesFilter(products) {
  let seriesList = document.querySelector(".series-list");
  let series = document.querySelectorAll(".series-item");
  let activeSeries = null;
  seriesList.addEventListener("click", (e) => {
    // проверяем событие нажатия на элемент фильтра
    if (e.target == seriesList) {
      return;
    } else {
      //обновляем значение активного фильтра
        if(e.target.getAttribute("value") == "All"){
            activeSeries = null
        }else{
            activeSeries = e.target.getAttribute("value");
        }
//добаляем актиному элемкету класс
      series.forEach((item) => { item.classList.remove("active");});
      e.target.classList.add("active");
//фильтруем и перерендерим массив
      let filteredProducts = Object.values(products).filter((product) => {
        if(activeSeries && product.series !== activeSeries){
            return false
        }else{
            return true
        }
      })
     renderCard(filteredProducts)
    }
  });
}
export { seriesFilter };
