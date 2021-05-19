import React from "react";
import s from './ActiveQuiz.module.css';
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => (
    <div className={s.ActiveQuiz}>
        <p className={s.Question}>
                <span>
                    <strong>
                        {props.answerNumber}.
                    </strong>&nbsp;
                    {props.question}
                </span>
            <small>
                {props.answerNumber} из {props.quizLength}
            </small>
        </p>
        <AnswersList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            state={props.state}
        />
    </div>
)

export default ActiveQuiz;