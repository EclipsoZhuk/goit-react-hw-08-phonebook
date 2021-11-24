import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authOperations } from 'redux/auth';
import s from './RegisterView.module.css';

export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                break;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        setEmail('');
        setName('');
        setPassword('');
    };

    return (
        <>
            <h2 className={s.title}>Sign Up</h2>
            <div className={s.contactForm}>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <label className={s.label}>
                        Login
                        <input
                            className={s.formInput}
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Your Full Name"
                            onChange={handleChange}
                        />
                    </label>

                    <label className={s.label}>
                        Email
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
                            placeholder="Your Password"
                            onChange={handleChange}
                        />
                    </label>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}
