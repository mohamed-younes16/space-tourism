import { NavLink, Routes,Route  } from 'react-router-dom';
export default function Tech() {
    return (
    <><div className="pick-dest">
    <span>0 3 </span>Space launch 101</div>
    <div className="landing-dest tech-box">
        <Routes>
            <Route path='*'  element={<div className="vehicle launch"/>} />
            <Route path='spaceport' element={<div className="vehicle port"/>} />
            <Route path='capsule' element={<div className="vehicle capsule"/>} />
        </Routes>
    

    <div className="tech-switch">
        <ul>
        <li><NavLink to={{pathname:"/tech/vehicle"}}>1</NavLink></li>
        <li><NavLink to={{pathname:"/tech/spaceport"}}>2</NavLink></li>
        <li><NavLink to={{pathname:"/tech/capsule"}}>3</NavLink></li>
        </ul>
        <div className="tech-info">
        <p>The terminology...</p>
        <Routes>
            
            <Route path='*' element={<>
                    <div>
                    <div className="crew-name">Launch vehicle</div>
                    <div className="desc"> A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                        payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                        WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                        it's quite an awe-inspiring sight on the launch pad!</div></div></>} />
            <Route path='spaceport' element={<>
                <div>
                <div className="crew-name">Spaceport</div>
                <div className="desc">A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                    by analogy to the seaport for ships or airport for aircraft. Based in the 
                    famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                    of the Earth’s rotation for launch.</div>
                </div>

            </>} />
            <Route path='capsule' element={<>
                <div>
                <div className="crew-name">Space capsule</div>
                <div className="desc">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                    capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                    you'll spend your time during the flight. It includes a space gym, cinema, 
                    and plenty of other activities to keep you entertained.</div>
                </div>

            </>} />
        </Routes>
        </div>
    </div>
    </div>

    </>
)
}
