import styles from './Card.module.scss'
import { MdFavorite } from "react-icons/md";

export const Card = ({content, showPreview, preview}) => {

    if(!content){
        return false
    }
    
    const moreinfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return(
        <div className={`${styles.card} ${preview ? styles.inpreview : ''}`}>
            <div className={styles.image}>
                <span className={styles.time}>10:00</span>
                <img src={content.img} alt="" />
            </div>
            <div className={styles.info}>
                <h4 data-id={content.char_id} className={styles.title} onClick={showPreview}>{content.name}</h4>
                <div className={styles.likes}>
                    <span className={styles.count}>{content.char_id}</span> 
                    <MdFavorite />
                </div>
            </div>
            {preview && <div className={styles.desc}><p>{moreinfo}</p></div>}
        </div>
    )
};
