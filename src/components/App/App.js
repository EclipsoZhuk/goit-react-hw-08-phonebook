import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { phonebookSelector } from 'redux/phoneBook';
import { authOperations } from '../../redux/auth';
import Container from '../Container';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import AppBar from '../AppBar';
import HomeView from 'views/HomeView';
import ContactsView from 'views/ContactsView';

export default function App() {
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
                    <Route path="/contacts" component={ContactsView} />
                </Switch>
            </Container>
        </>
    );
}
