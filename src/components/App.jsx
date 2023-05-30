import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy, useEffect } from 'react';
import Edit from 'Pages/Edit';
import { useDispatch } from 'react-redux';
import { hendleRefreshUser } from 'store/auth/authOperations';
import { PrivateRoute } from './PrivateRoute';

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
                <Route index element={<PrivateRoute element={<Home />} />} />
                <Route path="auth" element={<Auth />} />
                <Route
                    path="new"
                    element={<PrivateRoute element={<New />} />}
                />
                <Route
                    path="contact/:contactId"
                    element={<PrivateRoute element={<Contact />} />}
                />
                <Route
                    path="contact/:contactId/edit"
                    element={<PrivateRoute element={<Edit />} />}
                />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
