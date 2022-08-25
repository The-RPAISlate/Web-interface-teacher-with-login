// Components
import Navbar from "../Components/Navbar";
import ClassInfo from "../Components/ClassInfo";
import Card from "../Components/Card";

const Classes = (props) => {

    return (<>
        <Navbar 
            logo_path={props.logo_path}
            school_name={props.school_name}
            dropdownTitle="Classes"
            dropdownData={props.class_data}
        />

        <ClassInfo 
            pageType="class"
            school_name={props.school_name}
        />

        <div className="cards-container">
        {props.class_data &&

            props.class_data.map(
                c => {
                    return <Card 
                                key={c.url}
                                name={c.name}
                                url={c.url}
                            />
                }
            )
        }
        </div>

    </>);
}

export default Classes;