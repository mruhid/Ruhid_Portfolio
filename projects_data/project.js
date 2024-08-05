const projects = [
    {
        "name": "Touring_App",
        "description": "This program has everything you can do on a tour site. For example, to view and buy tour prices in any country.",
        "image": "./image/touringApp.png",
        "languages": ["HTML", "JavaScript", "Sass", "Daisy.ui", "Json-Server"],
        "github": "https://github.com/mruhid/Touring_App",
        "link": "https://mruhid.github.io/Touring_App/"
    },
    {
        "name": "Todo App ",
        "description": "With this program, you can work as a Note program for yourself. This Todo program was prepared using the Next.Js library and used the Typescript programming language. You can view the program through the link below.",
        "image": "../image/TodoApp.png",
        "languages": ["TypeScript", "Next.js", "Tailwind css", "CSS"],
        "github": "https://github.com/mruhid/Todo_App",
        "link": "https://todo-app-tau-lyart.vercel.app/"
    },
    {
        "name": "Store App",
        "description": "StoreApp is a powerful and easy-to-use application designed to help you manage your store efficiently. The preparation of the application is not over yet and continues.",
        "image": "./image/storeApp.png",
        "languages": ["React.Js", "JavaScript", "Vite.js", "CSS", "Redux"],
        "github": "https://github.com/mruhid/StoreApp",
        "link": "https://mruhid.github.io/StoreApp/"
    },
    {
        "name": "WeatherApp",
        "description": "A simple weather app that allows users to check the current weather conditions.",
        "image": "https://raw.githubusercontent.com/mruhid/WeatherApp/main/screenshots/Screenshot1.png",
        "languages": ["React.Js", "JavaScript", "Vite.js", "CSS", "Redux", "Routing"],
        "github": "https://github.com/mruhid/WeatherApp",
        "link": "https://github.com/mruhid/WeatherApp/blob/main/README.md"
    },
    {
        "name": "Rent-A-Car_App",
        "description": "Here you can visually see everything you need to rent a car.",
        "image": "./image/Rent-a-car.png",
        "languages": ["Html", "JavaScript", "Saas", "CSS"],
        "github": "https://github.com/mruhid/Rent-A-Car_App/",
        "link": "https://mruhid.github.io/Rent-A-Car_App/"
    },
    {
        "name": "Paint_App",
        "description": "In this program, you can draw as much as you want in the paint program. To check, click on the link below.",
        "image": "./image/paıntApp.png",
        "languages": ["Html", "JavaScript", "Saas", "CSS"],
        "github": "https://github.com/mruhid/Paint_App",
        "link": "https://mruhid.github.io/Paint_App/"
    },

]
const projectsContainer = document.getElementById('projects');

projects.forEach(project => {
    // Create project element
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    // Add project information
    projectDiv.innerHTML = `
        <div class="information">
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <div class="project_img">
                <img src="${project.image}" alt="${project.name}">
            </div>
            <div class="list">
                <h3>Programming languages ​​used in the project:</h3>
                <ul class="technology">
                    ${project.languages.map(language => `<li>${language}</li>`).join('')}
                </ul>
            </div>
            <div class="link">
                <div class="github"><a href="${project.github}" target="_blank"><i class="fa-brands fa-github"></i> Github</a></div>
                <div class="webLink"><a href="${project.link}" target="_blank">If you want to see the project, click here!</a></div>
            </div>
        </div>
    `;

    // Append project to the container
    projectsContainer.appendChild(projectDiv);
});

// responsive mobile menu

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navmenu');
menu.onclick = () => {
    menu.classList.toggle("fa-xmark")
    navbar.classList.toggle("show")
}
window.onscroll = () => {
    menu.classList.remove("fa-xmark")
    navbar.classList.remove("show")
}

