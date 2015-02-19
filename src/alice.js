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

function uniqueWords(string) {
  var noPunct = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var stringArray = noPunct.split(' ');
  var resultArray = [];

  for (var i = 0; i < stringArray.length; i++) {
    if(stringArray[i] !== "") {
      resultArray.push(stringArray[i]);
    }
  }

  var lowerCaseArray = [];

  for (i = 0; i < resultArray.length; i++) {
    var lowerCaseElement = resultArray[i].toLowerCase();
    lowerCaseArray.push(lowerCaseElement);
  }

  var uniqueArray = [];

  for (i = 0; i < lowerCaseArray.length; i++) {
    if(uniqueArray.indexOf(lowerCaseArray[i]) === -1){
      uniqueArray.push(lowerCaseArray[i]);
    }
  }
  return uniqueArray.length;
}

function typeToken(string) {
  var stringWordCount = wordCount(string).toString();
  var stringUniqueWords = uniqueWords(string).toString();

  var result = stringUniqueWords.concat('/', stringWordCount);

  return result;
}

function bigrams(string) {
  var noPunct = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var stringArray = noPunct.split(' ');
  var bigramArray = [];
  for (var i = 0; i < stringArray.length - 1; i++) {
    bigramArray.push([stringArray[i].toLowerCase(), stringArray[i+1].toLowerCase()]);
  }

  return bigramArray;
}
