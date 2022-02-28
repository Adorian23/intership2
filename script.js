function showPassword(){
    var pass = document.getElementById("Password");
       if (pass.type === "password") {
           pass.type = "text";
       }
       else {
           pass.type = "password";
       }
    }
  
    

const loadmore = document.querySelector('#loadmore');
    let currentItems = 2;
    loadmore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.list .list-element')];
        for (let i = currentItems; i < currentItems + 2; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'block';
            }
        }
        currentItems += 2;

        // Load more button will be hidden after list fully loaded
        if (currentItems >= elementList.length) {
            event.target.style.display = 'none';
        }
    })

    $('.dropdown-toggle').dropdown()

   function thumbChange(num){
       var thumb = 'Images/photo' + num + '.jpg';
       document.getElementById("mainImg").src =thumb;
    
   }
   const change = src => {
    document.getElementById('main').src = src
}
   jQuery(document).ready(($) => {
    $('.quantity').on('click', '.plus', function(e) {
        let $input = $(this).prev('input.qty');
        let val = parseInt($input.val());
        $input.val( val+1 ).change();
    });

    $('.quantity').on('click', '.minus', 
        function(e) {
        let $input = $(this).next('input.qty');
        var val = parseInt($input.val());
        if (val > 0) {
            $input.val( val-1 ).change();
        } 
    });
});

function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});

function myFunction() {

    var dots = document.getElementById("dots");
    
    var moreText = document.getElementById("more");
    
    var btnText = document.getElementById("myBtn");
    
    if (dots.style.display === "none") {
    
    dots.style.display = "inline";
    
    btnText.innerHTML = "Read more";
    
    moreText.style.display = "none";
    
    } else {
    
    dots.style.display = "none";
    
    btnText.innerHTML = "Read less";
    
    moreText.style.display = "inline";
    
    }
    
    }
    
    function printReport( )
{     
    document.getElementById('ImagePrint').style.visibility='hidden';     
    window.print();
    document.getElementById('ImagePrint').style.visibility='visible';        
}

var count=(function (){

    var counter = 0;
    return function () {return counter +=1;}
    

})();


