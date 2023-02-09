 class Header {

    handlerOpenShopinPage(){
        shoppingPage.render();
    }

    render(count){
        const html = `
        <div class="header-conteiner">
                <div class="header-counter" onclick="headerPage.handlerOpenShopinPage();">
                🗑️${count}
                </div>
         </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }

 }
 const headerPage = new Header()

 const productsStore = localStorageUtil.getProducts();
 headerPage.render(productsStore.length)