<script setup lang="ts">
import AppFooter from "@/components/appFooter.vue";
import appHeader from "@/components/appHeader.vue";
</script>

<template>
  <header>
    <appHeader />
  </header>
  <main>
    <div class="hero">
      <div class="left">
        <h1><span>Comunicação</span> Visual</h1>
        <p>Collor Print: Fazendo sua marca aparecer</p>
        <button class="btn">Sobre nós</button>
      </div>
      <div class="right">
        <img src="/images/freepik__talk__77966-removebg-preview.png" />
      </div>
    </div>
    <div class="aboutUs">
      <h2>Sobre Nós - <span>Collor Print</span></h2>
      <p>
        A Collor Print é uma empresa de comunicação visual fundada em 2015 com o
        objetivo de ajudar empresas e empreendedores a fortalecerem a presença
        de suas marcas por meio de soluções visuais criativas e de alta
        qualidade.
      </p>
      <p>
        Atuando em São Francisco do Sul e região, a empresa oferece serviços
        como impressão de lonas e adesivos, produção de letras-caixa, além da
        criação e instalação de placas, fachadas e luminosos. Também realiza
        adesivação de vitrines e outros espaços comerciais, contribuindo para
        que cada cliente tenha uma identidade visual marcante e profissional.
      </p>
      <p>
        Conduzida de forma independente desde sua fundação, a Collor Print preza
        pelo atendimento personalizado, comprometimento com prazos e atenção aos
        detalhes em cada projeto, garantindo resultados que realmente fazem a
        diferença na comunicação visual de seus clientes.
      </p>
    </div>
  </main>
  <footer>
    <AppFooter/>
  </footer>
</template>

<style scoped>
 

* {
  font-family: "Poppins", sans-serif;
}

main {
  background-color: #fefbfe;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.aboutUs p {
  width: 700px;
  margin: 15px 0px;
  font-weight: 400;
  text-align: center;
  color: #1c1c1c;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  gap: 165px;
  height: calc(100vh - 120px);
}

.aboutUs {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
}

.aboutUs h2 {
  margin-top: 30px;
  font-size: 36px;
  position: relative;
}

.aboutUs h2 span {
  background: linear-gradient(
    90deg,
    #0a2c99,
    #f301aa,
    #0a2c99,
    #f301aa,
    #0a2c99
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: degradeLoop 18s linear infinite;
}

@keyframes degradeLoop {
  from {
    background-position: 0% 50%;
  }
  to {
    background-position: 200% 50%;
  }
}

.aboutUs h2::after {
  content: "";
  display: block;
  width: 300px;
  height: 4px;
  margin: 15px auto 0;
  background: linear-gradient(45deg, #0a2c99, #f301aa);
  border-radius: 5px;
}

.btn {
  padding: 12px 30px;
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  align-self: center;
  margin-top: 20px;

  background: linear-gradient(45deg, #0a2c99, #f301aa);
  background-size: 200%;
  transition: 0.5s;
}

.btn:hover {
  background-position: right;
}

span {
  color: #0a2c99;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.left h1 {
  width: 200px;
  font-size: 60px;
  color: #da0098;
  line-height: 1.1;
  margin: 0;
}

.left p {
  width: 400px;
  font-size: 18px;
}

.right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.right img {
  height: 500px;
  width: 700px;
}
</style>
