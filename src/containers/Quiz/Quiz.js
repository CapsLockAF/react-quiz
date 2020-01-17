import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuize/ActiveQuiz'

class Quiz extends Component{

    state = {
        activeQuestion: 0,
        answerState: null, //{ [id]: 'sucsess' 'error'}
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

    isQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length
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
                        state={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz