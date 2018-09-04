import React from 'react';
import ReactDOM from 'react-dom';

console.log('hoc is running');

const Info = (props) => {
    return (
        <div>
            <h1>Title</h1>
            <p>info: {props.info}</p>
        </div>
    );
}

const AdminInfoWrapper = (InputComponent) => {
    // return an anonymous HOC component
    return (props) => {
        return (
            <div>
                <p> This is a message only showing to admin!</p>
                <InputComponent {...props}/>
            </div>
        );
    }
}

const AuthenticationInfoHOC = (InputComp) => {
    return (props) => {
        return (
            <div>
                { props.isAuth? 
                    <InputComp {...props} /> : 
                    <p>Please login to check the contents</p> }
                
            </div>
        );
    }
}

const AdminInfo = AdminInfoWrapper(Info);
const AuthInfo = AuthenticationInfoHOC(Info);

//ReactDOM.render(<AdminInfo info='tester'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info='some info here'/>, document.getElementById('app'));