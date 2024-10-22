import products from "./products.js";
import renderCard from "./modules/renderCard.mjs";
import { seriesFilter } from "./modules/seriesFilter.mjs";

window.addEventListener('DOMContentLoaded', () => {
    renderCard(products)
    seriesFilter(products)
});

