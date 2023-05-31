import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hendleRefreshUser } from 'store/auth/authOperations';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const Home = lazy(() => import('../Pages/Home'));
const Contact = lazy(() => import('../Pages/Contact'));
const New = lazy(() => import('../Pages/New'));
const Auth = lazy(() => import('../Pages/Auth'));

export const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(hendleRefreshUser());
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<PrivateRoute el={<Home />} />} />
                <Route
                    path="auth"
                    element={<PublicRoute el={<Auth />} restricted />}
                />
                <Route path="new" element={<PrivateRoute el={<New />} />} />
                <Route
                    path="contact/:contactId"
                    element={<PrivateRoute el={<Contact />} />}
                />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
