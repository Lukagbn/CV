const profileSlider = document.getElementById("aboutMe");
const diagram = profileSlider.querySelector(".diagram");
const diagramFill = diagram.querySelectorAll(".fill");
const diagramCircle = diagram.querySelectorAll(".circle");
function sliderAnimation(index, width, left) {
  diagramFill[index].style.width = `${width}%`;
  diagramCircle[index].style.left = `${left}%`;
}
// testing slider animation
profileSlider.addEventListener("click", () => {
  sliderAnimation(0, 72, 70);
  sliderAnimation(1, 50, 48);
  sliderAnimation(2, 60, 58);
  sliderAnimation(3, 84, 82);
});
