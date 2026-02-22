<script setup lang="ts">

</script>

<template>
    <div class="header">
    <img src="/images/logo collor print31_page-0001.jpg" alt="logo">

    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">Serviços</a></li>
      <li><a href="">Portfólio</a></li>
      <li><a href="">Contato</a></li>
    </ul>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

.header {
  height: 120px;
  display: flex;
  align-items: center;
  gap: 200px;          
  padding-left: 100px;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.header ul {
  display: flex;
  gap: 140px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.header img {
  width: 200px;
  height: 70px;
  width: auto;
  object-fit: contain;
  display: block;
}

.header a{
text-decoration: none;
color: #1C1C1C;
font-size: 17px;
position: relative;
display: inline-block;
transition: 0.5s;
}

.header a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(to left, #0a2c99, #f301aa);
  bottom: -5px;
  left: 0;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease-out;
}


.header a:hover::after {
  transform: scaleX(1);
}

</style>