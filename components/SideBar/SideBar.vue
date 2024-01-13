<template>
  <ul class="layout-menu">
      <NuxtLink
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
        >
        <li class="menu-item-custom">
          <i :class="link.icon" class="layout-menuitem-icon" />
          <span class="layout-menuitem-text">{{ link.label }}</span>
        </li>
      </NuxtLink>
  </ul>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const links = [
  {
    label: 'Home',
    to: '/',
    icon: 'pi pi-fw pi-home',
  },
  {
    label: 'Schools ',
    to: '/schools',
    icon: 'pi pi-fw pi-table',
  },
  {
    label: 'Posts',
    to: '/posts',
    icon: 'pi pi-fw pi-database',
  },
  {
    label: 'Users',
    to: '/users',
    icon: 'pi pi-fw pi-user-edit',
  },
  {
    label: 'Todos',
    to: '/todos',
    icon: 'pi pi-fw pi-user-edit',
  },
];
const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  },
  index: {
    type: Number,
    default: 0
  },
  root: {
    type: Boolean,
    default: false
  },
  parentItemKey: {
    type: String,
    default: null
  }
})
const isActiveMenu = ref(false)
const checkActiveRoute = (item) => {
  return route.path === item.to
}

const items = ref([
    {
        label: 'File',
        icon: 'pi pi-file',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus',
                items: [
                    {
                        label: 'Document',
                        icon: 'pi pi-file'
                    },
                    {
                        label: 'Image',
                        icon: 'pi pi-image'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-video'
                    }
                ]
            },
            {
                label: 'Open',
                icon: 'pi pi-folder-open'
            },
            {
                label: 'Print',
                icon: 'pi pi-print'
            }
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-file-edit',
        items: [
            {
                label: 'Copy',
                icon: 'pi pi-copy'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ]
    },
    {
        label: 'Search',
        icon: 'pi pi-search'
    },
    {
        separator: true
    },
    {
        label: 'Share',
        icon: 'pi pi-share-alt',
        items: [
            {
                label: 'Slack',
                icon: 'pi pi-slack'
            },
            {
                label: 'Whatsapp',
                icon: 'pi pi-whatsapp'
            }
        ]
    }
]);
</script>
<style lang="scss" scoped>
  .menu-item-custom {
    margin-top: 20px;
  }
</style>
