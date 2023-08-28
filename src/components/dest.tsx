import moon from "../assets/destination/image-moon.png"
import mars from "../assets/destination/image-mars.png"
import titan from "../assets/destination/image-titan.png"
import europa from "../assets/destination/image-europa.png"
import { NavLink, Routes,Route,useNavigate ,useLocation } from 'react-router-dom';
import Moon from "./Moon";
import Europa from "./Europa";
import Titan from "./Titan";
import Mars from "./Mars";
import { useRef } from "react";


export default function Dest() {
  const maindiv = useRef<HTMLDivElement>(null)
  const navigator = useNavigate()
  const path =useLocation()
  
  const naving = (e: React.MouseEvent<HTMLAnchorElement>,link:string) => {
  e.preventDefault(); 
  if(link !== path.pathname) {
    maindiv.current ? maindiv.current.classList.add("hidden"):"";
  setTimeout(()=>navigator(link),500) 
  }
  
  }
  return (<>
  <div className="pick-dest" ><span>0 1 </span>Pick your destination</div>
  <div className="" onLoad={()=>{ 
    setTimeout(() => {
      maindiv.current ? maindiv.current.classList.remove("hidden"):"";
    }, 1000); 
  
  }}>
  
  <div className="landing-dest hidden"  ref={maindiv} >
    
    <Routes>
        <Route path="moon"  element={<img className="planet" src={moon} />}/>
        <Route path="mars"  element={<img className="planet" src={mars} />}/>
        <Route path="titan"  element={<img className="planet" src={titan} />}/>
        <Route path="europa" element={<img className="planet" src={europa} />} />
        <Route path="*" element={<img className="planet" src={europa} />} />
    </Routes>
    <div className="switch-dest">
      <ul>
      <li><NavLink onClick={(e)=>naving(e,"/destination/moon")} to={{ pathname: "/destination/moon", }}>Moon</NavLink></li>
            <li><NavLink onClick={(e)=>naving(e,"/destination/mars")} to={{ pathname: "/destination/mars" } }>Mars</NavLink></li>
            <li><NavLink  onClick={(e)=>naving(e,"/destination/europa")} to={{ pathname: "/destination/europa",}}>Europa</NavLink></li>
            <li><NavLink  onClick={(e)=>naving(e,"/destination/titan")} to={{ pathname: "/destination/titan", }}>Titan</NavLink></li>
        
    </ul>
    <Routes>
        <Route path="moon" element={<Moon/>}/>
        <Route path="mars" element={<Mars/>}/>
        <Route path="titan" element={<Titan/>}/>
        <Route path="europa" element={<Europa/>}/>
        <Route path="*" element={<p>Page not Available</p>}/>
    </Routes>
    </div>
  </div>
</div>

</>
  )
}
