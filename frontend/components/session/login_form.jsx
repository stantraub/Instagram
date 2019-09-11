import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }
    render() {
        return (
            <div className="parent-div">
                <div className="iphone-image">
                    <img width="320px height=600px" src="https://library.kissclipart.com/20180830/ffw/kissclipart-android-phone-png-clipart-iphone-clip-art-af395bce23124e2d.png"/>
                    <div className="signup-form">
                        <form className="signup-form-inner">
                            <h1 className="logo">Disneygram</h1>
                            <h2 className="signup-header">
                                Log in to see photos and videos from your friends.
                            </h2>
                            <div>
                                <input
                                    placeholder="Username"
                                    className="signup-input"
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleInput('username')}
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Password"
                                    className="signup-input"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInput('password')}
                                />
                            </div>
                            <div>
                                <button className="session-button" onClick={this.handleSubmit}>Log in</button>
                            </div>
                            <div>
                                <button className="session-button" >Demo Login</button>
                            </div>
                        </form>
                    
                        <div className="switch-session">
                            Don't have an account? <Link to="/signup" style={{ textDecoration: 'none' }} >Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SessionForm;