import styles from "./BurgerIcon.module.css"
import cn from "classnames"

export const BurgerIcon = () => {
  return (
    <div className={styles.burger}>
      <span className={cn(styles.line, styles.one)}></span>
      <span className={cn(styles.line, styles.two)}></span>
      <span className={cn(styles.line, styles.three)}></span>
      <span className={cn(styles.line, styles.four)}></span>
    </div>
  )
}