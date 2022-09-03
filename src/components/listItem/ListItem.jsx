import "./listItem.scss"
import {PlayArrow, ThumbUpAltOutlined ,ThumbDownOutlined, Add, Navigation} from "@material-ui/icons";
import { useState } from "react";
import Trailer from "../../Assests/trailer.mp4";
import logo from "../../Assests/bigHero.jpg";
import { useNavigate } from "react-router-dom";

export default function ListItem({index}) {
  let navigation = useNavigate();

  const handleClick = (e) =>{
    e.preventDefault();
    navigation("/watch")
  }

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="listItem" 
    style={{left: isHovered && index*225 - 50 + index*2.5}}
    onMouseEnter={()=>{setIsHovered(true)}}
    onMouseLeave={()=>setIsHovered(false)}
    
    >
      <img
        src={logo}
        alt=""
      />
      {isHovered && (
      <>
        <video src={Trailer} autoPlay={true} loop />    
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon" onClick={(e)=>handleClick(e)}/>
            <Add className="icon"/>
            <ThumbUpAltOutlined className="icon"/>
            <ThumbDownOutlined className="icon"/>
          </div>
          <div>
            <div className="itemInfoTop">
              <span>1 hour and 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Eligendi illo voluptas, nam esse laboriosam dolor 
              minima 
            </div>
            <div className="genre">Action</div>
          </div>
        </div></>
      )}
    </div>
  )
}
