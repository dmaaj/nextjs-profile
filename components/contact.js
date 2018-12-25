import React from 'react'
import {Button} from 'reactstrap'

class Contact extends React.Component{

    render(){
        return(
            <section id="contact" className="contact">
                <div className="container">
                    <h3>Contact me</h3>

                    <div>
                        <form className="contact-form">
                            <div className="">
                                <label> Full name *</label>
                                <input type="text" name="fullname" />
                            </div>
                            <div>
                                <label> Email*</label>
                                <input type="email" name="email" />
                            </div>
                            <div className="textarea">
                                <textarea name="message" ></textarea>
                            </div>
                            <Button className="button"> Send</Button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}
export default Contact