<template>
  <q-page class="q-pa-xl">
    <section class="q-md-xl">
      <div class="text-h4">QForm Component</div>
      <q-separator class="q-my-md"/>
      <q-form class="q-gutter-y-md q-mt-lg">
        <q-input outlined v-model="form.title" label="제목" :rules="[(val) => !!val || '필수 항목입니다.']"/>
        <q-input outlined v-model="form.content" label="내용" type="textarea" hint="50자 이내로 입력해주세요." counter/>
        <!-- emit-value는 value값만 추출 -->
        <q-select outlined v-model="form.tags" :options="tagOptions" label="태그" emit-value multiple hint="최대 2개 선택 가능합니다."/>

        <q-input outlined v-model="form.date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="form.date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-toggle
          :label="`동의 하시겠습니가?`"
          v-model="form.accept"
          false-value="Disagreed"
          true-value="Agreed"
        />

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
        </div>

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
  date: "2022/01/01",
  accept: false,
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
