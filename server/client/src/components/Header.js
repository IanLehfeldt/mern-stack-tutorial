import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    // Switch case which handles how the header looks when logged in/logged out
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">
                            Login with Google
                        </a>
                    </li>
                );
            default:
                return (
                    <li>
                        <a href="/api/logout">
                            Log Out
                        </a>
                    </li>
                );
        }
    }
	render() {
        //console.log(this.props);
		return (
			<nav>
				<div className="nav-wrapper">
                    <Link 
                    to={this.props.auth ? '/surveys' : '/'} 
                    className="left brand-logo"
                    >
                    Email-ee
                    </Link>
					<ul className="right">
                        {this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({auth}) {
    return { auth };
}

export default connect(mapStateToProps)(Header);