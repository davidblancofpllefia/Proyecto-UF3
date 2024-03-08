import { header } from "./src/componentes/header"
import { panel } from "./src/vistas/panel"
import { registre } from "./src/vistas/registre"
import { login } from "./src/vistas/login"
import { Vistacomentarios } from "./src/vistas/vistaComentarios"
import { vistaEditarComentarios } from "./src/vistas/vistaEditarComentario"


document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = panel.template


const botonRegistre = document.querySelector('#botonRegistre')
botonRegistre.addEventListener('click', CargarRegistre)

const botonLogin = document.querySelector('#botonLogin')
botonLogin.addEventListener('click', CargarLogin)

const botonPanel = document.querySelector('#botonPanel')
botonPanel.addEventListener('click', CargarPanel)

const botonComentario = document.querySelector('#botonComentario')
botonComentario.addEventListener('click', CargarComentario)


const botonCerrarSesion = document.querySelector('#botonCerrarSesion')
botonCerrarSesion.addEventListener('click', cargarCerrarSesion)

function CargarRegistre(){
  event.preventDefault();
  document.querySelector('main').innerHTML = registre.template
  document.querySelector('#botonPanel').className = "d-none";
  document.querySelector('#botonCerrarSesion').className = "d-none";
}

function CargarLogin(){
  event.preventDefault();
  document.querySelector('main').innerHTML = login.template
  document.querySelector('#botonPanel').className = "d-none";
  document.querySelector('#botonCerrarSesion').className = "d-none";
}

function CargarPanel(){
  event.preventDefault();
  document.querySelector('main').innerHTML = panel.template
}

function CargarComentario(){
  event.preventDefault();
  document.querySelector('main').innerHTML = Vistacomentarios.template
}

function cargarCerrarSesion(){
  event.preventDefault();
  document.querySelector('main').innerHTML = login.template
  document.querySelector('#botonPanel').className = "d-none";
  document.querySelector('#botonCerrarSesion').className = "d-none";
}