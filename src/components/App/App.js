import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router';
import { phonebookSelector } from '../../redux/phoneBook';
import { authOperations } from '../../redux/auth';
import Container from '../Container';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import s from './App.module.css';
import RegisterView from '../../views/RegisterView';
import LoginView from '../../views/LoginView';
import AppBar from '../AppBar';
import HomeView from '../../views/HomeView';

export default function App() {
    const loading = useSelector(phonebookSelector.getLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]);

    return (
        <>
            <AppBar />
            <Container>
                <Switch>
                    <Route path="/" exact component={HomeView} />
                    <Route path="/register" component={RegisterView} />
                    <Route path="/login" component={LoginView} />
                    <Route path="/contacts">
                        <h1 className={s.title}>Phonebook</h1>
                        <ContactForm />
                        <h2 className={s.contactTitle}>Contacts</h2>
                        <Filter />
                        {loading && (
                            <h1 className={s.contactTitle}>Loading...</h1>
                        )}
                        <ContactList />
                    </Route>
                </Switch>
            </Container>
        </>
    );
}
