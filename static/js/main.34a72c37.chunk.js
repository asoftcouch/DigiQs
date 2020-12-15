(this["webpackJsonpapp-digiqs"]=this["webpackJsonpapp-digiqs"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(21),s=n.n(i),d=n(7),o=n(4),j=n(2),l=n.n(j),b=n(8),u=n(6),h=n.n(u),O=function(){return function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:5000/inventario");case 2:n=e.sent,t({type:"FETCH_INVENTORY",payload:{inventory:n.data}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=(n(38),function(e){var t=e.name,n=e.quantity,a=e.price,r=e.category;e.action,e.actionName;return Object(c.jsxs)("tr",{className:"Inventory-item",children:[Object(c.jsxs)("td",{className:"name",children:[" ",t," "]}),Object(c.jsxs)("td",{className:"quantity",children:[n," "]}),Object(c.jsxs)("td",{className:"unit-price",children:[" ",a," "]}),Object(c.jsxs)("td",{className:"category",children:[" ",r," "]})]})}),x=n(15),m=function(e){var t=e.action,n=e.actionName,r=Object(o.b)();Object(a.useEffect)((function(){r(O())}),[r]);var i=Object(o.c)((function(e){return e.inventory})).inventory;return Object(c.jsxs)(x.a.div,{variants:{hidden:{y:100},show:{y:0,transition:{duration:.3,ease:"easeIn"}}},initial:"hidden",animate:"show",className:"inventory-board",children:[Object(c.jsx)("br",{}),Object(c.jsx)("h2",{className:"title-name",children:"Lista de Inventario"}),Object(c.jsx)("table",{children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Producto"}),Object(c.jsx)("th",{children:"Cantidad"}),Object(c.jsx)("th",{children:"Precio por Unidad"}),Object(c.jsx)("th",{children:"Categoria"})]}),i.map((function(e){return Object(c.jsx)(p,{actionName:n,action:t,name:e.name,quantity:e.quantity,price:e.price,category:e.category},e._id)}))]})})]})},v=(n(71),function(){var e=Object(o.b)();Object(a.useEffect)((function(){e(function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:5000/Data/Orders");case 2:n=e.sent,t({type:"FETCH_DASHBOARD",payload:{dashboard:n.data}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(o.c)((function(e){return e.dashboard})).dashboard;console.log(t);return Object(c.jsx)(x.a.div,{variants:{hidden:{y:100},show:{y:0,transition:{duration:1,ease:"easeOut"}}},initial:"hidden",animate:"show",className:"Dashboard-container",children:Object(c.jsxs)("div",{className:"Dashboard-inset",children:[Object(c.jsxs)("div",{className:"Dashboard-Header",children:[Object(c.jsx)("br",{}),Object(c.jsx)("h1",{children:"Bienvenido a tu Dashboard"}),Object(c.jsx)("br",{})]}),Object(c.jsxs)("div",{className:"Category-container",children:[Object(c.jsx)("div",{className:"Category-header",id:"pending",children:Object(c.jsx)("p",{className:"sub-header",children:"Informacion acerca de las ordenes: "})}),Object(c.jsxs)("div",{className:"Category-header",id:"approved",children:[Object(c.jsx)("p",{children:" Numero de Ordenes Generales:"}),Object(c.jsxs)("p",{children:[" ",t.approved+t.declined+t.pending," "]})]}),Object(c.jsxs)("div",{className:"Category-header",id:"approved",children:[Object(c.jsx)("p",{children:"Numero de Ventas aprovadas:"}),Object(c.jsxs)("p",{children:[" ",t.approved," "]})]}),Object(c.jsxs)("div",{className:"Category-header",id:"pending",children:[Object(c.jsx)("p",{children:"Numero de Pedidos esperando aprobacion: "}),Object(c.jsx)("p",{children:t.pending})]}),Object(c.jsxs)("div",{className:"Category-header",id:"declined",children:[Object(c.jsx)("p",{children:"Numero de Pedidos cancelados: "}),Object(c.jsx)("p",{children:t.declined})]}),Object(c.jsx)("div",{className:"Category-header",id:"pending",children:Object(c.jsx)("p",{class:"sub-header",children:"Base de Datos DigiQs: "})}),Object(c.jsxs)("div",{className:"Category-header",id:"declined",children:[Object(c.jsx)("p",{children:"Numero de Clientes en la plataforma: "}),Object(c.jsx)("p",{children:t.clients})]}),Object(c.jsxs)("div",{className:"Category-header",id:"declined",children:[Object(c.jsx)("p",{children:"Numero de objetos en nuestro inventario: "}),Object(c.jsx)("p",{children:t.inventory})]}),Object(c.jsxs)("div",{className:"Category-header",id:"declined",children:[Object(c.jsx)("p",{children:"Objetos en inventario vendidos en este mes: "}),Object(c.jsx)("p",{children:t.inventory})]})]})]})})}),f=n(9),g=(n(72),function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"logo",children:[Object(c.jsx)("h1",{children:"DigiQs"}),Object(c.jsx)("h2",{children:"Inventory & Management"}),Object(c.jsx)("br",{})]}),Object(c.jsx)("br",{}),Object(c.jsx)("nav",{className:"nav",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(f.b,{to:"/",children:"Dashboard"})}),Object(c.jsx)("li",{children:Object(c.jsx)(f.b,{to:"/inventory",children:"Inventario"})}),Object(c.jsx)("li",{children:Object(c.jsx)(f.b,{to:"/orders",children:"Lotes"})}),Object(c.jsx)("li",{children:Object(c.jsx)(f.b,{to:"/clients",children:"Clientes"})}),Object(c.jsx)("li",{children:Object(c.jsx)(f.b,{to:"/settings",children:"Ajustes"})}),Object(c.jsx)("li",{children:Object(c.jsx)(f.b,{to:"/exit",children:"Salir"})})]})})]})}),y=(n(39),n(42),n(16)),N=(n(74),n(82),n(75),function(){return function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:5000/Categories");case 2:n=e.sent,t({type:"FETCH_CATEGORIES",payload:{categories:n.data}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),C=function(){var e=Object(o.b)();Object(a.useEffect)((function(){e(N())}),[e]);var t=Object(o.c)((function(e){return e.categories})).categories,n=Object(o.c)((function(e){return e.inventory})).inventory,r=Object(a.useState)(""),i=Object(y.a)(r,2),s=(i[0],i[1],function(){var e=Object(b.a)(l.a.mark((function e(t){var c,a,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=document.getElementById("name").value,a=document.getElementById("quantity").value,r=document.getElementById("price").value,i=document.getElementById("category").value,e.next=7,d(c,a,r,i).then(console.log(n));case 7:document.getElementById("name").value="",document.getElementById("quantity").value="",document.getElementById("price").value="",document.getElementById("category").value="";case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function d(e,t,n,c){return j.apply(this,arguments)}function j(){return(j=Object(b.a)(l.a.mark((function t(n,c,a,r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("http://localhost:5000/inventario/add",{name:n,quantity:c,price:a,category:r});case 2:t.sent,e(O());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:s,children:[Object(c.jsx)("h2",{className:"title-header",children:"Agrega un nuevo articulo: "}),Object(c.jsxs)("div",{className:"createInventory-form",children:[Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"product-name",children:"Nombre de Producto: "}),Object(c.jsx)("input",{type:"text",name:"name",id:"name"})]}),Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"product-quantity",children:"Cantidad para inventario: "}),Object(c.jsx)("input",{type:"number",step:"1",min:"1",maxLength:"5",name:"quantity",id:"quantity"})]}),Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"product-price",children:"Precio unitario: "}),Object(c.jsx)("input",{type:"number",step:"0.5",min:"1",maxLength:"5",name:"price",id:"price"})]}),Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"product-category",children:"Categoria: "}),Object(c.jsx)("select",{name:"category",id:"category",children:t.map((function(e){return Object(c.jsxs)("option",{value:e.value,children:[" ",e.value," "]},e._id)}))})]})]}),Object(c.jsx)("div",{className:"form-input-submit",children:Object(c.jsx)("input",{className:"submit-form",type:"submit",value:"Agregar nuevo item"})})]})})},w=(n(76),function(){var e=Object(o.b)();Object(a.useEffect)((function(){e(function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:5000/Clients");case 2:n=e.sent,t({type:"FETCH_CLIENTS",payload:{clients:n.data}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(o.c)((function(e){return e.clients})).clients;return Object(c.jsxs)(x.a.div,{variants:{hidden:{opacity:0},show:{opacity:1,transition:{duration:.2}}},initial:"hidden",animate:"show",children:[Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:"Lista de Clientes"})}),Object(c.jsx)("div",{className:"clientList",children:t.map((function(e){return Object(c.jsx)("div",{className:"client",children:Object(c.jsxs)("div",{className:"client-content",children:[Object(c.jsxs)("h2",{children:[" Nombre:  ",e.CompanyName," "]}),Object(c.jsxs)("h2",{children:[" Rtn: ",e.Rtn," "]}),Object(c.jsxs)("h2",{children:[" Agregado: ",e.added," "]})]})},e._id)}))})]})}),E=(n(77),function(){var e=Object(o.b)();Object(a.useEffect)((function(){e(function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:5000/Orders");case 2:n=e.sent,t({type:"FETCH_ORDERS",payload:{orders:n.data}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(o.c)((function(e){return e.orders})).orders;return t.map((function(e){return e.details.map((function(e){return console.log(e)}))})),Object(c.jsx)(x.a.div,{variants:{hidden:{opacity:0},show:{opacity:1,transition:{duration:.2}}},animate:"show",initial:"hidden",children:t.map((function(e){return Object(c.jsxs)("div",{className:"order-listing",children:[Object(c.jsx)("div",{className:"master",children:Object(c.jsxs)("div",{className:"master-content",children:[Object(c.jsxs)("h3",{children:["Codigo: ",e._id]}),Object(c.jsxs)("h3",{children:["Cliente: ",e.cliente_id]}),Object(c.jsxs)("h3",{children:["Status: ",e.status]})]})}),Object(c.jsx)("div",{className:"detail",children:e.details.map((function(e){return Object(c.jsxs)("div",{className:"individual-detail",style:{color:"black"},children:[Object(c.jsxs)("p",{children:["producto: ",e.product]}),Object(c.jsxs)("p",{children:["precio: ",e.price]}),Object(c.jsxs)("p",{children:["cantidad: ",e.quantity]}),Object(c.jsxs)("p",{children:["categoria: ",e.category," "]})]},e._id)}))}),Object(c.jsx)("div",{className:"total",style:{color:"white",marginLeft:"3%"},children:Object(c.jsx)("p",{className:"total-bill",children:"Total"})})]},e._id)}))})}),I=(n(78),function(){var e=Object(o.b)(),t=Object(a.useState)(""),n=Object(y.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)(""),d=Object(y.a)(s,2),j=d[0],u=d[1];Object(a.useEffect)((function(){e(N())}),[e]);var O=Object(o.c)((function(e){return e.categories})).categories;console.log(O);var p=function(){var t=Object(b.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("http://localhost:5000/Categories/add",{category:r,description:j});case 2:t.sent,e(N());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.jsxs)(x.a.div,{variants:{hidden:{opacity:0},show:{opacity:1,transition:{duration:.2}}},animate:"show",initial:"hidden",children:[Object(c.jsx)("form",{onSubmit:p,children:Object(c.jsx)("div",{className:"form-content",children:Object(c.jsxs)("div",{className:"form-inputs",children:[Object(c.jsx)("label",{htmlFor:"",children:"Nombre de la Categoria: "}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{onChange:function(e){i(e.target.value)},className:"category-input",maxLength:"20",value:r,type:"text"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{htmlFor:"",children:"Descripcion de la categoria: "}),Object(c.jsx)("br",{}),Object(c.jsx)("textarea",{onChange:function(e){u(e.target.value)},className:"big-input",value:j,name:"",id:"",maxLength:"40",cols:"20",rows:"1"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"form-submit",children:" Agregar Categoria "})]})})}),Object(c.jsx)("br",{}),Object(c.jsx)("table",{children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Nombre "}),Object(c.jsx)("th",{children:"Descripcion"})]}),O.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.value}),Object(c.jsx)("td",{children:e.description})]},e._id)}))]})})]})});n(79);var _=function(){return Object(c.jsxs)("div",{className:"Page-wrapper",children:[Object(c.jsx)("div",{className:"Navigation-bar",children:Object(c.jsx)(g,{})}),Object(c.jsx)("div",{className:"Page-view",children:Object(c.jsx)("div",{className:"Viewer",children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{path:"/",exact:!0,children:Object(c.jsx)(v,{})}),Object(c.jsxs)(d.a,{path:"/inventory",exact:!0,children:[Object(c.jsx)(C,{}),Object(c.jsx)(m,{})]}),Object(c.jsx)(d.a,{path:"/Orders",exact:!0,children:Object(c.jsx)(E,{})}),Object(c.jsx)(d.a,{path:"/Clients",exact:!0,children:Object(c.jsx)(w,{})}),Object(c.jsx)(d.a,{path:"/Settings",exact:!0,children:Object(c.jsx)(I,{})})]})})})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},F=n(17),S=n(5),D={inventory:[]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_INVENTORY":return Object(S.a)(Object(S.a)({},e),{},{inventory:t.payload.inventory});default:return Object(S.a)({},e)}},H={clients:[]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CLIENTS":return Object(S.a)(Object(S.a)({},e),{},{clients:t.payload.clients});default:return Object(S.a)({},e)}},q={orders:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ORDERS":return Object(S.a)(Object(S.a)({},e),{},{orders:t.payload.orders});default:return Object(S.a)({},e)}},A={dashboard:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DASHBOARD":return Object(S.a)(Object(S.a)({},e),{},{dashboard:t.payload.dashboard});default:return Object(S.a)({},e)}},P={notifications:[]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_NOTIFICATIONS":return Object(S.a)(Object(S.a)({},e),{},{notifications:t.payload.notifications});default:return Object(S.a)({},e)}},G={categories:[]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CATEGORIES":return Object(S.a)(Object(S.a)({},e),{},{categories:t.payload.categories});default:return Object(S.a)({},e)}},J=Object(F.c)({inventory:B,clients:L,orders:R,dashboard:k,notifications:V,categories:M}),Q=n(41),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.d,X=Object(F.e)(J,U(Object(F.a)(Q.a)));s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(f.a,{children:Object(c.jsx)(o.a,{store:X,children:Object(c.jsx)(_,{})})})}),document.getElementById("root")),T()}},[[80,1,2]]]);
//# sourceMappingURL=main.34a72c37.chunk.js.map