import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import s from './AppBar.module.css';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <header className={s.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}
