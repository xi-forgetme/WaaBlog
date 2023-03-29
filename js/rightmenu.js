document.addEventListener('DOMContentLoaded',function(){
	var rightMenu = document.getElementById('rightmenu');
	window.oncontextmenu = function(event){
		event.preventDefault();
		rightMenu.style.display="none";
		rightMenu.style.display="block";
		rightMenu.style.left = event.offsetX+'px';
		rightMenu.style.top = event.offsetY+'px';
	}
	document.onclick = function(event){
		rightMenu.style.display = "none";
	}
})

function reflush() {
	location.reload(true);
}

function term() {
	if (dragDiv.style.display === "none") {
		dragDiv.style.display = "block";
	} else {
		dragDiv.style.display = "none";
	}
}

function test() {
	alert("Fuck, world!")
}

function about() {
	aboutDiv.style.display = "block";
	document.addEventListener("mousedown", function(e) {
		aboutDiv.style.display = "none";
	})
}