<template>
  <div class="page-products p-4">
    <h1 class="h5 mb-4">Products</h1>
    <div class="page-products__table">
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
            <tr v-for="product in productList" :key="product.id">
              <td v-for="(header, index) in headers" :key="`row-${index}`">
                <div
                  v-if="header.key !== 'thumbnail'"
                  class="page-products__table__cell"
                >
                  {{ getValue({ product, header }) }}
                </div>

                <div v-else>
                  <img :src="product[header.key]" alt="" height="40" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="page-products__pagination" v-if="products?.total">
      <Pagination
        :total="products.total"
        @pageChange="pageChange"
        :perPage="limit"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  getListProduct,
  type ProductHeader,
  type ListProductResponse,
  type ProductType,
} from '@/src/api/products';
const products = ref<ListProductResponse>({});

const productList = computed<ProductType[]>(() => {
  return (
    (products.value?.products || []).map((item, index) => {
      return { ...item, order: item.id };
    }) || []
  );
});

const headers: ProductHeader[] = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'title',
    label: 'Title',
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

const currentPage = ref(0);
const limit = ref(5);
const getProducts = async () => {
  try {
    const response = await getListProduct({
      limit: limit.value,
      skip: (currentPage.value - 1) * limit.value,
    });
    if (response?.products) {
      products.value = response;
    }
  } catch {}
};

const getValue = ({
  product,
  header,
}: {
  product: ProductType;
  header: ProductHeader;
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
    getProducts();
  },
);

onBeforeMount(() => {
  getProducts();
});

definePageMeta({
  layout: 'dashboard',
});
</script>

<style lang="scss">
.page-products {
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
