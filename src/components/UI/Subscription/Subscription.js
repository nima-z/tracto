import PrimaryButton from "../PrimaryButton/PrimaryButton"
import styles from "./Subscription.module.css"
export default function Subscription(){
    return <div className={styles.container}>
        <input placeholder="Enter Email Address"/>
        <PrimaryButton>Get Started</PrimaryButton>
    </div>
}