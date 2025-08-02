'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalDate = document.querySelector("[data-modal-date]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalDate.innerHTML = this.querySelector("[data-testimonials-date]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

document.addEventListener('DOMContentLoaded', function() {
  const projectModalContainer = document.querySelector('[data-project-modal-container]');
  const projectOverlay = document.querySelector('[data-project-overlay]');
  const projectModalCloseBtn = document.querySelector('[data-project-modal-close-btn]');
  const projectModalTriggers = document.querySelectorAll('[data-project-modal]');
  
  // Project data
  const projectData = {
    photon: {
      title: "Photon: Social Photo Cloud",
      category: "Full-Stack Development",
      image: "./assets/images/project-1.png",
      techStack: [
        "Java Spring Boot 3", "Angular", "PostgreSQL", "JWT Authentication",
        "AWS S3", "CloudFront", "Docker", "AWS ECS", "Github Actions (CI/CD)"
      ],
      description: "A full-stack social photo cloud platform that enables users to manage and share their photo collections seamlessly. Built with enterprise-grade technologies and deployed on AWS with cost-optimized serverless architecture.",
      tasks: [
        "Full-stack photo management and sharing platform",
        "Stateless JWT-based authentication via Spring Security 6", 
        "RESTful APIs using Spring Data JPA and Hibernate",
        "Angular reactive forms and SPA architecture",
        "Global CDN deployment with custom domain",
        "Containerized deployment with high availability",
        "Cost-optimized serverless scheduling system"
      ],
      links: {
        type: "full-stack",
        frontend: { url: "https://github.com/fayezshahid/photon_frontend_angular", label: "Frontend Repo", icon: "logo-angular" },
        backend: { url: "https://github.com/fayezshahid/photon_backend_spring_boot", label: "Backend Repo", icon: "server-outline" },
        live: { url: "https://photonapp.dev", label: "Live App", icon: "globe-outline" }
      }
    },
    "dockerized-react": {
      title: "Dockerized React Application",
      category: "Web Development",
      image: "./assets/images/project-3.png",
      techStack: [
        "MERN Stack", "Docker", "Azure Container Registry", "Azure App Services",
        "Terraform", "Azure DevOps", "Jest", "Chai", "CI/CD"
      ],
      description: "A MERN application with user authentication, containerized using Docker, and deployed via Azure Container Registry to Azure App Services. Implemented infrastructure as code with Terraform and CI/CD pipelines with comprehensive testing.",
      tasks: [
        "MERN application with user authentication",
        "Containerized using Docker for consistent deployments",
        "Azure Container Registry and App Services deployment",
        "Infrastructure provisioning with Terraform",
        "Azure DevOps with Scrum methodology",
        "Unit testing with Jest (frontend) and Chai (backend)",
        "CI/CD pipelines for automated testing and deployment"
      ],
      links: {
        type: "single",
        repo: { url: "https://github.com/fayezshahid/dockerized_cloud_app", label: "View Repository", icon: "logo-github" }
      }
    },
    "autoencoders": {
      title: "Face Recognition Autoencoders",
      category: "Machine Learning",
      image: "./assets/images/project-8.png",
      techStack: [
        "Python", "TensorFlow", "Keras", "PyTorch", "OpenCV",
        "Scikit-learn", "NumPy", "Matplotlib", "t-SNE"
      ],
      description: "A comprehensive implementation and evaluation of three autoencoder architectures for face recognition: Convolutional Autoencoder (CAE), Variational Autoencoder (VAE), and Adversarial Autoencoder (AAE) with detailed performance analysis.",
      tasks: [
        "Three autoencoder architectures: CAE, VAE, and AAE",
        "Custom data generator with train/test split",
        "Batch training with validation monitoring",
        "Early stopping and model checkpointing",
        "Comprehensive clustering performance evaluation",
        "t-SNE visualization of learned embeddings",
        "Multiple clustering algorithms comparison"
      ],
      links: {
        type: "single",
        repo: { url: "https://github.com/fayezshahid/autoencoders", label: "View Repository", icon: "logo-github" }
      }
    },
    "criccom-ai": {
      title: "CricCom: AI-Powered Cricket Commentary",
      category: "Machine Learning",
      image: "./assets/images/project-7.png",
      techStack: [
        "Python", "PyTorch", "Keras", "YOLO", "OpenCV",
        "CNN", "Computer Vision", "NLP", "Real-time Processing"
      ],
      description: "An AI system leveraging Convolutional Neural Networks and YOLO for real-time object detection to analyze cricket video frames, track player movements, and generate contextually accurate cricket commentary automatically.",
      tasks: [
        "CNN-based video frame analysis using PyTorch and Keras",
        "YOLO integration for real-time object detection",
        "Player movement and action tracking",
        "Key match element identification",
        "Real-time contextually accurate commentary generation",
        "Computer vision for sports analytics"
      ],
      links: {
        type: "repo-paper",
        repo: { url: "https://github.com/fayezshahid/fyp2", label: "View Repository", icon: "logo-github" },
        paper: { url: "https://docs.google.com/document/d/1nk4VZHaf1suLrKx2rUMod7IoSFthoJyKhpKbcTsNxeA/edit?tab=t.0", label: "Research Paper", icon: "document-text-outline" }
      }
    }
  };
  
  // Open modal function
  function openProjectModal(projectKey) {
    const project = projectData[projectKey];
    if (!project) return;
    
    // Update modal content
    document.querySelector('[data-project-modal-title]').textContent = project.title;
    document.querySelector('[data-project-modal-category]').textContent = project.category;
    document.querySelector('[data-project-modal-img]').src = project.image;
    document.querySelector('[data-project-modal-description] p').textContent = project.description;
    
    // Update tech stack
    const techStackList = document.querySelector('.tech-stack-list');
    techStackList.innerHTML = project.techStack.map(tech => 
      `<li><span class="tech-tag">${tech}</span></li>`
    ).join('');
    
    // Update tasks list
    const tasksList = document.querySelector('[data-project-modal-tasks]');
    tasksList.innerHTML = project.tasks.map(task => `<li>${task}</li>`).join('');
    
    // Handle dynamic action buttons based on link type
    const actionsContainer = document.querySelector('.project-modal-actions');
    let buttonsHTML = '';
    
    switch(project.links.type) {
      case 'full-stack':
        buttonsHTML = `
          <a href="${project.links.frontend.url}" target="_blank" class="project-modal-btn frontend-btn">
            <ion-icon name="${project.links.frontend.icon}"></ion-icon>
            <span>${project.links.frontend.label}</span>
          </a>
          <a href="${project.links.backend.url}" target="_blank" class="project-modal-btn backend-btn">
            <ion-icon name="${project.links.backend.icon}"></ion-icon>
            <span>${project.links.backend.label}</span>
          </a>
          <a href="${project.links.live.url}" target="_blank" class="project-modal-btn live-btn">
            <ion-icon name="${project.links.live.icon}"></ion-icon>
            <span>${project.links.live.label}</span>
          </a>
        `;
        break;
      case 'single':
        buttonsHTML = `
          <a href="${project.links.repo.url}" target="_blank" class="project-modal-btn single-repo-btn">
            <ion-icon name="${project.links.repo.icon}"></ion-icon>
            <span>${project.links.repo.label}</span>
          </a>
        `;
        break;
      case 'repo-paper':
        buttonsHTML = `
          <a href="${project.links.repo.url}" target="_blank" class="project-modal-btn repo-btn">
            <ion-icon name="${project.links.repo.icon}"></ion-icon>
            <span>${project.links.repo.label}</span>
          </a>
          <a href="${project.links.paper.url}" target="_blank" class="project-modal-btn paper-btn">
            <ion-icon name="${project.links.paper.icon}"></ion-icon>
            <span>${project.links.paper.label}</span>
          </a>
        `;
        break;
    }
    
    actionsContainer.innerHTML = buttonsHTML;
    
    // Show modal
    projectModalContainer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  // Close modal function  
  function closeProjectModal() {
    projectModalContainer.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  
  // Event listeners
  projectModalTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      const projectKey = this.dataset.project;
      openProjectModal(projectKey);
    });
  });
  
  projectModalCloseBtn.addEventListener('click', closeProjectModal);
  projectOverlay.addEventListener('click', closeProjectModal);
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && projectModalContainer.classList.contains('active')) {
      closeProjectModal();
    }
  });
});