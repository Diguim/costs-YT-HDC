import styles from './Container.module.css'

function Container(props){
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children} 
            {/* direciona onde o conteúdo que está abrigado embaixo do componente será exibido*/}
        
        
        </div>
    )
}

export default Container