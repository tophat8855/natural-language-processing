function wordCount(string) {
  var noPunct = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var stringArray = noPunct.split(' ');
  var resultArray = [];

  for (var i = 0; i < stringArray.length; i++) {
    if(stringArray[i] !== "") {
      resultArray.push(stringArray[i]);
    }
  }

  return resultArray.length;
}
