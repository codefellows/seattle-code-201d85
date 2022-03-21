const levees = document.getElementById('levees');
const randomizer = document.getElementById('randomizer');

randomizer.addEventListener('click', function(){
  levees.volume = Math.random();
  levees.autoplay = true;
});
