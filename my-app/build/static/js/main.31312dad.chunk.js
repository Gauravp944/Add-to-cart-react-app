(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),l=t.n(r),m=t(1);t(3),t(11);var i=function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),r=t[0],l=t[1],i=function(){l(!r)};return c.a.createElement("div",{className:"col mb-5"},c.a.createElement("div",{className:"card h-100"},e.sale?c.a.createElement("div",{className:"badge bg-dark text-white position-absolute sale_style"},"Sale"):c.a.createElement("div",null),c.a.createElement("img",{className:"card-img-top",src:e.image,alt:"..."}),c.a.createElement("div",{className:"card-body p-4"},c.a.createElement("div",{className:"text-center"},c.a.createElement("h5",{className:"fw-bolder"},e.name),e.discount?c.a.createElement("div",null,c.a.createElement("span",{className:"text-muted text-decoration-line-through"},"$",e.price1),"\xa0$",e.price2):c.a.createElement("div",null,"$",e.price1," - $",e.price2))),c.a.createElement("div",{className:"card-footer p-4 pt-0 border-top-0 bg-transparent"},e.action?c.a.createElement("div",{className:"text-center"},c.a.createElement("span",{className:"btn btn-outline-dark mt-auto"},"View Options")):c.a.createElement("div",null,c.a.createElement("div",{className:r?"text-center hide-div":"text-center",onClick:function(){e.AddToCart(e.name),i()}},c.a.createElement("span",{className:"btn btn-outline-dark mt-auto"},"Add to Cart")),c.a.createElement("div",{className:r?"text-center":"text-center hide-div",onClick:function(){e.AddToCart(e.name),i()}},c.a.createElement("span",{className:"btn btn-outline-dark mt-auto"},"Remove"))))))},s=[{name:"Fancy Product",price1:"40.00",price2:"80.00",image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",action:"true",sale:"",discount:""},{name:"Special Item",price1:"20.00",price2:"18.00",image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",action:"",sale:"true",discount:"true"},{name:"Sale Item",price1:"50.00",price2:"25.00",image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",action:"",sale:"true",discount:"true"},{name:"Fancy Product",price1:"40.00",price2:"80.00",image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",action:"true",sale:"",discount:""},{name:"Special Item",price1:"20.00",price2:"18.00",image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",action:"",sale:"true",discount:"true"},{name:"Sale Item",price1:"50.00",price2:"25.00",image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",action:"",sale:"true",discount:"true"},{name:"Fancy Product",price1:"40.00",price2:"80.00",image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",action:"true",sale:"",discount:""},{name:"Special Item",price1:"20.00",price2:"18.00",image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",action:"",sale:"true",discount:"true"}];var o=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],l=function(e){r(function(a){var t=!1,n=a.map(function(a){return e===a&&(t=!0),a});return t?n.filter(function(a){return a!==e}):(n.push(e),n)})},o=t.length;return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("div",{className:"container px-4 px-lg-5"},c.a.createElement("a",{className:"navbar-brand",href:"#!"},"Start Bootstrap"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#!"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"#!"},"About")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",id:"navbarDropdown",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Shop"),c.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},c.a.createElement("li",null,c.a.createElement("a",{className:"dropdown-item",href:"#!"},"All Products")),c.a.createElement("li",null,c.a.createElement("hr",{className:"dropdown-divider"})),c.a.createElement("li",null,c.a.createElement("a",{className:"dropdown-item",href:"#!"},"Popular Items")),c.a.createElement("li",null,c.a.createElement("a",{className:"dropdown-item",href:"#!"},"New Arrivals"))))),c.a.createElement("form",{className:"d-flex"},c.a.createElement("button",{className:"btn btn-outline-dark",type:"submit"},c.a.createElement("i",{className:"bi-cart-fill me-1"}),"Cart",c.a.createElement("span",{className:"badge bg-dark text-white ms-1 rounded-pill"},o)))))),c.a.createElement("header",{className:"bg-dark py-5"},c.a.createElement("div",{className:"container px-4 px-lg-5 my-5"},c.a.createElement("div",{className:"text-center text-white"},c.a.createElement("h1",{className:"display-4 fw-bolder"},"Shop in style"),c.a.createElement("p",{className:"lead fw-normal text-white-50 mb-0"},"With this shop hompeage template")))),c.a.createElement("section",{className:"py-5"},c.a.createElement("div",{className:"container px-4 px-lg-5 mt-5"},c.a.createElement("div",{className:"row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"},s.map(function(e,a){return c.a.createElement(i,{key:a,AddToCart:l,name:e.name,price1:e.price1,price2:e.price2,image:e.image,action:e.action,sale:e.sale,discount:e.discount})})))),c.a.createElement("footer",{className:"py-5 bg-dark"},c.a.createElement("div",{className:"container"},c.a.createElement("p",{className:"m-0 text-center text-white"},"Copyright \xa9 Your Website 2021"))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o,null)),document.getElementById("root"))},5:function(e,a,t){e.exports=t(13)}},[[5,2,1]]]);
//# sourceMappingURL=main.31312dad.chunk.js.map