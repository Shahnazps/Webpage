var counter = 10;
let btnstart = document.querySelector("#start");

btnstart.addEventListener('click',() =>{
	t = setInterval(function(){
		counter --;

		if(counter >= 0){
			id = document.getElementById("count");
			id.innerHTML = counter;
		}
		if(counter == -1){
			alert("Alert value reached 0")
			clearInterval(t);
			counter = 10
			document.getElementById("count").innerHTML = counter;
		}
		
	},1000)

})

let btnreset = document.querySelector("#reset");

btnreset.addEventListener('click',() =>{
	counter = 10;
	id = document.getElementById("count")
	id.innerHTML = counter;
})

let btnincre = document.querySelector("#increment");
let btndecre = document.querySelector("#decrement");

btnincre.addEventListener('click',()=>{
	document.getElementById("count").innerHTML = counter++;
})

btndecre.addEventListener('click',()=>{
	document.getElementById("count").innerHTML = counter--;
})

