import { useContext } from 'react'
import { FaArrowDown, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import styles from './main.module.css'
import { projects } from '../../utils'
import { ShowMenu } from '../../contexts'

function CTAButton({ label, targetSection }) {
    function handleCTAButtonClick() {
        const section = document.querySelector(`#${targetSection}`)
        section.scrollIntoView({ behavior:'smooth', block:'start' })
    }

    return (
        <a className={ styles['main-link-bio'] } onClick={ handleCTAButtonClick }>
            <FaArrowDown />
           { label }
        </a>
    )
}


function Main() {    
    const { showMenu } = useContext(ShowMenu)
    
    return (
        <main className={ `${styles['main']} ${showMenu ? styles['main--blur'] : ''}` }>
            <section id="home" className={ `main-section ${styles['main-section']} ${styles['main-section-bio']}` }>
                <div className={ styles['main-selfIntroduction'] }>
                    <h3 className={ styles['main-greetings'] }>Hello, there!</h3>
                    <h1 className={ styles['main-myName'] }>My name is Caio</h1>
                    <p className={ styles['main-shortSelfDesciption'] }>
                        I'm a developer who enjoys bringing to code
                        ideas which used to be only ideas.
                    </p>
                </div>
                <CTAButton label="Learn more about me" targetSection="aboutme"/>
            </section>

            <section id="aboutme" className={ `main-section ${styles['main-section']}` }>
                <h2 className={ styles['main-section-title'] }>About me</h2>

                <div className={ styles['main-section-aboutMe'] }>
                    <article>
                        <p>
                            <img className={ styles['main-section-profilePicture--desktop'] } src="profile-pic.png" alt="A white man with blonde hair who's wearing sunglasses and black t-shirt." />
                            Hello, my name is Caio and I am passionate about coding. 
                            Since I began studying Computer Engineering in 2013, I have gained 
                            a deep understanding of the principles and practices of computer science, 
                            including programming, data analysis, and software engineering.
                        </p>

                        <p>
                            While working as an English teacher in 2018, I discovered my enthusiasm 
                            for teaching and have enjoyed helping students improve their language skills 
                            and prepare for their future careers.
                        </p>
                        <p>
                            In 2019, while working as an intern, I discovered a new interest in 
                            web development, which has become a major focus of my work in recent years. 
                            I have taken online courses on websites like Udemy and Alura to deepen 
                            my knowledge and improve my skills. The courses I took involved technologies 
                            like Django, ExpressJS, React, Vue, and Relational Databases.
                        </p>
                        <p>
                            I have worked on a few projects focused on creating engaging and effective 
                            web applications, and I recently participated in a project that taught web development 
                            to young adults. This experience was highly rewarding, and I am excited to continue using 
                            my skills to make a positive impact on the world around me through web development.
                        </p>
                    </article>

                    <img className={ styles['main-section-profilePicture--mobile'] } src="profile-pic.png" alt="A white man with blonde hair who's wearing sunglasses and black t-shirt." />
                </div>

                <CTAButton label="Check out my work" targetSection="projects"/>
            </section>  

            <section id="projects" className={ `main-section ${styles['main-section']}` }>
                <h2 className={ styles['main-section-title'] }>Projects</h2>
                {
                    projects.main.map((project, index) => (
                        <article key={ index } className={ styles['main-project'] }>
                            <img className={ styles['main-project-img'] } src={ project.img } alt="A screenshot of a light themed website" />
                            <div className={ styles['main-project-text'] }>
                                <div className={ styles['main-project-header'] }>
                                    <h3 className={ styles['main-project-title'] }>{ project.title }</h3>
                                    <a className={ styles['main-project-link'] } href={ project.liveLinkURL } target="_blank">
                                        <p style={{ display: "none" }}>Live link</p>
                                        <FaExternalLinkAlt />
                                    </a>
                                    <a className={ styles['main-project-link'] } href={ project.repositoryURL } target="_blank">
                                        <p style={{ display: "none" }}>Github link</p>
                                        <FaGithub />
                                    </a>
                                </div>
                                <div>
                                    <p>{ project.description }</p>
                                    <p>Technologies used: <strong>{ project.technologies }</strong></p>
                                </div>
                            </div>
                        </article>
                    ))
                }

                <div className={ styles['main-section-repoGrid'] }>
                    {
                        projects.other.map((project, index) => (
                            <article key={ index } className={ styles['main-repository'] }>
                                <div className={ styles['main-repository-header'] }>
                                    <h3 className={ styles['main-repository-title'] }>{ project.title }</h3>
                                    {
                                        project.liveLinkURL ? 
                                        <a className={ styles['main-repository-link'] } href={ project.liveLinkURL } target="_blank">
                                            <p style={{ display: "none" }}>Live link</p>
                                            <FaExternalLinkAlt />
                                        </a>
                                        : null
                                    }
                                    <a className={ styles['main-repository-link'] } href={ project.repositoryURL } target="_blank">
                                        <p style={{ display: "none" }}>Github link</p>
                                        <FaGithub />
                                    </a>
                                </div>
                                <div className={ styles['main-repository-body'] }>
                                    <p>{ project.description }</p>
                                    <p>Technologies used: <strong>{ project.technologies }</strong></p>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </section>        
        </main>
    )
}

export default Main
