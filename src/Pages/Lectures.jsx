// Packages
import { useState, useEffect } from "react";

// Components
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import ClassInfo from "../Components/ClassInfo";

const Lectures = (props) => {

    const [lectures, setLectures] = useState({});

    useEffect(() => {
        fetch("/json/lectures.json")
        .then(res => res.json())
        .then(json => setLectures(json));
    }, []);

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

        {lectures && lectures[props.url] &&
        <div className="subject-container">
            <span className="subject-title">{props.name}</span>

            <div className="cards-container">
                {lectures[props.url].map(
                    lecture => {
                        return <Card 
                                    name={lecture.title}
                                    url="lectures"
                                    type="file"
                                    file_type="media"
                                    file_path={lecture.path}
                                />
                    }
                )}
            </div>
        </div>
        }
    </>)
}

export default Lectures;