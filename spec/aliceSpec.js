var alice = document.getElementById('alice').innerText;

describe('count words', function() {
  it ('counts the number of words', function() {
    var string = "To be or      not to be.";

    var result = wordCount(string);

    expect(result).toEqual(6);
  });

  it('counts the number of words in the chapter', function() {
    var string = alice;

    var result = wordCount(string);


    expect(result).toEqual(2140);
  });
});

describe('unique words', function() {
  it('returns the number of unique words', function() {
    var string = "To be or not to be.";

    var result = uniqueWords(string);

    expect(result).toEqual(4);
  });

  it('returns the number of unique words in chapter', function() {
    var string = alice;

    var result = uniqueWords(string);


    expect(result).toEqual(656);
  });
});

describe('type-token', function() {
  it('returns the type-token ration (unique words/total words)', function() {
    var string = "To be or not to be.";

    var result = typeToken(string);

    expect(result).toEqual('4/6');
  });

  it('returns the type-token of the chapter', function() {
    var string = alice;

    var result = typeToken(string);

    expect(result).toEqual('656/2140');
  });
});
