function printNumbers(from, to) {
  
  /* using setInterval
  let count = from;
  
  let timerId = setInterval(function() {
     alert(count);
     if(count == to) {
       clearInterval(timerId);
     }
     
    count++;
    
  }, 1000);
  */
  
  //using setTimeout recursively
  let count = from;
  
  let timerId = setTimeout(function counter(){
    alert(count);
    if(count < to){
      timerId = setTimeout(counter, 1000);
    } 
    
    count++;
    
  },1000);
}

printNumbers(5,9);