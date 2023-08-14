import React from "react";
import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Resume = () => {
  const downloadPDF = () => {
    const content = document.getElementById("resume-content").innerHTML;
    const pdfContent = htmlToPdfmake(content);
    const pdf = pdfMake.createPdf({ content: pdfContent });
    pdf.download("Trenton_Ponder_Resume.pdf");
  };

  return (
    <div id="resume-content" className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Trenton Ponder</h2>
          <p>Oviedo, FL 32765</p>
          <p>trentonponder2001@gmail.com</p>
          <p>+1 716 622 6551</p>
          <p className="summary">
            An experienced and diligent culinary professional with several years
            in restaurant hospitality, paired with strong qualifications in
            full-stack web development, focusing on backend technologies.
            Exceptionally skilled in multitasking, managing inventory, and
            training new staff. Outgoing and attentive, with a strong work ethic
            and a focus on customer satisfaction.
          </p>

          <h3>Work Experience</h3>
          <div className="experience">
            <h4>Lead Trainer</h4>
            <p>
              Oviedo Brewing Company - Oviedo, FL
              <br />
              December 2022 to August 2023
            </p>
            <ul>
              <li>Acting as a line cook and managing inventory</li>
              <li>Handling truck orders and overseeing prep work</li>
              <li>Maintaining order flow and training new employees</li>
            </ul>

            <h4>Chef</h4>
            <p>
              4Rivers - Eatonville, FL
              <br />
              May 2022 to December 2022
            </p>
            <p>
              Maintained large set of responsibilities, ensuring all products
              met and exceeded standards.
            </p>

            <h4>Line Cook</h4>
            <p>
              First Watch - Oviedo, FL
              <br />
              August 2021 to May 2022
            </p>
            <p>
              Developed strong work ethic and refined skills in time management,
              communication, and quality of service.
            </p>

            <h4>Crew Trainer</h4>
            <p>
              Stoked Poké - Port Orange, FL
              <br />
              December 2020 to August 2021
            </p>
            <p>
              Key role in helping a local startup thrive. Managed multiple
              tasks, trained new staff, and handled customer feedback.
            </p>
          </div>

          <h3>Education</h3>
          <div className="education">
            <h4>Full-Stack Coding Bootcamp</h4>
            <p>
              University of Central Florida - Orlando, FL
              <br />
              Completion Date
            </p>
            <ul>
              <li>
                Section 1: Foundation: HTML/CSS/Git, JavaScript, Bootstrap, DOM,
                APIs
              </li>
              <li>
                Section 2: Technical: Node, ES6, OOP, Express, MySQL, MVC,
                Sequelize, Testing
              </li>
              <li>
                Section 3: Performance: Progressive Web Apps, React, NoSQL, MERN
                Stack
              </li>
            </ul>
            <p>
              Projects: Built client-side applications, engineered full-stack
              web applications, and created a dynamic single-page application
              using the MERN stack.
            </p>

            <h4>Associate in Arts (AA)</h4>
            <p>
              Daytona State College - Daytona Beach, FL
              <br />
              August 2017 to August 2020
            </p>
          </div>

          <h3>Skills</h3>
          <div className="skills">
            <p>
              Full-Stack Development: HTML, CSS, JavaScript, Node, Mongoose,
              React, Express, MySQL (Specialized in Backend Development)
            </p>
            <p>Microsoft Office</p>
            <p>Time management</p>
            <p>Cooking</p>
            <p>Windows</p>
            <p>Customer service (2 years)</p>
            <p>Catering Chef (Less than 1 year)</p>
          </div>

          <h3>Certifications and Licenses</h3>
          <div className="certifications">
            <p>
              Microsoft Certified Professional (MCP), January 2017 to Present
            </p>
            <p>ServSafe, Food Handler Certification</p>
          </div>
          <button className="btn btn-primary" onClick={downloadPDF}>
            Download as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
