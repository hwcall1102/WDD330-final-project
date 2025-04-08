import{g as r,s,l as o,b as i}from"./utils-DlYJiyZc.js";import{E as c}from"./ExternalServices-itZwuWbg.js";function d(e){return`<section class="product-detail"> 
    <h3>${e.Brand.Name}</h3>
    <h2 class="divider">${e.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${e.Images.PrimaryLarge}"
      alt="${e.NameWithoutBrand}"
    />
    <p class="product-card__price">$${e.FinalPrice}</p>
    <p class="product__color">${e.Colors[0].ColorName}</p>
    <p class="product__description">
      ${e.DescriptionHtmlSimple}
    </p>
  </section>`}class n{constructor(t,a){this.productId=t,this.product={},this.dataSource=a}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails("main"),setTimeout(()=>{const t=document.getElementById("addToCart");t&&(t.disabled=!1,t.addEventListener("click",this.addToCart.bind(this)))},100)}addToCart(){let t=r("so-cart")||[];Array.isArray(t)||(t=[]),t.push(this.product),s("so-cart",t)}renderProductDetails(t){document.querySelector(t).insertAdjacentHTML("afterBegin",d(this.product))}}o();const l=new c("tents"),u=i("product"),m=new n(u,l);m.init();
