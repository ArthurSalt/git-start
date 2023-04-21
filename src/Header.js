import './Header.css'

function Header() {
   return (
      <div>
         <ul className="header">
            <li><a href="/">HOME</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contacts">Contacts</a></li>
         </ul>
      </div>
   )
}

export default Header;