import React, {Component} from "react";
import { login } from "../../services/userWs";
import { Link } from 'react-router-dom';

export default class AuthContainer extends Component {
    // State === minibase de datos para la clase e hijos en caso de que se los herede 
    state = {
        data: {

        }
    }

    /* Esta función sirve para escuchar todo lo que estemos tecleando y poder guardarlo en data (está en el state)(para puros inputs), gracias a esto no tenemos que escribir el código comentado de abajo*/
    // handleChangeEmail = (event) =>{
    //     const { value } = event.target
    //     let { data } = this.state

    //     data["email"] = value

    //     this.setState({ data })
    // }

    // handleChangePassword = (event) => {
    //     const { value } = event.target
    //     let { data } = this.state

    //     data["password"] = value

    //     this.setState({ data })
    // }
    handleChange = (event) => {
        // {ke:value} - el key es el name
        const { value, name } = event.target;
        let { data } = this.state

        data [name] =value

        // estructura para guardar en el state
        this.setState({ data })
    }

    // Esta función envia la info a la base de datos y validar, esto va en el form 
    onSubmit = (event) => {
        event.preventDefault()
        console.log("Voy a enviar datos")
        // Conectamos back con front (es una promesa)
        login(this.state.data)
        .then((response)=>{
            // Si todo sale bien mostramos un mensaje y lo mandamos a la sig sección
            this.setState({ data:{} })
            console.log("Felicidades", response)
        })
        .catch((error)=>{
            console.log("Hay un error", error.response)
        })
    }
    
    render(){
        //  Aquí podemos declarar const var y let
        const { handleChange, onSubmit } =this; 
        const { data } = this.state;

        return(
            <section className="uk-section">
                <div className="uk-container uk-flex uk-flex-center">
                    <div className="uk-width-1-4">
                        <h3>Bienveido </h3>
                        <form
                        // método = (()=>onSubmit(event))
                         onSubmit = { onSubmit }
                         className="uk-width-1-1 uk-form-stacked uk-flex uk-flex-center uk-flex-column"
                        >
                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                                    <input 
                                    className="uk-input"
                                    type="email"
                                    name="email"
                                    onChange = {handleChange}
                                    placeholder="E-mail"
                                    required
                                    value = {data["email"] ? data["email"]: ""}
                                    />
                                </div>
                            </div>

                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                                    <input 
                                    className="uk-input"
                                    type="password" //password
                                    required
                                    name="password"
                                    placeholder="Password"
                                    onChange = { handleChange }
                                    value = {data["password"] ? data["password"]: ""}

                                    />
                                </div>
                            </div>
                            <div className="uk-text-meta">
                                ¿Aún no tienes cuenta? {""}
                                <Link className="uk-text-primary" to="/signup">
                                    Create una cuenta Morr@
                                </Link>
                            </div>
                            <button className="uk-button uk-button-primary">
                                Entrar
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}