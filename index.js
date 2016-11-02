var add = function(a,b){
  return a + b;
};

var subtract = function(a,b){
  return a - b;
};

var multiply = function(a,b){
  return a * b;
};

var divide = function(a,b){
  return a/b;
};

var inc = function(n){
  n++;
  return n;
};

var dec = function(n){
  n--;
  return n;
};

var makeInt = function(n){
  parseInt(n);
  return parseInt(n, 10);
};

var preserveDecimal = function(n){
  parseFloat(n);
  return parseFloat(n);
};