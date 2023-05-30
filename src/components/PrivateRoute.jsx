import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsSignedIn } from 'store/selector';

export const PrivateRoute = ({ element }) => {
    const isSignedIn = useSelector(selectIsSignedIn);

    return isSignedIn ? element : <Navigate to={'auth'} />;
};
