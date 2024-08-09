// public/js/app.js

// Example of using Toastify
function showToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
    }).showToast();
}

// Example of initializing DataTables
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('#myTable')) {
        $('#myTable').DataTable();
    }
});
