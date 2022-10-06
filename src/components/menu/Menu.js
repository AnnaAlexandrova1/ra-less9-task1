import { BrowserRouter as Router, Link } from 'react-router-dom';

import './menu.css'

export default function Menu() {
  return(
  <nav class="menu">
  <Link class="menu__item" to="/">Главная</Link>
  <Link class="menu__item" to="/drift">Дрифт-такси</Link>
  <Link class="menu__item" to="/timeattack">Time Attack</Link>
  <Link class="menu__item" to="/forza">Forza Karting</Link>
    </nav>
  )
}