const validate = (stuff) => {
  const passwdOneInput = document.querySelector('#passwd1');
  const passwd1 = passwdOneInput.value;
  const passwdTwoInput = document.querySelector('#passwd2');
  const passwd2 = passwdTwoInput.value;

  const isMatching = (passwd1 === passwd2);
  const isLongNuff = Math.min(passwd1.length, passwd2.length, 8) === 8;

  if (isMatching && isLongNuff) alert('Password accepted!')
  else if (!isMatching) alert('The passwords entered don\'t match')
  else if (!isLongNuff) alert('The passwords are not at least 8 characters long');

  // console.log( {isMatching, isLongNuff})
};