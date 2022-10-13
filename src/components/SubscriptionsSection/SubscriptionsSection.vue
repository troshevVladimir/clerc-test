<template>
  <section>
    <div class="container">
      <h1 class="section-title">Подписки «Клерка»</h1>

      <ui-tabs>
        <ui-tab :id="0" title="Рассылки">
          <DistributonsTab />
        </ui-tab>
        <ui-tab :id="1" title="Соцсети">
          <MessangersTab />
        </ui-tab>
        <ui-tab :id="2" title="Мессенджеры">
          <SocialsTab />
        </ui-tab>
      </ui-tabs>
    </div>
  </section>
</template>

<script>
import DistributonsTab from "./Tabs/DistributonsTab.vue";
import MessangersTab from "./Tabs/MessangersTab.vue";
import SocialsTab from "./Tabs/SocialsTab.vue";
export default {
  components: { DistributonsTab, MessangersTab, SocialsTab },
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

.section-title {
  font-weight: 500;
  font-size: 56px;
  line-height: 129%;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 24px;
}

@media screen and (max-width: 768px) {
  .section-title {
    font-size: 32px;
  }
}
</style>
