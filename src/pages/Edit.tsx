import { useParams } from 'react-router-dom';
import type { Employee ,Role,Status} from '../data';
import {UserContext} from '../store/users-context';
import { useContext} from "react";

export default function Edit() {
  const { id } = useParams<{ id: string }>();
  const { users} = useContext(UserContext);
   

  const employee = users.find(emp => emp.id === Number(id));


  if (!employee) return <div>Employee tapılmadı</div>;
  function handleSubmit(e:React.SubmitEvent<HTMLFormElement>){
    e.preventDefault()
     const formData = new FormData(e.currentTarget);
     const editedEmployee: Employee = {
        id: Number(id),
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        fullName: `${formData.get("firstName")} ${formData.get("lastName")}`,
        email: formData.get("email") as string,
        salary: Number(formData.get("salary")),
        phone: "",
        role: "employee" as Role,
        department: "",
        status: "active" as Status,
        hireDate: "",
        birthDate: "",
        city: "",
        country: "",
        avatarUrl: "",
      };
 const existingIndex = users.findIndex(emp => emp.id === Number(id));

if (existingIndex !== -1) {
  users[existingIndex] = editedEmployee; 
}
  window.history.back();
  }
  return (
    <div>
      <h2>Edit Employee</h2>
      <form  onSubmit={handleSubmit}>
        <label>Name</label>
        <input defaultValue={employee.firstName} name="firstName" />

        <label>LastName</label>
        <input defaultValue={employee.lastName} name="lastName" />

        <label>Email</label>
        <input defaultValue={employee.email} name="email" />

        <label>Salary</label>
        <input defaultValue={employee.salary} name="salary" type="number" />

        <button type="submit">Yenilə</button>
      </form>
    </div>
  );
}