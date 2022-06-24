function toggleClass(id, classname) {

  var container = document.querySelector(`#${id}`);
  
  if (container.classList.contains(classname)) { 
  	container.classList.remove(classname);
  }
  else {
  	container.classList.add(classname);
  }
}
