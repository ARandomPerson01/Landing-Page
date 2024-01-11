document.addEventListener("DOMContentLoaded", function () {
    var cells = document.querySelectorAll('.news-summary');

    cells.forEach(function (cell) {
        var contenido = cell.textContent;
        if (contenido.length > 160) {
            cell.textContent = contenido.substring(0, 160) + '...';
        }
    });
});