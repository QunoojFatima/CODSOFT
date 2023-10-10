let ans = "";
let items= document.querySelectorAll('.button');
Array.from(items).forEach((item) => {
  item.addEventListener('click',(e) => {
    if(e.target.innerHTML == 'C'){
        ans = "";
        document.querySelector('input').value = ans;
    }
    else if (e.target.innerHTML == '='){
        ans = eval(ans);
        document.querySelector('input').value = ans;
    }

    else{console.log(e.target)
    ans = ans + e.target.innerHTML;
    document.querySelector('input').value = ans;
    }
  })
})