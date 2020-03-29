
const getValues = (prefix) => ['Red', 'Blue', 'Green']
  .map(color => {
    const value = document.getElementById(`${prefix}${color}`).value;
    console.log(value)

    if ((value / 255) <= 1 && (value / 255) >= 0) return value;
    alert(`Value in ${color} section of ${prefix} is invalid!`);
    return 0;
  });

const changeColor = () => {
  const paragraph = document.getElementById("mainText");
  let [red, green, blue] = getValues('background');
  paragraph.style.backgroundColor = `rgb(${red},${green},${blue})`;
  paragraph.style["border-width"] = document.getElementById("borderWidth").value;

  ([red, green, blue] = getValues('background'));
}