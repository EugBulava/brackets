module.exports = function check(str, bracketsConfig) {
  var result = true;
  if(str.length%2 == 1){
    return false;
  } else {
    for(var i = 0; i<=str.length-1; i++){
      //console.log(str); 
      for(var j = 0; j<= bracketsConfig.length-1;j++){
        if(str[i] == bracketsConfig[j][0] && str[i+1] == bracketsConfig[j][1]){
          str = str.slice(0,i) + str.slice(i+2, str.length);
          i -= 2;
        }
      }
    }
    if(str.length == 0){
      return true;
    }else {
      return false;
    }
  }
}

//console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]));