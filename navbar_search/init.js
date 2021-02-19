navbar_search("navbar_search", "btna", function () {
    var current = this;
    // console.log("navbar_search this", this, this.className);
    removeClassFrom("navbar_search", "btna", "active", function () {
        // Add the active class to the current/clicked button
        current.className += " active";
        console.log("navbar_search current", current, current.className);
    });
});
