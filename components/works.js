import React from 'react'
import {Card, CardBody, CardImg, Button} from 'reactstrap'
class Works extends React.Component{

    render(){
        return(
            <section id="works" className="works">
                <div className="container">
                    <h3>My Works</h3>
                    <p>Explore beautiful and creative designs made by me</p>

                    <div className="works-card">
                        <Card className="work">
                            <CardImg src="../static/img/Mask.png"></CardImg>
                            <CardBody>
                                ExpenseTrim
                            </CardBody>
                        </Card>
                        <Card className="work">
                            <CardImg src="../static/img/Mask.png"></CardImg>
                            <CardBody>
                                ExpenseTrim
                            </CardBody>
                        </Card>
                        <Card className="work">
                            <CardImg src="../static/img/Mask.png"></CardImg>
                            <CardBody>
                                ExpenseTrim
                            </CardBody>
                        </Card>
                        <Card className="work">
                            <CardImg src="../static/img/Mask.png"></CardImg>
                            <CardBody>
                                ExpenseTrim
                            </CardBody>
                        </Card>
                        <Card className="work">
                            <CardImg src="../static/img/Mask.png"></CardImg>
                            <CardBody>
                                ExpenseTrim
                            </CardBody>
                        </Card>
                        <Card className="work">
                            <CardImg src="../static/img/Mask.png"></CardImg>
                            <CardBody>
                                ExpenseTrim
                            </CardBody>
                        </Card>
                    </div>

                    <Button className="button"> See More</Button>
                </div>
            </section>
        );
    }
}
export default Works