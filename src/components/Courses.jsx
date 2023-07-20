import {useState} from 'react';
import './Courses.css';
import Subjects from './courses.json'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

function Courses() {
  
  const [search, setSearch] = useState('')
  // console.log(search)
  
  return (
    <>
    <div className="container-accordian">
    <Form className="d-flex search-courses">
              <Form.Control
                type="search"
                placeholder="Search for a course"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
    </Form>
      {
      Subjects && Subjects.filter((item) => {
        return search.toLowerCase() === '' 
          ? item 
          : item.course.toLowerCase().includes(search.toLowerCase())
      })
      .map( (subject, index) => {
      return(
      <Accordion key={index}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{subject.course}</Accordion.Header>
          <Accordion.Body>
            {subject.universities && subject.universities.map( (data, j) => {
              return (
                <ul key={j}>
                  <li>
                    { data.name }, { data.country }
                  </li>
                </ul>
              )
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        )
      })
    }
    </div>
   </>
  );
}

export default Courses
