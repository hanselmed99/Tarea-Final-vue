<template>
  <div class="usuario">
    <h1>Usuario Random</h1>
    <b-form @click.prevent="getUsuario">
      <b-button type="click" variant="success">Obtener Usuario</b-button>
      
      <Tarjeta :nombre="usuarioRandom[0].name.first" 
              :apellido="usuarioRandom[0].name.last"
              :picture="usuarioRandom[0].picture.medium"
              :genero="usuarioRandom[0].gender"
              :email="usuarioRandom[0].email"
              :telefono="usuarioRandom[0].phone"
              :celular="usuarioRandom[0].cell"
        ></Tarjeta>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Tarjeta from '../components/Tarjeta'

export default {
  name: 'Usuario',
  components: {
    Tarjeta
  },
  data() {
    return{
      usuario: Object
    }
  },
  computed: {
    ...mapGetters(['usuarioRandom'])
  },
  methods: {
    ...mapActions(['getUsuario'])
  },
  mounted() {
    this.getUsuario();
  }
}
</script>

<style>
  
</style>
