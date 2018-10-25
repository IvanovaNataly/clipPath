(function() {
    var follower, radius;

    follower = document.getElementById('path');
    radius = 150;

    function mouseX(event) {
        return event.clientX;
    };

    function mouseY(event) {
        return event.clientY;
    };

    function positionElement(event) {
        var mouse, initialX, initialY, initial, oppositeX, oppositeY, data;
        mouse = {
            x: mouseX(event),
            y: mouseY(event)
        };
        initialX  = mouse.x + ',';
        initialY  = mouse.y - radius;
        initial   = initialX + initialY;
        oppositeX = mouse.x - radius + ',';
        oppositeY = mouse.y + ',';

        data = 'M0,0H1920V768H0V0ZM'+ initial + 'A150,150,0,1,1,' + oppositeX + oppositeY + '150,150,0,0,1,'+ initial + 'Z';
        follower.setAttribute("d", data);
    };

    window.onmousemove = function(e) {
        var _event;
        _event = event;
        return timer = setTimeout(function() {
            return positionElement(_event);
        }, 1);
    };

}).call(this);
