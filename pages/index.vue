<template>
  <div class="p-4 home-page">
    <h1 class="h5 mb-4">Overview</h1>
    <div class="home-page__cards container px-0">
      <div class="row">
        <div class="col col-sm-6 col-md-4 col-lg-3 mb-3">
          <CardSummaryCard
            title="Schools"
            :subTitle="schoolTotal"
            to="/schools"
          />
        </div>
        <div class="col col-sm-6 col-md-4 col-lg-3 mb-3">
          <CardSummaryCard
            title="Posts"
            :subTitle="schoolTotal?.total || 0"
            to="/posts"
          />
        </div>
        <div class="col col-sm-6 col-md-4 col-lg-3 mb-3">
          <CardSummaryCard
            title="Users"
            :subTitle="users?.total || 0"
            to="/users"
          />
        </div>
        <div class="col col-sm-6 col-md-4 col-lg-3 mb-3">
          <CardSummaryCard
            title="Todos"
            :subTitle="todos?.total || 0"
            to="/todos"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getSchoolCount } from '@/src/api/schools';
import { getListPost, type ListPostResponse } from '@/src/api/posts';
import { getListUser, type ListUserResponse } from '@/src/api/users';
import { getListTodo, type ListTodoResponse } from '@/src/api/todos';

const schoolTotal = ref("");
const posts = ref<ListPostResponse>({});
const users = ref<ListUserResponse>({});
const todos = ref<ListTodoResponse>({});

const getSchools = async () => {
  try {
    const response = await getSchoolCount();
    schoolTotal.value = response.toString();    
  } catch {}
};

const getPosts = async () => {
  try {
    const response = await getListPost();
    if (response?.posts) {
      posts.value = response;
    }
  } catch {}
};

const getUsers = async () => {
  try {
    const response = await getListUser();
    if (response?.users) {
      users.value = response;
    }
  } catch {}
};

const getTodos = async () => {
  try {
    const response = await getListTodo();
    if (response?.todos) {
      todos.value = response;
    }
  } catch {}
};

onBeforeMount(() => {
  getSchools();
  getPosts();
  getUsers();
  getTodos();
});
</script>

<style lang="scss">
.home-page {
  &__cards {
    display: grid;
    gap: 24px;

    @media screen {
    }
  }
}
</style>
