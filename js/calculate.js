var mynumbers =document.getElementsByClassName("one"),
myvalue =document.getElementById("types"),
equal =document.getElementById("equal"),
myclear =document.getElementById("clear"),
factorial= document.getElementById("factorial"),
absolute= document.getElementById("absolute"),
i;
//   console.log(mynumbers)
for(i=0; i<mynumbers.length; i++){
    mynumbers[i].onclick= function(){

     myvalue.value += this.value
  // console.log(myvalue)
     console.log(myvalue.value)
  //    myvalue.vale = myvalue.value + this.value
    }
}


myclear.onclick=() => {
    myvalue.value=""
}

equal.onclick=()=>{
    myvalue.value= eval(myvalue.value)
}   

    factorial.onclick= ()=>{
      var x = myvalue.value;
      var fact=1;
    for(var i=1;i<=x; i++){
      fact=fact*i
    }
    myvalue.value = fact;

    }
    absolute.onclick= () => {
      myvalue.value=Math.abs(myvalue.value);
    }
    