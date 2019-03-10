var a =   // для ввода
console.log(a)
var b = typeof(a)
console.log(b)
switch (b) {
  case 'number':
    console.log("1");
    break;
  case 'string':
    console.log("2");
    break;
  case 'boolean':
    console.log("3");
    break;
    case 'null':
    console.log("4");
    break;
  case 'undefined':
    console.log("5");
    break;
  case 'object':
    console.log("6");
    break;
  default:
    console.log("Error")
}