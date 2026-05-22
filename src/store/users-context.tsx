import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { employees } from "../data/data";
import type { Employee } from "../data/data";

interface UserContextProps {
    users: Employee[];
    addUser: (employee: Employee) => void;
    handleRemove: (id: number) => void;
    handleEdit: (updatedUser: Employee) => void;  
    searchInput: (searchValue: string) => void;
    search: string;
}

interface ProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContextProps>({
    users: [],
    addUser: () => {},
    handleRemove: () => {},
    handleEdit: () => {},  
    searchInput: () => {},
    search: ''
});

export default function UserContextProvider({ children }: ProviderProps) {
    const [users, setUsers] = useState<Employee[]>(employees);
    const [search, setSearch] = useState<string>('');

    function searchInput(searchValue: string) {
        setSearch(searchValue);
    }

    function addUser(employee: Employee) {
        setUsers(prev => [...prev, employee]);
    }

    function handleRemove(id: number) {
        setUsers(prev => prev.filter(user => user.id !== id));
    }

    function handleEdit(updatedUser: Employee) {
        setUsers(prev => prev.map(user => 
            user.id === updatedUser.id ? updatedUser : user
        ));
    }

    const filteredUsers = users.filter(user =>
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    const userCtx: UserContextProps = {
        users: filteredUsers,
        addUser,
        handleRemove,
        handleEdit, 
        searchInput,
        search
    };

    return (
        <UserContext.Provider value={userCtx}>
            {children}
        </UserContext.Provider>
    );
}