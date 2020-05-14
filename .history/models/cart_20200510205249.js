module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {}
    this.totalKcal = oldCart.totalKcal || 0
  
    this.add = function(item, id) {
      var storedItem = this.items[id]
      if (!storedItem) {
        storedItem = this.items[id] = { item: item, Kcal: 0 }
      }
      storedItem.Kcal = storedItem.item.Kcal
    }
  
    this.removeItem = function(id) {

      this.totalPrice -= this.items[id].price
      delete this.items[id]
    }
  
    this.generateArray = function() {
      var arr = []
      for (var id in this.items) {
        arr.push(this.items[id])
      }
      return arr
    }
  }