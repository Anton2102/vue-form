<template>
  <div class="form pt-6">
    <div class="summary text-red" v-if="$v.form.$error">
      Ошибка в заполнении Атрибутов формы:
    </div>
    <form @submit.prevent="submit" novalidate>
      <div class="flex justify-center my-6">

      <hr>

      <h2> Атрибуты формы </h2>

      <div class="px-4">
          <surname-component v-model="form.surname" :v="$v.form.surname " />
      </div>

        <div class="px-4">
           <name-component v-model="form.name" :v="$v.form.name" />
        </div>

        <div class="px-4">
          <sursurname-component v-model="form.sursurname" :v="$v.form.sursurname" />
        </div>

        <div class="px-4">
          <birthdate-component v-model="form.birthdate" :v="$v.form.birthdate" />
        </div>

        <div class="px-4">
          <telephone-component v-model="form.telephone" :v="$v.form.telephone" />
        </div>

        <div class="px-4">
          <input type="radio" name="sex" id="one" value="Один">
            <label for="one">муж</label>
          <input type="radio" name="sex" id="two" value="Два">
            <label for="two">жен</label>
        </div>

        <div class="px-4">
          <label for="one">Группа клиентов:* </label>
          <br>
          <select multiple>
            <option>VIP</option>
            <option>Проблемные</option>
            <option>ОМС</option>
          </select>
        </div>

        <div class="px-4">
          <label>Лечащий врач: </label>
          <select>
            <option>Иванов</option>
            <option>Захаров</option>
            <option>Чернышев</option>
          </select>
        </div>

        <div class="px-4">
          <label>Не отправлять смс</label>
          <input type="checkbox">
        </div>

        <h2>Адресс</h2>

        <div class="adress">

          <div class="px-4">
            <indexru-component v-model="form.indexru" :v="$v.form.indexru" />
          </div>

          <div class="px-4">
            <nation-component v-model="form.nation" :v="$v.form.nation" />
          </div>

          <div class="px-4">
            <region-component v-model="form.region" :v="$v.form.region" />
          </div>

          <div class="px-4">
            <city-component v-model="form.city" :v="$v.form.city" />
          </div>

          <div class="px-4">
            <streat-component v-model="form.streat" :v="$v.form.streat" />
          </div>

          <div class="px-4">
            <house-component v-model="form.house" :v="$v.form.house" />
          </div>

        </div>



      </div>
      <div class="text-center">
        <button type="submit" class="button">
          Создать
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { checkBirthDate, checkTelephone } from "@/validators";
import NameComponent from "./attrForm/NameComponent.vue";
import SurnameComponent from "./attrForm/SurnameComponent.vue";
import SursurnameComponent from "./attrForm/SurSurNameComponent.vue";
import BirthdateComponent from "./attrForm/BirthDateComponent.vue";
import TelephoneComponent from "./attrForm/TelephoneComponent.vue";

import IndexruComponent from "./adress/IndexruComponent.vue";
import NationComponent from "./adress/NationComponent.vue";
import RegionComponent from "./adress/RegionComponent.vue";
import CityComponent from "./adress/CityComponent.vue";
import StreatComponent from "./adress/StreatComponent.vue";
import HouseComponent from "./adress/HouseComponent.vue";

export default {
  name: "FormComponent",

  components: {
    NameComponent,
    SurnameComponent,
    SursurnameComponent,
    BirthdateComponent,
    TelephoneComponent,
    IndexruComponent,
    NationComponent,
    RegionComponent,
    CityComponent,
    StreatComponent,
    HouseComponent
   },

  data() {
    return {
      form: {
        name: "",
        surname: "",
        sursurname: "",
        birthdate: "",
        telephone: "",
        indexru: "",
        nation: "",
        region: "",
        city: "",
        streat: "",
        house: ""
      }
    };
  },

  validations: {
    form: {
      surname: { required },
      name: { required },
      sursurname: {},
      birthdate: { checkBirthDate },
      telephone: { checkTelephone },
      indexru: {},
      nation: {},
      region: {},
      city: { required },
      streat: {},
      house: {}
    }
  },

  methods: {
    submit() {
      this.$v.form.$touch();
      // if its still pending or an error is returned do not submit
      if (this.$v.form.$pending || this.$v.form.$error) return;
      // to form submit after this
      alert("Form submitted");
    }
  }
};
</script>
