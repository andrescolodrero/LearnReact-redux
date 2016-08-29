import React, {PropTypes} from 'react';

// pass child component from Roputer
class App extends React.Component {
    render() {
        return (
        <div className="container-fluid">
            <h1> App Header </h1>
            <p> Hello React, Redux and ES6 </p>
            
            {this.props.children}
            
        </div>
        );
    }

}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;