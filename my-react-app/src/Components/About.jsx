import '../Components/About.css'
import React from 'react'
import TedBunny from "../assets/TedBunny.jpg";

export const About = () => {
    return (
        <div className="aboutContainer">
            <h1>FBI MOST WANTED</h1>
               <div>
                <img src={TedBunny} alt="Ted Bunny" />
                </div>
                <div className="aboutDescription">
                    <h2>THEODORE ROBERTY BUNDY</h2>
                    <h3>AGE: 34</h3>
                    <h3>EMAIL: nics_commandcenter@ic.fbi.gov.</h3>
                    <h3>Height, 5'11" to 6'; Weight, 145 to 175 pounds; 
                        Build, slim, athletic; Hair, dark brown, neck length; Eyes, blue: Complexion, pale/sallow, Race, white; Nationality, 
                        American; Occupations, bellboy, busboy, kitchen boy, dishwasher, janitor, law student, office worker, political campaign worker, 
                        psychiatric social worker, salesman, security guard; Scars and marks, mole on neck, scar on leather haired; 
                        Observant, occasionally stutters when angry, has worn glasses, 
                        fake mustache, and beard as a disguise in the past; left-handed; can imitate British accent; supposedly a music enthusiast physical 
                        fitness and health.    
                    </h3>
                    </div> 
        </div>
    )
}

export default About;
