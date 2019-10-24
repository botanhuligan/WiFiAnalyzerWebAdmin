<template>
   <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
         <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
              v-for="(menuItem, menuIndex) in menuItems" clickable v-ripple
              :key="menuIndex"
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>

              <q-item-section>
                {{ menuItem.title }}
              </q-item-section>
            </q-item>

<!--            <q-item active clickable v-ripple>-->
<!--              <q-item-section avatar>-->
<!--                <q-icon name="star" />-->
<!--              </q-item-section>-->

<!--              <q-item-section>-->
<!--                Star-->
<!--              </q-item-section>-->
<!--            </q-item>-->

<!--            <q-item clickable v-ripple>-->
<!--              <q-item-section avatar>-->
<!--                <q-icon name="send" />-->
<!--              </q-item-section>-->

<!--              <q-item-section>-->
<!--                Send-->
<!--              </q-item-section>-->
<!--            </q-item>-->

<!--            <q-item clickable v-ripple>-->
<!--              <q-item-section avatar>-->
<!--                <q-icon name="drafts" />-->
<!--              </q-item-section>-->

<!--              <q-item-section>-->
<!--                Drafts-->
<!--              </q-item-section>-->
<!--            </q-item>-->
          </q-list>
        </q-scroll-area>
         <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="~assets/profile.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
<!--      <q-card class="no-border-radius full-height">-->
<!--        <q-card-section style="height: 144px" color="dark" class="">-->
<!--          <div class="q-mt-md q-ml-md q-mr-md q-mb-sm">-->
<!--            <q-avatar>-->
<!--              <img src="~assets/profile.png">-->
<!--            </q-avatar>-->
<!--          </div>-->
<!--          <div class="text-capture q-ml-md text-white">here will be an email</div>-->
<!--        </q-card-section>-->
<!--        <q-separator />-->
<!--        <q-card-section-->
<!--          v-for="(menuItem, menuIndex) in menuItems"-->
<!--          :key="menuIndex"-->
<!--          @click="$router.push({ name: menuItem.name })"-->
<!--          color="dark"-->
<!--          class="q-pt-xs cursor-pointer row"-->
<!--          clickable-->
<!--          v-ripple-->
<!--        >-->
<!--          <div class="text-body1 text-grey-14 row">-->
<!--            <div class="q-pa-md">-->
<!--              <q-icon-->
<!--                :name="menuItem.icon"-->
<!--                size="29px" class=""-->
<!--              />-->
<!--            </div>-->
<!--            <div class="q-pa-md">{{ menuItem.title }}</div>-->
<!--          </div>-->
<!--        </q-card-section>-->
<!--      </q-card>-->
<!--      <q-list>-->
<!--        <q-item-label header>Essential Links</q-item-label>-->
<!--        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">-->
<!--          <q-item-section avatar>-->
<!--            <q-icon name="school" />-->
<!--          </q-item-section>-->
<!--          <q-item-section>-->
<!--            <q-item-label>Docs</q-item-label>-->
<!--            <q-item-label caption>quasar.dev</q-item-label>-->
<!--          </q-item-section>-->
<!--        </q-item>-->
<!--        <q-item clickable tag="a" target="_blank" href="https://github.quasar.dev">-->
<!--          <q-item-section avatar>-->
<!--            <q-icon name="code" />-->
<!--          </q-item-section>-->
<!--          <q-item-section>-->
<!--            <q-item-label>Github</q-item-label>-->
<!--            <q-item-label caption>github.com/quasarframework</q-item-label>-->
<!--          </q-item-section>-->
<!--        </q-item>-->
<!--        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">-->
<!--          <q-item-section avatar>-->
<!--            <q-icon name="chat" />-->
<!--          </q-item-section>-->
<!--          <q-item-section>-->
<!--            <q-item-label>Discord Chat Channel</q-item-label>-->
<!--            <q-item-label caption>chat.quasar.dev</q-item-label>-->
<!--          </q-item-section>-->
<!--        </q-item>-->
<!--        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">-->
<!--          <q-item-section avatar>-->
<!--            <q-icon name="record_voice_over" />-->
<!--          </q-item-section>-->
<!--          <q-item-section>-->
<!--            <q-item-label>Forum</q-item-label>-->
<!--            <q-item-label caption>forum.quasar.dev</q-item-label>-->
<!--          </q-item-section>-->
<!--        </q-item>-->
<!--        <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">-->
<!--          <q-item-section avatar>-->
<!--            <q-icon name="rss_feed" />-->
<!--          </q-item-section>-->
<!--          <q-item-section>-->
<!--            <q-item-label>Twitter</q-item-label>-->
<!--            <q-item-label caption>@quasarframework</q-item-label>-->
<!--          </q-item-section>-->
<!--        </q-item>-->
<!--        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">-->
<!--          <q-item-section avatar>-->
<!--            <q-icon name="public" />-->
<!--          </q-item-section>-->
<!--          <q-item-section>-->
<!--            <q-item-label>Facebook</q-item-label>-->
<!--            <q-item-label caption>@QuasarFramework</q-item-label>-->
<!--          </q-item-section>-->
<!--        </q-item>-->
<!--      </q-list>-->
    </q-drawer>
</template>

<script>
export default {
  name: 'LeftDrawer',
  props: ['leftDrawerOpen'],
  data () {
    return {
      menuItems: [
        {
          title: 'Доска',
          name: 'dashboard',
          icon: 'dashboard'
        },
        {
          title: 'Заявки',
          name: 'flash',
          icon: 'flash'
        },
        {
          title: 'Сообщения',
          name: 'messages',
          icon: 'messages'
        },
        {
          title: 'Архив',
          name: 'archive',
          icon: 'archive'
        },
        {
          title: 'Настройки',
          icon: 'settings',
          name: 'settings'
        }
      ]
    }
  }
}
</script>
