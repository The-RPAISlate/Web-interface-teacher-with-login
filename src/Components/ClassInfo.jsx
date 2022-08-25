const ClassInfo = (props) => {

    if(props.pageType === "class"){
        return (
            <div className="school-name">
                <span>{props.school_name}</span>
            </div>
        )
    }
    else{
        return (
            <div className="class-info">
                <span className="class-num">Class - {props.class}</span>
                <span className="teacher">Teacher - {props.teacher}</span>
            </div>
        );
    }
}

export default ClassInfo;