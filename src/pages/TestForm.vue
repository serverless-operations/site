<template>
  <v-container class="p-top-contact--container">
    <v-row align="center" justify="center">
      <v-col cols="12" md="10" lg="8" class="p-top-contact--form">
        <div class="p-top-contact--form-shadow" />

        <form
          action="https://formspree.io/xpzypqoeh"
          method="POST"
          enctype="multipart/form-data"
          class="bg-white border shadow-md rounded lg:px-8 pt-6 pb-8 mt-10 mb-4"
          @submit="submit"
        >
          <div class="flex flex-wrap mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="name"
              >
                名前
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="山田 太郎"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                :class="{ 'border-red': $v.form.name.$error }"
                v-model.trim="$v.form.name.$model"
              >
              <p
                class="text-red text-xs italic"
                v-if="$v.form.name.$error && !$v.form.name.required"
              >名前は必須です</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="email">
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="example@nnn.com"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                :class="{ 'border-red': $v.form.email.$error }"
                v-model.trim="$v.form.email.$model"
              >
              <p
                class="text-red text-xs italic"
                v-if="$v.form.email.$error && !$v.form.email.required"
              >メールアドレスは必須です</p>
              <p
                class="text-red text-xs italic"
                v-if="$v.form.email.$error && !$v.form.email.email"
              >メールアドレスの形式が不正です。</p>
            </div>
          </div>

          <div class="flex flex-wrap mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="tel"
              >
                電話番号<small class="ml-1">(任意)</small>
              </label>
              <input
                id="tel"
                type="text"
                name="tel"
                placeholder="03-1234-1234"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              >
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="file">
                添付ファイル<small class="ml-1">(任意)</small>
              </label>
              <input
                id="file"
                type="file"
                name="file"
                class="w-full"
              >
            </div>
          </div>
          <div class="mx-3 mb-6 px-3">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="content">
              問い合わせ内容
            </label>
            <textarea
              name="content"
              rows="6"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 bg-grey-lighter focus:outline-none focus:bg-white"
              :class="{ 'border-red': $v.form.content.$error }"
              v-model.trim="$v.form.content.$model"
            ></textarea>
            <p
              class="text-red text-xs italic"
              v-if="$v.form.content.$error && !$v.form.content.required"
            >問い合わせ内容は必須です</p>
          </div>


          <div class="flex items-center justify-center">
            <button
              type="submit"
              class="bg-teal-dark hover:bg-teal text-lg text-white font-bold py-4 px-8 border-b-4 border-teal-darker hover:border-teal-dark rounded"
            >
              送信する
            </button>
          </div>
        </form>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  metaInfo: {
    title: 'Contact'
  },
  data: () => ({
    form: {
      name: '',
      email: '',
      tel: '',
      file: '',
      content: '',
    },
  }),
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      content: {
        required,
        minLength: minLength(4)
      }
    }
  },
  methods: {
    submit: function (event) {
      this.$v.$touch()
      if (this.$v.$invalid) {
        if (event) event.preventDefault()
        return false
      }
    }
  }
}
</script>