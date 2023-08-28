import {NavLink, useLocation} from "react-router-dom"

export default function Header() {
const location = useLocation() 

    return (
    <header className="head-home"> <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48}>
        <g fill="none" fillRule="evenodd"><circle cx={24} cy={24} r={24} fill="#FFF" />
        <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g>
    </svg>
    <ul className="header-NavLinks">
    <li><NavLink  to="/"><b>01</b>Home</NavLink></li>
    <li><NavLink  to="/destination/moon" className={`${location.pathname.includes("/destination")?"active":""}`} ><b>01</b> Destination</NavLink></li>
    <li><NavLink    to="/crew/commander"  className={`${location.pathname.includes("/crew")?"active":""}`}  ><b>01</b> Crew</NavLink></li>
    <li><NavLink  to="/tech"  className={`${location.pathname.includes("/tech")?"active":""}`}  ><b>01</b> Technology</NavLink></li>

    </ul>
    <div className="menu"><i className="fa-solid fa-bars" /></div>
</header>
)

}
