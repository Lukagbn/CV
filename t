btnContainer.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnValue = btn.value;

    fetch("./myProjects.json")
      .then(res => res.json())
      .then(result => {
        t.innerHTML = result
          .map(
            (el) =>
              `<p class="test" data-group="${el.projectGroup}">
                ${el.projectName}
              </p>`
          )
          .join("");

        const paragraphs = t.querySelectorAll("p");

        paragraphs.forEach(p => {
          if (p.dataset.group === btnValue) {
            console.log(true); // ✅ MATCH FOUND
          }
        });
      });

    btnContainer.forEach(b => b.removeAttribute("active"));
    btn.setAttribute("active", "");
  });
});
