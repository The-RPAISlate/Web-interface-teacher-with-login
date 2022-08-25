import { useLocation } from "react-router-dom";

const File = () => {
    const location = useLocation();
    const { type, name, file_path } = location.state;

    console.log(type);
    console.log(name);
    console.log(file_path);

    if(type === "pdf"){
        return (<>
            {/* <iframe className="file"
                title={name}
                src={file_path} 
                frameBorder="0"
                width="100%"
                height="100%"
            /> */}

            <object className="file"
                data={file_path} 
                type="application/pdf"
                width="100%"
                height="100%"
            />
        </>)
    }
    else if(type === "media"){
        return (<>
            <video className="file"
                src={file_path}
                width="100%"
                height="100%"
                controls
            />
        </>)
    }
}

export default File;