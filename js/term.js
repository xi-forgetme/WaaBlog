let floatDiv = document.querySelector('#dragDiv');

function execCmd(cmd) {
    switch (cmd) {
        case 'echo':
    }
}

floatDiv.addEventListener("mousedown", function(e) {
    if (window.event.ctrlKey) {
        let x = e.pageX - floatDiv.offsetLeft;
        let y = e.pageY - floatDiv.offsetTop;
        document.addEventListener("mousemove", move);
        function move(e) {
            floatDiv.style.left = e.pageX - x + 'px';
            floatDiv.style.top = e.pageY - y + 'px';
        }
        document.addEventListener("mouseup", function(e) {
            document.removeEventListener("mousemove", move);
        });
    }
});

//floatDiv.addEventListener("key")
