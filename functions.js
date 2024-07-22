// Existing code
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth !== clientWidth && newHeight !== clientHeight) {
        location.replace(location);
    }
});

(function($) {
    $.fn.typewriter = function() {
        this.each(function() {
            var $ele = $(this), str = $ele.html(), progress = 0;
            $ele.html('');
            var timer = setInterval(function() {
                var current = str.substr(progress, 1);
                if (current === '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 75);
        });
        return this;
    };
})(jQuery);

function timeElapse(dateString) {
    var birthDate = new Date(dateString); // Convert input string to Date object
    var currentDate = new Date();
    
    // Calculate the difference in milliseconds between current date and birth date
    var timeDifference = currentDate.getTime() - birthDate.getTime();

    // Calculate days, hours, minutes, and seconds
    var seconds = Math.floor(timeDifference / 1000);
    var days = Math.floor(seconds / (3600 * 24));
    seconds %= (3600 * 24);
    var hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    var minutes = Math.floor(seconds / 60);
    seconds %= 60;

    // Format the result
    var result = "Days <span class=\"digit\">" + days + "</span> Hours <span class=\"digit\">" + hours + "</span> Minutes <span class=\"digit\">" + minutes + "</span> Seconds <span class=\"digit\">" + seconds + "</span>"; 

    // Update the clock element with the formatted result
    $("#clock").html(result);

    // Construct the message with the formatted date string
    var formattedDate = birthDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
    var text = "THE WORLD HAS FOUND A TRULY LUCKY SOUL." + "-Since July 27, 200_? -India Standered Time ~" ;
    $("#message-box").html(text);
}

// Call the function with the desired date
timeElapse("2004-07-27");

// New Code
window.onload = function() {
    setTimeout(function() {
        document.getElementById('delayedButton').style.display = 'block';
    }, 20000); // 30000 milliseconds = 15 seconds, you can change it to 10000 (10 seconds) or 20000 (20 seconds) as needed
};

function redirectToNextPage() {
    window.location.href = 'https://sumitxp90.github.io/test/'; // Change this URL to the desired link
}
