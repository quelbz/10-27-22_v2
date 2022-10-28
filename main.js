let itemsInCart = {
    cart: []
};

function add_item_in_cart() {
    let add_item = document.getElementById("add_item").value;
    let add_price = Number(document.getElementById("add_price").value);
    //alert(add_item + add_price);
    itemsInCart.cart.push({item: add_item, price: add_price});
    items_added_in_cart();
    localStorage.setItem("item",JSON.stringify(itemsInCart));
};

function items_added_in_cart () {
    let item_added = document.getElementById("itemCart");
    let current = "";
    if (itemsInCart.cart == "") {
        item_added.innerHTML = "No items in cart";
    } else {
        itemsInCart.cart.forEach(function(show_item){
            current += "<b>Item: </b>" + show_item.item + " <b>Price: </b>" + show_item.price + "<hr>";
        });
            item_added.innerHTML = current;
            document.getElementById("add_item").value = "";
            document.getElementById("add_price").value = "";
    }
}
items_added_in_cart ();


