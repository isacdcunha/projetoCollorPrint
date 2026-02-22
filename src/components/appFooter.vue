<script setup lang="ts"></script>

<template>
    <div class="footer">
        <div class="contact">
        <img src="/images/icons8-telefone-32.png">
        <p>(+55) 47 98425-4091</p>
        <img src="/images/icons8-localização-32.png">
        <p>Rua Hortência de Castilho Braga, São Francisco do Sul, 89240-000</p>
        <img src="/images/icons8-nova-mensagem-50.png">
        <p>collorprint@outlook.com.br</p>
    </div>
    <div class="socials">
  <ul>
    <li>
      <a href="#">
        <i class="fa-brands fa-facebook-f icon"></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa-brands fa-instagram icon"></i>
      </a>
    </li>
  </ul>
</div>
        <p class="credits">© 2026 por Isacdcunha</p>
    </div>
</template>

<style scoped>
.socials ul {
  display: flex;
  gap: 10px;
  padding: 0;
  margin: 10px 0;
}

ul li {
  list-style: none;
}

.socials ul li a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  display: block;
  position: relative;
  overflow: hidden;
  border: 2px solid #fff;
}

:deep(.icon){
  position: relative;
  color: #262626;
  transition: .5s;
  z-index: 3;
  font-size: 16px;
  line-height: 40px;
  font-size: 16px;
}

.socials ul li a:hover :deep(.icon) {
  color: #fff;
  transform: rotateY(360deg);
}

ul li a:before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f00;
  transition: .5s;
  z-index: 2;
}

ul li a:hover:before {
  top: 0;
}

ul li:nth-child(1) a:before{
  background: #3b5999;
}

ul li:nth-child(2) a:before{
  background: #E1306C;
}

.contact{
    display: flex;
    flex-direction: row;
    gap: 20px;
    color: white;
    font-size: 14px;
    font-weight: 400;
    justify-content: center;
}

.credits{
    color: white;
    font-size: 12px;
    font-weight: 400;
}
.contact img{
    width: 25px;
    height: 25px;
}
.footer{
    background-color: rgb(51, 51, 51);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    height: 120px;
}
</style>