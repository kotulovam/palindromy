console.log('Funguju!');

const textPozpatku = (text) => {
  return text.split('').reverse().join('');
};

// textPozpatku('Ahoj světe') // 'etěvs johA'
// textPozpatku('Kajak') // 'kajaK'

const slova = document.querySelectorAll('li');

slova.forEach((slovo) => {
  const text = slovo.textContent.toLowerCase();
  const textBezMezer = text.replace(/\s/g, '');
  if (textBezMezer === textPozpatku(textBezMezer))
    slovo.classList.add('palindrom');
});
