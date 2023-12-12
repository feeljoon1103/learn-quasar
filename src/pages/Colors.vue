<template>
  <q-page class="q-pa-xl">
    <section class="q-md-xl">
      <div class="text-h4">Brand Colors</div>
      <q-separator class="q-my-md"/>
      <!-- gutter -> 아이템간의 간격 -->
      <div class="q-gutter-sm">
      <div class="q-pa-xs rounded-borders bg-primary text-yellow">Primary</div>
      <div class="q-pa-xs rounded-borders bg-primary bg-secondary text-white">secondary</div>
      <div class="q-pa-xs rounded-borders bg-primary bg-accent text-white">accent</div>
      <div class="q-pa-xs rounded-borders bg-primary bg-dark text-white">dark</div>
      <div class="q-pa-xs rounded-borders bg-primary bg-positive text-white">positive</div>
      <div class="q-pa-xs rounded-borders bg-primary bg-negative text-white">negative</div>
      <div class="q-pa-xs rounded-borders bg-primary bg-info text-white">Info</div>
      <div class="q-pa-xs rounded-borders bg-primary bg-warning text-white">Warning</div>
      <div class="q-pa-xs rounded-borders bg-primary bg-orange-4">orange-4</div>
      <div class="q-pa-xs rounded-borders bg-primary bg-light-green-6">light-green-6</div>
      <div class="q-pa-xs rounded-borders bg-primary bg-blue-grey-1">blue-grey-1</div>
      <div class="q-pa-xs rounded-borders bg-primary bg-error">blue-grey-1</div>
      <p>Variables</p>
      </div>
    </section>
    <section class="q-md-xl">
      <div class="text-h4">Components</div>
      <q-separator class="q-my-md"/>
      <div class="q-pa-md q-gutter-sm">
        <q-btn color="white" text-color="black" label="Standard" />
        <q-btn color="primary" label="Primary" />
        <q-btn color="secondary" label="Secondary" />
        <q-btn color="amber" glossy label="Amber" />
        <q-btn color="brown-5" label="Brown 5" />
        <q-btn color="deep-orange" glossy label="Deep Orange" />
        <q-btn color="purple" label="Purple" />
        <q-btn color="error" label="Error" />
      </div>
    </section>
  </q-page>
</template>

<script setup>

</script>

<style lang="scss" scoped>
p {
  color: $red;
  background-color: $grey-5;
}
.text-error {
  color: $red;
}
.bg-error {
  background: $red;
}
</style>
