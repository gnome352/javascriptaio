const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let hposition = 0;
let vposition = 0;

function handleKeyPress(e) {
  if (e.code === 'ArrowLeft') {
    hposition = hposition - 10;
  }
  if (e.code === 'ArrowRight') {
    hposition = hposition + 10;
  }
  if (e.code === 'ArrowUp') {
    vposition = vposition - 10;
  }
  if (e.code === 'ArrowDown') {
    vposition = vposition + 10;
  }
  if (hposition < 0) {
    hposition = 0;
  }
  if (vposition < 0) {
    vposition = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = hposition + 'px';
  ball.style.top = vposition + 'px';
}
