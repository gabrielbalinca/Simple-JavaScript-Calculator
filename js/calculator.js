var equation = '';
var OperatorCheck = false;

document.getElementById('delete').addEventListener('click', function clear(){
  equation = 0;
  OperatorCheck = false;
  document.getElementById('display').value = '';
});
document.addEventListener('keypress', function(event){
  const isNumber = isFinite(event.key);
  if(isNumber == true){
    number(event.key);
  }else if(event.key == '+'){
    if(document.getElementById('display').value != '' && document.getElementById('display').value != '0'){
      op(event.key);
    }
  }else if(event.key == '-'){
    if(document.getElementById('display').value != '' && document.getElementById('display').value != '0'){
      op(event.key);
    }
  }else if(event.key == '/'){
    if(document.getElementById('display').value != '' && document.getElementById('display').value != '0'){
      op(event.key);
    }
  }else if(event.key == '*'){
    if(document.getElementById('display').value != '' && document.getElementById('display').value != '0'){
      op(event.key);
    }
  }else if(event.key == '='){
    if(document.getElementById('display').value != '' && document.getElementById('display').value != '0'){
      equal();
    }
  }else if(event.key == 'Enter'){
    if(document.getElementById('display').value != '' && document.getElementById('display').value != '0'){
      equal();
    }
  }
});

function display(disp){
  if(document.getElementById('display').value == '' && disp == '0'){
    document.getElementById('display').value == ''
  }else {
    if(document.getElementById('display').value.length < 7){
      document.getElementById('display').value += disp;
    }else{
      alert('Display limit exceeded !');
    }
  }
}
function numberDot(){
  if(equation != 0 && document.getElementById('display').value != ''){
    display('.');
    equation += '.';
  }
}
function number(n){
    OperatorCheck = true;
    equation += n;
    display(n);
}
function op(a){
  if(OperatorCheck == true){
    if(equation != '0'){
      display(a);
    }
    if(a == '\xD7'){
        a = '*';
    }else if(a == '\xF7'){
         a = '/';
    }
    equation = equation + a;
    OperatorCheck = false;
  }else if(OperatorCheck == false){
    if(document.getElementById('display').value == ''){
      if(a == '-' || a == '+'){
        equation += a;
        display(equation);
      }
    }
  }
}
function equal(){
  equation = eval(equation);
  document.getElementById('display').value = equation;
}
