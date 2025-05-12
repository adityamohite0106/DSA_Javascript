// 1) Traversing an Array//
let Data = [2, 3, 4, 1, 0, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < Data.length; i++) {
//   document.write(`Arry  ${i} is ${Data[i]}<br>`);
// }

function FunctionCheck() {
    let el = document.getElementById("element").value;
  if (el<Data.length) {
  
    alert(Data[el]);
  } else {
    alert("Element not found");
  }
}
