import { useRef,useContext} from "react";
import {UserContext} from './store/users-context'
import Modal from "./components/./Modal.tsx"
import UsersGrid from "./components/./Users-Grid.tsx"

export default function App() {
  const { search,searchInput} = useContext(UserContext);
  
  const modalRef = useRef<HTMLDialogElement>(null);

   function handleClick() {
    modalRef.current?.showModal();
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchInput(e.target.value)}
      />
      <Modal dialogeRef={modalRef}  />
      <button className="add-btn" onClick={handleClick}>Add Employee</button>
      <UsersGrid/>

      
    </>
  );
}
