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

//Set some init value
dragDiv.style.display = "none"

function reflush() {
	location.reload(true);
}

function term() {
	if (dragDiv.style.display === "none" || dragDiv.style.display == undefined || dragDiv.style.display == null) {
		dragDiv.style.display = "block"
	} else {
		dragDiv.style.display = "none"
	}
}

function copy() {
	var selection = window.getSelection().toString()
	console.log(selection)
    var textarea = document.createElement("textarea")
    textarea.textContent = selection
    document.body.appendChild(textarea)
    textarea.select()
	document.execCommand('copy')
	document.body.removeChild(textarea)
}

function about() {
	aboutDiv.style.display = "block";
	document.addEventListener("mousedown", function(e) {
		aboutDiv.style.display = "none";
	})
}