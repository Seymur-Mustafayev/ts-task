import { createContext, useState, useContext } from "react";
import { UserContext } from '../store/users-context';
import type { Employee } from "../data/data";
import type { Dispatch, SetStateAction, ReactNode } from 'react' 

type SortField = 'id' | 'firstName' | 'lastName' | 'email' | 'salary';


const ITEMS_PER_PAGE = 6;

interface ContextProps {
    handleSort: (field: SortField) => void,
    handleSortArrow: (field: SortField) => string
    handleFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    sortedUsers: Employee[]
    page:number,
    totalPages:number,
    paginatedUsers:Employee[]
   setPage: Dispatch<SetStateAction<number>>

}

interface ProviderProps {
    children: ReactNode
}
export const FilterContext = createContext<ContextProps>({
    handleSort: () => { },
    handleSortArrow: () => '',
    handleFilterChange: () => { },
    sortedUsers: [],
     page:1,
     totalPages:0,
     paginatedUsers:[],
     setPage:()=>{}
     

})


export default function FilterContextProvider({ children }: ProviderProps) {
    const { users } = useContext(UserContext);

    const [sortField, setSortField] = useState<SortField>('id')
    const [sortArrow, setSortArrow] = useState('asc')
    const [value, setValue] = useState<string>()
    const [page, setPage] = useState(1)


    function handleSort(field: SortField) {


        if (sortField === field) {
            setSortArrow(prev => prev === 'asc' ? 'dsc' : 'asc')
        }
        else {
            setSortField(field)
            setSortArrow('asc')
        }
    }

    function handleSortArrow(field: SortField) {
        if (sortField !== field) return ' ↕';
        return sortArrow === 'asc' ? ' ▲' : ' ▼';

    }
    function handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setValue(e.target.value)

    }

    const sortedUsers = [...users]
        .filter((user) => value ? user.role === value : true)
        .sort((a, b) => {
            const aVal = a[sortField]
            const bVal = b[sortField]

            if (aVal > bVal) {
                return sortArrow === 'asc' ? -1 : 1
            }
            if (aVal < bVal) {
                return sortArrow === 'asc' ? 1 : -1
            }
            return 0


        })


        const totalPages = Math.ceil(sortedUsers.length / ITEMS_PER_PAGE)
    const paginatedUsers = sortedUsers.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)


    const filterCtx: ContextProps = {

        handleSort, 
        handleSortArrow,
        handleFilterChange,
        sortedUsers: sortedUsers,
        totalPages:totalPages,
        paginatedUsers:paginatedUsers,
        page:page,
        setPage
    }
    return (
        <FilterContext.Provider value={filterCtx}>
            {children}
        </FilterContext.Provider>
    )
}