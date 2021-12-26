window.onload = function () {

    "use strict";

    var loader = document.getElementById("loader"),
        content = document.getElementById("content");

    loader.style.display = "flex";
    content.style.display = "none";

    setTimeout(
        function () {
            loader.style.display = "none";
            content.style.display = "block";
        },
        1500 // 1500 ms = 1.5 s
    );
};
