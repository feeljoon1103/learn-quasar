<template>
  <q-page class="q-pa-xl">
    <section class="q-md-xl">
      <div class="text-h4">Date Util</div>
      <q-separator class="q-my-md"/>
      <!-- 현재 날짜 -->
      <div class="text-h6">formatDate - {{formatDate(new Date(), FORMAT)}}</div>

      <!-- 7일 후 날짜 -->
      <div class="text-h6">
        addToDate - {{ formatDate(addToDate(new Date(), {days: 7}), FORMAT) }}
      </div>

      <!-- 7일 전 날짜 -->
      <div class="text-h6">
        addToDate - {{ formatDate(subtractFromDate(new Date(), {days: 7}), FORMAT) }}
      </div>
    </section>

    <section class="q-md-xl">
      <div class="text-h4">Format Util</div>
      <q-separator class="q-my-md"/>
      <!-- 공백 -->
      <div class="text-h6">
        pad - {{pad('hello', 10, '#')}}
      </div>
    </section>

    <section class="q-md-xl">
      <div class="text-h4">Type Checking Util</div>
      <q-separator class="q-my-md"/>
      <!-- 공백 -->
      <div class="text-h6">
        objA === objB - {{ objA === objB }}
      </div><div class="text-h6">
        deepEqual(objA, objB) - {{ deepEqual(objA, objB)}}
      </div>
    </section>
  </q-page>
</template>

<!--<script>
export default {
  name : 'TypographyComp'
}
</script>-->

<script setup>

import { date, format, is } from "quasar";

const FORMAT = 'YYYY-MM-DD HH:mm:ss';
const { formatDate, addToDate, subtractFromDate } = date;

const {pad} = format;

const {deepEqual} = is;

const objA = { name: "abc", age:30, hobby: 'game' };
const objB = { name: "abc", age:30, hobby: 'game' };
</script>

<style lang="scss" scoped>

</style>
