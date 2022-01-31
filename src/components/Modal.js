import styles from './Modal.module.scss'

export const Modal = ({ handleToggle, children, animate }) => {

    return (
        <div className={styles.modal}>
            <div className={styles.inner}>
            {children}
            <button type="button" onClick={handleToggle}>
                X
            </button>
            </div>
        </div>
    );
}