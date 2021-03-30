 
  // Initialize Lightgallery
  lightGallery(document.getElementById('lightgallery'), {

})
 // Initialize Masonry
 var elem = document.querySelector('.grid');
 var msnry = new Masonry(elem, {
     columnWidth: '.grid-sizer',
     gutter: ".gutter-sizer",
     itemSelector: '.grid-item',
     percentPosition: true,
     horizontalOrder: true,
     autoplayFirstVideo: true,
     videojs: true,
 });

