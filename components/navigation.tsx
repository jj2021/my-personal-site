import Link from 'next/link'
import navStyle from '../styles/navigation.module.css'
// make the navigation bar like a text editor
// files in different tabs
// decorative menu items (File, Edit, minimize, maximize, exit, etc.)
export default function Navigation() {
  return(
    <div className={`${navStyle.navigation}`}>
      <div className={`${navStyle.container} ${navStyle.flex}`}>
        <h1>JJDev</h1>
        <nav>
          <ul className={navStyle.linksList}>
            <li><Link href='/'><a>About Me</a></Link></li>
            <li><Link href='/experience'><a>My Experience</a></Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}