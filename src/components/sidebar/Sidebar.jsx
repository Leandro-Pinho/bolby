import React, { useState } from 'react'
import "./sidebar.css"
import Logo from '../../assets/logo.svg'

const Sidebar = () => {
    const [active, setActive] = useState(1);
    const [toggle, showMenu] = useState(false)

    const toggleTab = (index) => {
        setActive(index)
    }

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <a href="#home" className='nav__logo'>
                    <img src={Logo} alt="" />
                </a>

                <nav className='nav'>
                    <div className="nav__menu">
                        <div className="nav__list">
                            <ul>
                                <li className="nav__item">
                                    <a href="#home" className={active === 1 ? 'nav__link active' : 'nav__link'} onClick={() => toggleTab(1)}>
                                        <i className="icon-home"></i>
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="#about" className={active === 2 ? 'nav__link active' : 'nav__link'} onClick={() => toggleTab(2)}>
                                        <i className="icon-user-following"></i>
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="#services" className={active === 3 ? 'nav__link active' : 'nav__link'} onClick={() => toggleTab(3)}>
                                        <i className="icon-briefcase"></i>
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="#resume" className={active === 4 ? 'nav__link active' : 'nav__link'} onClick={() => toggleTab(4)}>
                                        <i className="icon-graduation"></i>
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="#portfolio" className={active === 5 ? 'nav__link active' : 'nav__link'} onClick={() => toggleTab(5)}>
                                        <i className="icon-layers"></i>
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="#blog" className={active === 6 ? 'nav__link active' : 'nav__link'} onClick={() => toggleTab(6)}>
                                        <i className="icon-note"></i>
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a href="#contact" className={active === 7 ? 'nav__link active' : 'nav__link'} onClick={() => toggleTab(7)}>
                                        <i className="icon-bubble"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="nav__footer">
                    <span className="copyright">&copy; 2023 - 2024.</span>
                </div>
            </aside>

            <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
                <i className="icon-menu"></i>
            </div>
        </>
    )
}

export default Sidebar
