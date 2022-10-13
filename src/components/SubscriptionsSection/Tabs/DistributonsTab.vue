<template>
  <div class="top-wrapper">
    <h2 class="title">Выберите рассылки, которые подходят именно вам</h2>
    <div class="input">
      <ui-input placeholder="Электронная почта" v-model="inputValue"></ui-input>
      <!-- Костыль, обычно на проектах есть CurentDevice в сторе и миксином подключается, тут не стал делать, закостылил -->
      <ui-button class="desktop" @clicked="submit">Подписаться</ui-button>
      <ui-button class="mobile"
        ><div class="icon" @click="submit"></div
      ></ui-button>
    </div>
    <ui-checkbox size="small" @change="selectAll">
      Подписаться на все рассылки
    </ui-checkbox>
  </div>
  <div class="cards" :key="key">
    <ui-card v-for="(card, id) in cards" :key="id" :data="card"></ui-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      key: 0,
      cards: [
        {
          selected: true,
          title: "Утренний бухгалтер",
          description:
            "Самые важные новости и события за день. Кратко, по делу, структурировано.",
          frequency: "Перед рассветом",
          img: "/img/cardIcon1.jpg",
          conditions: [
            { text: "Новости для бухгалтеров, ИП и директора" },
            { text: "Подборка статей за день" },
          ],
          amount: "Уже получает 59 342 человек",
        },
        {
          selected: false,
          title: "Ночной бухгалтер",
          description:
            "Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.",
          frequency: "После заката",
          img: "/img/cardIcon1.jpg",
          conditions: [
            { text: "Анализ, оценка и только самое главное" },
            { text: "Лучшие комменты юзеров в обзоре" },
          ],
          amount: "Уже получает 37 480 человек",
        },
        {
          selected: false,
          title: "Ножницы скидок",
          description:
            "Подборка самых выгодных и полезных спецпредложений от надежных компаний.",
          frequency: "Раз в две недели",
          img: "/img/cardIcon1.jpg",
          conditions: [
            { text: "Акции и скидки от лидеров рынка" },
            { text: "Те, кто подписался – экономят много денег " },
          ],
          amount: "Уже получает 92 118 человек",
        },
        {
          selected: false,
          title: "Чемодан вебинаров",
          description:
            "Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.",
          frequency: "По мере появления анонсов",
          img: "/img/cardIcon1.jpg",
          conditions: [
            { text: "Никогда не пришлем платные вебинары" },
            { text: "Подборка топовых тем для вебинаров" },
          ],
          amount: "Уже получает 92 082 человек",
        },
      ],
    };
  },
  methods: {
    selectAll(val) {
      if (typeof val !== "boolean") return;
      this.cards = this.cards.map((card) => {
        card.selected = val;
        return card;
      });
      this.update();
    },
    update() {
      this.key++;
    },
    submit() {
      console.log(this.inputValue);
    },
  },
};
</script>

<style scoped>
.top-wrapper {
  display: flex;
  flex-direction: column;
  padding: 0 24px 32px;
}

.input {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
}

input {
  border-radius: 4px 0 0 4px;
}

.input > * {
  position: relative;
}

.input::before {
  position: absolute;
  content: "";
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  border-radius: 4px 0 0 4px;
  margin-right: calc(56px / 2);
}

.title {
  font-weight: 500;
  font-size: 24px;
  color: #000000;
  margin-bottom: 24px;
  align-self: center;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px; /* не поддерзивается в старых брауузерах даже с полифилом, можно сделать на падингах и отрицательных маржинах*/
}

.card {
  max-width: calc(50% - 24px / 2);
}

.mobile {
  display: none;
}

.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.34998 17.355L12.6933 12L7.34998 6.645L8.99498 5L15.995 12L8.99498 19L7.34998 17.355Z' fill='white'/%3E%3C/svg%3E%0A");
}

@media screen and (max-width: 600px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }

  .card {
    max-width: 100%;
  }

  .top-wrapper {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
