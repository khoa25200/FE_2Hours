import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button(type) {
    return ( 
        <button className={cx(type)}>
            button ne
        </button>
     );
}

export default Button;