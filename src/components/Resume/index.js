import resume from "../../assets/ResumePDF/Kai-Resume.pdf";

const Resume = () => {

  return (
    <div id="resume-content" className="container">
      <div className="row">
        <div className="col-md-12">
        <h3>Resume</h3>
        <div className = 'pdf-container'>
          <object
            data= {resume} // Replace with the actual path to your PDF file
            type="application/pdf"
            width="100%"
            height="1000px"
          >
          </object>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Resume;
