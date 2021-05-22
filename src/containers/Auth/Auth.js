import React, {Component} from 'react';
import s from './Auth.module.css';
import Button from "../../components/UI/Button/Button";

class Auth extends Component {
    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault()
    }

    render() {
        return (
            <div className={s.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form
                        onSubmit={this.submitHandler}
                        className={s.AuthForm}
                    >
                        <input/>
                        <input/>
                        <Button
                            type={'success'}
                            onClick={this.loginHandler}
                        >
                            Войти
                        </Button>
                        <Button
                            type={'primary'}
                            onClick={this.registerHandler}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Auth;