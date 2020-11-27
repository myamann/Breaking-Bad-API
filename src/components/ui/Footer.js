import React from 'react'
import classes from './Footer.module.css'




export const Footer = () => {
    return (

        <footer className={classes.container}>
            <div >
                <ul className={classes.ul}>
                    <li className={classes.li}>  <a href="https://github.com/myamann"><i class="fab fa-github fa-lg"></i></a>  </li>
                    <li className={classes.li}>  <a href="https://www.linkedin.com/in/mehmet-yaman-05b7a1167/"><i class="fab fa-linkedin fa-lg"></i></a>  </li>
                    <li className={classes.li}>  <a href="https://www.instagram.com/mmehmetyamann/"> <i class="fab fa-instagram fa-lg"></i></a>   </li>
                </ul>
            </div>

            <div className={classes.copyright}>
                <p>❮ <a href="https://mehmetyaman.netlify.app/">Mehmet Yaman</a> 2020 ❯</p>
            </div>




        </footer>

    )
}

export default Footer;