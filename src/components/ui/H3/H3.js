import styles from "./H3.module.css"
export default function H3({children}){
    return <h3 className={styles.h3}>{children}</h3>
}