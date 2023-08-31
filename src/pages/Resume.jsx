import {Container, Accordion} from 'react-bootstrap';

function Resume() {
  return (
    <div>
        <Container>
            <h1>Katrina Gucilatar</h1>
            <h2>Full Stack Web Developer/Aspiring Software Engineer</h2>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Contact</Accordion.Header>
                <Accordion.Body>
                Email: katgucilatar@outlook.com
                </Accordion.Body>
                <Accordion.Body>
                Location: Durham, NC
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Work Experience</Accordion.Header>
                <Accordion.Body>
                <h2>Main Banker - Caesars Southern Indiana, Elizabeth, IN</h2>
                </Accordion.Body>
                <Accordion.Body>
                <p>Experienced Main Banker with 2 years of dedicated service in the dynamic casino environment. Proficient in overseeing large-scale cash operations, managing vaults, and ensuring compliance with stringent financial regulations. Adept at maintaining accurate financial records, reconciling transactions, and coordinating with various departments to facilitate seamless casino operations. Recognized for exceptional organizational skills, a keen eye for detail, and a commitment to upholding financial integrity. Seeking to leverage my comprehensive knowledge and expertise to contribute to the success of Caesar Southern Indiana's financial operations.</p>
                </Accordion.Body>
                <Accordion.Body>
                <h2>Data Entry Specialist - Jefferson County Health Center, Fairfield, IA</h2>
                </Accordion.Body>
                <Accordion.Body>
                <p>Dedicated Scheduling Specialist with 1 year of experience in efficiently managing and optimizing complex schedules across diverse industries. Proficient in utilizing scheduling software, coordinating with teams, and ensuring optimal resource allocation. Adept at maintaining accurate records, anticipating scheduling challenges, and swiftly adapting to changes. Exceptional communication and problem-solving skills combined with a strong commitment to enhancing operational efficiency. Eager to leverage my expertise to streamline scheduling processes and contribute to Jefferson County Health Center's success.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Education</Accordion.Header>
                <Accordion.Body>
                <h2>High School Diploma at Northside High School - Jacksonville, NC, August 2014 to June 2017</h2>
                </Accordion.Body>
                <Accordion.Body>
                <h2>Full Stack Web Development at University of North Carolina at Chapel Hill - Chapel Hill, NC, February 2023 to August 2023</h2>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Skills</Accordion.Header>
                <Accordion.Body>
                <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>API Integration(Third-Party and Server-Side)</li>
                    <li>SQL(MySQL)</li>
                    <li>NoSQL(MongoDB)</li>
                    <li>Express JS</li>
                    <li>Node JS</li>
                    <li>React JS</li>
                    <li>MERN Stack</li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </Container>
    </div>
  );
}

export default Resume;