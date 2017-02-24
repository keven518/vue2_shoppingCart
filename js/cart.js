var vm = new Vue({
  el: '#app',
  data: {
    title:'hello2'
  },
  filters: {

  },
  mounted: function () {
    this.cartView();
  },
  methods: {
    cartView: function () {
      this.$http.get("data/cartData.json").then(function (res) {
          console.log(res.body);
      });
    }
  }
})