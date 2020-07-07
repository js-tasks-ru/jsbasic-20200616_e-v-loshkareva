function toggleText() {
  let button= document.querySelector('.toggle-text-button');
  button.onclick= function(){
if (!button) return;
  let id =document.getElementById('text');
  id.hidden=!id.hidden;
}
}
