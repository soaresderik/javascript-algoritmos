function encrypt(str, amount) {
  if (amount < 0) return encrypt(str, amount + 26);

  let output = "";

  for (let i = 0; i < str.length; i++) {
    // Caractere da Interação
    let c = str[i];

    if (c.match(/[a-z]/i)) {
      // Código do caractere
      let code = str.charCodeAt(i);

      // Letras Maiúsculas
      if (code >= 65 && code <= 90)
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      // Letras Minúsculas
      else if (code >= 97 && code <= 122)
        c = String.fromCharCode(code - 97 + amount + 97);
    }

    output += c;
  }

  return output;
}

function decrypt(str, amount) {
  amount = (26 - amount) % 26;
  return encrypt(str, amount);
}

console.log(encrypt("zebrax", 3));
console.log(decrypt("Andre", 3));

de;
