// Components
import Navbar from "../Components/Navbar";
import ClassInfo from "../Components/ClassInfo";
import Card from "../Components/Card";
import { useLocation } from "react-router-dom";
import "./pages.css";

const Home = (props) => {

    return (<>

        <Navbar 
            logo_path={props.logo_path}
            school_name={props.school_name}
            dropdownTitle="Subjects"
            dropdownData={props.subjects}
        />

        <ClassInfo 
            class={props.class_num}
            teacher={props.teacher}
        />

        <div className="cards-container">
            {props.subjects &&

            props.subjects.map(
                subject => {
                    return <Card 
                                key={subject.url}
                                name={subject.name}
                                url={subject.url}
                                type="subjectCard"
                                class_num={props.class_num}
                            />
                }
            )
            }
        </div>
    </>);
}

export default Home;