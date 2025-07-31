import { useNavigate } from 'react-router-dom';

function MyButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    };

    return (
        <button onClick={handleClick}>Zum Dashboard</button>
    );
}

export default MyButton;