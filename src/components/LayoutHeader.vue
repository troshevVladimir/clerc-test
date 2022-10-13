<template>
  <section>
    <div class="container">
      <div class="logo">
        <img src="/img/clerk.svg" alt="logo" />
      </div>
      <ui-bread-crumbs :data="breadCrumbs" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      breadCrumbs: [
        {
          text: "Главная",
          link: "#",
        },
        {
          text: "Рассылки",
          link: "#",
        },
        {
          text: "Хлебные крошки",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.logo {
  margin-bottom: 24px;
}

section > .container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bread-crumbs {
  margin-bottom: 24px;
}
</style>
