import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {StatisticItem} from './Statistics.styled'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Box p={5} ml="auto" mr="auto" width="170px">
            <h3>Total feedbacks: {total}</h3>
            <Box as="ul" p={5}>
                <StatisticItem>Good: {good}</StatisticItem>
                <StatisticItem>Neutral: {neutral}</StatisticItem>
                <StatisticItem>Bad: {bad}</StatisticItem>
            </Box>

            <h3>Positive: {positivePercentage}%</h3>
        </Box>);
}

export default Statistics

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}