import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import {signOut } from '../../store/actions/authActions'

const SignedInLink = (props) => {
    return (
        <ul className="left hide-on-med-and-down">
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>
            { props.profile.initials }
            </NavLink></li>
            <li><NavLink to='/create'>New Course</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            
        </ul>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}



export default connect(null, mapDispatchToProps)(SignedInLink);
