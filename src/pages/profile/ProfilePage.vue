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
      <q-tabs
        class="q-mb-lg"
        v-model="tab"
        inline-label
        switch-indicator
        indicator-color="primary"
      >
<!--        <q-tab name="mails" icon="mail" label="게시글" />
        <q-tab name="alarms" icon="alarm" label="저장됨" />
        <q-tab name="movies" icon="movie" label="태그됨" />-->
        <q-route-tab :ripple="false" icon="edit" to="/profile" label="게시글" exact/>
        <q-route-tab :ripple="false" icon="bookmark_border" to="/profile/saved" label="저장" exact />
        <q-route-tab :ripple="false" icon="local_offer" to="/profile/tagged" label="태그됨" exact />
      </q-tabs>
      <router-view/>
<!--      -->
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref("mails");
</script>

<style lang="scss" scoped>
.q-page {
  background-color: #fafafa;
}
</style>
