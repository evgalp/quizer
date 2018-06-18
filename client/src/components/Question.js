import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getQuestions } from "../actions/questionActions";

import Dot from "./Dot";

class Question extends Component {
  componentDidMount() {
    console.log(`Qustion component props: `, this.props);
  }
  onGet() {
    this.props.getQuestions();
  }
  render() {
    return (
      <section className="container-fluid mt-md-4 mb-md-5 question-container">
        <div className="row ">
          <div className="question-card shadow-md px-0 col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className=" px-4 py-5 text-center">
              What of the following four is not a product of Novarits ? Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo,
              facere quisquam eum ratione repellendus. Enim ducimus
              exercitationem voluptas ex consectetur eius qui quam ratione at
              voluptate, reprehenderit accusantium quasi.
            </div>
            <div className="dots mx-4 d-flex flex-wrap justify-content-center">
              <Dot />
            </div>
            <div className="progress-line mt-4" />
          </div>
        </div>
        <button onClick={this.onGet.bind(this)} className="btn">
          Get
        </button>
      </section>
    );
  }
}

Question.propTypes = {
  questions: PropTypes.array.isRequired,
  getQuestions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  questions: state.questions.questions
});

export default connect(
  mapStateToProps,
  { getQuestions }
)(Question);
