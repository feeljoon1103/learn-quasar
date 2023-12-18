<template>
  <q-page padding>
    <section class="row q-col-gutter-x-xl q-py-lg">
      <div class="col-auto q-py-md">
        <q-avatar size="150px">
          <q-img src="/success.png"/>
        </q-avatar>
      </div>
      <div class="col-grow column justify-between">
        <div class="row justify-between items-center">
          <span class="text-h6 text-weight-bold">jun-krd</span>
          <q-space/>
          <div class="q-gutter-x-sm">
            <q-btn outline color="secondary" label="프로필 편집"></q-btn>
            <q-btn outline color="secondary" label="프로필 편집"></q-btn>
            <q-btn outline color="secondary" label="프로필 편집"></q-btn>
          </div>
          <q-btn flat color="secondary" icon="more_horiz"></q-btn>
        </div>
        <div class="q-gutter-x-lg">
          <span>게시글 238</span>
          <span>팔로워 2,032</span>
          <span>팔로우 1,432</span>
        </div>
        <div>
          <div>개발자</div>
          <div>#INFP</div>
        </div>
      </div>
    </section>
    <section class="bg-yellow"></section>
    <section class="bg-green"></section>
  </q-page>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.q-page {
  background-color: #fafafa;
}
</style>
