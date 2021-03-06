import React, {Component} from 'react';
import {Button} from 'antd';
import logo from 'X_assets/svg/logo.svg';
import 'X_assets/css/App.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from 'X_reduxs/actions';

class App extends Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        this.props.action.actionsTodo();
        this.props.action.fetchLogin();
    }

    render() {
        console.log(this)
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <Button type="primary">Button2</Button>
                </p>
            </div>
        );
    }
}

//export default App;
function mapStateToProps(state, props) {
    return {
        // message: state.loginReducer.message,
        // loading: state.loginReducer.loading,
        // isLogined: state.loginReducer.isLogined,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);