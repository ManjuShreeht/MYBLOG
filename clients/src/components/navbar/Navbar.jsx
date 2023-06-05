import React from 'react'

import classes from './navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import womanImg from '../../assets/woman.jpg'
import { useState } from 'react'
import { logout } from '../../redux/authSlice'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  const navigate=useNavigate()
  const dispatch = useDispatch()
  return (
    <div className={classes.container}>
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <Link to='/'>MYBLOG</Link>
      </div>
      <ul className={classes.center}>
        <li className={classes.listItem}>Home</li>
        <li className={classes.listItem}>About</li>
        <li className={classes.listItem}>Contacts</li>
        <li className={classes.listItem}>Categories</li>
      </ul>
      <div className={classes.right}>
        <img src={womanImg} alt="img" onClick={() => setShowModal(prev => !prev)} className={classes.img} />
        {showModal &&
          <div className={classes.modal}>
            <Link to='/create'>Create</Link>
            <span onClick={()=>{dispatch(logout())}}>Logout</span>
            
          </div>
        }
      </div>
    </div>
  </div>
  )
}

export default Navbar