function toggleMenu() {
  document.getElementById("nav-list").classList.toggle("active");
}

const projects = [
  {
    title: "Dopefolio",
    description: "An open-source portfolio project...",
    image: "images/project1.jpg",
    link: "#",
  },
  {
    title: "E-commerce Website",
    description: "A responsive online store...",
    image: "images/project2.jpg",
    link: "#",
  },
];

const projectContainer = document.querySelector(".projects-section");
projects.forEach((proj) => {
  projectContainer.innerHTML += `
      <div class="project">
        <div class="project-image">
          <img src="${proj.image}" alt="${proj.title}" />
        </div>
        <div class="project-details">
          <h3>${proj.title}</h3>
          <p>${proj.description}</p>
          <a href="${proj.link}" class="btn">View Project</a>
        </div>
      </div>
    `;
});

document.querySelector(".chat-btn").addEventListener("click", function () {
  window.location.href = "#contact"; // This could take users to your contact section
});
