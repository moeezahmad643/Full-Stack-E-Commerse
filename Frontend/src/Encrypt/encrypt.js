export default function encrypt(text, shift=3) {
    let result = '';
  
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
  
      // Encrypt uppercase letters
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      }
      // Encrypt lowercase letters
      else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      }
      // Keep non-alphabetic characters unchanged
      else {
        result += text[i];
      }
    }
  
    return result;
  }
  