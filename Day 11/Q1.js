//1
const constants = [2.72, 3.14, 9.81, 37, 100]
let [e , pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e,pi,gravity,humanBodyTemp,waterBoilingTemp);
//2
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [Fin, Est, Swe, Den , Nor] = countries;
console.log(Fin,Est,Swe,Den,Nor);
//3
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
let { width : w, height: h, area: a, perimeter: p} = rectangle;
console.log(w,h,a,p);