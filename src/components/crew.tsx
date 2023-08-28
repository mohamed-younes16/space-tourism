import { NavLink, Routes,Route,  useNavigate  } from 'react-router-dom';
import doglas from "../assets/crew/image-douglas-hurley.png"
import special from "../assets/crew/image-mark-shuttleworth.png"
import pilot from "../assets/crew/image-victor-glover.png"
import Commader from './commader';
import Specialit from './Specialit';
import Pilot from './pilot';
import {useRef} from "react"



export default function Crew() {
  const navigator = useNavigate()
  const maindiv = useRef<HTMLDivElement>(null)

  const naving = (e:React.MouseEvent<HTMLAnchorElement>,link:string) => {
  e.preventDefault(); 
  maindiv.current ? maindiv.current.classList.add("hidden"):"";
  setTimeout(()=>navigator(link),400) 
  }
  return (
    <>

  <div className="pick-dest">
    <span>0 2 </span> Meet your crew
  </div>
  <div className="landing-dest  hidden"  ref={maindiv} onLoad={()=>{ 
    setTimeout(() => {
      maindiv.current ? maindiv.current.classList.remove("hidden"):"";
    }, 1000); 
  
  }}>
    <div className="crew-info">
      <Routes>
        <Route path='commander' Component={Commader}/>
        <Route path='specialist' Component={Specialit}/>
        <Route path='pilot' Component={Pilot}/>
        
      </Routes>
      <ul className="crew-switch">
        <li><NavLink  onClick={(e)=>naving(e,"/crew/commander")} to= {{pathname:"/crew/commander"}} ></NavLink></li>
        <li><NavLink onClick={(e)=>naving(e,"/crew/pilot")} to= {{pathname:"/crew/pilot"}} ></NavLink></li>
        <li><NavLink  onClick={(e)=>naving(e,"/crew/specialist")} to= {{pathname:"/crew/specialist"}} ></NavLink></li>
  
      </ul>
    </div>
    <Routes>
    <Route path='commander' element={<img src={doglas}  className="crew-img" />} /> 
    <Route path='specialist' element={<img src={special}  className="crew-img" />} /> 
    <Route path='pilot' element={<img src={pilot}  className="crew-img" />} /> 
    
    </Routes>
    
  </div>


  
    </>
  )
}
