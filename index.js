function incretament(incDec,prc,itm){
    var count = document.getElementById(incDec);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    var pr_ammount = document.getElementById("pr_ammount").innerHTML;
    var charge = document.getElementById("charge").innerHTML;
    var total_ammount = document.getElementById("total_ammount").innerHTML;
    if(count.value>=5){
        count.value=5;
        alert("only 5 products allow");
    }else{
        count.value++;
        var result = parseInt(price.innerHTML)+parseInt(item.innerHTML);
        item.innerHTML =result;
        var total_product = parseInt(price.innerHTML) + parseInt(pr_ammount);
        document.getElementById("pr_ammount").innerHTML = total_product;
        var Newresult = total_product + parseInt (charge);
      document.getElementById("total_ammount").innerHTML = Newresult;

      var KUPON_MAIN_DIV = document.getElementById("KUPON_MAIN_DIV");
      
        if(total_ammount=>200){
            KUPON_MAIN_DIV.style.display = 'block';
        }

    }

}

//for mines 
function decretament(incDec,prc,itm){
    var count = document.getElementById(incDec);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    var pr_ammount = document.getElementById("pr_ammount").innerHTML;
    var charge = document.getElementById("charge").innerHTML;
    var total_ammount = document.getElementById("total_ammount").innerHTML;
    if(count.value<=0){
        count.value=0;
        alert("only minimum 1 products allow");
    }else{
        count.value--;
        var result = parseInt(item.innerHTML)-parseInt(price.innerHTML);
        item.innerHTML =result;
        //for product ammount
        var total_product = parseInt(pr_ammount) - parseInt(price.innerHTML);
        document.getElementById("pr_ammount").innerHTML = total_product;
        //for totla ammount wiht for charge
        var Newresult = total_product + parseInt (charge);
        document.getElementById("total_ammount").innerHTML = Newresult;

    } 
}

var KUPON_MAIN_DIV = document.getElementById("KUPON_MAIN_DIV");
KUPON_MAIN_DIV.style.display = 'none';
var Applybtn = document.getElementById("Applybtn");
Applybtn.addEventListener('click',function(){

     var KUpon_input = document.getElementById("KUpon_input");
     var total_ammount = document.getElementById("total_ammount").innerHTML;
     if(KUpon_input.value == 'Rajib_Raj'){

        var totla = parseInt(total_ammount)-50;
        document.getElementById("total_ammount").innerHTML = totla;
        alert('congratulation')
     }else{
        alert('kupon not match')
     }
});


//imag change js
var imag = ['img1.jpg','img2.jpg','img3.jpg','salad-3.jpg']
var index = 0;
var imgLen = imag.length;
var img = document.getElementById("img");

function next(){
    index++
    
    if(index>=imgLen)
    {
        index = 0;
        img.src = imag[index];
        console.log(img[index]);
    }
    else{
        img.src = imag[index];
    }
    
}

function pric(){

    index--
    if(index<0){
        index = imgLen-1;
    }else{
        img.src = imag[index];
    }
}



//counting js code start


var count = 0 ;

var project = setInterval(project);

function project(){
    count++
    var num1 = document.getElementById("num1").innerHTML = count;

    if(count==300){
        clearInterval(project);
    }
}

var countt1 = 0 ;

var Faculty = setInterval(Faculty,10);

    function Faculty(){
    countt1++
    var num2 = document.getElementById("num2").innerHTML = countt1;

    if(countt1==200){
        clearInterval(Faculty);
    }
}

var countt2 = 0 ;

var Regular  = setInterval(Regular );

    function Regular (){
    countt2++
    var num3 = document.getElementById("num3").innerHTML = countt2;

    if(countt2==400){
        clearInterval(Regular );
    }
}



