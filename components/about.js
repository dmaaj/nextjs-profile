import React from 'react'
import {Button} from 'reactstrap'
class About extends React.Component{

    render(){
        return(
            <section className="jumbotron about">
                <div className="container">
                    <div className="intro">
                        <div>
                            <div className="title">
                                <h1>Muheez Jimoh</h1>
                                <p>(kng_maaj)</p>
                            </div>                            
                            <h2>Software Developer</h2>

                            <p>Hi there! I am a Frontend and Backend developer, based in Lagos, Nigeria. I currently work at Hotels.ng and I freelance, when I am not at work. I love building cool tools,
                                 I enjoy working on challenging tasks. And I love music. </p>
                            <Button className="button"> Hire me</Button>
                        </div>
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default About