import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuize/ActiveQuiz'

class Quiz extends Component{

    state = {
        activeQuestion: 0,
        quiz: [
            {   id: 1,
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Зелёный', id: 4}
                ]
            },
            {   id: 2,
                question: 'Сколько пальцев на руке?',
                rightAnswerId: 3,
                answers: [
                    {text: '0', id: 1},
                    {text: '2', id: 2},
                    {text: '5', id: 3},
                    {text: '10', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId =>{
        console.log('Answer ID ', answerId)

        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render(){
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Тест IQ</h1>

                    <ActiveQuiz 
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz