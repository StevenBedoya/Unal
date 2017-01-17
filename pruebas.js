var contador = 5;

function permut(array) {
  var index = array.length, temporal, random;
  while (0 !== index) {
    random = Math.floor(Math.random() * index);
    index -= 1;
    temporal = array[index];
    array[index] = array[random];
    array[random] = temporal;
  }
  return array;
}


function factorial(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

function calcular(data){

   var n='';
   var val = 0;
         var iter = factorial(contador);
         var finalArray = [];
         var valor;

         do{
           var permutacion = permut(data);
           valor=permutacion.join('');
           finalArray[val]=valor;
           val++;
          }while(val<iter+10);
      
        var max=0;
        for(var i=0;i<finalArray.length;i++){
            if(max < finalArray[i]){
                max = finalArray[i];
      
            }
        }
    return max;
}


QUnit.test("5, 50, 56", function() {

  deepEqual(calcular([50,56,5]), "56550");

});

QUnit.test("420, 42, 423", function() {

  deepEqual(calcular([420,42,423]), "42423420");

});

QUnit.test("50, 2, 1, 9", function() {

  deepEqual(calcular([50,56,5]), "56550");

});
