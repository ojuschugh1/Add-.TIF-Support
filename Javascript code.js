<!-- Include Tiff.js library -->
<script src="https://cdn.jsdelivr.net/npm/tiff.js"></script>

<!-- HTML element to display the image -->
<div id="image-container"></div>

<script>
// Load the .TIF image file
Tiff.initialize({TOTAL_MEMORY: 16777216});
var xhr = new XMLHttpRequest();
xhr.open('GET', 'path/to/image.tif', true);
xhr.responseType = 'arraybuffer';
xhr.onload = function () {
  // Decode the image and display it in the container
  var tiff = new Tiff({buffer: xhr.response});
  var canvas = tiff.toCanvas();
  document.getElementById('image-container').appendChild(canvas);
};
xhr.send();
</script>
