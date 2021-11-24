import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import s from './LoginView.module.css';

export default function LoginView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <h2 className={s.title}>Log In</h2>
            <div className={s.contactForm}>
                <form
                    onSubmit={handleSubmit}
                    className={s.form}
                    autoComplete="off"
                >
                    <label className={s.label}>
                        Mail
                        <input
                            className={s.formInput}
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Your Email"
                            onChange={handleChange}
                        />
                    </label>

                    <label className={s.label}>
                        Password
                        <input
                            className={s.formInput}
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            placeholder="Your Password"
                        />
                    </label>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}
