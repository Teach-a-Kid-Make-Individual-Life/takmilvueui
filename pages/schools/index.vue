<template>
  <div class="page-schools p-4">
    <h1 class="h5 mb-4">Schools</h1>
    <div class="page-schools__table">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th v-for="(hd, index) in headers" :key="index">
                {{ hd.label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="school in schoolsList" :key="school.id">
              <td v-for="(header, index) in headers" :key="`row-${index}`">
                <div
                  v-if="header.key !== 'thumbnail'"
                  class="page-schools__table__cell"
                >
                  {{ getValue({ product: school, header }) }}
                </div>

                <div v-else>
                  <img :src="school[header.key]" alt="" height="40" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="page-schools__pagination" v-if="schools?.totalPages">
      <Pagination
        :total="schools.records"
        @pageChange="pageChange"
        :perPage="limit"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  getListSchool,
  type ProductHeader as SchoolHeader,
  type ListSchoolResponse,
  type SchoolType,
} from '@/src/api/schools';

const schools = ref<ListSchoolResponse>({});

const schoolsList = computed<SchoolType[]>(() => {
  return (
    (schools.value?.data || []).map((item, index) => {
      return { ...item, order: item.name };
    }) || []
  );
});

const headers: SchoolHeader[] = [
  {
    key: '_id',
    label: 'ID',
  },
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'brand',
    label: 'Brand',
  },
  {
    key: 'price',
    label: 'Price',
  },
  {
    key: 'discountPercentage',
    label: 'Discount (%)',
  },
  {
    key: 'rating',
    label: 'Rating',
  },
  {
    key: 'stock',
    label: 'Stock',
  },
  {
    key: 'category',
    label: 'Category',
  },
  {
    key: 'thumbnail',
    label: 'Thumbnail',
  },
];

const currentPage = ref(1);
const limit = ref(10);
const getSchools = async () => {
  try {
    const response = await getListSchool({
      pageSize: limit.value,
      page: (currentPage.value-1) * limit.value,
    });
    if (response?.data) {
      schools.value = response;
    }
    console.log("schools api response", response, schools.value.totalPages);
  } catch(error: any) {
    console.log("schools error response", error)
  }
};

const getValue = ({
  product,
  header,
}: {
  product: SchoolType;
  header: SchoolHeader;
}) => {
  /*@ts-ignore*/
  return product[header.key];
};

const pageChange = (page: number) => {
  currentPage.value = page;
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
