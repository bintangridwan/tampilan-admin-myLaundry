window.addEventListener('DOMContentLoaded', event => {
    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        const dataTable = new simpleDatatables.DataTable(datatablesSimple);

        document.getElementById('searchInput').addEventListener('keyup', function() {
            dataTable.search(this.value);
        });
    }
});