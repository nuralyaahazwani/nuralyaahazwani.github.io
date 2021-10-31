function minMaxAvg() {



    var myArray1 = [100,23,45,81,2,39];
  
    var min1 = myArray1[0];
    var max1 = myArray1[0];
    var total1 = 0;
    
    for (var i = 0; i < myArray1.length; i++) {
      if (myArray1[i] < min1) {min1 = myArray1[i];}
      if (myArray1[i] > max1) {max1 = myArray1[i];}
      total1 += myArray1[i]
    }
  
    var myArray2 = [24,56,38,1,9];
  
    var min2 = myArray2[0];
    var max2 = myArray2[0];
    var total2 = 0;
    
    for (var i = 0; i < myArray2.length; i++) {
      if (myArray2[i] < min2) {min2 = myArray2[i];}
      if (myArray2[i] > max2) {max2 = myArray2[i];}
      total2 += myArray2[i]
    }
  
    
    console.log(`The maximum output for array 1 is ${max1}`);
    console.log(`The minimum output for array 1 is ${min1}`);
    console.log(`The average output for array 1 is ${total1 / myArray1.length}`); 
    console.log(`The maximum output for array 2 is ${max2}`);
    console.log(`The minimum output for array 2 is ${min2}`);
    console.log(`The average output for array 2 is ${total2 / myArray2.length}`); 
  }
  
  let elminMaxAvg = document.getElementById("minMaxAvg")
  elminMaxAvg.addEventListener("click",function(){
      minMaxAvg()
  })