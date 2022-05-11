//install service worker

self.addEventListener('install',evt=>{
    console.log("Service worker has been installed");
})


//activate service worker


self.addEventListener('active',evt=>{
    console.log("Service worker activated");
})

const furniture = "furniture-pwa-v1"
const assets = [
  "/",
  "/index.html",

  //CSS files
     "css/animate.min.css",
     "css/bootstrap-grid.css",
     "css/bootstrap-grid.css.map",
     "css/bootstrap-grid.min.css",
     "css/bootstrap-grid.min.css.map",
     "css/bootstrap-reboot.css",
     "css/bootstrap-reboot.css.map",
     "css/bootstrap-reboot.min.css",
     "css/bootstrap-reboot.min.css.map",
     "css/bootstrap.css",
     "css/bootstrap.css.map",
     "css/bootstrap.min.css.map",
     "css/default-skin.css",
     "css/font-awesome.min.css",
     "css/icomoon.css",
     "css/jquery-ui.css",
     "css/jquery.fancybox.min.css",
     "css/jquery.mCustomScrollbar.min.css",
     "css/meanmenu.css",
     "css/nice-select.css",
     "css/normalize.css",
     "css/owl.carousel.min.css",
     "css/responsive.css",
     "css/slick.css",
     "css/style.css",
     
     

    // JS files
    "js/app.js",
    "js/bootstrap.bundle.js",
    "js/bootstrap.bundle.js",
    "js/bootstrap.bundle.min.js",
    "js/bootstrap.bundle.min.js.map",
    "js/bootstrap.js",
    "js/bootstrap.js.map",
    "js/bootstrap.min.js",
    "js/custom.js",
    "js/jquery-3.0.0.min.js",
    "js/jquery.mCustomScrollbar.concat.min.js",
    "js/jquery.min.js",
    "js/jquery.validate.js",
    "js/modernizer.js",
    "js/plugin.js",
    "js/slider-setting.js",
    "js/popper.min.js",
    

  // Images files
   "images/about.jpg",
   "images/banner.jpg",
   "images/bg.jpg",
   "images/thr144.png",
   "images/thr512.png",
   "images/contact_g.jpg",
   "images/cos.png",
   "images/cross.png",
   "images/footer.jpg",
   "images/leptop.jpg",
   "images/loading.gif",
   "images/logo.png",
   "images/logo1.png",
   "images/menu_icon.png",
   "images/pc.png",
   "images/pct.png",
   "images/product1.png",
   "images/product2.png",
   "images/product3.png",
   "images/product4.png",
   "images/product5.png",
   "images/product5.png",
   "images/product6.png",
   "images/product7.png",
   "images/product8.png",
   "images/product9.png",
   "images/thr.png",

  


]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(comPWA).then(cache => {
      cache.addAll(assets)
      // cache.addAll([
      //   "/",
      //   "/index.html",
      
      //   //CSS files
      //   "/css/style.min.css",
      //   "/css/fontawesome.min.css",
      //   "/css/bootstrap.min.css",
      //   "/css/bootstrap.css",
      //   "/css/all.min.css",
      
      //     // JS files
      //   "/js/scrollreveal.min.js",
      //   "/js/script.js",
      //   "/js/popper.min.js",
      //   "/js/mdb.min.js",
      //   "/js/mdb.js",
      //   "/js/jquery-3.3.1.min.js",
      //   "/js/fontawesome.min.js",
      //   "/js/bootstrap.min.js",
      //   "/js/bootstrap.js",
      //   "/js/all.min.js",
      //   "/js/modules/wow.js",
      //   "/js/modules/waves.js",
      //   "/js/modules/velocity.min.js",
      //   "/js/modules/velocity.js",
      //   "/js/modules/scrolling-navbar.js",
      //   "/js/modules/jquery.easing.js",
      //   "/js/modules/forms-free.js",
      //   "/js/modules/enhanced-modals.js",
      //   "/js/modules/chart.js",
      //   "/js/addons/datatables.min.js",
      //   "/js/addons/datatables.js",
      //   "js/app.js",
      
      //   // Images files
      //   "/img/2257fa59a65da0b.jpg",
      //   "/img/304775-105_JORDAN_7_RETRO_1_LARGE.jpg",
      //   "/img/921669-401-pv.png",
      //   "/img/air-jordan-3-retro-bg-gs-infrared-23-white-blackwlf-grey-infrrd-23-011880_2.png",
      //   "/img/AJ8-bb.png,",
      //   "/img/header_03-4493e069.jpg",
      //   "/img/jordan-jumpman-team-1-white-gym-red-cool-grey.jpg",
      //   "/img/kisspng-jumpman-amazon-com-air-jordan-shoe-sneakers-michael-jordan-5ac33dc5331661.6471895515227447732093.jpg",
      //   "/img/kisspng-jumpman-nike-air-jordan-shoe-foot-locker-sneakers-5ac6c636d2b126.257491231522976310863.jpg",
      //   "/img/nike_PNG12.png",
      //   "/img/nike_PNG13.png",
      //   "/img/nike_PNG15.png",
      //   "/img/nike-just-do-it-nikecom-ng.jpg",
      //   "/img/Nike-Shoes-Transparent-Background.png",
      //   "/img/Nike-Shoes-Transparent-PNG.png",
      //   "/img/nike.jpeg",
      //   "/img/nike512.png",
      //   "/img/Original-New-Arrival-2016-NIKE-AIR-MAX-women-s-Skateboarding-Shoes-sneakers-free-shipping.jpg",
      //   "/img/snusa-detail_20-sf.jpg",
      //   "/img/theshoe.jpg",
      //   "/img/transparent-nikes-black-3.png",
      //   "/img/up.png",
      //   "/img/ZoomFly_HP_p3_d.jpg",
            
      // ]);
    })
  )
})


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

  self.addEventListener("push", event => {
    let message = event.data.json();
  
    switch(message.type) {
      case "init":
        doInit();
        break;
      case "shutdown":
        doShutdown();
        break;
    }
  }, false);
  



  self.addEventListener('sync', event => {
    if (event.tag === 'my-tag-name') {
        event.waitUntil(doTheWork());
    }
});