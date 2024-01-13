<template>
  <div class="page-schools p-4">
    <h1 class="h5 mb-4">Schools</h1>
    <DataTable :value="schools.data" stripedRows tableStyle="min-width: 50rem"
      lazy paginator :first="currentRecord" :rows="10" dataKey="_id"
            :totalRecords="totalRecords" :loading="loading" @page="onPage($event)">
      <Column field="name" header="Name"></Column>
      <Column field="status" header="Status"></Column>
      <Column field="startYear" header="Start Year"></Column>
      <Column field="address.district" header="District"></Column>
      <Column field="address.state" header="Province"></Column>
      <Column field="teacher" header="Teacher">
        <template #body="slotProps">
            {{ slotProps.data.teacher?.firstName + " " + slotProps.data.teacher?.lastName}}
        </template>
      </Column>
      <Column field="coordinator" header="Coordinator">
        <template #body="slotProps">
            {{ slotProps.data.coordinator?.firstName + " " + slotProps.data.coordinator?.lastName}}
        </template>
      </Column>
      <Column field="regionalCoordinator" header="Regional Coordinator">
        <template #body="slotProps">
            {{ slotProps.data.regionalCoordinator?.firstName + " " + slotProps.data.regionalCoordinator?.lastName}}
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script lang="ts" setup>
import {
  getListSchool,
  type ListSchoolResponse,
  type SchoolType,
} from '@/src/api/schools';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
const schools = ref<ListSchoolResponse>({});

const schoolsList = computed<SchoolType[]>(() => {
  return (
    (schools.value?.data || []).map((item, index) => {
      return { ...item, order: item.name };
    }) || []
  );
});

const currentRecord = ref(0);
const currentPage = ref(1);
const totalRecords = ref(1);
const loading = ref(false);

const limit = ref(10);
const getSchools = async () => {
  try {
    const response = await getListSchool({
      pageSize: limit.value,
      page: currentPage.value,
    });
    if (response?.data) {
      schools.value = response;
      totalRecords.value = response.records || 0;
    }
  } catch(error: any) {
    console.log("schools error response", error)
  }
};

const onPage = (event: any) => {
  console.log("setting page number", event.first/event.rows);
  currentPage.value = event.first/event.rows;
};

watch(
  () => currentPage.value,
  () => {
    getSchools();
  },
);

onBeforeMount(() => {
  getSchools();
});

definePageMeta({
  layout: 'dashboard',
  middleware: 'dashboard',
});
</script>

<style lang="scss">
.page-schools {
  &__pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  &__table {
    &__cell {
      white-space: nowrap;
    }
    td {
      vertical-align: middle;
    }
    th {
      white-space: nowrap;
    }
  }
}
</style>
