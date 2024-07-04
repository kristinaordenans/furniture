// document.addEventListener('DOMContentLoaded', function() {
//     function setViewport() {
//         var viewportMeta = document.getElementById('viewportMeta');

//         if (viewportMeta) {
//             var devicePixelRatio = window.devicePixelRatio || 1;
//             var screenResolution = Math.sqrt(screen.width * screen.width + screen.height * screen.height) / (screen.width / devicePixelRatio);

//             if (devicePixelRatio > 1.5 || screenResolution >= 144) {
//                 viewportMeta.setAttribute('content', 'width=device-width, initial-scale=0.75');
//             } else {
//                 viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');
//             }
//         } else {
//             console.error('Viewport meta tag not found');
//         }
//     }

//     setViewport();
// });

// window.onload = function() {
//     var viewport = document.querySelector("meta[name=viewport]");
    
//     if (!viewport) {
//         viewport = document.createElement("meta");
//         viewport.setAttribute("name", "viewport");
//         document.head.appendChild(viewport);
//     }
    
//     var scale = 1.0;
    
//     if (window.devicePixelRatio > 1.5 || screen.pixelDepth > 144) {
//         scale = 0.75;
//     }

//     viewport.setAttribute("content", "width=device-width, initial-scale=" + scale);
//     console.log("Viewport meta tag set to initial-scale=" + scale);
// };

window.onload = function() {
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    console.log("Viewport Width: " + viewportWidth + "px");
    console.log("Viewport Height: " + viewportHeight + "px");
};