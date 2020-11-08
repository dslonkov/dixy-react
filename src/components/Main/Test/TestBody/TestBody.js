import React, { Component } from 'react'
import ActiveQuestion from '../ActiveQuestion/ActiveQuestion'
import TestResult from './TestResult'


class TestBody extends Component {
  state = {
    isFinished: false,
    firstQuestion: 0,
    questions: [
      {
        question: "список покупок - это...",
        id: 1,
        answers: [
          { text: "Список чего? У меня всё есть.", id: 1 },
          {
            text:
              "Кандалы, которые сковывают порывы моей души. Надо покупать сердцем, а не списком.",
            id: 2,
          },
          {
            text:
              "Огонёк маяка, который ведёт меня сквозь гастрономический шторм.",
            id: 3,
          },
        ],
      },
      {
        question: "пользуешься ли ты скидочными купонами?",
        id: 2,
        answers: [
          { text: "Конечно! А еще промокодами и дисконтными картами!", id: 1 },
          {
            text:
              "Зачем платить больше, когда можно тоже самое купить со скидкой",
            id: 2,
          },
          {
            text:
              "Слишком много суеты: нужно их где то найти, потом не забыть обменять...",
            id: 3,
          },
        ],
      },
      {
        question: "Если ты видишь товары по акции, то...",
        id: 3,
        answers: [
          {
            text:
              "Искра, буря, безумие - набиваю полную корзину и бегу скорее на кассу.",
            id: 1,
          },
          {
            text: "Если это есть в моём списке, то, конечно, куплю!",
            id: 2,
          },
          {
            text: "Пройду мимо, потому что вчера уже купил без скидки.",
            id: 3,
          },
        ],
      },
      {
        question:
          "если бы ты мог описать песней свой фуд-шоппинг в <<дикси>> (ну или еще где то), то это было бы:",
        id: 4,
        answers: [
          { text: "<<Мы с тобой не пара, не пара>>", id: 1 },
          {
            text: "<<Я люблю тебя до слёз>>",
            id: 2,
          },
          {
            text: "<<May be yes, may be no>>",
            id: 3,
          },
        ],
      },
      {
        question:
          "тебе советуют что то приобрести. Чьему мнению ты доверишься?",
        id: 5,
        answers: [
          { text: "Я волк-одиночка в этом плане. Решаю сам.", id: 1 },
          {
            text: "У меня свою эксперты, мнению которых я доверяю",
            id: 2,
          },
          {
            text: "<<Гугл>> или <<Яндекс>> Камон, они знают всё!",
            id: 3,
          },
        ],
      },
    ],
  };

  onButtonClickHandler = () => {

    if (this.isQuizFinished()) {
      this.setState({
        isFinished: true
      })
    } else {
      this.setState({
      firstQuestion: this.state.firstQuestion + 1
    })
    }
  }

  isQuizFinished() {
    return this.state.firstQuestion + 1 === this.state.questions.length
  }
  

  render() {
    return (
      <div>
        {this.state.isFinished ? (
          <TestResult />
        ) : (
          <ActiveQuestion
            answers={this.state.questions[this.state.firstQuestion].answers}
            question={this.state.questions[this.state.firstQuestion].question}
            questionLength={this.state.questions.length}
            questionNumber={this.state.firstQuestion + 1}
            onButtonClick={this.onButtonClickHandler}
          />
        )}
      </div>
    );
  }
}

export default TestBody