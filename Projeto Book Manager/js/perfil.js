$(document).ready(function (e) {
    $('.botao-cor-2').click(function () {
        $('#modal-ati-perfil').fadeIn(500);
    });

    $('.fechar-ati, #modal-ati-perfil').click(function (event) {
        if (event.target !== this) {
            return;
        };
        $('#modal-ati-perfil').fadeOut(500);
    })
});

$(document).ready(function (e) {
    $('.botao-cor-3').click(function () {
        $('#modal-del-cont-perfil').fadeIn(500);
    });

    $('.fechar-del-cont, #modal-del-cont-perfil').click(function (event) {
        if (event.target !== this) {
            return;
        };
        $('#modal-del-cont-perfil').fadeOut(500);
    })
});

$(document).ready(function (e) {
    $('.botao-cor-4').click(function () {
        $('#modal-del-cont-perfil').fadeOut(500);
    });
});