import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

/**
 * 
 * @param {*} param0 
 * @returns componente de botão para link
 */
function LinkButton({ to, text }){
    return(
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default LinkButton