
/*function BeerBottle(){
    var beerBottle ='<div id="bb" class="row" id="styling">\
    <img src="C:/Users/Nitisha/Desktop/UI_Learn/WebPage/Images/BeerBottles.jpg" alt="Beer Bottles" class="col-lg-2" id="smallImage">\
    <h3 class="col-lg-2">Beer Bottle</h3>\
    <p class="col-lg-2">$25</p>\
    <button class="col-lg-1" onclick="subone(display1,25,total1)">-</button>\
    <button class="col-lg-2"><div id="display1">1</div></button>\
    <button class="col-lg-1" onclick="addone(display1,25,total1)">+</button>\
    <a href="#" class="col-lg-1" onclick="remove(bb)">Remove</a>\
    <p class="col-lg-1 sumTotal" id="total1">25</p>\
    </div>';
     document.getElementById("BEERBOTTLES").innerHTML = beerBottle;
  
    
}

function ECOBags(){
    
    var ecoBags ='<div id="eb" class="row" id="styling" >\
    <img src="C:/Users/Nitisha/Desktop/UI_Learn/WebPage/Images/EcoBags.jpg" alt="ECO Bags" class="col-lg-2" id="smallImage">\
    <h3 class="col-lg-2">Eco Bags</h3>\
    <p class="col-lg-2">$73</p>\
    <button class="col-lg-1" onclick="subone(display2,73,total2)">-</button>\
    <button class="col-lg-2"><div id="display2">1</div></button>\
    <button class="col-lg-1" onclick="addone(display2,73,total2)">+</button>\
    <a href="#" class="col-lg-1" onclick="remove(eb)">Remove</a>\
    <p class="col-lg-1 sumTotal" id="total2">73</p>\
    </div>';
    document.getElementById("ECOBAGS").innerHTML = ecoBags;
}

function PaperBags(){
  
    var paperBags ='<div id="pb" class="row"  id="styling">\
    <img src="C:/Users/Nitisha/Desktop/UI_Learn/WebPage/Images/PaperBags.jpg" alt="Paper Bags" class="col-lg-2" id="smallImage">\
    <h3 class="col-lg-2">Paper Bags</h3>\
    <p class="col-lg-2">$35</p>\
    <button class="col-lg-1" onclick="subone(display3,35,total3)">-</button>\
    <button class="col-lg-2"><div id="display3">1</div></button>\
    <button class="col-lg-1" onclick="addone(display3,35,total3)">+</button>\
    <a href="#" class="col-lg-1" onclick="remove(pb)">Remove</a>\
    <p class="col-lg-1 sumTotal" id="total3" >35</p>\
   </div>';
    document.getElementById("PAPERBAGS").innerHTML = paperBags;
    
}
*/

 function BeerBottle(){

  var newpath = 'C:/Users/Nitisha/Desktop/UI_Learn/WebPage/Images/BeerBottles.jpg';
  Product('bb',newpath,'Beer Bottle','Beer Bottle','$25',
  'display1',25,'total1',1,'display1',25,'total1','bb',25,'BEERBOTTLES');
  
}
function ECOBags(){

  var newpath = 'C:/Users/Nitisha/Desktop/UI_Learn/WebPage/Images/EcoBags.jpg';
  Product('eb',newpath,'ECO Bags','ECO Bags','$73',
  'display2',73,'total2',1,'display2',73,'total2','eb',73,'ECOBAGS');
  
}

 function PaperBags(){

  var newpath = 'C:/Users/Nitisha/Desktop/UI_Learn/WebPage/Images/PaperBags.jpg';
  Product('pb',newpath,'Paper Bags','Paper Bags','$35',
   'display3',35,'total3',1,'display3',35,'total3','pb',35,'PAPERBAGS');

}



function Product( ID,srcc,altt,h,p,sub1,sub2,sub3,dis,add1,add2,add3,rem1,unit,Print)
{
  var product ='<div id='+ID+' class="row"  id="styling">\
    <img src='+srcc+' alt='+altt+' class="col-lg-2" id="smallImage">\
    <h3 class="col-lg-2">'+h+'</h3>\
    <p class="col-lg-2">'+p+'</p>\
    <button class="col-lg-1" onclick="subone('+sub1+','+sub2+','+sub3+')">-</button>\
    <button class="col-lg-2"><div id="'+sub1+'">'+dis+'</div></button>\
    <button class="col-lg-1" onclick="addone('+add1+','+add2+','+add3+')">+</button>\
    <a href="#" class="col-lg-1" onclick="remove('+rem1+')">Remove</a>\
    <p class="col-lg-1 sumTotal" id="'+sub3+'" >'+unit+'</p>\
   </div>';
   document.getElementById(Print).innerHTML = product;
} 








function sum(){
   
  var sum =0;
 var totalArray= document.getElementsByClassName("sumTotal")
 for(var i=0;i<totalArray.length;i++)
 {
sum += parseInt( totalArray[i].textContent)
 }
 document.getElementById("total").innerHTML = sum;
}


function subone(id,price,id2){
    
  var ID = document.getElementById(id.id).getAttribute('id')
  var ID2 = document.getElementById(id2.id).getAttribute('id')

  var result =  JSON.parse(document.getElementById(ID).innerHTML);
  document.getElementById(ID).innerHTML= --result;

  var x=price * result
  document.getElementById(ID2).innerHTML= x ;

  sum();

    
}

function addone(id,price,id2){
  
  var ID = document.getElementById(id.id).getAttribute('id')
  var ID2 = document.getElementById(id2.id).getAttribute('id')

  var result =  JSON.parse(document.getElementById(ID).innerHTML);
  document.getElementById(ID).innerHTML= ++result;

  var x=price * result
  document.getElementById(ID2).innerHTML= x ;
  sum();


}

function remove(id){
var ID = document.getElementById(id.id).getAttribute('id')
var result = document.getElementById(ID);
result.remove();
sum();

}
