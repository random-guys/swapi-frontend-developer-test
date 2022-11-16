import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <h1>My name is Chioma</h1>
        );
    }
}

export default connect(state => state)(App);
