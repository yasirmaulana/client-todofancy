<template>
<div class="container">
  <div  class="card" style="width: 25rem;">
    <b>today: <br>
    {{ JktWeather.data.name }}</b>
      <div class="card-body">
        {{ JktWeather.data.main.temp }} mmHg <br>
        {{ JktWeather.data.main.humidity }}% humidity<br>
        {{ JktWeather.data.main.pressure }} m/s NW<br>
      </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Weather',
  computed: {
    ...mapState([
      'JktWeather'
    ])
  },
  created: function () {
    let self = this
    self.$store.dispatch('getWeather')
  }
}
</script>

<style>

</style>
