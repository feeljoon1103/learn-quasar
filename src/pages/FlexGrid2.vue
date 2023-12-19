<template>
  <q-page padding>
    <section class="row q-col-gutter-x-xl q-py-lg">
      <div class="col-12 col-sm-auto q-py-md flex flex-center">
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
    <section>
      <div class="row no-wrap scroll q-col-gutter-x-xl">
        <div class="col-auto" v-for="n in 15" :key="n">
          <article>
            <q-avatar size="70px">
              <q-img src="success.png"/>
            </q-avatar>
            <div class="text-center q-mt-sm">제목</div>
          </article>
        </div>
      </div>
    </section>
    <section class="q-mt-xl">
      <div class="row q-col-gutter-md">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="n in 18" :key="n">
          <q-card class="my-card">
            <q-img ratio="1" src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center full-height flex flex-center">
                Title
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.q-page {
  background-color: #fafafa;
}
</style>
