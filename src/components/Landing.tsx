import {Link,useNavigate} from "react-router-dom"

export default function Landing() {
  const delayed = useNavigate()
  return (
    
    <div className="landing-home">
    <div className="intro-home">
        <div>So, you want to travel to</div>
        <div>SPACE</div>
        <div>Let’s face it; if you want to go to space, you might as well genuinely go to 
        outer space and not hover kind of on the edge of it. Well sit back, and relax 
        because we’ll give you a truly out of this world experience!
        </div>
    </div>
    
    <Link  to="/destination/moon"  onClick={e=>{
    
    e.preventDefault()
    
    setTimeout(() => {
      delayed("/destination/moon")
  }, 500);
}}>
<div className="explore-home">Explore</div> </Link>
    </div>
    


  )
}
