import React, { Component } from 'react';
import { Button, Alert, Fade } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../components/header'
import '../static/scss/app.scss'
import About from '../components/about'
import Works from '../components/works'
import Footer from '../components/footer'
import Articles from '../components/articles'
import Contact from '../components/contact'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class Home extends Component {

    state = {
        currentIndex: 1,
        total: 4,
    }

    componentDidMount = () =>{
            let timer =   setInterval(this.onContinue, 9000)
            setTimeout(() => { clearInterval(timer); }, 37000);
    }

    onContinue = () => {
        if(this.state.currentIndex < this.state.total){
            this.setState(state => ({
                currentIndex: state.currentIndex + 1,
            }))
        }
        else if(this.state.currentIndex == 4){
            this.setState(state => ({
                currentIndex:  state.currentIndex - 3,
            }))
        }
        
    }
    onGoBack = () => {
        if(this.state.currentIndex > 1){
            this.setState(state => ({
                currentIndex: state.currentIndex - 1,
            }))
        }
        
    }
    work = () =>{
        this.setState(state => ({
            currentIndex: 2,
        }))
    }

    article = () =>{
        this.setState(state => ({
            currentIndex: 3,
        }))
    }
    about = () =>{
        this.setState(state => ({
            currentIndex: 1,
        }))
    }
    contact = () =>{
        this.setState(state => ({
            currentIndex: 4,
        }))
    }
    render() {
        let {currentIndex} = this.state;
        return (
            <div>
                <Header work={this.work} contact={this.contact} about={this.about} article={this.article} {...this.state}/>
                {currentIndex === 1 && <Fade><About className="transition"/> </Fade>}
                {currentIndex === 2 && <Fade><Works className="transition"/> </Fade>}
                {currentIndex === 3 && <Fade><Articles className="transition"/> </Fade>}
                {currentIndex === 4 && <Fade><Contact className="transition"/> </Fade>}
                <section className="container">
                    <Button className="prev" onClick={this.onGoBack}> &#60;</Button>
                    <Button className="next" onClick={this.onContinue}> &#62;</Button>
                </section>
                <Footer/>
            </div>

        );
    }
}

export default Home;
