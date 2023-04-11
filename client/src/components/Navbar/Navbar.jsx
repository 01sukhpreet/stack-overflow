import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '../../components/Avatar/Avatar';
import './Navbar.css';
//import currentUserReducer from '../../reducers/currentUser';
import { setCurrentUser } from '../../actions/currentUser';
import decode from 'jwt-decode'

const Navbar = () => {
  const dispatch = useDispatch()
  var User = useSelector((state) => (state.currentUserReducer))

  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
          <img src='https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg' className='img' alt='logo'></img>
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Products</Link>
        <Link to='/' className='nav-item nav-btn'>For Terms</Link>
        <form>
          <input type="text" placeholder='search...' />
          <img src='https://cdn-icons-png.flaticon.com/512/3917/3917754.png' width='18' alt='search' className='search-icon'></img>
        </form>
        {User === null ?
          <Link to='/Auth' className='nav-item nav-links'>Log In</Link> :
          <>
            <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color="white"><Link to={`/Users/${User.result._id}`} style={{ color: 'white', textDecoration: 'none' }}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
            <button className='nav-item nav-links' onClick={ handleLogout } >Log Out</button>

          </>
        }

      </div>
    </nav>
  )
}

export default Navbar
