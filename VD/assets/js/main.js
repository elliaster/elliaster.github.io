tns({

    // parent container
    container: '.slider',

    // or 'gallery'
    mode: 'carousel',

    // or 'vertical'
    axis: 'horizontal',

    // number of items to display per slide
    items: 1,

    // space between slides
    gutter: 0,

    // space on the outside
    edgePadding: 0,

    // positive integer
    fixedWidth: false,

    // auto set the width
    autoWidth: false,

    // maximum viewport width for fixedWidth/autoWidth
    viewportMax: false,

    // how many slides to slide at a time
    slideBy: 1,

    // center the active slide
    center: true,

    // shows controls
    controls: true,

    // or 'bottom'
    controlsPosition: 'top',

    // custom prev/next text
    controlsText: ['‹', '›'],

    // container to hold the controls
    controlsContainer: false,

    // shows prev/next buttons
    prevButton: false,
    nextButton: false,

    // shows nav dots
    nav: false,

    // or 'bottom'
    navPosition: 'bottom',

    // container to hold the nav dots
    navContainer: false,

    // uses thumbnails as nav dots
    navAsThumbnails: true,

    // shows navigation arrows
    arrowKeys: true,

    // infinite loop
    loop: true,

    // auto set the height
    autoHeight: true,

    // an object containing breakpoints
    responsive: false,

    // enables lazy load
    lazyload: true,

    // CSS selector of images to lazy load
    lazyloadSelector: '.tns-lazy-img',

    // enables touch events
    touch: false,

    // enables mouse drag
    mouseDrag: false,

    // swipe or drag will not be triggered if the angle is not inside the range when set
    swipeAngle: 15,

    // define the relationship between nested sliders.
    // "inner" | "outer" | false
    nested: true,

    // prevents action when running
    preventActionWhenRunning: false,

    // prevents body scroll on touch device
    preventScrollOnTouch: false,

    // whether the slider will be frozen (controls, nav, autoplay and other functions will stop work) when all slides can be displayed in one page.
    freezable: true,

    // callback
    onInit: false,

    // saves browser capability variables to localStorage and without detecting them everytime the slider runs if set to true.
    useLocalStorage: true,

    // optional Nonce attribute for inline style tag to allow slider usage without `unsafe-inline Content Security Policy source.
    nonce: false

});