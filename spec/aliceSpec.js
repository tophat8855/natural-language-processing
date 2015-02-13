var alice = document.getElementById('alice').innerText();

describe('count words', function() {
  it ('counts the number of words', function() {
    string = "To be or      not to be.";

    result = wordCount(string);

    expect(result).toEqual(6);
  });

  it('counts the number of words in the chapter', function() {
    string = alice;

    result = wordCount(string);

    expect(result).toEqual(0);
  });
});
