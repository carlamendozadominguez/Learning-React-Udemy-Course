import React, {Component} from 'react'


class Login extends Component {
    render(){
        return(
            <div>
                <button>Iniciar sesión</button>
            </div>
        );
    }
}

class Logout extends Component {
    render(){
        return(
            <div>
                <p>Bienvenido usuario</p>
                <button>Cerrar sesión</button>
            </div>
        );
    }
}

export default class ConditionalSection extends Component {
    state = { isUserLogged: false}
    render(){
        return(
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.isUserLogged ? <Login/> : <Logout />}
            </div>
        );
    }
}