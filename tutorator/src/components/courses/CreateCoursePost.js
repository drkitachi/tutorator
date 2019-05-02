import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCourse } from '../../store/actions/courseActions'
import { Redirect } from 'react-router-dom'

class CreateCoursePost extends Component {
    state = {
        title: '',
        description: '',
        contact: '',
        rate: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createCourse(this.state);
        this.props.history.push('/');
    
    }
  
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Post</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} /> 
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Post Description</label>
                        <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Contact Info</label>
                        <textarea id="contact" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Hourly Rate</label>
                        <textarea id="rate" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-3 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        createCourse: (course) => dispatch(createCourse(course))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCoursePost)
