import React, {Component} from 'react';
import s from './QuizList.module.css';
import {NavLink} from "react-router-dom";
import axios from "axios";

class QuizList extends Component {
    renderQuizes() {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <li
                    key={index}
                >
                    <NavLink to={'/quiz/' + quiz}>
                        Тест {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    componentDidMount() {
        axios.get('https://japan-quiz-dfd6a-default-rtdb.asia-southeast1.firebasedatabase.app/quiz.json').then(
            response => console.log(response)
        )
    }

    render() {
        return (
            <div className={s.QuizList }>
                <div>
                    <h1>Список тестов</h1>

                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default QuizList;

