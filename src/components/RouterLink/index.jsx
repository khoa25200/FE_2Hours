import classNames from 'classnames/bind';
import styles from './RouterLink.module.scss';
import { useDevice } from 'react-use-device';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function RouterLink() {
    const { isMOBILE } = useDevice();
    const links = ['FEATURES', 'PRICING', 'SERVICES', 'PARTNERS'];
    return isMOBILE ? (
        <></>
    ) : (
        <div className={cx('link_items')}>
            {links.map((link, index) => {
                return (
                    <div className={cx('link_item')} key={index}>
                        {link}
                        <div className={cx('underlink')}></div>
                    </div>
                );
            })}
        </div>
    );
}

export default RouterLink;
