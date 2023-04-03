// document.getElementsByClassName('bars-1')[0].addEventListener('click', function(){
//     document.querySelector('.mobil-bars').classList.taggle('active-menu')
// })

// document.getElementsByClassName('clous')[0].addEventListener('click', function(){
//     document.querySelector('.mobil-bars').classList.toggle('active-menu-x')
// })



const barsMenu = document.querySelector(".bars-1 .fa-bars");
const barsMobil = document.querySelector(".mobil-bars");
const barsClose = document.querySelector(".clous");
const bodyColor = document.querySelector("body");


barsMenu.addEventListener("click", () => {
    barsMobil.classList.add("active-menu");
    bodyColor.style.background = " #000000b6";
      
});
barsClose.addEventListener("click" , () => {
    barsMobil.classList.remove("active-menu")
    bodyColor.style.background = "none";

})

// // bars button'u seçmek ve tıklama olayını eklemek
// const barsBtn = document.getElementById('bars-btn');
// barsBtn.addEventListener('click', () => {
//   const menu = document.getElementById('menu');
//   menu.classList.add('open'); // menüyü açmak için "open" sınıfını ekleyin
// });

// // x button'u seçmek ve tıklama olayını eklemek
// const closeBtn = document.getElementById('close-btn');
// closeBtn.addEventListener('click', () => {
//   const menu = document.getElementById('menu');
//   menu.classList.remove('open'); // menüyü kapatmak için "open" sınıfını kaldırın
// });


    // bars = document.querySelector(".bars-1");
    // bars.onclick =function() {
    //    mobil = document.querySelector('.mobil-bars');
    //    mobil.classList.add('active-menu')
    // }
    $(".acardion-tag-1").click( function(e){
        let btnid = $(this).index();
        $('.acardion-1').hide(1000);
        !$('.acardion-1').eq(btnid).show(1000)
    })
    $(".acardion-tag-2").click(function(e){
        let btnid = $(this).index();
        $('.acardion-2').hide(1000);
        $('.acardion-2').eq(btnid).show(1000)
    })
    $(".acardion-tag-3").click(function(e){
        let btnid = $(this).index();
        $('.acardion-3').hide(1000);
        $('.acardion-3').eq(btnid).show(1000)
    })
    $(".acardion-tag-4").click(function(e){
        let btnid = $(this).index();
        $('.acardion-4').hide(1000);
        $('.acardion-4').eq(btnid).show(1000)
    })

    $(".acardion-tag-1").click(function(e){
        let btnid = $().index();
        $('.activ').hide(1000);
        $('.activ').eq(btnid).show(1000)
    })

    $(".acardion-tag-1").click(function(){
     $(".acardion-1") .slideUp(500);
        $(this).next().slideToggle(500);
    })
    //  document.getElementsByClassName('.acardion-tag-1')[0].addEventListener('click', function(){
    //    document.querySelector('.go').classList.toggle('activ')
    //      })


    //      document.getElementsByClassName('.acardion-tag-1')[0].addEventListener('click', function(){
    //         document.querySelector('.acardion-1').classList.toggle('activmy')})


    // document.getElementsByClassName('.acardion-tag-1')[0].addEventListener('click', function(){
    //     document.querySelector('.acardion-1').classList = ('.activmy')
    
    // })