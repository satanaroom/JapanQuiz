import React, {Component} from "react";
import s from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answerState: null, // {[id]: 'success' 'error'}
        quiz: [
            {
                question: 'Какой сейчас год?',
                id: 1,
                rightAnswerId: 2,
                answers: [
                    {text: '2022', id: 1},
                    {text: '2021', id: 2},
                    {text: '1994', id: 3},
                    {text: '2078', id: 4}
                ]
            },
            {
                question: 'Какой ты человек?',
                id: 2,
                rightAnswerId: 1,
                answers: [
                    {text: 'обычный', id: 1},
                    {text: 'нормальный', id: 2},
                    {text: 'добрый', id: 3},
                    {text: 'красивый', id: 4}
                ]
            }
        ]
    }
    onAnswerClickHandler = answerId => {
        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finished')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
    }
    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={s.Quiz}>
                <div className={s.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;