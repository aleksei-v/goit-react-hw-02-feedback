import PropTypes from 'prop-types';
import { Box } from "../../Box";
import { Button } from './FeedbackOptions.styled';


const FeedbackOptions = ({ options, handleClick }) => {
    
    return (
    <Box as="ul" display="flex" justifyContent="center" gridGap={4} mt={5} mb={5}>
            {options.map((option, id) => {
            return(
        <li key={id}>
            <Button
                type="button"
                name={option}
                onClick={(key) => handleClick(key)}
            >
                {option}
            </Button>
        </li>)
        })}
            </Box>

    )
}

export default FeedbackOptions;


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleClick: PropTypes.func.isRequired,
}