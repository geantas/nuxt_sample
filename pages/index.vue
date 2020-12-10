<template>
  <div class="container">
    <div class="test">
      {{ getTheTestState }}
    </div>
    <div class="test">
      {{ getTextFromIndex }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('test-store', ['getTheTestState']),
    ...mapGetters(['getTextFromIndex'])
  }
}
</script>

<style>
.test {
  height: 80px;
  width: 200px;
  padding: 20px;
  border: 1px solid red;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
