(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{BhC3:function(t,a,e){},CUY1:function(t,a,e){},KujQ:function(t,a,e){"use strict";var s={props:["tags","context"]},o=(e("cXZe"),e("psIG")),i=Object(o.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"list-tags"},[e("h1",{},[t._v(t._s(t.context)+" related articles")]),e("span",[t._v("(by Subject Matt'ers)")]),e("ul",{staticClass:"tags"},t._l(t.tags.edges,(function(a){return e("li",{key:a.node.id,staticClass:"item"},[e("a",{staticClass:"link-button tag",attrs:{href:a.node.path}},[e("button",[t._v(t._s(a.node.title))])])])})),0)])}),[],!1,null,"1bc77dcb",null);a.a=i.exports},XxnV:function(t,a,e){"use strict";e.r(a);var s=e("YUAo"),o=e("/EMB"),i=e("KujQ"),n={components:{ResumeButton:o.a,Author:s.a,Tags:i.a},metaInfo:{title:"Resume"}},r=(e("eK8v"),e("psIG")),c=null,l=Object(r.a)(n,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",{attrs:{"v-text":!0,showCall:!0,showResume:!1}},[a("div",{staticClass:"content-box"},[a("div",{staticClass:"download"},[a("ResumeButton")],1),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content-box resume",domProps:{innerHTML:this._s(this.$page.doc.content)}}),a("div",{staticClass:"download"},[a("ResumeButton")],1)]),a("Author",{attrs:{"show-title":!1,showLinks:!0,showIntro:!0,showSiteUrl:!0}})],1)}),[],!1,null,"26d365fe",null);"function"==typeof c&&c(l);a.default=l.exports},YUAo:function(t,a,e){"use strict";var s={props:["showTitle","showEmail","showSiteUrl","showResume","showSubtitle","showLinks","showIntroLong","showIntroShort"]},o=(e("bgq/"),e("psIG")),i=e("6DIm"),n=i.a.config.optionMergeStrategies.computed,r={metadata:{siteName:"Matthew"}},c=function(t){var a=t.options;a.__staticData?a.__staticData.data=r:(a.__staticData=i.a.observable({data:r}),a.computed=n({$static:function(){return a.__staticData.data}},a.computed))},l=Object(o.a)(s,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"author"},[s("g-link",{attrs:{to:"/about"}},[s("g-image",{staticClass:"author__image",attrs:{alt:"Author image",src:e("z3uE"),width:"180",height:"180",blur:"5"}})],1),s("g-link",{attrs:{to:"/about"}},[t.showTitle?s("h1",{staticClass:"author__site-title"},[t._v("Matthew Hendricks")]):t._e()]),s("g-link",{attrs:{to:"/"}},[t.showSiteUrl?s("h1",{staticClass:"author__site-site-url"},[t._v("\n      MatthewHendricks.net\n    ")]):t._e()]),t.showSubtitle?s("h2",{staticClass:"author__sub-title"},[t._v("\n    Content Management Systems and Documentation\n  ")]):t._e(),t.showIntroShort?s("p",{staticClass:"author__intro"},[t._v("\n    Knowledge Worker, Technical Writer, Product Manager\n  ")]):t._e(),t.showIntroLong?s("p",{staticClass:"author__intro"},[t._v("\n    Knowledge Worker, Technical Writer, Product Manager with a background in\n    customer support and documentation.\n    "),s("br"),s("small",[t._v("\n      Specializes in Content Management Systems and values collaborative\n      communication.")])]):t._e(),t.showLinks?s("div",{staticClass:"author__links"},[s("p",[t._v("Find me on these platforms:")]),s("ul",{staticClass:"flex justify-center list-none"},[s("li",[s("a",{attrs:{href:"https://medium.com/@thoughtabout"}},[s("font-awesome",{staticClass:"author__icons",attrs:{icon:["fab","medium"]}})],1)]),s("li",[s("a",{attrs:{href:"https://linkedin.com/in/watthem"}},[s("font-awesome",{staticClass:"author__icons",attrs:{icon:["fab","linkedin"]}})],1)]),s("li",[s("a",{attrs:{href:"https://github.com/watthem"}},[s("font-awesome",{staticClass:"author__icons",attrs:{icon:["fab","github"]}})],1)]),s("li",[s("a",{attrs:{href:"https://codepen.io/watthem"}},[s("font-awesome",{staticClass:"author__icons",attrs:{icon:["fab","codepen"]}})],1)])]),t.showEmail?s("p",{staticClass:"space-bottom"},[s("span",[t._v("Or email me -")]),s("a",{attrs:{alt:"email",href:"mailto:mscohendricks@gmail.com"}},[t._v("mscotthendricks@gmail.com")])]):t._e()]):t._e(),t.showResume?s("div",{},[s("g-link",{staticClass:"link-button",attrs:{to:"/resume"}},[s("button",[t._v("View and download resume")])])],1):t._e()],1)}),[],!1,null,null,null);"function"==typeof c&&c(l);a.a=l.exports},"bgq/":function(t,a,e){"use strict";var s=e("BhC3");e.n(s).a},cXZe:function(t,a,e){"use strict";var s=e("CUY1");e.n(s).a},eK8v:function(t,a,e){"use strict";var s=e("k88Y");e.n(s).a},k88Y:function(t,a,e){},z3uE:function(t,a){t.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/author.e6b6009.a2ec446bfd9ddecda5832f683fabdbdd.jpg",size:{width:180,height:180},sizes:"(max-width: 180px) 100vw, 180px",srcset:["/assets/static/author.e6b6009.a2ec446bfd9ddecda5832f683fabdbdd.jpg 180w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-fadbe347244edf5a295769314f21140d'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='5'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-fadbe347244edf5a295769314f21140d)' width='180' height='180' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABAAEADASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAABAYHBQIDAf/EADQQAAIBAgUCAwYGAQUAAAAAAAECAwQRAAUGEiExQQcTURUiYXGBoRQyQpGxwfAlUnKS0f/EABkBAAIDAQAAAAAAAAAAAAAAAAIDAAEEBf/EACQRAAICAgEDBAMAAAAAAAAAAAABAhEDIRIxUWEEE0GBsdHw/9oADAMBAAIRAxEAPwCfaUF6yvpW90y0zqQfUf4cA01QiZZUwMq7nG9WvyLDoMF5fOtNqne9gjM1%2b/DLf%2b8BwqwnqadUDKSyse6gE8j7Yx1s6cpdvBwzq%2bXKt7skhBHoCvA%2bxwXHl9TPPVNDTsymAjqBYlFP16YzRUrAVgCebJMQVX0tcAn9/th0yXQeptSRGQNLTUrtuDSsVB%2bQGCugHLdJdP3Yj1kTLDS71ItE97/8mxo5NZKy9%2bRT9Prhwzrwn1DR00kkVRFWsqGyqbOfgL8YSsteUSzNNC8U0cHlujC1iGIPBxTdoKEqaTDXfzcoybzbuzzxm4spvc89MHlEl1DIG2nbTD3T8W9ML9LK0nsiI/olHToLf3hhpT/rtW/%2b2GNf5OBlobjadfX4F6oYNVRybWYWW4Y8m3HXBKuyVjyw2Bk4APSzW4xxURqKamkjN2K2YehBx1PIEkSzi7oLftiWK0kULwdyzJnTMM1ziKJZqRljWaQ3WM7j09Tx9sVak1rkTZglFBLMztwr%2bSVQ/I4n3gzksWbaWzTzWeOOap2pt7bV6j/scM%2bU%2bHwocyiqaupeoWFg0amVieOnHQDvipN26Kgk1bGDU%2bp8nyyRIq6d0d%2bAFjLn52GIV4zU9Ea2DOskqYpoqq8VSEPG4DgkdjbFb1tpU59nH4innMVTGgCuj2Hy6Hn6YmXirpabJdJwyzSiaV6lVlZetje1zbnEi3yRJxXB0TekEjPTRchlDMNvBNlJve/HAww5Q7Fai/X3WNvkcYtIWimj8o7JGHuPYErYg9x6DG7ltQHgzNmuxiZtzE9Ttvf74HI2Bhnxa/vgxgLNb1W%2bPCfqvA9xr4apNF5urq0kauQCNscqgfUn/wAxy2ks5ttTLoL9t06Mf3J/rDKfYqUotbY7%2bHmq48ty9cvQRiZ5Gay8DcQD2x76j1jk%2bZZYEjqal6lXLt5crITbj9Px7YkdT7QyDM4/aMYilkIdGVwwFuoBH0xZtOZnl8elY2ggpvxMYIG9VuSecLnFxexuGaehTynU0GV6hhqq6orjG6WLPI3F%2bnF7G2C/FLVdNX6TSmMglaoTzY3A6gHg/A9caUudIaKWfNKWjul1Fowb9uDiQvDW6hllWjRRHCRGu5goAHQD/O%2bJijyfhF%2boyKKrud5LHNWZjSrRwSVM8Qt5EILSHi9wOew641qqSaGizI1EMlLPsYzwSx7LSnqeeelsO3hTPT6MyrM3zynkAkdZGliZXsqgi1uD1OOvEzOcr1hn%2bT5ZkojqvNULUVSNtYR3vs5HUAE89yMPljT2c6MmmF5jrDJKSdDLV%2bYr/kaJGYHtj5PqvLxL5iNLIvUAJa1zx1PyxKWBkqoJJVG5Yb7bfqJJONSkidmlJvvMNgp7d8bFiRn9xjP7Pk14%2bYUhSOIUsJmg4u5e4A57Dre3oMT%2bofPNNVCwVMMqjkJ7pIb1%2bWGjT%2bc1em5abMKBUdlTY8cv5ZFPUE/wcaOoPEEZnBtfTxEnq0/u/wAYRlxyT0rRoxZI1t0xJp5s11A6whXiplu0khFgi9ST69MeOns7qssl8qBYpIdzbC4IY89bjBOa57X1lKaTy4aOkc%2b9FAti9uzMeSPh0wNQUW%2bRZGFh%2bVR/eCx42ltA5cifR2M8upKqto5aKaCEJOuzchNx%2b%2bNOgrsrpZ46nzJ6WsNh5jASiTix3DuOnFsKlDZYpnX3njboB2K40oYEeZBtDSMNwYi%2b0dePTtg3hjIWsjif/9k=' /%3e%3c/svg%3e"}}}]);