function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function(support) {
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }
});

//// плавный скролл
$("a[href^='#']").click(function(){
    _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top -10 + "px" });
    return false;
});
