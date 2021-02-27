import Link from 'next/link'
import Image from 'next/image'
import navStyle from '../styles/navigation.module.css'
// make the navigation bar like a text editor
// files in different tabs
// decorative menu items (File, Edit, minimize, maximize, exit, etc.)
export default function Navigation() {
  return(
    <div className={`${navStyle.navigation}`}>
      <div className={`${navStyle.container} ${navStyle.flex}`}>
        <Image
          src='/JJDev-logo.png'
          alt='JJDev logo'
          width={80}
          height={80}
        />
        <nav>
          <ul className={navStyle.linksList}>
            <li><Link href='/'><a>About</a></Link></li>
            <li><Link href='/experience'><a>Experience</a></Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}