import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import CourseDetails from './components/courses/CourseDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateCoursePost from './components/courses/CreateCoursePost';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className= "App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/courses/:id' component={CourseDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateCoursePost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
