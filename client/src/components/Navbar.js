import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(''); 

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    const toggleLogin = () => {
        setIsLoginOpen(!isLoginOpen);
        setError('');
    };

    const handleLogin = (e) => {
        e.preventDefault();
       
        if (!username || !password) {
            setError('Please fill in both fields.'); 
            return; 
        }
        // Simulate API call for authentication
        console.log('Logging in with:', { username, password });
        setIsAuthenticated(true);
        setIsLoginOpen(false); 
        setUsername(''); 
        setPassword(''); 
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUsername('');
        setPassword('');
    };

    return (
        <div className='navbar'>
            <div>
            <img src="https://www.ktmcty.com/frontend/assets/media/general/logo.webp" alt="" className='logo' />
            </div>

            <div>
            <ul>
                <li><Link to="/">For Him</Link></li> 
                <li><Link to="/forher">For Her</Link></li> 
            </ul>
            </div>

            <div className='s-p'>
            <form onSubmit={handleSearch} className="search-Bar">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search"
                    className="search-input"
                />
                <button type="submit" className="search-button" ><FontAwesomeIcon icon={faMagnifyingGlass} size="1x" /></button> 
               
            </form>

            
            <div className="profile-icon" onClick={toggleLogin}>
                <FontAwesomeIcon icon={faUserCircle} size="2x" />
            </div>

        
            {isLoginOpen && (
                <div className="login-modal-overlay">
                    <div className="login-modal">
                        <button className="close-modal" onClick={toggleLogin}>×</button>
                        <form onSubmit={handleLogin}>
                            <h2>Login</h2>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                required
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                            {error && <div className="error-message">{error}</div>} 
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            )}

            {isAuthenticated && (
                <div className="welcome-message">
                    <p>Welcome, {username}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
            </div>
        </div>
    );
}

export default Navbar;
