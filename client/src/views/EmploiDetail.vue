<template>
  <div>
    <h1>je suis là</h1>
    {{info.title}}
  </div>
</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      info: {}
    };
  },
  methods: {
    detail() {
      api.getToken().then(res => {
        api.showOffer(res.access_token).then(result => {
          this.info = result.data;
          console.log(this.info);
        });
      });
    }
  }
};
</script>