// Packages
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Classes from "./Pages/Classes";
import Home from "./Pages/Home";
import Subject from "./Pages/Subject";
import Contact from "./Pages/Contact";
import Textbooks from "./Pages/Textbooks";
import Notes from "./Pages/Notes";
import Lectures from "./Pages/Lectures";
import File from "./Pages/File";

// Components
import Footer from "./Components/Footer";

// Style
import "./App.css";
import Login from "./Components/login/Login";


const App = () => {

  const [data, setData] = useState([]);
  const [classList, setClassList] = useState([]);
  const [logoPath, setLogoPath] = useState("");
  const [schoolName, setSchoolName] = useState("");

  useEffect(() => {
    fetch("/json/classes.json")
    .then(res => res.json())
    .then(json => {
        json.sort(
          (a,b) => a.class - b.class
        )
        setData(json);
        setLogoPath(json[0].logo_path);
        setSchoolName(json[0].school_name);
    })
  }, []);

  useEffect(() => {
    const classes = [];

    data.forEach(
      d => {
        classes.push({
          name: `Class ${d.class}`,
          url: `class${d.class}`
        })
      }
    )

    setClassList(classes);

  }, [data])

  return (data.length &&
  <>

    <BrowserRouter>

      <Routes>
  
        {classList &&
        <Route 
          exact path="/" 
          element={<Classes 
                      logo_path={logoPath}
                      school_name={schoolName}
                      class_data={classList}
                  />} 
        />}

        {data.map(
          cls => {
          return (
          <>
            {/* Class routes */}
              <Route 
                  key={cls.class}
                  path={`class${cls.class}`}
                  element={<Home 
                              logo_path={logoPath}
                              school_name={schoolName}
                              class_num={cls.class}
                              teacher={cls.teacher}
                              subjects={cls.subjects}
                          />}
              />

              {/* Subject routes */}
              {cls.subjects.map(
                subject => {
                  return (
                  <>
                      {/* Subject route */}
                      <Route 
                          path={`class${cls.class}/${subject.url}`}
                          element={<Subject 
                                      logo_path={logoPath}
                                      school_name={schoolName}
                                      class_num={cls.class}
                                      teacher={cls.teacher}
                                      subjects={cls.subjects}
                                      name={subject.name}
                                  />}
                      />

                      {/* Textbooks route */}
                      <Route 
                          path={`class${cls.class}/${subject.url}/textbooks`}
                          element={<Textbooks 
                                      logo_path={logoPath}
                                      school_name={schoolName}
                                      class_num={cls.class}
                                      teacher={cls.teacher}
                                      subjects={cls.subjects}
                                      name={subject.name}
                                      url={subject.url}
                                  />}
                      />

                      {/* Notes route */}
                      <Route 
                          path={`class${cls.class}/${subject.url}/notes`}
                          element={<Notes
                                      logo_path={logoPath}
                                      school_name={schoolName}
                                      class_num={cls.class}
                                      teacher={cls.teacher}
                                      subjects={cls.subjects}
                                      name={subject.name}
                                      url={subject.url}
                                  />}
                      />

                      {/* Lectures route */}
                      <Route 
                          path={`class${cls.class}/${subject.url}/lectures`}
                          element={<Lectures
                                      logo_path={logoPath}
                                      school_name={schoolName}
                                      class_num={cls.class}
                                      teacher={cls.teacher}
                                      subjects={cls.subjects}
                                      name={subject.name}
                                      url={subject.url}
                                  />}
                      />
                  </>
                  )
                }
              )}

          </>)
          }
        )}

        <Route path="/contact" element={<Contact />} />
        
        <Route path="/file" element={<File />} />
        <Route path="/login" element={<Login/>} />
  
      </Routes>

      <Footer />
    </BrowserRouter>

  </>);
};

export default App;