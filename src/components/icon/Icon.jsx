import PropTypes from 'prop-types';
import { Icon } from './Icon.styled';

export const Svg = ({ w, h, use }) => {
    return (
        <Icon width={w} height={h}>
            <use href={use} />
        </Icon>
    );
};

Svg.propTypes = {
    w: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired,
    use: PropTypes.string.isRequired,
};
