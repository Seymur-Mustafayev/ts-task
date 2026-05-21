import { useContext, useState } from "react";
import { UserContext } from '../store/users-context';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import './UsersGrid.css';

type SortField = 'id' | 'firstName' | 'lastName' | 'email' | 'salary';

const ITEMS_PER_PAGE = 6;

export default function UsersGrid() {


    const navigate = useNavigate();
    const { users, handleRemove } = useContext(UserContext);
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

    function handleSortArrow(field: string) {
        if (sortField !== field) return ' ↕';
        return sortArrow === 'asc' ? ' ▲' : ' ▼';

    }
    const totalPages = Math.ceil(sortedUsers.length / ITEMS_PER_PAGE)
    const paginatedUsers = sortedUsers.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

    //Export un Hamisini Docdan goturdum
    // ✅ Excel export
function exportToExcel() {
    const data = sortedUsers.map(u => ({
        ID: u.id,
        Name: u.firstName,
        LastName: u.lastName,
        Email: u.email,
        Salary: u.salary,
        Role: u.role
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Users');
    XLSX.writeFile(wb, 'users.xlsx');
}

// ✅ PDF export
function exportToPDF() {
    const doc = new jsPDF();
    autoTable(doc, {
        head: [['ID', 'Name', 'LastName', 'Email', 'Salary', 'Role']],
        body: sortedUsers.map(u => [u.id, u.firstName, u.lastName, u.email, u.salary, u.role])
    });
    doc.save('users.pdf');
}

// ✅ Copy
    function copyToClipboard() {
        const text = sortedUsers
            .map(u => `${u.id}\t${u.firstName}\t${u.lastName}\t${u.email}\t${u.salary}\t${u.role}`)
            .join('\n');
        navigator.clipboard.writeText(text);
        alert('Copied');
    }



//Export un Hamisini Docdan goturdum
    return (

        <>
             <div className="export-buttons">
            <button onClick={exportToExcel}>Export Excel</button>
            <button onClick={exportToPDF}>Export PDF</button>
            <button onClick={copyToClipboard}>Copy</button>
        </div>
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={() => handleSort('id')}>ID{handleSortArrow('id')}</th>
                        <th onClick={() => handleSort('firstName')}>Name{handleSortArrow('firstName')}</th>
                        <th onClick={() => handleSort('lastName')}>LastName{handleSortArrow('lastName')}</th>
                        <th onClick={() => handleSort('email')}>Email{handleSortArrow('email')}</th>
                        <th onClick={() => handleSort('salary')}>Salary{handleSortArrow('salary')}</th>
                        <th>Actions</th>
                        <th><label >Choose a role:</label>
                            <select onChange={handleFilterChange}>
                                <option disabled>Roles</option>
                                <option value='Admin'>Admin</option>
                                <option value='Editor' >Editor</option>
                                <option value='Viewer'>Viewer</option>
                                <option value='Manager'>Manager</option>

                            </select>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedUsers.map(user => (
                        <tr key={user.id}>
                            <th>{user.id}</th>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.salary}</td>

                            <td>
                                <button className="btn-remove" onClick={() => handleRemove(user.id)}>Remove</button>
                                <button className="btn-edit" onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
                            </td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">

                 <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
                    {'<'}
                </button>

                {/* Aray Functionunu Docdan goturdum Hazir Sekilde  */}

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                    <button
                        key={p}
                        className={p === page ? "active" : ""}
                        onClick={() => setPage(p)}
                    >
                        {p}
                    </button>
                ))}

                <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
                    {'>'}
                </button>

            </div>
        </>
    );
}