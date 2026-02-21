const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");



let index = 1; // começa no primeiro slide real
let slideWidth = slides[0].clientWidth;



/* CLONAR PRIMEIRO E ÚLTIMO SLIDE */


const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

slider.appendChild(firstClone);
slider.insertBefore(lastClone, slides[0]);

const allSlides = document.querySelectorAll(".slide");

/* POSICIONA NO PRIMEIRO REAL */
slider.style.transform = `translateX(-${slideWidth * index}px)`;


/* CRIA DOTS AUTOMATICAMENTE */


slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    index = i + 1; // +1 por causa do clone inicial
    moveSlide();
    updateDots();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

/* ============================= */
/* FUNÇÕES */
/* ============================= */

function moveSlide() {
  slider.style.transition = "transform 0.6s ease";
  slider.style.transform = `translateX(-${slideWidth * index}px)`;
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove("active"));

  let realIndex = index - 1;

  if (realIndex < 0) realIndex = slides.length - 1;
  if (realIndex >= slides.length) realIndex = 0;

  dots[realIndex].classList.add("active");
}

/* ============================= */
/* BOTÕES */
/* ============================= */

next.addEventListener("click", () => {
  if (index >= allSlides.length - 1) return;
  index++;
  moveSlide();
  updateDots();
});

prev.addEventListener("click", () => {
  if (index <= 0) return;
  index--;
  moveSlide();
  updateDots();
});

/* ============================= */
/* RESET INVISÍVEL (loop real) */
/* ============================= */

slider.addEventListener("transitionend", () => {
  if (allSlides[index] === firstClone) {
    slider.style.transition = "none";
    index = 1;
    slider.style.transform = `translateX(-${slideWidth * index}px)`;
  }

  if (allSlides[index] === lastClone) {
    slider.style.transition = "none";
    index = slides.length;
    slider.style.transform = `translateX(-${slideWidth * index}px)`;
  }
});

/* ============================= */
/* AUTOPLAY */
/* ============================= */

setInterval(() => {
  index++;
  moveSlide();
  updateDots();
}, 14000);

/* ============================= */
/* RESPONSIVO (corrige largura) */
/* ============================= */

window.addEventListener("resize", () => {
  slideWidth = slides[0].clientWidth;
  slider.style.transition = "none";
  slider.style.transform = `translateX(-${slideWidth * index}px)`;
});


/* ============================= */
/* ASIDE */
/* ============================= */

/* ============================= */
/* ASIDE - SCROLL INFINITO */
/* ============================= */

const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".scroll-container");

const mainTop = document.querySelector(".main-top");
const footer = document.querySelector(".footer");


let position = 2;       // começa visível
let speed = 0.2;         // velocidade constante
let isPaused = false;

function animateScroll() {

  if (!isPaused) {

    position -= speed;
    container.style.transform = `translateY(${position}px)`;

    const firstItem = container.firstElementChild;
    const firstItemHeight = firstItem.offsetHeight;

    // Quando o primeiro item sair completamente
    if (Math.abs(position) >= firstItemHeight) {
      container.appendChild(firstItem);
      position += firstItemHeight;
    }
  }

  requestAnimationFrame(animateScroll);
}

// Pausa no hover
sidebar.addEventListener("mouseenter", () => {
  isPaused = true;
});

sidebar.addEventListener("mouseleave", () => {
  isPaused = false;
});

animateScroll();

// MENU MOBILA ANIMAÇÃO
const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');

        menuToggle.addEventListener('click', () => {
            // Alterna a animação do ícone hambúrguer
            menuToggle.classList.toggle('active');
            // Alterna a visibilidade do menu
            mobileMenu.classList.toggle('open');
        });

        // Fechar menu ao clicar num link (opcional)
        const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('open');
            });
        });

