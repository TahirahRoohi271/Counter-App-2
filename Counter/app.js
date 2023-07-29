addBtn = document.getElementsByClassName('btn-add')[0];
    subtractBtn = document.getElementsByClassName('btn-subtract')[0];
    number = document.getElementById('number');

    addBtn.addEventListener('click',function(){
      number.innerHTML = parseInt(number.innerHTML)+1;
    });
    subtractBtn.addEventListener('click',function(){
      number.innerHTML = parseInt(number.innerHTML)-1;
    });
