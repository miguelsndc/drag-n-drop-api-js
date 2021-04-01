const cards = document.querySelectorAll('.card');
const dropareas = document.querySelectorAll('.droparea');

function dragStart() {
  this.classList.add('dragging');
}

function dragEnd() {
  this.classList.remove('dragging');
}

cards.forEach((card) => {
  card.draggable = true;

  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});

function dragOver(e) {
  e.preventDefault();

  const cardBeingDragged = document.querySelector('.dragging');

  cardBeingDragged.classList.add('previewDrop');
  this.appendChild(cardBeingDragged);
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function drop() {
  const cardBeingDragged = document.querySelector('.dragging');
  cardBeingDragged.classList.remove('previewDrop');
  this.classList.remove('over');
}

dropareas.forEach((droparea) => {
  droparea.addEventListener('dragover', dragOver);
  droparea.addEventListener('dragleave', dragLeave);
  droparea.addEventListener('drop', drop);
});
