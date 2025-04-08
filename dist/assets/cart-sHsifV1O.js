import{l as i,q as n,g as o,s as d}from"./utils-DlYJiyZc.js";i();function l(){const t=o("so-cart")||[],a=n(".product-list");if(t.length===0){a.innerHTML="<p>Your cart is empty.</p>";return}const r=t.map((e,c)=>m(e,c)).join("");a.innerHTML=r}function m(t,a){var r,e,c;return t?`<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${t.Images.PrimarySmall}" alt="${t.Name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${t.Name}</h2>
    </a>
    <p class="cart-card__color">${((e=(r=t.Colors)==null?void 0:r[0])==null?void 0:e.ColorName)||"No Color"}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${((c=t.FinalPrice)==null?void 0:c.toFixed(2))||"0.00"}</p>
    <span class="remove-item" data-index="${a}" title="Remove item">❌</span>
  </li>`:""}function p(t){let a=o("so-cart")||[];a.splice(t,1),d("so-cart",a),l()}n(".product-list").addEventListener("click",t=>{if(t.target.classList.contains("remove-item")){const a=parseInt(t.target.dataset.index,10);p(a),location.reload()}});function u(){const t=o("so-cart")||[];if(t.length===0)return;let a=0;return t.forEach(r=>{r!=null&&(a+=r.FinalPrice)}),a}const s=u();s!==0&&(document.querySelector(".cart-total").innerHTML=`<p>Total: $${s.toFixed(2)}</p>`);l();
