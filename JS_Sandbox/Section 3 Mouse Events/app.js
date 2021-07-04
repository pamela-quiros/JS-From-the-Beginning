const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// //Click
// clearBtn.addEventListener('click', runEvent);

// //Doubleclick
// // clearBtn.addEventListener('dbclick', runEvent);

// //Mouse down
// clearBtn.addEventListener('mousedown', runEvent);

// //Mouse up
// clearBtn.addEventListener('mouseup', runEvent);

// //Mouse enter
// card.addEventListener('mouseenter', runEvent);

// //Mouseleave
// card.addEventListener('mouseleave', runEvent);

// //Mouseover
// card.addEventListener('mouseover', runEvent);

// //Mouseout
// card.addEventListener('mouseout', runEvent);

//Mousemove
card.addEventListener('mousemove', runEvent);

//Event handler
function runEvent(e){
  console.log(`Event Type: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40)`;
}