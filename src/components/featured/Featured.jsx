import "./featured.scss";
import {PlayArrow, InfoOutlined} from "@material-ui/icons";
import logo from "../../Assests/matrixLogo.jpg";

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="catagory">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img
            style={{backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',height:'100%',marginTop:0}}
            src={logo}
            alt=""
        />
        <div className="info">
            <img
                src="https://www.seekpng.com/png/full/210-2107842_the-matrix-logo-matrix-movie-logo-png.png"
                alt=""
            />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis 
                quidem dolore consectetur eveniet quo similique necessitatibus? 
                Nulla at libero distinctio iusto vero nemo quis veritatis? Corporis, 
                exercitationem. Doloribus, exercitationem omnis.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
