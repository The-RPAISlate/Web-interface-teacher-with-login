// Components
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import ClassInfo from "../Components/ClassInfo";

const Subject = (props) => {

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
        
        <div className="subject-container">

            <span className="subject-title">{props.name}</span>

            <div className="cards-container">
                <Card name="Textbooks" url="textbooks" />
                <Card name="Lectures" url="lectures" />
                <Card name="Notes" url="notes" />
            </div>
        </div>
    </>);
}

export default Subject;