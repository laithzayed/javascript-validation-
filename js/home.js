var x= document.getElementById("myimage"),
    
     images = [
     'file:///home/user/Desktop/project2/images/todo-bella.jpg',
     'file:///home/user/Desktop/project2/images/nn.jpg',
     'file:///home/user/Desktop/project2/images/11.jpg',
    
    ]
 
     setInterval(function() {
     var myRrandomNum = Math.floor(Math.random()*images.length);
         console.log("interval")
         x.src= images[myRrandomNum];
         }, 1000); 
         function myFunction() {
            y=document.getElementById("show").href= "Form.html";
        }