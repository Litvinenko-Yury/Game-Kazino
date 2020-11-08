/**======================= */
/*Добавить/убрать GLITCH по hover на ME*/
function glitch() {
  const me = document.querySelector('.me');
  const glitch = document.querySelector('.glitch');

  me.addEventListener('mouseover', () => {
    glitch.classList.remove('glitch');
  });
  me.addEventListener('mouseout', () => {
    glitch.classList.add('glitch');
  });
}

export default glitch;
