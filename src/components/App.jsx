import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hendleRefreshUser } from 'store/auth/authOperations';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const Home = lazy(() => import('../Pages/Home'));
const Contacts = lazy(() => import('../Pages/Contacts'));
const Auth = lazy(() => import('../Pages/Auth'));

export const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(hendleRefreshUser());
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<PublicRoute el={<Home />} />} />
                <Route
                    path="auth"
                    element={<PublicRoute el={<Auth />} restricted />}
                />
                <Route
                    path="contacts"
                    element={<PrivateRoute el={<Contacts />} />}
                />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
