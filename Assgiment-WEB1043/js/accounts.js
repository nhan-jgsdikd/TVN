
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#accountsTable tbody');


    const accounts = JSON.parse(localStorage.getItem('userAccounts')) || [];


    function updateTable() {
        tableBody.innerHTML = ''; 
        accounts.forEach((account, index) => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${account.firstName || ''}</td>
                <td>${account.lastName || ''}</td>
                <td>${account.email || ''}</td>
                <td>${account.password || ''}</td>
                <td><button class="delete-button" data-index="${index}">Xóa</button></td>
            `;
            
            tableBody.appendChild(row);
        });


        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                deleteAccount(index);
            });
        });
    }

    function deleteAccount(index) {
        accounts.splice(index, 1); 
        localStorage.setItem('userAccounts', JSON.stringify(accounts)); 
        updateTable();
    }

    updateTable(); 
});
