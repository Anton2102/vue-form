<template>
  <div class="form pt-6">
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
          <sex-component v-model="form.sex" :v="$v.form.sex" />
        </div>

        <div class="px-4">
          <groupclient-component v-model="form.groupclient" :v="$v.form.groupclient" />
        </div>

        <div class="px-4">
          <doctor-component v-model="form.doctor" :v="$v.form.doctor" />
        </div>

        <div class="px-4">
          <label>Не отправлять смс </label>
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

        <h2>Паспорт</h2>

        <div class="pasport">

          <div class="px-4">
            <typedocument-component v-model="form.typedocument" :v="$v.form.typedocument" />
          </div>

          <div class="px-4">
            <series-component v-model="form.series" :v="$v.form.series" />
          </div>

          <div class="px-4">
            <numberseries-component v-model="form.numberseries" :v="$v.form.numberseries" />
          </div>

          <div class="px-4">
            <issued-component v-model="form.issued" :v="$v.form.issued" />
          </div>

          <div class="px-4">
            <dateissued-component v-model="form.dateissued" :v="$v.form.dateissued" />
          </div>
        </div>

      </div>
      <div class="text-center">
        <button type="submit" class="button">
          Создать
        </button>
        <div class="summary text-red" v-if="$v.form.$error">
          Необходимо корректно заполнить обязательные поля!
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { checkBirthDate, checkTelephone, checkDateIssued } from "../validators";

import NameComponent from "./attrForm/NameComponent.vue";
import SurnameComponent from "./attrForm/SurnameComponent.vue";
import SursurnameComponent from "./attrForm/SurSurNameComponent.vue";
import BirthdateComponent from "./attrForm/BirthDateComponent.vue";
import TelephoneComponent from "./attrForm/TelephoneComponent.vue";
import SexComponent from "./attrForm/SexComponent.vue";
import GroupclientComponent from "./attrForm/GroupclientComponent.vue";
import DoctorComponent from "./attrForm/DoctorComponent.vue";

import IndexruComponent from "./adress/IndexruComponent.vue";
import NationComponent from "./adress/NationComponent.vue";
import RegionComponent from "./adress/RegionComponent.vue";
import CityComponent from "./adress/CityComponent.vue";
import StreatComponent from "./adress/StreatComponent.vue";
import HouseComponent from "./adress/HouseComponent.vue";

import TypedocumentComponent from "./pasport/TypedocumentComponent.vue";
import SeriesComponent from "./pasport/SeriesComponent.vue";
import NumberseriesComponent from "./pasport/NumberseriesComponent.vue";
import IssuedComponent from "./pasport/IssuedComponent.vue";
import DateissuedComponent from "./pasport/DateissuedComponent.vue";




export default {
  name: "FormComponent",

  components: {
    NameComponent,
    SurnameComponent,
    SursurnameComponent,
    BirthdateComponent,
    TelephoneComponent,
    SexComponent,
    GroupclientComponent,
    DoctorComponent,

    IndexruComponent,
    NationComponent,
    RegionComponent,
    CityComponent,
    StreatComponent,
    HouseComponent,

    TypedocumentComponent,
    SeriesComponent,
    NumberseriesComponent,
    IssuedComponent,
    DateissuedComponent
   },

  data() {
    return {
      form: {
        name: "",
        surname: "",
        sursurname: "",
        birthdate: "",
        telephone: "",
        sex: "",
        groupclient: "",
        doctor: "",

        indexru: "",
        nation: "",
        region: "",
        city: "",
        streat: "",
        house: "",

        typedocument: "",
        series: "",
        numberseries: "",
        issued: "",
        dateissued: ""
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
      sex: {},
      groupclient: { required },
      doctor: {},

      indexru: {},
      nation: {},
      region: {},
      city: { required },
      streat: {},
      house: {},

      typedocument: { required },
      series: {},
      numberseries: {},
      issued: {},
      dateissued: { checkDateIssued }
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
