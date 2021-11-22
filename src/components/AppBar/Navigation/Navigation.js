import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
    <nav>
        <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
            Home
        </NavLink>

        <NavLink
            to="/contacts"
            exact
            className={s.link}
            activeClassName={s.activeLink}
        >
            Contacts
        </NavLink>
    </nav>
);

export default Navigation;
