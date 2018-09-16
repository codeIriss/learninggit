//document.addEventListener('click',function(){
    //window.alert('click event called!')});


    var bodyHeaderContent = document.querySelector('#body-Header-Content');
    console.log(bodyHeaderContent);
    

    var colors = ['red','green','blue'];
    var currentcolor = 0;
    bodyHeaderContent.addEventListener('click',function(){
    	//this.style.backgroundcolor = "green";
    	//this.style.fontsize = "25px";

    	this.style.backgroundcolor = colors[currentcolor%3];
    	currentcolor += 1;
    });


