import UiVideo from '../UI/UiVideo/UiVideo';
import styles from './ErrorMessage.module.css'
import video from '../ErrorMessage/Video/han-solo.mp4'

const ErrorMessage = () => {
    return (
        <div>
            <p className={styles.text}>
                The dark side of the force has won.<br />
                We cannot display data.<br />
                Come back when we fix everything
            </p>

            <UiVideo src={video} classes={styles.video} playbackRate={1}/ >
        </div>
    );
};

export default ErrorMessage;