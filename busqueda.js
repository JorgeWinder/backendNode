var a = ["a", "b", "c", "ad", "f", "g", "h", "i", "j", "k", "l", "m", "n"].sort();


// Recibe un array y el elemento a Buscar. Devolverá el arreglo  si en caso
function binarySearch(array, item){
  var low = 0;
  var high = array.length - 1;

  while(low <= high) {
    var middle = Math.floor((low + high)/2);
    var guess = array[middle];
    if(guess == item){
      return middle;
    }
    if(guess > item){
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return -1;
}

const dato = binarySearch(a, "ad")

console.log(dato)