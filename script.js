class FoodOrder{
  constructor(food, quantity){
    this.food = food;
    this.quantity = quantity;
  }
}

const foodOrders = [];

function submitOrder(){
  const foodName = document.getElementById("name");
  const foodQuantity = document.getElementById("quantity");
  const foodMessage = document.getElementById("order-message");

  var name = foodName.value;
  var quantity = parseInt(foodQuantity.value);

  var foodOrder = new FoodOrder (name, quantity);


  if (name.length > 0 && 1 >= quantity >= 10 ){
    foodOrders.push(foodOrder);

    foodMessage.innerHTML = `${foodOrder.food} has been added to the list by quantity of ${foodOrder.quantity}`;

    reloadFoodOrders(); 

  } else if (name.length == 0){

    foodMessage.innerHTML = 'Please enter a valid item'

  } else if (quantity > 10 || quantity < 1 || foodQuantity.value.length == 0){

    foodMessage.innerHTML = 'Please enter a valid quantity'

  }

  foodName.value = '';
  foodQuantity.value = '';
}

function reloadFoodOrders(){
  const orderList = document.getElementById("orders").tBodies[0];
  orderList.innerHTML = "";

  for (const foodOrder of foodOrders){
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${foodOrder.food}</td>
      <td>${foodOrder.quantity}</td>
    `;
    orderList.appendChild(row);
  }
}