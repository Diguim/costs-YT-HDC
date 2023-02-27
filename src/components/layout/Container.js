import styles from './Container.module.css'
/**
 * 
 * @param {*} props 
 * @returns Componente de container para exibição de algo em container
 */
function Container(props){
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children} 
            {/* direciona onde o conteúdo que está abrigado embaixo do componente será exibido*/}
        
        
        </div>
    )
}

export default Container