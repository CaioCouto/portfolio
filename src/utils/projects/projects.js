const mainProjects = [
    {
        title:"IP Address Tracker",
        description: "A React application where users enters an IPv4 address and is presented with information about it in a user-friendly interface. The application uses the axios module to make a request to the IPFY API. The tool can be used for various purposes, such as verifying website location or remote server location, and is designed to be easy to use and navigate.",
        technologies: "ReactJs.",
        img:"ip-tracker.png",
        liveLinkURL: "https://ip-tracker-frontend-mentor-beta.vercel.app/",
        repositoryURL: "https://github.com/CaioCouto/ip-tracker-frontend-mentor",
    },
    {
        title:"Habit Tracker",
        description: "This app tracks the frequency of 5 habits and saves the data on LocalStorage. The stored data is easily accessible, helping users track their progress and identify areas for improvement.",
        technologies: "HTML, CSS, Javascript.",
        img:"habit-tracker.png",
        liveLinkURL: "https://habit-tracker-bice.vercel.app/",
        repositoryURL: "https://github.com/CaioCouto/habit-tracker",
    },
]

const otherProjects = [
    {
        title:"LaBrincante",
        description: "A full stack application that includes a database to manage student information and course offerings, with features to enroll/drop students. The user interface is intuitive for easy access to information by administrators and instructors, improving overall efficiency and learning experience.",
        technologies: "ExpressJs, MySQL, ReactJs.",
        liveLinkURL: "",
        repositoryURL: "https://github.com/CaioCouto/la-brincante",
    },
    {
        title:"Calculadora",
        description: 'This calculator app solves simple math operations with either the "equal" or second operation key. It offers three different themes for users to choose from, and the selected theme is stored for their next use. This user-friendly app simplifies calculations and allows for customization based on personal preferences.',
        technologies: "HTML, CSS (SASS), Javascript.",
        liveLinkURL: "https://calculator-frontend-mentor-ivory.vercel.app/",
        repositoryURL: "https://github.com/CaioCouto/calculator-frontend-mentor",
    },
    {
        title:"Multistep Form",
        description: "A signature registration form with four different parts allows users to navigate through sections to input their information. The form ensures that the entered data is valid and prompts users to select a plan and add-ons, if applicable. This user-friendly form simplifies the registration process and ensures that all necessary information is captured accurately.",
        technologies: "HTML, CSS, Javascript.",
        liveLinkURL: "https://multi-step-form-frontend-mentor.vercel.app/",
        repositoryURL: "https://github.com/CaioCouto/multi-step-form-frontend-mentor",
    },
]

export default { main: mainProjects, other: otherProjects}