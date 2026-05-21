import styles from './Card.module.css'

const Card = (props) => {
    return (
        <>
        <div className={styles.Card}>
            <h3 className={styles.card_title}>{props.title}</h3>
            <p className={styles.card_description}>{props.description}</p>
            <p className={styles.card_advice}>{props.advice}</p>
            <button className={styles.card_button}>
                <p className={styles.card_label}>{props.button_title}</p>
            </button>
        </div>
        </>
    )
}

export default Card