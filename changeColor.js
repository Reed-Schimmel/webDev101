const getValues = (prefix) => ['Red', 'Blue', 'Green']
  .map(color => {
    const value = document.getElementById(`${prefix}${color}`).value;
    console.log(value)

    if (value < 256 && value >= 0) return value;
    alert(`Value in ${color} section of ${prefix} is invalid!`);
    return 0;
  });

const changeColor = () => {
  const paragraph = document.getElementById("mainText");
  
  // Border styling
  let [red, green, blue] = getValues('border');
  paragraph.style = `
  border-style: solid;
  border-width: ${document.getElementById("borderWidth").value};
  border-color: rgb(${red},${green},${blue});
  `;
  
  // Background styling
  ([red, green, blue] = getValues('background'));
  paragraph.style.backgroundColor = `rgb(${red},${green},${blue})`;

}