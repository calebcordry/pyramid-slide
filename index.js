function makePyramid(height, char, element){
  element.innerHTML = '';

  for (let i = 0; i < height; i++) {
    var space = ' ';
    var charLength = 2 + i;
    var spaceLength = height - charLength + 1;

    var row = space.repeat(spaceLength) + char.repeat(charLength);
    var rowEl = document.createElement('pre');

    rowEl.innerHTML = row;
    element.appendChild(rowEl)
  }
}

var slider = document.getElementById('slider');
var rowVal = document.getElementById('row-value');
var symbolEl = document.getElementById('symbol');
var display = document.getElementById('display');

rowVal.innerHTML = slider.value;
makePyramid(slider.value, symbolEl.value, display);

slider.addEventListener('change', function(event){
  rowVal.innerHTML = slider.value;
  makePyramid(slider.value, symbolEl.value, display);
})

symbolEl.addEventListener('change', function(event){
  makePyramid(slider.value, symbolEl.value, display);
})
