"use strict";
$(function () {
    alert(1)

    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const mensagem = document.getElementById('mensagem')
    const celular = document.getElementById('celular')

    $('#enviar').on('click', e => {
        console.log(e)
    })
})