import styles from "./H2.module.css"
export default function H2({children}){
    return <h2 className={styles.h2}>
        {children}
    </h2>
}