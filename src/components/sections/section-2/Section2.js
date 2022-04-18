import PrimaryButton from '../../ui/primary-button/PrimaryButton'
import styles from './Section2.module.css'

export default function Section2() {
  return (
    <section className={styles.container}>
        <div className={styles.top}></div>
        <div className={styles.bottom}>
            <div className={styles.title}>
                <p>Providing Remote Contract Facilitator.</p>
                <p>Still want more?</p>
            </div>
            <div className={styles.icons}>
                <div className={styles.item}>
                    1
                </div>
                <div className={styles.item}>2</div>
                <div className={styles.item}>3</div>
            </div>
            <div className={styles.action}>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
    </section>
  )
}
