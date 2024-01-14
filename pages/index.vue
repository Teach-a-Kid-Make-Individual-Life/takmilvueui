<template>
  <div class="card">
    <h5>Dashboard</h5>
    <div class="grid">
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0 shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-c-500 font-medium mb-3">Schools</span>
                        <div class="text-900 font-medium text-xl">{{stats?.total}}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                </div>
                <div class="text-green-500 font-medium">No Regional Cordinator : {{ stats?.noRegionalCoordinator}}</div>
                <div class="text-green-500 font-medium">No Coordinator : {{ stats?.noCoordinator}}</div>
                <div class="text-green-500 font-medium">No Teacher : {{ stats?.noTeacher}}</div>
                <div class="text-green-500 font-medium">No Status : {{ stats?.noStatus}}</div>
                <div class="text-green-500 font-medium">No Inventory : {{ stats?.noInventory}}</div>
                <div class="text-green-500 font-medium">No Feedback: {{ stats?.noFeedback}}</div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-c-500 font-medium mb-3">Teachers</span>
                        <div class="text-900 font-medium text-xl">{{ teacherTotal }}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">%52+ </span>
                <span class="text-c-500">since last week</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-c-500 font-medium mb-3">Students</span>
                        <div class="text-900 font-medium text-xl">{{studentTotal}}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">520  </span>
                <span class="text-c-500">newly registered</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-c-500 font-medium mb-3">Comments</span>
                        <div class="text-900 font-medium text-xl">152 Unread</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-comment text-purple-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">85 </span>
                <span class="text-c-500">responded</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getSchoolStats, type SchoolStats } from '@/src/api/schools';
import { getTeacherCount } from '@/src/api/teachers';
import { getStudentCount } from '@/src/api/students';
import { getListPost, type ListPostResponse } from '@/src/api/teachers';
import { getListUser, type ListUserResponse } from '@/src/api/users';
import { getListTodo, type ListTodoResponse } from '@/src/api/students';

const stats = ref<SchoolStats>();
const teacherTotal = ref("");
const studentTotal = ref("");
const posts = ref<ListPostResponse>({});
const users = ref<ListUserResponse>({});
const todos = ref<ListTodoResponse>({});

const getSchools = async () => {
  try {
    const response = await getSchoolStats();
    stats.value = response;
    const r1 = await getTeacherCount();
    teacherTotal.value = r1.toString();    
    const r2 = await getStudentCount();
    studentTotal.value = r2.toString();        
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
.text-c-500 {
  color: var(--surface-500) !important;
}
</style>
