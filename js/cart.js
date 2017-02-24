var vm = new Vue({
  el: '#app',
  data: {
    title:'hello',
    productList: []
  },
  filters: {

  },
  mounted: function () {
    this.cartView();
  },
  methods: {
    cartView: function () {
      var _this = this;
      this.$http.get("data/cartData.json").then(function (res) {
          console.log(res.body.result.list);
          _this.productList = res.body.result.list;
          console.log(_this.productList);
          
      });
    }
  }
})