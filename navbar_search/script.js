function navbar_search(group, element, callback) {
// Get the container element
    var btnContainer = document.getElementById(group);

// Get all buttons with class="btn" inside the container
    var btns = btnContainer.getElementsByClassName(element);
    // console.log("navbar_search btns", btns);


// Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
        // console.log("navbar_search btns[i]", btns[i]);

        btns[i].addEventListener("click", callback);

    }
}

function removeClassFrom(group, element, classname, callback) {
    var btnContainer = document.getElementById(group);
    var btns = btnContainer.getElementsByClassName(element);
    for (var i = 0; i < btns.length; i++) {
        // console.log("navbar_search removeClassFrom btns[i]", btns[i]);
        var current = btns[i];
        // console.log("navbar_search removeClassFrom current", current, current.className, current.className.length);
        // If there's no active class
        if (current.className.length > 0) {
            current.className = current.className.replace("" + classname, "");
        }
    }
    return callback();
}
