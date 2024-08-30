const repeatString = function(word, times) {
  if (times < 0) return "ERROR";
  string = "";
  for(i=1; i<=times; i++){
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
