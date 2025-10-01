//nullish operator

const value=[]
const value2="lksjdf"
console.log(value ?? value2);

function a() {
  console.log("a was yo");
  return null;
}
function b() {
  console.log("b was yo");
  return false;
}
function c() {
  console.log("c yo yo");
  return "foo";
}

console.log(a() ?? c());
console.log(b() ?? c());