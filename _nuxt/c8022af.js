(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{245:function(t,e,r){"use strict";r.r(e);var l={props:{article:{type:Object,required:!0}}},n=r(24),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"\n    w-full\n    max-w-xs\n    px-4\n    sm:w-1/2\n    sm:px-2\n    md:w-1/3\n    md:px-0\n    cursor-pointer\n    my-6\n    sm:my-0\n  "},[r("router-link",{staticClass:"w-full block h-full",attrs:{to:t.article.path}},[r("img",{staticClass:"w-full object-contain rounded-t-lg",staticStyle:{"max-height":"10rem"},attrs:{src:t.article.img.path,alt:t.article.img.alt?t.article.img.alt:t.article.title,width:"275",height:"175"}}),t._v(" "),r("div",{staticClass:"bg-white dark:bg-gray-800 w-full p-4 rounded-b-lg"},[r("p",{staticClass:"text-gray-800 text-white text-xl font-medium mb-2",staticStyle:{"min-height":"4rem"}},[t._v("\n        "+t._s(t.article.title)+"\n      ")]),t._v(" "),r("p",{staticClass:"text-gray-700 font-light text-md",staticStyle:{"min-height":"6rem"}},[t._v("\n        "+t._s(t.article.description)+"\n      ")]),t._v(" "),r("div",{staticClass:"flex flex-wrap justify-starts items-center mt-4",staticStyle:{"min-height":"4rem"}},t._l(t.article.tags,(function(e){return r("div",{key:e,staticClass:"m-1 p-2 text-xs text-gray-600 bg-blue-100 rounded-2xl"},[t._v("\n          # "+t._s(e)+"\n        ")])})),0)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Article:r(245).default})},294:function(t,e,r){"use strict";r.r(e);var l=r(3),n=(r(29),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("blog").only(["title","description","img","slug","path","tags","author","createdAt"]).where({draft:!1}).sortBy("createdAt","asc").fetch();case 3:return l=e.sent,e.abrupt("return",{articles:l});case 5:case"end":return e.stop()}}),e)})))()}}),c=r(24),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"w-full my-12 px-10"},[r("h1",{staticClass:"text-3xl font-bold text-white mb-8"},[t._v("Articles")]),t._v(" "),r("div",{staticClass:"flex flex-wrap justify-around mb-12"},t._l(t.articles,(function(article){return r("Article",{key:article.slug,attrs:{article:article}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Article:r(245).default})}}]);