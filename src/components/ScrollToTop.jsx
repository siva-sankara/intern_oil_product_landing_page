import { useEffect } from 'react';
import { useLocation , useNavigate} from 'react-router-dom';

function ScrollToTop() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        navigate(location.pathname);

    }, [location, navigate]);

    return null;
}

export default ScrollToTop;