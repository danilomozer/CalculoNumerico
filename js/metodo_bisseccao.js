//Cria o intervalo inicial
function createInterval(x,y){
  return (x + y)/2;
}

//Substitui o valor dos intervalos na equação
function replaceEquation(equation, value){
  var result = equation.replace(new RegExp("x", "g"), value);
  return parseFloat(eval(result));
}

//Botão de Calcular
function btnCalcular() {
  //Pega os valores dos campos
  var equation = document.getElementById("equation").value;
  var startInterval = parseFloat(document.getElementById("firstInterval").value);
  var endInterval = parseFloat(document.getElementById("secondInterval").value);

  //Calcula a média para substituir na equação
  var avg = createInterval(startInterval,endInterval);

  //Resolve a equação com a média
  var result = replaceEquation(equation, avg);

  //Preenche os campos do Outbut com os resultados da equação e da média
  document.getElementById("txtResultEquation").innerHTML = "Resultado da equação: " + result;
  document.getElementById("txtResultAvg").innerHTML = "Resultado da média: " + avg;
}

//Função recursiva para encontrar o resultado final
function result(equation, start, end){
  
}

//Checa condição de parada
function stop(){

}
