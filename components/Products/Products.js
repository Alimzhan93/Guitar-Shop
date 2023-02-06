class Producs {
    render(){
        let htmlCatalog = '';

        CATALOG.forEach(({id,name,price,img}) => {
            htmlCatalog += `
                <li class = "products-element">
                 <span class = "products-element__name">${name}</span>
                 <img class = "products-element__img" src=${img}/>
                 <span class = "products-element__price"> 💰 ${price}</span>
                 <button class = "products-element__btn">Добавить в корзину</button>
                </li>
            `;
        });

        const html = `
        <ul class = "products-conteiner">
            ${htmlCatalog}
        </ul>`;
       
        ROOT_PRODUCTS.innerHTML = html;
    }
}
const producsPage = new Producs()
producsPage.render() 