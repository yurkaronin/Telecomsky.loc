function positionButtonHover(event) {
  var button = event.target;
  var pos = button.getBoundingClientRect();
  var elem_left = pos.left;
  var elem_top = pos.top;
  var Xinner = event.pageX - elem_left;
  var Yinner = event.pageY - elem_top;
  button.querySelector('.button_hover').style.left = Xinner + 'px';
  button.querySelector('.button_hover').style.top = Yinner + 'px';
}
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.button').forEach(function (button) {
    button.addEventListener('mouseover', positionButtonHover);
  });
});



