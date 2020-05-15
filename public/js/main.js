document.addEventListener("DOMContentLoaded",()=>{
    var  myFunction=(x) =>{
        if (x.matches) {
            $('.content h1').removeClass("display-4"),$('.content h1').addClass("display-6");
            $('#name').removeClass("display-3"),$('#name').addClass("diaplay-4");
            $('.education .d-sm-flex .p-3').addClass('row');
            $('.education .d-sm-flex .p-3 h3').addClass('col-6');
        } 
        else {
            $('.content h1').addClass("display-4"),$('.content h1').removeClass("display-5");
            $('#name').addClass("display-3"),$('#name').removeClass("diaplay-4");
            $('.education .d-sm-flex .p-3').removeClass('row');
            $('.education .d-sm-flex .p-3 h3').removeClass('col-6');
        }
      };
      
    let  x = window.matchMedia("(max-width: 600px)");
    myFunction(x) 
    x.addListener(myFunction)
});
