import styles from './Header.module.css'
import {Link} from 'react-router-dom'

/*export function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.menu}>
        <li><a href="./">Home</a></li>
        <li><a href="./Mission">Missão</a></li>
        <li><a href="./Produto">Produto</a></li>
        <li><a href="./History">Historia</a></li>
        <li><a href="./Contact">Contato</a></li> 
      </ul>
    </header>
  )
}*/

export function Header() {
  return (
    <header className={styles.header}>
      <img id='imgheader' src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Instituto_Ayrton_Senna_-_Logo_%28cropped%29.png" alt="" />
      
      <ul className={styles.menu}>
        <li><Link to="./">Home</Link></li>
        <li><Link to="./Mission">Missão</Link></li>
        <li><Link to="./Produto">Carros</Link></li>
        <li><Link to="./History">Historia</Link></li>
        <li><Link to="./Contact">Contato</Link></li>
      </ul>
    </header>
  )
}








