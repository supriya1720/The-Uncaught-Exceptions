const el = document.getElementById('a');
const hiddenDiv = document.getElementById('a1');
el.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv.style.display = 'block';
});
el.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv.style.display = 'none';
});
