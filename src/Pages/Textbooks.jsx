// Packages
import { useState, useEffect } from "react";

// Components
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import ClassInfo from "../Components/ClassInfo";

const Textbooks = (props) => {

    const [textbooks, setTextbooks] = useState({});

    useEffect(() => {
        fetch("/json/textbooks.json")
        .then(res => res.json())
        .then(json => setTextbooks(json));
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

        {textbooks && textbooks[props.url] &&
        <div className="subject-container">
            <span className="subject-title">{props.name}</span>

            <div className="cards-container">
                {textbooks[props.url].map(
                    book => {
                        return <Card 
                                    name={book.title}
                                    url="textbooks"
                                    type="file"
                                    file_type="pdf"
                                    file_path={book.path}
                                />
                    }
                )}
            </div>
        </div>
        }
    </>)
}

export default Textbooks;