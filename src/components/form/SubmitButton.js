import styles from './SubmitButton.module.css'
/**
 * 
 * @param {*} param0 
 * @returns Componente de SubmitButton
 */
function SubmitButton({ text }){
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitButton