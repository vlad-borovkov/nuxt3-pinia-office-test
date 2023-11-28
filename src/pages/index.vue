<template>
  <div class="container">
    <form
        class="form"
        @submit.prevent="submitForm">
      <h1 class="form__title">Форма обратной связи</h1>
      <p class="form__sub">Мы всегда готовы ответить на любой вопрос, а также услышать ваши отзывы и предложения по работе нашего сервиса</p>

      <div class="form__inputs-wrap">
      <input
          v-model="formData.name"
          type="text" id="name"
          placeholder="Новожилова Ирина"
          class="form__input"
          required
      >
        <input
            v-model="formData.email"
            type="email" id="email"
            placeholder="E-mail"
            class="form__input"
            required
        >
        <input
            v-model="formData.name"
            type="text" id="tel"
            placeholder="+7 927 627 00 55"
            class="form__input"
            required
        >
        <input
            v-model="formData.name"
            type="text" id="city"
            placeholder="Город"
            class="form__input"
            required
        >
      </div>
      <select
      class="form__select-theme"
      >
        <option value="" disabled selected>Выберите тему</option>
        <option v-for="item in items"> {{ item.name}}</option>
      </select>

      <textarea
      placeholder="Опишите ваш вопрос"
      class="form__question"
      ></textarea>
      <button
          class="form__button-sbt"
          type="submit">Отправить</button>
    </form>
  </div>

</template>

<script lang="ts">
// только завез интерфейс
import {IFeedback} from "types/DTO/feedback";
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        city: '',
      },
      items: [
        {
          id: 1,
          name: 'Отзывы и предложения',
          value: 'Отзывы и предложения',
        },
        {
          id: 2,
          name: 'Вопрос по контенту',
          value: 'Вопрос по контенту',
        },
        {
          id: 3,
          name: 'Неточность в описании товара',
          value: 'Неточность в описании товара',
        },
        {
          id: 4,
          name: 'Обмен и возврат',
          value: 'Обмен и возврат',
        },
      ]
    };
  },
  methods: {
    async submitForm() {
      try {
        // const response = await this.$axios.post('/api/submit-feedback', this.formData);

      } catch (error) {
        console.error('Ошибка при отправке данных:', error);

      }
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 98vh;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  width: 628px;
  height: 565px;
  border-radius: 8px;
  background: var(--brand-colors-white, #FFF);
}

.form__title {
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 130%; /* 36.4px */
}

.form__sub {
  color: var(--grey-colors-grey-dark, #5C5C5C);
  /* text_array/secondary */
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 16.8px */
}

.form__inputs-wrap {
  display: flex;
  flex-direction: row;
  height: 100px;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.form__input {
  display: flex;
  width: 280px;
  height: 40px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid var(--grey-colors-grey-middle, #A6A6A6);
  background: var(--brand-colors-white, #FFF);
}
.form__button-sbt {
  display: inline-flex;
  padding: 13px 52px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--grey-colors-grey-dark, #5C5C5C);
}

.form__select-theme {
  color: var(--grey-colors-grey-middle, #A6A6A6);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
}

.form__question {
  width: 581px;
  height: 120px;
}
</style>
