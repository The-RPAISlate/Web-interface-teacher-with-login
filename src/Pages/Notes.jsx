// Packages
import { useState, useEffect } from "react";

// Components
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import ClassInfo from "../Components/ClassInfo";

const Notes = (props) => {

    const [notes, setNotes] = useState({});

    useEffect(() => {
        fetch("/json/notes.json")
        .then(res => res.json())
        .then(json => setNotes(json));
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

        {notes && notes[props.url] &&
        <div className="subject-container">
            <span className="subject-title">{props.name}</span>

            <div className="cards-container">
                {notes[props.url].map(
                    note => {
                        return <Card 
                                    name={note.title}
                                    url="notes"
                                    type="file"
                                    file_type="pdf"
                                    file_path={note.path}
                                />
                    }
                )}
            </div>
        </div>
        }
    </>)

}

export default Notes;