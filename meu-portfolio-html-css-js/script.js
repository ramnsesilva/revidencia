const formulario = document.querySelector('#meu-formulario');

function validarFormulario(event) {
    event.preventDefault(); 

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#msg').value;

    if (nome === "" || email === "" || msg === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset(); 
    }
}

formulario.addEventListener('submit', validarFormulario);

const btnTema = document.querySelector('#btn-tema');
const body = document.body;

btnTema.addEventListener('click', alternarTema);

function alternarTema() {
    body.classList.toggle('dark-theme');
    
    // Altera o texto do botão conforme o tema
    if (body.classList.contains('dark-theme')) {
        btnTema.innerText = "Claro";
    } else {
        btnTema.innerText = "Escuro";
    }
}       
        
              
        const projects = [
            {
                title: "PLATAFORMA REVIDÊNCIA",
                description: "Uma plataforma de desenvolvimento humano.",
                tags: ["Node.js", "MongoDB"],
                link: "https://github.com/ramnsesilva/revidencia"
            },
            
        ];


        function renderProjects() {
            const container = document.getElementById('projects-grid');
            
            projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'project-card';
                
                card.innerHTML = `
                    <div class="project-img">${project.title} </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        <p>${project.description}</p>
                        <a href="${project.link}" class="btn-view">Ver Detalhes</a>
                    </div>
                `;
                
                container.appendChild(card);
            });
        }

        // Executar após o carregamento do DOM
        document.addEventListener('DOMContentLoaded', renderProjects); 


const btnMenu = document.getElementById('btn-menu');
const header = document.querySelector('header');

btnMenu.addEventListener('click', () => {
    header.classList.toggle('active');
});