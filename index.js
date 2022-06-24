function toggleClassOnID(classname, id) {
  const container = document.querySelector(`#${id}`);
  if (container.classList.contains(classname)) { 
    container.classList.remove('hidden');
  }
  else {
    container.classList.add('hidden');
  }
 }
 
function toggleClassOnIDs(classname, ids) {
  ids.forEach(id => toggleClassOnID(classname, id));
}