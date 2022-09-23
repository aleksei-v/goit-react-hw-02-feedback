import PropTypes from 'prop-types';
import { StyledTitle } from './Section.styled';

const Section = ({ title, children }) => (
    <section>
        <StyledTitle> {title} </StyledTitle>
        {children}
    </section>);

export default Section;


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}