var equation = "";
var OperatorCheck = false;
var dispValue = document.getElementById("display").value;

document.getElementById("delete").addEventListener("click", function clear(){
  equation = 0;
  OperatorCheck = false;
  document.getElementById("display").value = "";
});
function display(disp){
  if(dispValue != '0'){
    document.getElementById("display").value += disp;
  }else{
    document.getElementById("display").value = disp;
  }
}
function numberDot(){
  if(equation != 0 && document.getElementById("display").value != ''){
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
    if(equation != 0){
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
    if(dispValue == ""){
      if(a == '-' || a == '+'){
        equation += a;
        display(equation);
      }
    }
  }
}
function equal(){
  equation = eval(equation);
  document.getElementById("display").value = equation;
}
