<template>
  <div>
    <b-card
        :img-src="picture"
        img-alt="Image"
        img-top
        style="max-width: 300px; max-heigth: 470px;"
        class="container mb-2"
        id="b-card-personas"
    >
       <b-card-text>
            
            <p>Nombre: {{nombre}} {{apellido}}</p>
            <p>Genero: {{genero}}</p>
            <p>E-mail: {{email}}</p>
            <p>Telefono: {{telefono}}</p>
            <p>Phone: {{celular}}</p>
        </b-card-text>
  </b-card>
  </div>
</template>

<script>
export default {
    name: 'Tarjeta',
    props: {
        nombre: String,
        apellido: String,
        genero: String,
        picture: String,
        email: String,
        telefono: String,
        celular: String
    }
}
</script>

<style>
#b-card-personas{
    border-image: 50%;
    width: 470px;
}
</style>