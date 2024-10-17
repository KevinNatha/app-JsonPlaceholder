// Fungsi untuk mengambil data pengguna dari JSONPlaceholder
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const userTableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];

        // Mengisi tabel dengan data pengguna
        users.forEach(user => {
            const row = userTableBody.insertRow();
            row.insertCell(0).innerText = user.name;
            row.insertCell(1).innerText = user.email;
            row.insertCell(2).innerText = user.phone;
            row.insertCell(3).innerText = `${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;
            
            // Tambahkan kolom aksi
            const actionsCell = row.insertCell(4);

            const viewPostButton = document.createElement('button');
            viewPostButton.innerText = 'View Post';
            viewPostButton.onclick = () => alert(`View posts for ${user.name}`);
            actionsCell.appendChild(viewPostButton);

            const viewCommentButton = document.createElement('button');
            viewCommentButton.innerText = 'View Comment';
            viewCommentButton.onclick = () => alert(`View comments for ${user.name}`);
            actionsCell.appendChild(viewCommentButton);

            const viewDetailsButton = document.createElement('button');
            viewDetailsButton.innerText = 'View Details';
            viewDetailsButton.onclick = () => alert(`View details for ${user.name}`);
            actionsCell.appendChild(viewDetailsButton);
        });
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
}

// Memanggil fungsi untuk mengambil dan menampilkan data pengguna
fetchUsers();
