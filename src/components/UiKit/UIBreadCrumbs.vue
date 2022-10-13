<template>
  <div class="bread-crumbs">
    <div
      class="bread-crumbs__bread-crumb bread-crumb"
      v-for="(breadCrumb, idx) in data"
      :key="idx"
    >
      <a :href="breadCrumb.link" class="bread-crumb__link">
        {{ breadCrumb.text }}
      </a>
      <span class="bread-crumb__arrow" v-if="idx < data.length - 1">→</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.bread-crumbs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 10px;
}

.bread-crumb {
  display: flex;
  align-items: center;
}

.bread-crumb__link {
  font-weight: 400;
  font-size: 13px;
  line-height: 123%;
  color: #999999;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #e6edff;
}

.bread-crumb__arrow {
  display: inline-block;
  margin: 0 8px;
  padding-bottom: 2px;
  font-weight: 400;
  font-size: 13px;
  line-height: 123%;
  color: #999999;
  border-bottom: none;
}
</style>
