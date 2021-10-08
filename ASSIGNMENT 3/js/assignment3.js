function maxMinAvg(arr) {
  arr = [50, 60, 20, 10, 40]
  var max = arr[0];
  var min = arr[0];
  var sum = arr[0]; //changed from original post
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
      if (arr[i] < min) {
          min = arr[i];
      }
      sum = sum + arr[i];
  }
  return [max, min, sum/arr.length]; //changed from original post
}
