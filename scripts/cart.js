
let container1 = document.getElementById("list");
let container2 = document.getElementById("bill");
let userdata=JSON.parse(localStorage.getItem("mens"))||[];
let cartitem = document.getElementById("count");
let totalAmount = 0;
let num=0;




displayProducts(userdata);
printbill();

function displayProducts(data) {
  
  container1.innerHTML = null;

  data.forEach((element,index) => {

    totalAmount += element.price;
    cartitem.innerText=data.length;

    let innerlist = document.createElement("div");
    innerlist.classList.add("innerlist");
    let item = document.createElement("div");
    item.classList.add("item_details")
    let image = document.createElement("img");
    image.setAttribute("src", element.avatar);
    image.classList.add("avatar");
    let name = document.createElement("h3");
    name.innerText = element.name;
    name.classList.add("name");

    let eachitem = document.createElement("div");
    let price = document.createElement("h4");
    price.innerText = "Rs."+element.price;
    eachitem.classList.add("price");

    let totalprice = document.createElement("div");
    let amount = document.createElement("h4");
    amount.innerText = "Rs."+element.price;
    totalprice.classList.add("subtotal")
  
    let increment = document.createElement("button");
    increment.classList.add("increment")
    increment.innerText = "+";
    increment.addEventListener("click", function add() {
      quantity.innerText++;
      totalAmount += element.price;
      amount.innerText=element.price*quantity.innerText;
      printbill();
    })

    let quantity = document.createElement("span");
    quantity.innerText = 1;

    let decrement = document.createElement("button");
    decrement.classList.add("decrement");
    decrement.innerText = "-";
    decrement.addEventListener("click", function minus() {
      if (quantity.innerText > 1) {
        quantity.innerText--;
        totalAmount -= element.price;
        amount.innerText=element.price*quantity.innerText;
        printbill();
      }
  
    
    })

    let Delete = document.createElement("button");
    Delete.classList.add("delete");
    Delete.innerText = "Remove";
    Delete.addEventListener("click",removeitem);

    function removeitem(){
      var cart=JSON.parse(localStorage.getItem("mens"));
      cart=cart.filter((el)=>el.id!==element.id);
      localStorage.setItem("mens",JSON.stringify(cart));
      window.location.reload();
 }
    
    totalprice.append( amount);
    eachitem.append( price);
    item.append(image, name);
    innerlist.append(item, eachitem,decrement,quantity,increment,Delete, totalprice);
    container1.append(innerlist);
  })
  
}
 function printbill(){
  container2.innerHTML=null;

  if(cartitem.innerText>=1){
    let order = document.createElement("h3");
    order.innerText = "ORDER DETAILS"
    let summary = document.createElement("p");
    summary.innerText = "Order Summary";
    let innerbill1 = document.createElement("div");
    let mrp = document.createElement("p");
    mrp.innerText = "Total Mrp";
    let total_bill = document.createElement("p");
    
      total_bill.innerText = "Rs."+totalAmount;
    
    let innerbill2 = document.createElement("div");
    let shipcharge = document.createElement("p");
    shipcharge.innerText = "Shipping charges";
    let shippingcharge = document.createElement("p");
    shippingcharge.innerText = 0;
    let innerbill3 = document.createElement("div");
    let overallamount = document.createElement("h2");
    overallamount.innerText = "TOTAL AMOUNT";
   
      let overall_amount = document.createElement("p");
      
        overall_amount.innerText = "Rs."+totalAmount;
      
     
    
    
    let checkout = document.createElement("button");
    checkout.innerText = "CONTINUE CHECKOUT";
    checkout.classList.add("checkout");
    
  
  
    innerbill1.append(mrp,total_bill);
    container2.append(order, summary, innerbill1, innerbill2, innerbill3, checkout);
    innerbill3.append(overallamount,overall_amount);
    innerbill2.append(shipcharge, shippingcharge);
    
  }
 }
 


