(function() {
    var follower, init,  printout, timer;

    follower = document.getElementById('follower');

    printout = document.getElementById('printout');

    function mouseX(event) {
        return event.clientX;
    };

    function mouseY(event) {
        return event.clientY;
    };

    function positionElement(event) {
        var mouse;
        mouse = {
            x: mouseX(event),
            y: mouseY(event)
        };
        follower.style.clipPath = 'circle(150px at ' + mouse.x + 'px ' + mouse.y + 'px)';

        // return follower.style.left = mouse.x + 'px';
    };

    timer = false;

    window.onmousemove = function(e) {
        console.log();
        var _event;
        _event = event;
        return timer = setTimeout(function() {
            return positionElement(_event);
    }, 1);
    };

}).call(this);

