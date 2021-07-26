/*
    var sum=0;
    for (var index = 2; index < process.argv.length; index++) {
        sum+= Number(process.argv[index]);
    }
    console.log(sum);
console.log(process.argv);*/

var sum = process.argv.reduce(function (a, b, c) {
    if (c >= 2 && !isNaN(b)) {
      return +a + +b
    } else if (c >= 2) {
       return +a + 0;
    } else {
       return 0;
    }
  })
  
  console.log(sum)