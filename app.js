// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
"use strict";

const listaAmigos = [];
const limite = 5;
const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;

function asignarTextoElemento(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();
    if (!regex.test(nombre)) {
        asignarTextoElemento('h2', 'Ingrese un nombre válido');
        limpiarCaja();
        return;
    }
    if (listaAmigos.includes(nombre)) {
        asignarTextoElemento('h2', 'Ya ingresaste este nombre');
        limpiarCaja();
        return;
    }
    if (listaAmigos.length >= limite) {
        asignarTextoElemento('h2', 'Superaste el límite');
        limpiarCaja();
        return;
    }
    listaAmigos.push(nombre);
    mostrarAmigos();
    limpiarCaja();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        asignarTextoElemento('h2', 'No ingresaste ningún nombre en la lista');
        return;
    }
    const x = Math.floor(Math.random() * listaAmigos.length);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Tu amigo secreto es: ${listaAmigos[x]}</li>`;
    listaNombres.textContent = "";

}