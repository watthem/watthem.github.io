(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"2j52":function(t,a,e){"use strict";e.r(a);e("pNMO"),e("4Brf"),e("ma9I");var o=e("6ipC"),s=e("C6Ak"),i=e("Y3r0"),r=e("A6W1"),n=e("2aDJ"),c={components:{Layout:o.a,WorkMeta:s.a,WorkSubjects:i.a,Author:r.a},data:function(){return{}},watcher:{},metaInfo:function(){return{title:this.$page.work.title,meta:[{key:"og:type",property:"og:type",content:"article"},{key:"og:title",property:"og:title",content:this.$page.work.title},{key:"description",name:"description",content:this.$page.work.description},{key:"og:url",property:"og:url",content:this.workUrl},{key:"article:published_time",property:"article:published_time",content:this.$page.work.date}]}},computed:{workUrl:function(){var t=this.$static.metadata.siteUrl,a=this.$page.work.path;return a?"".concat(t).concat(a):"".concat(t,"/").concat(n(this.$page.work.title),"/")}}},l=(e("r8DR"),e("KHd+")),u=null,w=e("Kw5r"),h=w.a.config.optionMergeStrategies.computed,d={metadata:{siteUrl:"https://matthewhendricks.neto"}},g=function(t){var a=t.options;a.__staticData?a.__staticData.data=d:(a.__staticData=w.a.observable({data:d}),a.computed=h({$static:function(){return a.__staticData.data}},a.computed))},p=Object(l.a)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",{attrs:{title:t.$page.work.title,showWork:"true",showResume:"true"}},[e("div",{staticClass:"work-title"},[e("h1",{staticClass:"work-title__text"},[t._v(t._s(t.$page.work.title))]),e("WorkSubjects",{attrs:{work:t.$page.work}}),e("WorkMeta",{attrs:{work:t.$page.work}})],1),t.$page.work.published?e("div",{staticClass:"work content-box"},[e("div",{staticClass:"work__header"},[e("a",{staticClass:"work__url",attrs:{href:t.$page.work.URL}},[t.$page.work.cover_image?e("g-image",{attrs:{alt:"Cover image",src:t.$page.work.cover_image}}):t._e()],1)]),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"work__description",domProps:{innerHTML:t._s(t.$page.work.description)}}),e("div",{staticClass:"raised"},[e("span",[t._v("🔗 Read on "+t._s(t.$page.work.company)+"'s website:")]),e("br"),e("a",{staticClass:"work__url",attrs:{href:t.$page.work.URL}},[t._v(t._s(t.$page.work.URL))])]),e("div",{staticClass:"work__footer"}),t.$page.work.content.length>1?e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"work__content content-box",domProps:{innerHTML:t._s(t.$page.work.content)}}):t._e()]):e("div",[e("div",{staticClass:"work-title"},[e("h1",{staticClass:"work-title__text"},[t._v("Oops 😳")]),e("p",[t._v("That link isn't ready yet, sorry!")]),e("p",[t._v("\n        Check out my other\n        "),e("g-link",{attrs:{to:"/work/"}},[t._v("work")]),t._v(".\n      ")],1)])]),e("Author",{staticClass:"work-author",attrs:{"show-links":!0}})],1)}),[],!1,null,null,null);"function"==typeof u&&u(p),"function"==typeof g&&g(p);a.default=p.exports},A6W1:function(t,a,e){"use strict";var o={props:["showTitle","showEmail","showSiteUrl","showResume","showSubtitle","showLinks","showIntroLong","showIntroShort"]},s=(e("ArLL"),e("KHd+")),i=e("Kw5r"),r=i.a.config.optionMergeStrategies.computed,n={metadata:{siteName:"Matthew Hendricks"}},c=function(t){var a=t.options;a.__staticData?a.__staticData.data=n:(a.__staticData=i.a.observable({data:n}),a.computed=r({$static:function(){return a.__staticData.data}},a.computed))},l=Object(s.a)(o,(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"author"},[o("g-link",{attrs:{to:"/about/"}},[o("g-image",{staticClass:"author__image",attrs:{alt:"Author image",src:e("ESAu"),width:"180",height:"180",blur:"5"}})],1),o("g-link",{attrs:{to:"/about/"}},[t.showTitle?o("h2",{staticClass:"author__site-title"},[t._v("Matthew Hendricks")]):t._e()]),o("g-link",{attrs:{to:"/"}},[t.showSiteUrl?o("h2",{staticClass:"author__site-site-url"},[t._v("MatthewHendricks.net")]):t._e()]),t.showSubtitle?o("h2",{staticClass:"author__sub-title"},[t._v("Content Management Systems and Documentation")]):t._e(),t.showIntroShort?o("p",{staticClass:"author__intro"},[t._v("Knowledge Worker, Technical Writer, Product Manager")]):t._e(),t.showIntroLong?o("p",{staticClass:"author__intro"},[t._v("\n    Knowledge Worker, Technical Writer, Product Manager — Focused on client solutions for product teams | values opportunities for Collaborative Communication\n  ")]):t._e(),t.showLinks?o("div",{staticClass:"author__links"},[o("p",[t._v("Find me on these platforms:")]),o("ul",{staticClass:"flex justify-center list-none"},[o("li",[o("a",{attrs:{href:"https://medium.com/@thoughtabout/"}},[o("font-awesome",{staticClass:"author__icons",attrs:{icon:["fab","medium"],alt:"Medium.com"}})],1)]),o("li",[o("a",{attrs:{href:"https://www.linkedin.com/in/watthem/"}},[o("font-awesome",{staticClass:"author__icons",attrs:{icon:["fab","linkedin"],alt:"LinkedIn.com"}})],1)]),o("li",[o("a",{attrs:{href:"https://github.com/watthem/"}},[o("font-awesome",{staticClass:"author__icons",attrs:{icon:["fab","github"],alt:"Github.com"}})],1)]),o("li",[o("a",{attrs:{href:"https://codepen.io/watthem/"}},[o("font-awesome",{staticClass:"author__icons",attrs:{icon:["fab","codepen"],alt:"CodePen.io"}})],1)])]),t.showEmail?o("p",{staticClass:"space-bottom"},[o("span",[t._v("Or email me -")]),o("a",{attrs:{alt:"email",href:"mailto:mscohendricks@gmail.com"}},[t._v("mscotthendricks@gmail.com")])]):t._e()]):t._e(),t.showResume?o("div",{},[o("g-link",{staticClass:"link-button",attrs:{to:"/resume/"}},[o("button",[t._v("View and download resume")])])],1):t._e()],1)}),[],!1,null,null,null);"function"==typeof c&&c(l);a.a=l.exports},AO8t:function(t,a,e){},ArLL:function(t,a,e){"use strict";var o=e("AO8t");e.n(o).a},C6Ak:function(t,a,e){"use strict";var o={props:["work"]},s=(e("Vn8z"),e("KHd+")),i=Object(s.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"work-meta"},[e("time",[t._v("Published: "+t._s(t.work.date))]),e("br"),t.work.timeToRead?[e("strong",[t._v(t._s(t.work.timeToRead)+" min read")])]:t._e()],2)}),[],!1,null,null,null);a.a=i.exports},E6Hu:function(t,a,e){"use strict";var o=e("Kr9f");e.n(o).a},ESAu:function(t,a){t.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/author.e6b6009.a2ec446bfd9ddecda5832f683fabdbdd.jpg",size:{width:180,height:180},sizes:"(max-width: 180px) 100vw, 180px",srcset:["/assets/static/author.e6b6009.a2ec446bfd9ddecda5832f683fabdbdd.jpg 180w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-fadbe347244edf5a295769314f21140d'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='5'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-fadbe347244edf5a295769314f21140d)' width='180' height='180' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABAAEADASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAABAYHBQIDAf/EADQQAAIBAgUCAwYGAQUAAAAAAAECAwQRAAUGEiExQQcTURUiYXGBoRQyQpGxwfAlUnKS0f/EABkBAAIDAQAAAAAAAAAAAAAAAAIDAAEEBf/EACQRAAICAgEDBAMAAAAAAAAAAAABAhEDIRIxUWEEE0GBsdHw/9oADAMBAAIRAxEAPwCfaUF6yvpW90y0zqQfUf4cA01QiZZUwMq7nG9WvyLDoMF5fOtNqne9gjM1%2b/DLf%2b8BwqwnqadUDKSyse6gE8j7Yx1s6cpdvBwzq%2bXKt7skhBHoCvA%2bxwXHl9TPPVNDTsymAjqBYlFP16YzRUrAVgCebJMQVX0tcAn9/th0yXQeptSRGQNLTUrtuDSsVB%2bQGCugHLdJdP3Yj1kTLDS71ItE97/8mxo5NZKy9%2bRT9Prhwzrwn1DR00kkVRFWsqGyqbOfgL8YSsteUSzNNC8U0cHlujC1iGIPBxTdoKEqaTDXfzcoybzbuzzxm4spvc89MHlEl1DIG2nbTD3T8W9ML9LK0nsiI/olHToLf3hhpT/rtW/%2b2GNf5OBlobjadfX4F6oYNVRybWYWW4Y8m3HXBKuyVjyw2Bk4APSzW4xxURqKamkjN2K2YehBx1PIEkSzi7oLftiWK0kULwdyzJnTMM1ziKJZqRljWaQ3WM7j09Tx9sVak1rkTZglFBLMztwr%2bSVQ/I4n3gzksWbaWzTzWeOOap2pt7bV6j/scM%2bU%2bHwocyiqaupeoWFg0amVieOnHQDvipN26Kgk1bGDU%2bp8nyyRIq6d0d%2bAFjLn52GIV4zU9Ea2DOskqYpoqq8VSEPG4DgkdjbFb1tpU59nH4innMVTGgCuj2Hy6Hn6YmXirpabJdJwyzSiaV6lVlZetje1zbnEi3yRJxXB0TekEjPTRchlDMNvBNlJve/HAww5Q7Fai/X3WNvkcYtIWimj8o7JGHuPYErYg9x6DG7ltQHgzNmuxiZtzE9Ttvf74HI2Bhnxa/vgxgLNb1W%2bPCfqvA9xr4apNF5urq0kauQCNscqgfUn/wAxy2ks5ttTLoL9t06Mf3J/rDKfYqUotbY7%2bHmq48ty9cvQRiZ5Gay8DcQD2x76j1jk%2bZZYEjqal6lXLt5crITbj9Px7YkdT7QyDM4/aMYilkIdGVwwFuoBH0xZtOZnl8elY2ggpvxMYIG9VuSecLnFxexuGaehTynU0GV6hhqq6orjG6WLPI3F%2bnF7G2C/FLVdNX6TSmMglaoTzY3A6gHg/A9caUudIaKWfNKWjul1Fowb9uDiQvDW6hllWjRRHCRGu5goAHQD/O%2bJijyfhF%2boyKKrud5LHNWZjSrRwSVM8Qt5EILSHi9wOew641qqSaGizI1EMlLPsYzwSx7LSnqeeelsO3hTPT6MyrM3zynkAkdZGliZXsqgi1uD1OOvEzOcr1hn%2bT5ZkojqvNULUVSNtYR3vs5HUAE89yMPljT2c6MmmF5jrDJKSdDLV%2bYr/kaJGYHtj5PqvLxL5iNLIvUAJa1zx1PyxKWBkqoJJVG5Yb7bfqJJONSkidmlJvvMNgp7d8bFiRn9xjP7Pk14%2bYUhSOIUsJmg4u5e4A57Dre3oMT%2bofPNNVCwVMMqjkJ7pIb1%2bWGjT%2bc1em5abMKBUdlTY8cv5ZFPUE/wcaOoPEEZnBtfTxEnq0/u/wAYRlxyT0rRoxZI1t0xJp5s11A6whXiplu0khFgi9ST69MeOns7qssl8qBYpIdzbC4IY89bjBOa57X1lKaTy4aOkc%2b9FAti9uzMeSPh0wNQUW%2bRZGFh%2bVR/eCx42ltA5cifR2M8upKqto5aKaCEJOuzchNx%2b%2bNOgrsrpZ46nzJ6WsNh5jASiTix3DuOnFsKlDZYpnX3njboB2K40oYEeZBtDSMNwYi%2b0dePTtg3hjIWsjif/9k=' /%3e%3c/svg%3e"}},Kbub:function(t,a,e){},Kr9f:function(t,a,e){},Vn8z:function(t,a,e){"use strict";var o=e("sc8o");e.n(o).a},Y3r0:function(t,a,e){"use strict";var o={props:["work"]},s=(e("E6Hu"),e("KHd+")),i=Object(s.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"work-tags"},t._l(t.work.tags,(function(a){return e("a",{key:a.id,staticClass:"tag  link-button",attrs:{href:a.path}},[e("button",[t._v("\n        "+t._s(a.title)+"\n      ")])])})),0),e("div",{staticClass:"work-subjects"},[e("span",[t._v(" for "+t._s(t.work.company)+" ")]),e("span",[t._v(" on ")]),t._l(t.work.subjects,(function(a){return e("g-link",{key:a.id,staticClass:"work-subjects__link",attrs:{to:a.path}},[t._v(t._s(a.title)+"\n    ")])}))],2)])}),[],!1,null,null,null);a.a=i.exports},r8DR:function(t,a,e){"use strict";var o=e("Kbub");e.n(o).a},sc8o:function(t,a,e){}}]);