(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[6],{120:function(e,r){},127:function(e,r,t){"use strict";var c=t(6),a=t.n(c),n=t(1),o=t(38),i=t(5),l=t.n(i),s=(t(4),t(145),function(e){var r=e.className,t=e.currency,c=e.maxPrice,a=e.minPrice,n=e.priceClassName,i=e.priceStyle;return React.createElement("span",{className:r},React.createElement(o.a,{className:l()("wc-block-components-product-price__value",n),currency:t,value:a,style:i})," — ",React.createElement(o.a,{className:l()("wc-block-components-product-price__value",n),currency:t,value:c,style:i}))}),u=function(e){var r=e.className,t=e.currency,c=e.regularPriceClassName,a=e.regularPriceStyle,i=e.regularPrice,s=e.priceClassName,u=e.priceStyle,p=e.price;return React.createElement("span",{className:r},React.createElement("span",{className:"screen-reader-text"},Object(n.__)("Previous price:",'woocommerce')),React.createElement(o.a,{currency:t,renderText:function(e){return React.createElement("del",{className:l()("wc-block-components-product-price__regular",c),style:a},e)},value:i}),React.createElement("span",{className:"screen-reader-text"},Object(n.__)("Discounted price:",'woocommerce')),React.createElement(o.a,{currency:t,renderText:function(e){return React.createElement("ins",{className:l()("wc-block-components-product-price__value","is-discounted",s),style:u},e)},value:p}))};r.a=function(e){var r=e.align,t=e.className,c=e.currency,n=e.maxPrice,i=void 0===n?null:n,p=e.minPrice,m=void 0===p?null:p,f=e.price,y=void 0===f?null:f,b=e.priceClassName,d=e.priceStyle,g=e.regularPrice,v=e.regularPriceClassName,_=e.regularPriceStyle,N=l()(t,"price","wc-block-components-product-price",a()({},"wc-block-components-product-price--align-".concat(r),r));return g&&y!==g?React.createElement(u,{className:N,currency:c,price:y,priceClassName:b,priceStyle:d,regularPrice:g,regularPriceClassName:v,regularPriceStyle:_}):null!==m&&null!==i?React.createElement(s,{className:N,currency:c,maxPrice:i,minPrice:m,priceClassName:b,priceStyle:d}):null!==y?React.createElement("span",{className:N},React.createElement(o.a,{className:l()("wc-block-components-product-price__value",b),currency:c,value:y,style:d})):React.createElement("span",{className:N},React.createElement("span",{className:l()("wc-block-components-product-price__value",b)}))}},145:function(e,r){},148:function(e,r,t){"use strict";t.d(r,"c",(function(){return f})),t.d(r,"b",(function(){return y})),t.d(r,"a",(function(){return b}));var c=t(6),a=t.n(c),n=t(23),o=t.n(n),i=t(2);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);r&&(c=c.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,c)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var u,p,m={code:i.CURRENCY.code,symbol:i.CURRENCY.symbol,thousandSeparator:i.CURRENCY.thousandSeparator,decimalSeparator:i.CURRENCY.decimalSeparator,minorUnit:i.CURRENCY.precision,prefix:(u=i.CURRENCY.symbol,p=i.CURRENCY.symbolPosition,{left:u,left_space:" "+u,right:"",right_space:""}[p]||""),suffix:function(e,r){return{left:"",left_space:"",right:e,right_space:" "+e}[r]||""}(i.CURRENCY.symbol,i.CURRENCY.symbolPosition)},f=function(e){if(!e||"object"!==o()(e))return m;var r=e.currency_code,t=e.currency_symbol,c=e.currency_thousand_separator,a=e.currency_decimal_separator,n=e.currency_minor_unit,i=e.currency_prefix,l=e.currency_suffix;return{code:r||"USD",symbol:t||"$",thousandSeparator:"string"==typeof c?c:",",decimalSeparator:"string"==typeof a?a:".",minorUnit:Number.isFinite(n)?n:2,prefix:"string"==typeof i?i:"$",suffix:"string"==typeof l?l:""}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s(s({},m),e)},b=function(e,r){if(""===e||void 0===e)return"";var t=parseInt(e,10);if(!Number.isFinite(t))return"";var c=y(r),a=t/Math.pow(10,c.minorUnit),n=c.prefix+a+c.suffix,o=document.createElement("textarea");return o.innerHTML=n,o.value}},295:function(e,r,t){"use strict";t.r(r);var c=t(6),a=t.n(c),n=(t(4),t(5)),o=t.n(n),i=t(127),l=t(148),s=t(69),u=t(189),p=t(8),m=t(188);r.default=Object(m.withProductDataContext)((function(e){var r,t,c,n,m,f,y,b=e.className,d=e.align,g=e.fontSize,v=e.customFontSize,_=e.saleFontSize,N=e.customSaleFontSize,O=e.color,C=e.customColor,P=e.saleColor,j=e.customSaleColor,S=Object(s.useInnerBlockLayoutContext)().parentClassName,R=Object(s.useProductDataContext)().product,w=o()(b,a()({},"".concat(S,"__product-price"),S));if(!R.id)return React.createElement(i.a,{align:d,className:w});var E=Object(u.getColorClassName)("color",O),h=Object(u.getFontSizeClass)(g),x=Object(u.getColorClassName)("color",P),k=Object(u.getFontSizeClass)(_),U=o()((r={"has-text-color":O||C,"has-font-size":g||v},a()(r,E,E),a()(r,h,h),r)),D=o()((t={"has-text-color":P||j,"has-font-size":_||N},a()(t,x,x),a()(t,k,k),t)),F={color:C,fontSize:v},z={color:j,fontSize:N},Y=R.prices,M=Object(l.c)(Y),T=Y.price!==Y.regular_price,V=T?o()((c={},a()(c,"".concat(S,"__product-price__value"),S),a()(c,D,Object(p.F)()),c)):o()((n={},a()(n,"".concat(S,"__product-price__value"),S),a()(n,U,Object(p.F)()),n)),B=T?z:F;return React.createElement(i.a,{align:d,className:w,currency:M,price:Y.price,priceClassName:V,priceStyle:Object(p.F)()?B:{},minPrice:null==Y||null===(m=Y.price_range)||void 0===m?void 0:m.min_amount,maxPrice:null==Y||null===(f=Y.price_range)||void 0===f?void 0:f.max_amount,regularPrice:Y.regular_price,regularPriceClassName:o()((y={},a()(y,"".concat(S,"__product-price__regular"),S),a()(y,U,Object(p.F)()),y)),regularPriceStyle:Object(p.F)()?F:{}})}))},38:function(e,r,t){"use strict";var c=t(11),a=t.n(c),n=t(6),o=t.n(n),i=t(14),l=t.n(i),s=t(99),u=t(5),p=t.n(u);t(120);function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);r&&(c=c.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,c)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){o()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.a=function(e){var r=e.className,t=e.value,c=e.currency,n=e.onValueChange,o=l()(e,["className","value","currency","onValueChange"]);if("-"===t)return null;var i=t/Math.pow(10,c.minorUnit);if(!Number.isFinite(i))return null;var u=p()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",r),m=f(f(f({displayType:"text"},o),function(e){return{thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0}}(c)),{},{value:void 0,currency:void 0,onValueChange:void 0}),y=n?function(e){var r=e.value*Math.pow(10,c.minorUnit);n(r)}:function(){};return React.createElement(s.a,a()({className:u},m,{value:i,onValueChange:y}))}}}]);