let i = 0;

let start = Date.now();
let timer = setInterval(count, 0);

function count() {

  if (i == 1000000000) {
    alert("Done in " + (Date.now() - start) + 'ms');
    clearInterval(timer);
  }

  for(let j = 0; j < 1000000; j++) {
    i++;
  }

}

count();