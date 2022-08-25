// Packages
import { Link } from "react-router-dom";

// Assets
import DefaultIcon from "../Assets/default-subject.png";
import TextbookIcon from "../Assets/textbook.png";
import NoteIcon from "../Assets/note.png";
import LectureIcon from "../Assets/lecture.png";
import English from "../Assets/english.png";
import Hindi from "../Assets/hindi.png";
import Science from "../Assets/science.png";
import Mathematics from "../Assets/mathematics.png";
import Economics from "../Assets/economics.png";
import Geography from "../Assets/geography.png";
import History from "../Assets/history.png";
import Chemistry from "../Assets/chemistry.png";
import Python from "../Assets/python.png";
import C from "../Assets/c.png";
import Cpp from "../Assets/c++.png";
import Java from "../Assets/java.png";
import GK from "../Assets/gk.png";
import Class from "../Assets/class.png"
import "./components.css";

const icons = {
    "textbooks": TextbookIcon,
    "notes": NoteIcon,
    "lectures": LectureIcon,
    "english": English, "hindi": Hindi,
    "science": Science, "chemistry": Chemistry,
    "mathematics": Mathematics, "maths": Mathematics,
    "economics": Economics, "geography": Geography, "history": History, 
    "socialscience": History, "socialstudies": Geography,
    "python": Python,
    "cprogramming": C, "c": C,
    "cpp": Cpp, "cplusplus": Cpp,
    "java": Java, "javaprogramming": Java,
    "gk": GK, "generalknowledge": GK
}

const colors = ["#FFDBC2", "#E6FFC2", "#FFC2E5", "#C2C7FF", "antiquewhite"];

const Card = (props) => {

    let icon_path = DefaultIcon;
    if(props.url in icons){
        icon_path = icons[props.url]
    }

    const bg_color = colors[Math.floor((Math.random()*colors.length))];

    if(props.type === "file"){
        return (<div>
            <Link to="/file" state={{type: props.file_type, file_path:props.file_path}}>
            <div className="card" style={{backgroundColor: bg_color}}>
                <div className="file-name">{props.name}</div>
                <div className="subject-icon">
                    <img src={icon_path} alt={props.name} />
            </div>
                 </div>
           </Link>
        </div>)
    }
    else if(props.type === "subjectCard"){
        return (<div>
            <Link to="/login" state={{class_num: props.class_num, subject_url:props.url}}>
            <div className="card" style={{backgroundColor: bg_color}}>
                <div className="file-name">{props.name}</div>
                <div className="subject-icon">
                    <img src={icon_path} alt={props.name} />
            </div>
                 </div>
           </Link>
        </div>)
    }

    else{
        return (<div>
            <Link to={props.url}>
                <div className="card" style={{backgroundColor: bg_color}}>
                    <div className="subject-name">{props.name}</div>
                    <div className="subject-icon">
                        <img src={icon_path} alt={props.name} />
                    </div>
                </div>
            </Link>
        </div>);
    }
}

export default Card;