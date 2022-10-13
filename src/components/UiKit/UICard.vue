<template>
  <div class="card">
    <div class="card__contant">
      <p class="card__frequency">{{ data.frequency }}</p>
      <h3 class="card__title">{{ data.title }}</h3>
      <p class="card__description">{{ data.description }}</p>
      <div class="card__conditions">
        <div
          class="card__condition"
          v-for="(condition, idx) in data.conditions"
          :key="idx"
        >
          {{ condition.text }}
        </div>
      </div>
      <ui-checkbox v-model="selected">{{ data.amount }}</ui-checkbox>
    </div>
    <img class="card__img" :src="data.img" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: this.data.selected,
    };
  },
};
</script>

<style>
.card {
  padding: 24px;
  background: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
}

.card__contant {
  margin-right: 16px;
}

.card__img {
  right: 24px;
  top: 24px;
  align-self: start;
}

.card__frequency {
  font-weight: 400;
  font-size: 13px;
  line-height: 123%;
  color: #999999;
}

.card__title {
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  color: #000000;
  margin-bottom: 8px;
}

.card__description {
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #666666;
  margin-bottom: 16px;
}

.card__conditions {
  margin-bottom: 16px;
}

.card__condition {
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #000000;
  display: flex;
  align-items: center;
}

.card__condition:before {
  content: "";
  display: inline-block;
  margin-right: 8px;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='13' viewBox='0 0 16 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.08471 9.62365L1.93292 6.47186C1.57839 6.11733 1.00389 6.11631 0.648103 6.46959C0.290537 6.82464 0.289516 7.40265 0.645826 7.75896L5.08471 12.1978L15.3586 1.92397C15.7128 1.56972 15.7128 0.995371 15.3586 0.641122C15.0044 0.286991 14.4303 0.286855 14.076 0.640819L5.08471 9.62365Z' fill='%2300CC33'/%3E%3C/svg%3E");
}

.card__condition:not(:last-child) {
  margin-bottom: 8px;
}

@media screen and (max-width: 768px) {
  .card__img {
    order: -1;
    margin-bottom: 24px;
  }
  .card {
    padding: 16px;
    flex-direction: column;
  }

  .card__contant {
    margin-right: 0;
  }
}
</style>
