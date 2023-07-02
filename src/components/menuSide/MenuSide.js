import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector,useDispatch } from 'react-redux';
import {loginSuccess,logout} from '../../store/slice/userSlice'
const MenuSide = ({user,toggleMenu,menuRef}) => {
    const dispatch = useDispatch(); 
    const handleLogout = ()=>{
        dispatch(logout()); 
    }
  return (
      <div onClick={()=>toggleMenu()} ref={menuRef} className='navbar-menu-show'>
          <ul>
              <li>ABOUT</li>
              <li>CONTACT</li>
              {
                  user ? (
                      <>
                      <Link to="/me">
                            <li>{`hello!,${user.userName}`}</li>
                      </Link>
                     <li onClick={handleLogout}>LOGOUT</li></>) : (
                   <>
                          <Link to="/login"><li>LOGIN</li></Link>
                          <Link to="/register"><li>REGISTER</li></Link>
                      </>
                  )
              }

              <li><Link to="/cart"><ShoppingCartOutlinedIcon /></Link></li>
          </ul>
      </div>
  )
}

export default MenuSide