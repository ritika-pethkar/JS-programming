// generate a random color
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  let interval_id;
  // function to start the interval 
  const startChangingColor = function () {
    if(!interval_id){
      interval_id = setInterval(changeBackgroundColor, 1000);
    }
    // function to change background color
    function changeBackgroundColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  // function stop the interval
  const stopChangingColor = function () {
    clearInterval(interval_id);
    interval_id = null;
  };
  
  // click on start button to start changing color
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  // click on stop button to stop changing color
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  