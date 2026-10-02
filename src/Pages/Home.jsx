import React from 'react'
import Header from './Components/Header';
import Banner from './Components/Banner';
import About from './Components/About';
import Skill from './Components/Skill';
import Certification from './Components/Certification';
import Recommendation from './Components/Recommendation';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function Home() {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Certification></Certification>
            <Recommendation></Recommendation>
            <Contact></Contact>
            <Footer></Footer>
        </div>

    )
}

export default Home