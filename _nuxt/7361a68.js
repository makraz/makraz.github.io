(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(t,e,n){"use strict";var r=n(3),o=n(244);e.a=o((function(t){(0,t.addUtilities)({".safe-top":Object(r.a)({paddingTop:"constant(safe-area-inset-top)"},"paddingTop","env(safe-area-inset-top)"),".safe-left":Object(r.a)({paddingLeft:"constant(safe-area-inset-left)"},"paddingLeft","env(safe-area-inset-left)"),".safe-right":Object(r.a)({paddingRight:"constant(safe-area-inset-right)"},"paddingRight","env(safe-area-inset-right)"),".safe-bottom":Object(r.a)({paddingBottom:"constant(safe-area-inset-bottom)"},"paddingBottom","env(safe-area-inset-bottom)")})}))},127:function(t,e,n){"use strict";n(18);var r=n(1),o={year:"numeric",month:"long",day:"numeric"};r.a.filter("formatDate",(function(t){return new Date(t).toLocaleDateString("en",o)}))},128:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    safe-top safe-left safe-right safe-bottom\n    flex flex-col\n    h-screen\n    justify-between\n  "},["/maintenance"!==t.$nuxt.$route.path?n("Header",{staticClass:"sm:px-6"}):t._e(),t._v(" "),n("Nuxt",{staticClass:"max-w-screen-xl mx-auto mb-10 sm:mb-auto sm:px-16"}),t._v(" "),"/maintenance"!==t.$nuxt.$route.path?n("Footer",{}):t._e()],1)},o=[]},134:function(t,e,n){"use strict";n.r(e);var r=n(19),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"\n      flex flex-wrap flex-col\n      md:flex-row\n      justify-around\n      items-center\n      text-white\n      font-bold\n    "},[n("router-link",{staticClass:"flex title-font font-medium items-center",attrs:{to:"/"}},[n("nuxt-img",{staticClass:"text-white bg-transparent pt-6",attrs:{format:"webp",src:"/makraz.png",alt:"Hamza MAKRAZ",width:"128",height:"47"}})],1),t._v(" "),n("nav",{staticClass:"items-center"},[n("div",{staticClass:"hidden md:flex flex-col sm:flex-row"},[n("ul",{staticClass:"\n            top-navigation\n            items-center\n            flex-wrap\n            space-x-4\n            sm:space-x-6\n            sm:mt-0\n            w-full\n            items-center\n            justify-end\n          "},[n("li",{staticClass:"hidden sm:inline-block"},[n("router-link",{staticClass:"\n                blog\n                border-b-2\n                font-bold\n                border-transparent border-b-transparent\n                text-white\n                hover:text-yellow-dark\n                text-base\n                transition-all transition-duration-300 transition\n                duration-500\n                ease-in-out\n              ",attrs:{to:"/"}},[t._v("\n              Home\n            ")])],1),t._v(" "),n("li",{staticClass:"hidden sm:inline-block"},[n("router-link",{staticClass:"\n                border-b-2\n                font-bold\n                border-transparent border-b-transparent\n                text-white\n                hover:text-yellow-dark\n                text-base\n                transition-all transition-duration-300 transition\n                duration-500\n                ease-in-out\n              ",attrs:{to:"/about"}},[t._v("\n              About\n            ")])],1),t._v(" "),n("li",{staticClass:"hidden sm:inline-block"},[n("router-link",{staticClass:"\n                bg-transparent\n                text-yellow\n                font-semibold\n                py-2\n                px-4\n                border-2 border-yellow\n                transition transition-all\n                duration-300\n                rounded-lg\n                hover:border-transparent\n                hover:bg-yellow\n                hover:text-black\n                get-in-touch\n                text-base\n                sm:text-base\n              ",attrs:{to:"/get-in-touch"}},[t._v("Get in touch")])],1)])]),t._v(" "),n("ul",{staticClass:"\n          bottom-navigation\n          fixed\n          bottom-0\n          left-0\n          z-20\n          bg-dark-elevatedSurface\n          w-full\n          flex\n          items-center\n          justify-evenly\n          sm:hidden\n          h-20\n        ",staticStyle:{"background-color":"rgb(17, 24, 39)"}},[n("li",{staticClass:"nav-bar-bottom-item text-white font-bold"},[n("router-link",{staticClass:"\n              nuxt-link-exact-active nuxt-link-active\n              flex flex-col\n              items-center\n              justify-center\n              flex-nowrap\n              transition transition-all\n              duration-500\n              ease-in-out\n            ",attrs:{to:"/","aria-current":"page"}},[n("svg",{staticClass:"w-5",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"home",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"}},[n("path",{attrs:{fill:"currentColor",d:"M570.24 247.41L512 199.52V104a8 8 0 0 0-8-8h-32a8 8 0 0 0-7.95 7.88v56.22L323.87 45a56.06 56.06 0 0 0-71.74 0L5.76 247.41a16 16 0 0 0-2 22.54L14 282.25a16 16 0 0 0 22.53 2L64 261.69V448a32.09 32.09 0 0 0 32 32h128a32.09 32.09 0 0 0 32-32V344h64v104a32.09 32.09 0 0 0 32 32h128a32.07 32.07 0 0 0 32-31.76V261.67l27.53 22.62a16 16 0 0 0 22.53-2L572.29 270a16 16 0 0 0-2.05-22.59zM463.85 432H368V328a32.09 32.09 0 0 0-32-32h-96a32.09 32.09 0 0 0-32 32v104h-96V222.27L288 77.65l176 144.56z"}})]),t._v(" "),n("div",[t._v("Home")])])],1),t._v(" "),n("li",{staticClass:"nav-bar-bottom-item text-white font-bold"},[n("router-link",{staticClass:"\n              flex flex-col\n              items-center\n              justify-center\n              flex-nowrap\n              transition transition-all\n              duration-500\n              ease-in-out\n            ",attrs:{to:"/about"}},[n("svg",{staticClass:"w-5",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"info-circle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm0-338c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"}})]),t._v(" "),n("div",[t._v("About")])])],1),t._v(" "),n("li",{staticClass:"nav-bar-bottom-item text-white font-bold"},[n("router-link",{staticClass:"\n              flex flex-col\n              items-center\n              justify-center\n              flex-nowrap\n              transition transition-all\n              duration-500\n              ease-in-out\n            ",attrs:{to:"/get-in-touch"}},[n("svg",{staticClass:"w-5",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"envelope-open-text",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M494.59 164.52c-1.52-1.26-13.86-11.2-30.59-24.66V96c0-26.51-21.49-48-48-48h-66.13C327.24 28.85 293.77 0 256 0c-37.65 0-70.9 28.63-93.85 48H96c-26.51 0-48 21.49-48 48v43.85c-16.81 13.52-29.15 23.46-30.48 24.56A48.002 48.002 0 0 0 0 201.48V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.51c0-14.31-6.38-27.88-17.41-36.99zM96 96h320v156.66c-36.26 29.32-78.69 63.67-86.59 69.95C311.25 337.12 279.6 368 256 368c-23.69 0-55.86-31.37-73.41-45.39-7.9-6.28-50.33-40.64-86.59-69.97V96zm368 362c0 3.31-2.69 6-6 6H54c-3.31 0-6-2.69-6-6V275.56c38.96 31.48 95.95 77.65 104.66 84.58C174.71 377.76 212.55 416 256 416c43.21 0 80.64-37.72 103.34-55.86 9-7.15 65.84-53.19 104.66-84.56V458zM176 192h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm176 64v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16z"}})]),t._v(" "),n("div",[t._v("Contact")])])],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(134).default})},167:function(t,e,n){var content=n(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("7abdbb3d",content,!0,{sourceMap:!1})},181:function(t,e,n){"use strict";n.r(e);var r=n(19),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"w-full mx-auto mb-40 md:mb-0 bg-gray-800 bg-opacity-75"},[n("div",{staticClass:"\n      max-w-screen-xl\n      mx-auto\n      py-4\n      px-5\n      flex flex-wrap flex-col\n      sm:flex-row\n    "},[n("p",{staticClass:"text-gray-400 text-sm text-center sm:text-left"},[t._v("\n      © 2021\n      "),n("a",{attrs:{href:"https://www.makraz.com"}},[t._v("Makraz.com")])]),t._v(" "),n("span",{staticClass:"\n        inline-flex\n        sm:ml-auto\n        sm:mt-0\n        mt-2\n        justify-center\n        sm:justify-start\n      "},[n("a",{staticClass:"text-gray-400",attrs:{href:"https://www.facebook.com/h.makraz","aria-label":"Facebook",target:"_blank",rel:"noopener"}},[n("img",{staticClass:"w-5 h-5 text-gray-400",attrs:{src:"/facebook.svg",alt:"Facebook Logo",width:"1.25rem",height:"1.25rem"}})]),t._v(" "),n("a",{staticClass:"ml-3 text-gray-400",attrs:{href:"https://twitter.com/h_makraz","aria-label":"Twitter",target:"_blank",rel:"noopener"}},[n("img",{staticClass:"w-5 h-5 text-gray-400",attrs:{src:"/twitter.svg",alt:"Twitter Logo",width:"1.25rem",height:"1.25rem"}})]),t._v(" "),n("a",{staticClass:"ml-3 text-gray-400",attrs:{href:"https://www.instagram.com/h_makraz/","aria-label":"Instagram",target:"_blank",rel:"noopener"}},[n("img",{staticClass:"w-5 h-5 text-gray-400",attrs:{src:"/instagram.svg",alt:"Instagram Logo",width:"1.25rem",height:"1.25rem"}})]),t._v(" "),n("a",{staticClass:"ml-3 text-gray-400",attrs:{href:"https://www.linkedin.com/in/hamza-makraz/","aria-label":"Linkedin",target:"_blank",rel:"noopener"}},[n("img",{staticClass:"w-5 h-5 text-gray-400",attrs:{src:"/linkedin.svg",alt:"Linkedin Logo",width:"1.25rem",height:"1.25rem"}})])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(181).default})},185:function(t,e,n){"use strict";var r=n(128),o=n(90),l=(n(234),n(19)),component=Object(l.a)(o.default,r.a,r.b,!1,null,null,null);e.default=component.exports,installComponents(component,{Header:n(134).default,Footer:n(181).default})},195:function(t,e,n){n(196),t.exports=n(197)},213:function(t,e,n){"use strict";n.r(e),e.default=function(t){t.redirect,t.route}},234:function(t,e,n){"use strict";n(167)},235:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,"body{\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity));\n  background-color:#15181c\n}",""]),t.exports=r},90:function(t,e,n){"use strict";var r=n(91),o=n.n(r);e.default=o.a},91:function(t,e){}},[[195,15,1,16]]]);