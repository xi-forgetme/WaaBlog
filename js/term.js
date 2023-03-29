let floatDiv = document.querySelector('#dragDiv');

// function execCmd(cmd) {
//     switch (cmd) {
//         case 'help': exec(); break;
//         default: console.log('他是个大傻逼')
//     }
// }

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

document.getElementById('termWin').addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        var cmd = document.getElementById('termWin').value.split('\n')[document.getElementById('termWin').value.split('\n').length - 1]
        document.getElementById('termWin').value += execCmd(cmd)
    }
})