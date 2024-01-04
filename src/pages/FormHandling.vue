<template>
  <q-page class="q-pa-xl">
    <section class="q-md-xl">
      <div class="text-h4">QForm Component</div>
      <q-separator class="q-my-md"/>
      <q-form>
        <q-input outlined v-model="form.title" label="제목"/>
        <q-input outlined v-model="form.content" label="내용" type="textarea"/>
        <!-- emit-value는 value값만 추출 -->
        <q-select outlined v-model="form.tags" :options="tagOptions" label="태그" emit-value multiple/>
        {{ form.tags }}
      </q-form>
    </section>
  </q-page>
</template>


<script setup>
import { ref } from "vue";

const form = ref({
  title: "",
  content: "",
  tags: [],
});
//const tagOptions = ref(["Google", "Facebook", "Twitter", "Apple", "Oracle"]);
const tagOptions = ref([
  {label: "구글", value: "Google"},
  {label: "페이스북", value: "Facebook"},
  {label: "트위터", value: "Twitter"},
  {label: "애플", value: "Apple"},
  {label: "오라클", value: "Oracle"},
]);
</script>

<style lang="scss" scoped>

</style>
