/* Item variables*/

// var summar_hat = document.getElementById("summer-hat");
// var summar_hat = document.getElementById("summer-hat");
// var summar_hat = document.getElementById("summer-hat");
// var summar_hat = document.getElementById("summer-hat");
var middie_soccer = document.getElementById("middie-soccer");
var Bump_cap = document.getElementById("bump-hat");
var summer_hat = document.getElementById("summer-hat-size");
var thrash_hat = document.getElementById("thrash-hat");

// Add to Cart Buttons
//  Var for

// colors
var navy = document.getElementById("navy-color");
var lilac = document.getElementById("lilac-color");
var black = document.getElementById("black-color"); 


// Object Class
//var summer_hat = new item(document.getElementById("summer-hat-size"),)

function getColor(){
	if(!navy.getAttribute("active") && !black.getAttribute("active") && lilac.getAttribute("active")){
		
		console.log(summar_hat.childNodes(2));
	}
}

// function addCart(){
//     if(!toggle_cart){
//         toggle_cart = true;
        
//         addBag.classList.remove("bi-bag-plus");
//         addBag.classList.add("bi-bag-check");
//         addBag.classList.add("green-check");

//         // 
//     }
//     else{
//         toggle_cart = false;

        // addBag.classList.add("bi-bag-plus");
        // addBag.classList.remove("bi-bag-check");
        // addBag.classList.remove("green-check");
//     }
    

// }

function cart(btn){
    console.log(btn.childNodes[1].classList);

    console.log(btn.childNodes);

    if( btn.childNodes[1].classList = "bi-bag-plus" ){
        console.log("true");
        btn.childNodes[1].classList.remove("bi-bag-plus");
        btn.childNodes[1].classList.add("bi-bag-check");
        btn.childNodes[1].classList.add("green-check");

    }
    
 

}


class item {
    constructor(available,color,size,btn){
        
        this.available = available;
        this.color = color;
        this.size = size;
        this.btn = btn;
        
    }

}