import styles from './Card.module.css'

function Card() {
    return (
        <section className={styles.card}>
            <div className={styles.linha}></div>
            <h2>GRUPO ?</h2>
            <ul>
                <li>
                    <img src="/bandeiras/bra.png" alt="Brasil" />
                    Brasil
                </li>
            </ul>
        </section>
    )

}

export default Card