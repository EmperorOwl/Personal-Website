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

function showDropdown() {

    "use strict";
    document.getElementById("dropdown").classList.add("show");
    document.getElementById("searchBar").classList.add("active");
}

function hideDropdown() {

    "use strict";
    document.getElementById("dropdown").classList.remove("show");
    document.getElementById("searchBar").classList.remove("active");
}

function filterSearchItems() {

    "use strict";
    var searchBar = document.getElementById("searchBar"),
        dropdown = document.getElementById("dropdown"),
        userSearch = searchBar.value.toLowerCase(),
        searchItems = dropdown.getElementsByTagName('a'),
        i = 0;

    for (i = 0; i < searchItems.length; i += 1) {
        if (searchItems[i].textContent.toLowerCase().includes(userSearch)) {
            searchItems[i].style.display = "";
        } else {
            searchItems[i].style.display = "none";
        }
    }
}
