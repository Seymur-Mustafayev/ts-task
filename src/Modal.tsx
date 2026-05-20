import type { RefObject } from 'react';
import './modal.css';
import type { Employee, Role, Status } from './data';
import { employees } from './data';

interface ModalProps {
  dialogeRef: RefObject<HTMLDialogElement | null>;
  onAddEmployee: (employee: Employee) => void;
}

export default function Modal({ dialogeRef, onAddEmployee }: ModalProps) {

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newEmployee: Employee = {
      id: Date.now(),
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
onAddEmployee(newEmployee);
employees.push(newEmployee);
    e.currentTarget.reset();
    handleRemoveModal();
  }

  function handleRemoveModal() {
    dialogeRef.current?.close();
  }

  

  return (
    <dialog ref={dialogeRef} className="modal">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="firstName" type="text" required />

        <label>Email</label>
        <input name="email" type="email" required />

        <label>Salary</label>
        <input name="salary" type="text" required />

        <label>LastName</label>
        <input name="lastName" type="text" required />

        <button type="button" onClick={handleRemoveModal}>Close Modal</button>
        <button type="submit">Add item</button>
      </form>
    </dialog>
  );
}