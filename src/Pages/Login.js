import '../Assets/CSS/Pages/Login.css';
import Logo from '../Assets/Images/logo.png';
import Button from '@mui/material/Button';


export default function Login() {
    return (
        <div className="Login">
            <div className="Group">
                <div className="Logo">
                    <img src={Logo} />
                </div>
                <div className="Title">
                    <h1>WELCOME TO</h1>
                    <h2>BeDating</h2>
                </div>
                <div className="ButtonLogin">
                    <Button variant="contained">LOGIN</Button>
                </div>
            </div>
        </div>
    );
}