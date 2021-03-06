import './project.css'
import EditProjects from "./editProject";
import { Table } from "react-bootstrap";
import DeleteProject from "./deleteProject";

const Project = ({project}) => {
    
    return (
        <div className="bugs-table">
            <Table striped bordered hover>
  <thead>
    <tr className="tr-up" >
      <th>title</th>
      <th>description</th>
      <th>deliveryTime</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr className="tr-up" >
      <td>{project.title}</td>
      <td>{project.description}</td>
      <td>{project.deliveryTime}</td>
      <td>
        <EditProjects project={project}/>
        <DeleteProject project={project}/>
      </td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default Project