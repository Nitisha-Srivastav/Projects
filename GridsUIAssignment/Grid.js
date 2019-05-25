
function filterFunction(){
    var inp = document.getElementById("myInput");
    var filter=inp.value.toUpperCase();
    d =document.getElementById("DrpBox");
    var a=d.getElementsByTagName("a");
    for(var i=0;i<a.length;i++){
     textValue =a[i].textContent || a[i].innerText;
    if(textValue.toUpperCase().indexOf(filter) > -1)
    {
         a[i].style.display = "";
        } else {
          a[i].style.display = "none";
       
    
    }
    }
    
    }
    

    function display(){




      var tblref= document.getElementById("table1");
      var tblVal=tblref.getElementsByTagName("th");
      var tblcls=document.getElementsByClassName("ttt")
      var dataid=tblref.getElementsByTagName("td");
      
      
      var d =document.getElementById("DrpBox");
      var anch=d.getElementsByClassName("anchors");
      var req=d.getElementsByTagName("a");
      
      
      
      var l= tblref.getElementsByTagName("th");
      
      
      for (var i=0;i< l.length-1;i++){
      
      //for (var x=0;x< l.length-2;x++){
      anch[i].value="hide";
      
      //}
      
      
      
      if(anch[i].checked == true){
      
      
      
      if(req[i].innerText==tblVal[i+2].innerText){
      
      var x=anch[i].id
       //document.getElementsByTagName("i+2").innerHTML =document.getElementsByTagName("th")[k+2].innerText;
      console.log(document.getElementsByTagName("th")[i+2].innerText);
      
      
       var checkbox_val=anch[i].value;
        if(checkbox_val=="hide"){
      var all_col=req[i].innerText;
       
      //  for(var m=0;m<all_col.length;m++){
      //	  tblVal[i+2].style.display="none";
      // }
       
        // tblVal[i+2].style.display="none";
      //tblVal[i+2].value="show";
        
        
        
       }
       
      
       //l[i+2].style.backgroundColor = "red";
       }
      
       //document.getElementById(i+1).
       }
      //else{
      //document.getElementById(i+1)
      
      //}
       else {
      // var all_col=req[i].innerText;
      //for(var m=2;m<all_col.length;m++)
      //{
      //tblVal[m]=document.getElementById("clmn");
       //tblcls[m].style.display="none";
      // }
        
       //tblVal[i+2].style.display="none";
       //document.getElementsByClassName('appBanner')[0].style.visibility = 'hidden';
       var clsnme=tblVal[i+2].className;
       
       document.querySelectorAll("."+clsnme).forEach(function(x){x.hidden = true})
       
       
      for(var m=0;m<tblcls.length;m++){
      if(dataid[i+2].className == tblcls)
      { 
      document.querySelectorAll("tr")[1].childNodes[2]
      }
       
       }
     
        
        
        
      
       }
      }
      
      }

