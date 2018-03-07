import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import SignInForm from './SignInForm';
import Greeting from '../components/greeting';
import Nav from './Nav';

import styles from './homepage.css';

import { KEY as HOMEPAGE_KEY } from '../constants/homepage_constants';

class Homepage extends Component {
    render () {
        const { greeting } = this.props;
        return (
            <div className={styles.homepage}>
                <Nav />
                {
                    // <Header /> - Welcome to the HVCC online student aid portal
                    // <HVCC Icon />
                }
                { this.props.children }
                <SignInForm />
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    //@formatter:off
    const {
        [HOMEPAGE_KEY]: {
        greeting
        }
    } = state;
    //@formatter:on
    return {
        greeting,
    };
};

export default connect(mapStateToProps)(Homepage);
