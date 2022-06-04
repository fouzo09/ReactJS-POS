import React from 'react';
import about from '../../assets/images/about.jpg';
import Footer from './Footer';


const Sidebar = ()=>{
    const fullName = 'Mafouz DIALLO';
    const firstPoste = 'Développeur Full stack';
    const secondPoste = 'Ingenieur DevOps';
    const country = 'in Guinea';
    
    return (
        <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
            <div className="text-center">
                <div className="author-img" style={{backgroundImage: "url(" + about + ")"}}></div>
                <h1 id="colorlib-logo"><a href="index.html">{fullName}</a></h1>
                <span className="position">
                    <a href="#">{firstPoste}</a> <br/>
                    <a href="#">{secondPoste}</a> <br/>
                    {country}
                </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
                <div id="navbar" className="collapse">
                    <ul>
                        <li className="active"><a href="#" data-nav-section="home">Accueil</a></li>
                        <li><a href="#" data-nav-section="about">A propos</a></li>
                        <li><a href="#" data-nav-section="skills">Compétences</a></li>
                        <li><a href="#" data-nav-section="education">Education</a></li>
                        <li><a href="#" data-nav-section="experience">Experience</a></li>
                        <li><a href="#" data-nav-section="work">Projets</a></li>
                        <li><a href="#" data-nav-section="contact">Contacts</a></li>                        
                    </ul>
                </div>
            </nav>
            <Footer />
		</aside>
    )
}
export default Sidebar;