import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return(
            <div>
                <h1>This is Index Page!</h1>
                <ul role="nav">
                    <li><Link to="/signin">sign in</Link></li>
                    <li><Link to="/signup">sign up</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})