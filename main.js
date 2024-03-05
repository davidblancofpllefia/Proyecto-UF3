import { header } from "./src/componentes/header"
import { panel } from "./src/vistas/panel"
import { registre } from "./src/vistas/registre"
import { login } from "./src/vistas/login"

document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = panel.template

const botonRegistre = document.querySelector('#botonRegistre')
botonRegistre.addEventListener('click', CargarRegistre)

function CargarRegistre(){
  event.preventDefault();
  document.querySelector('main').innerHTML = registre.template
}

const botonLogin = document.querySelector('#botonLogin')
botonLogin.addEventListener('click', CargarLogin)

function CargarLogin(){
  event.preventDefault();
  document.querySelector('main').innerHTML = login.template
}

const botonPanel = document.querySelector('#botonPanel')
botonPanel.addEventListener('click', CargarPanel)

function CargarPanel(){
  event.preventDefault();
  document.querySelector('main').innerHTML = panel.template
}

const botonComentario = document.querySelector('.botonComentario')
botonComentario.addEventListener('click', CargarComentario)

function CargarComentario(){
  event.preventDefault();
  document.querySelector('main').innerHTML = comentarios.template
}

