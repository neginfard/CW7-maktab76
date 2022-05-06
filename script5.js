/*create a function based on the input and output.look at the examples,there is a pattern,
examples:
secret("div*2")=>"<div></div><div></div>"
secret("p*1")=>"<p></p>"
secret("li*3")=>"<li></li><li></li><li></li>"
*/
function showPattern(string) {
  let temp = string.split("*");
  let print = `<${temp[0]}></${temp[0]}>`.repeat(+temp[1]);
  return print;
}
console.log(showPattern("Li * 3"));
