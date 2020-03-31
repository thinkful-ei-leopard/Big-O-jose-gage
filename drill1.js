'use strict';
//counting sheep

function sheepCounter(sheep){
  if(sheep === 0){
    console.log('All sheep jumped over the fence');
    return;
  }

  console.log(`${sheep}: Another sheep jumps over the fence`);
  return sheepCounter(sheep - 1);
}

<<<<<<< HEAD
// O(n)

// sheepCounter(6);

function sheepCount(sheep) {
  for(let i = 0; i <= sheep; i++) {
    if(i === sheep) {
      console.log('All sheep have jumped over the fence')
    } else {
      console.log(`${i+1}: Another sheep jumped over the fence`)
    }
  }
}

sheepCount(6)

// O(n)
=======
sheepCounter(6);

//Complexity: O(n)
>>>>>>> 2ecfb705d162d2cb169c31410f162788c9288caa
