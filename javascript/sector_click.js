function sectorClick() {
    var canvas = document.querySelector("sectors");
    var ctx = canvas.getContext("2d");
  
    var x = event.offsetX;
    var y = event.offsetY;
    var color = ctx.getImageData(x, y, 1, 1).data;
    alert(color);
  }