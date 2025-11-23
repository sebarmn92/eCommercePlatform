import { Outlet, Link} from 'react-router-dom'
import { useContext } from 'react'
import Logo from '../../assets/crown.svg?react'
import { UserContext } from '../../context/user.context'
import {signOutUser} from  '../../utils/firebase/firebase.utils'
import './navigation.scss'

const Navigation = () =>{
  const {currentUser} = useContext(UserContext)

  const signOutHandler = async () =>{
    const response = await signOutUser()
  }

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span> )
              :(<Link className='nav-link' to='/auth'>
                  SIGN IN
                </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation