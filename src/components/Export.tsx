
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import { FilterContext } from '../store/filter-context.tsx'
import autoTable from 'jspdf-autotable';
import {useContext } from 'react'



export default function Export(){
    const { sortedUsers } = useContext(FilterContext)
    
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
    return(
        <>

         <div className="export-buttons">
                <button onClick={exportToExcel}>Export Excel</button>
                <button onClick={exportToPDF}>Export PDF</button>
                <button onClick={copyToClipboard}>Copy</button>
            </div>
        </>
    )
}