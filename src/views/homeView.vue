<script setup lang="ts">
import  appHeader from "@/components/appHeader.vue";
</script>

<template>
    <header>
        <appHeader/>
    </header>
    <main>
        <div class="left">
            <h1><span>Comunicação</span> Visual</h1>
            <p>Collor Print: Fazendo sua marca aparecer</p>
            <button class="btn">Sobre nós</button>
        </div>
        <div class="right">
            <img src="/public/images/freepik__talk__77966-removebg-preview.png">
        </div>
    </main>
</template>

<style scoped>
*{
    font-family: 'Poppins', sans-serif;
}

main{
    background-color: #FEFBFE;
    margin-top: 10px;
    display: flex;
    align-items: center;     
    justify-content: space-between;
    padding: 0 100px;
    gap: 165px;
    height: calc(100vh - 120px);
}

.btn{
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

.btn:hover{
  background-position: right;
}

span{
    color:#0a2c99;
}

.left{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.left h1{
    width: 200px;
    font-size: 60px;
    color: #da0098;
    line-height: 1.1;
    margin: 0;    
}

.left p{
    width: 400px;
    font-size: 18px;
}

.right{
    display: flex;
    justify-content:flex-end;
    align-items: center;
}

.right img{
    height: 500px;
    width: 700px;
}
</style>