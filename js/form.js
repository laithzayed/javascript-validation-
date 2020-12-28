// testing user name    
function fun1(){
    var x = document.getElementById('usern').value;        // input form variables, 3btns, checkbox
    var x1 =/^[a-zA-Z]+(?:[\s.]+[a-zA-Z])*$/;  // reg user name, allow spaces and dots
    var msg1 =document.getElementById('usere');
    
        if (x1.test(x)) {                         //testing user name
           msg1.innerHTML = "valid user name";
           msg1.style.color = "green";
        } 
         else  {
            msg1.innerHTML = "you did not fill your name, user name only contains letters, spaces and dots" ; 
            msg1.style.color = "red"; 
        } 
              return false;
        }
    
    
    // testing date of birth
    function fun2() {
        var y = document.getElementById('date').value;
        var y1 =/^[0-3]?[0-9]\/[01]?[0-9]\/[12][90][0-9][0-9]$/; 
        var msg2 =document.getElementById('birth');
           if (y1.test(y)) {
                msg2.innerHTML = "Valid DOB " ;
                msg2.style.color = "green"; 
            }
         else  {
             msg2.innerHTML = "invalid DOB, must enter values in right range ex(dd(1-31)/mm(1-12)/yyyy(1000-2999)) " ; 
             msg2.style.color = "red"; 
            } 
            return false;
    }
    
    // testing #mobile
    function fun3(){
        var z = document.getElementById('numphone').value;
        var z1 = /^([009627]{6})([7-9]{1})([0-9]{7})/;
        var msg3 =document.getElementById('num');
    
        if (z1.test(z)) {
            msg3.innerHTML = "valid phone number ";
            msg3.style.color = "green";
    
        }else {
            msg3.innerHTML = "invalid phone number,must start with 009627";
            msg3.style.color = "red"; 
        }
        return false;
    }
    
    //testing email 
    function fun4() {
        var f = document.getElementById('uemail').value;  
        var f1 = /^(\S+)[A-Za-z][A-Za-z0-9._]{2,20}@[a-z]{2,10}.[a-z]{2,3}/;
        var msg4 =document.getElementById('emai');
    
        if (f1.test(f)) {
            msg4.innerHTML = "valid email ";
            msg4.style.color = "green";
        }else {
            msg4.innerHTML = "empty or invalid email,(._numbers only allowed),spaces not allowed,must start with letters"; 
            msg4.style.color = "red"; 
        }
        return false;
    }
    
    //testing password 1 to match requirements
    function fun5(){
        var g = document.getElementById('passw').value;
        var g1 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;   // reg passw
        var msg5 =document.getElementById('password'); 
        
        if (g1.test(g)) {   //testedhanaHH235**%$
            msg5.innerHTML = "valid password ";
            msg5.style.color = "green";
        }else {
            msg5.innerHTML = "empty or invalid password,(password 8-32, )"; 
            msg5.style.color = "red"; 
        }
        return false;
    }
    
    
    // testing pass1 with passw2 for more security 
    
    function fun6() {
        var w = document.getElementById('passw2').value;
        var g = document.getElementById('passw').value;
        var msg6 =document.getElementById('match');
        var msg66 =document.getElementById('match');
        if (w == g){
            msg6.innerHTML ="matched passwords";
            msg6.style.color = "green";
        }else{
            msg6.innerHTML ="no matching passwords";
            msg6.style.color = "red"; 
    }
        return false;
    }
    
    // testing agreement 
    function fun7() {
        var msg7 =document.getElementById('agr');
        var c = document.getElementById('agre').checked;
        if (c == true) {
           msg7.innerHTML = "Thank you for approving on our policies & terms";
          
    
        }
            return false;
    }
    
    
    // Local Storage function   
    
    function fun8() {
        var x = document.getElementById('usern').value;
        var y = document.getElementById('date').value;
        var z = document.getElementById('numphone').value;
        var f = document.getElementById('uemail').value;
        var g = document.getElementById('passw').value;
        var c = document.getElementById('agre').checked;
    
        var ujson = JSON.stringify(x);
        var djson = JSON.stringify(y);
        var phjson = JSON.stringify(z);
        var ejson = JSON.stringify(f);
        var pjson = JSON.stringify(g);
        
        if (c == true){
    
        localStorage.setItem("username",ujson);
        localStorage.setItem("dob",djson);
        localStorage.setItem("numphone",phjson);
        localStorage.setItem("email",ejson);
        localStorage.setItem("password",pjson);
        
    }
    }
    
     //session storage function
    function fun9() {
        var x = document.getElementById('usern').value;
        var y = document.getElementById('date').value;
        var z = document.getElementById('numphone').value;
        var f = document.getElementById('uemail').value;
        var g = document.getElementById('passw').value;
        var c = document.getElementById('agre').checked;
    
        var ujson = JSON.stringify(x);
        var djson = JSON.stringify(y);
        var phjson = JSON.stringify(z);
        var ejson = JSON.stringify(f);
        var pjson = JSON.stringify(g);
        
        if (c == true){
        sessionStorage.setItem("username",ujson);
        sessionStorage.setItem("dob",djson);
        sessionStorage.setItem("numphone",phjson);
        sessionStorage.setItem("email",ejson);
        sessionStorage.setItem("password",pjson);
        }
    }
    
    // remve from form
    function fun10() {
    
        document.getElementById('usern').value = " ";
        document.getElementById('date').value = " ";
        document.getElementById('numphone').value= " ";
        document.getElementById('uemail').value= " ";
        document.getElementById('passw').value= " ";
        document.getElementById('agre').checked= " ";
        document.getElementById('passw2').value= " ";
        
    
        
    }