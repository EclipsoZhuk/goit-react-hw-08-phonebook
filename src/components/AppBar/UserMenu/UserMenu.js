import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import s from './UserMenu.module.css';
import defaultAvatar from './avatar.png';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    const avatar = defaultAvatar;

    return (
        <div className={s.container}>
            <img src={avatar} alt="avatar" width="32" className={s.avatar} />
            <span className={s.name}>Welcome, {name}</span>
            <button
                type="button"
                onClick={() => dispatch(authOperations.logOut())}
            >
                Log Out
            </button>
        </div>
    );
}
