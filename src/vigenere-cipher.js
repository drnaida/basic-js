class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(input, key) {
    if (!input || !key) {
      throw new Error;
    }
    let correctInput = input.toUpperCase().split('');
    let correctKey = key.toUpperCase().split('');
    let result = correctInput.map(element => {
      let elementCode = element.charCodeAt();
      let result = element;
      if (elementCode >= 65 && elementCode <= 90) {
        result = String.fromCharCode(((elementCode + correctKey[0].charCodeAt()) % 26) + 65);
        correctKey.push(correctKey.shift());
      }
      return result;
    });
    if (!this.direct) {
      result.reverse();
    }
    return result.join('');
  }
  decrypt(input, key) {
    if (!input || !key) {
      throw new Error;
    }
    let correctInput = input.split('');
    let correctKey = key.toUpperCase().split('');
    let result = correctInput.map(letter => {
      let letterCode = letter.charCodeAt();
      let result = letter;
      if (letterCode >= 65 && letterCode <= 90) {
        result = String.fromCharCode(((letterCode - (correctKey[0].charCodeAt()) + 26) % 26) + 65);
        correctKey.push(correctKey.shift());
      }
      return result;
    });
    if (!this.direct) {
      result.reverse();
    }
    return result.join('');
  }
}
module.exports = VigenereCipheringMachine;
