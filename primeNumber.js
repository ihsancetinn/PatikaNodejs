

const argument = process.argv.slice(2);


 function daireAlanı(r) {
  var PI = Math.PI
 let alan = parseFloat(PI *(r*r));
 console.log(alan)
 return alan;
    
  
};
// console.log(daireAlanı(5));
daireAlanı(parseFloat(argument[0]));



