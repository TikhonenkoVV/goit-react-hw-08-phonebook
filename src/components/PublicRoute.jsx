import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsSignedIn } from 'store/selector';

export const PublicRoute = ({ el, restricted = false }) => {
    const isSignedIn = useSelector(selectIsSignedIn);
    const shouldRedirect = isSignedIn && restricted;

    return shouldRedirect ? <Navigate to={'/'} /> : el;
};
