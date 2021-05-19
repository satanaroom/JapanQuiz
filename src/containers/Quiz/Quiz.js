import React, {Component} from "react";
import s from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'Какой сейчас год?',
                rightAnswerId: 2,
                answers: [
                    {text: '2022', id: 1},
                    {text: '2021', id: 2},
                    {text: '1994', id: 3},
                    {text: '2078', id: 4}
                ]
            }
        ]
    }
    onAnswerClickHandler = answerId => {
        console.log('Answer id: ', answerId)
    }

    render() {
        return (
            <div className={s.Quiz}>
                <div className={s.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[0].answers}
                        question={this.state.quiz[0].question}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;