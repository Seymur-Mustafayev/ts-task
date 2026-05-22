import { useContext} from "react";
import { useNavigate } from 'react-router-dom';
import './UsersGrid.css';
import { FilterContext } from '../store/filter-context.tsx'
import { UserContext } from '../store/users-context.tsx'
import Export from '../components/Export'



export default function UsersGrid() {
    const { handleRemove } = useContext(UserContext)
    const {handleSort, handleSortArrow, handleFilterChange,page,setPage,paginatedUsers,totalPages } = useContext(FilterContext)
    const navigate = useNavigate();
   

    return (

        <> 

           <Export/>
           
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