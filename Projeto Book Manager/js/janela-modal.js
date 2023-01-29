$(document).ready(function (e) {
    $('.botao-cor-3').click(function () {
        $('#modal-delet-livros').fadeIn(500);
    });

    $('.fechar, #modal-delet-livros').click(function (event) {
        if (event.target !== this) {
            return;
        };
        $('#modal-delet-livros').fadeOut(500);
    })
});

$(document).ready(function (e) {
    $('.botao-cor').click(function () {
        $('#modal-add-livros').fadeIn(500);
    });

    $('.fechar-add, #modal-add-livros').click(function (event) {
        if (event.target !== this) {
            return;
        };
        $('#modal-add-livros').fadeOut(500);
    })
});

$(document).ready(function (e) {
    $('.botao-cor-2').click(function () {
        $('#modal-ati-livros').fadeIn(500);
    });

    $('.fechar-ati, #modal-ati-livros').click(function (event) {
        if (event.target !== this) {
            return;
        };
        $('#modal-ati-livros').fadeOut(500);
    })
});