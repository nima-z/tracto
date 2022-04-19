import PrimaryButton from '../../ui/primary-button/PrimaryButton'
import InfoItems from './infoItems/InfoItems'
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
            <InfoItems/>
            <div className={styles.action}>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
    </section>
  )
}
