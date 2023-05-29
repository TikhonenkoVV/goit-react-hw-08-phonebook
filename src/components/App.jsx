import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';
import Edit from 'Pages/Edit';

const Home = lazy(() => import('../Pages/Home'));
const Contact = lazy(() => import('../Pages/Contact'));
const New = lazy(() => import('../Pages/New'));

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="new" element={<New />} />
                <Route path="contact/:contactId" element={<Contact />} />
                <Route path="contact/:contactId/edit" element={<Edit />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
