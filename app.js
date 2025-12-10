const profileSlider = document.getElementById("aboutMe");
const diagram = profileSlider.querySelector(".diagram");
const diagramFill = diagram.querySelectorAll(".fill");
const diagramCircle = diagram.querySelectorAll(".circle");

function sliderAnimation(index, width, left) {
  diagramFill[index].style.width = `${width}%`;
  diagramCircle[index].style.left = `${left}%`;
}
// animating sliders
const options = {
  root: null,
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      sliderAnimation(0, 72, 70);
      sliderAnimation(1, 50, 48);
      sliderAnimation(2, 60, 58);
      sliderAnimation(3, 84, 82);
      observer.unobserve(entry.target);
    }
    return;
  });
}, options);
observer.observe(profileSlider);
