import { useRef, useState } from "react";
import DataGrid, { Column } from 'devextreme-react/data-grid';
import { employees } from './data';
import type { Employee } from './data';
import Modal from './Modal.tsx';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const [users, setUsers] = useState(employees);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDialogElement>(null);

  const filteredUsers = users.filter(user =>
    user.firstName.toLowerCase().includes(search.toLowerCase()) ||
    user.lastName.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  function handleClick() {
    modalRef.current?.showModal();
  }

  function handleAddEmployee(employee: Employee) {
    setUsers(prev => [...prev, employee]);
  }

  function handleRemove(id: number) {
    setUsers(prev => prev.filter(user => user.id !== id));
  }

  function handleEdit(id: number) {
    navigate(`/edit/${id}`);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Axtar..."
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      />
      <Modal dialogeRef={modalRef} onAddEmployee={handleAddEmployee} />
      <button onClick={handleClick}>Add Employee</button>

      <DataGrid dataSource={filteredUsers} showBorders>
        <Column dataField="id" caption="ID" />
        <Column dataField="firstName" caption="Name" />
        <Column dataField="email" caption="Email" />
        <Column dataField="salary" caption="Salary" />
        <Column dataField="lastName" caption="LastName" />
        <Column
          caption="Actions"
          cellRender={(data) => (
            <div>
              <button onClick={() => handleRemove(data.data.id)}>Remove</button>
              <button onClick={() => handleEdit(data.data.id)}>Edit</button>
            </div>
          )}
        />
      </DataGrid>
    </>
  );
}