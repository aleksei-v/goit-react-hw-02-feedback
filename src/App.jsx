import React, { Component } from "react";
import { Box } from "./components/Box";
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Feedback/Statistics';
import Section from './components/Feedback/Section';
import Notification from './components/Feedback/Notification';

export class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleClick = (evt) => {
        const key = evt.currentTarget.name;
        this.setState(prevState => {
            return {
                [key]: prevState[key] + 1,
            }
        })
    };

    countTotalFeedback = () => Object.values(this.state)
            .reduce((total, amount) => total + amount, 0);
    

    countPositiveFeedbackPercentage = () => Math.round((this.state.good /
        this.countTotalFeedback()) * 100);

    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);

        return (
            <Box p={5}>
                <Section
                    title="Please leave your feedback, it's important for us">
                    <FeedbackOptions options={options} handleClick={this.handleClick} />
                </Section>

                <Section title="Statistics">
                    {this.countTotalFeedback()
                        ? <Statistics
                            good={good} neutral={neutral} bad={bad}
                            total={this.countTotalFeedback(good)}
                            positivePercentage={this.countPositiveFeedbackPercentage()} />
                        : <Notification message="There is no feedback" />
                    }
                </Section>
            </Box>
        );
    }
};