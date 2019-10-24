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
              :to="menuItem.to"
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" v-if="!menuItem.iconSrc"/>
                <q-icon name="img:statics/icons/flash.svg" v-if="menuItem.iconSrc"/>
              </q-item-section>

              <q-item-section>
                <div>
                  {{ menuItem.title }}
                  <q-badge v-if="!!menuItem.badge" transparent align="middle" color="grey" class="q-ml-md">
                    {{ menuItem.badge }}
                  </q-badge>
                </div>
              </q-item-section>
            </q-item>
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
    </q-drawer>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'LeftDrawer',
  computed: {
    // ...mapState('common', ['leftDrawerOpen'])
  },
  data () {
    return {
      leftDrawerOpen: true,
      menuItems: [
        {
          title: 'Доска',
          name: 'dashboard',
          icon: 'dashboard',
          to: 'dashboard'
        },
        {
          title: 'Заявки',
          name: 'flash',
          icon: 'flash',
          iconSrc: '~src/assets/flash.svg',
          to: '/queries',
          badge: '3'
        },
        // {
        //   title: 'Сообщения',
        //   name: 'messages',
        //   icon: 'messages'
        // },
        {
          title: 'Архив',
          name: 'archive',
          icon: 'archive',
          to: '/archive'
        },
        {
          title: 'Настройки',
          icon: 'settings',
          name: 'settings',
          to: '/admin'
        }
      ]
    }
  }
}
</script>
