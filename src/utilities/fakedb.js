//use localstorage
const addToDb = id=>{
    let shoppingCart={};
    //get shopping cart from storage
    const storedCart=localStorage.getItem('shopping-cart');
 
    if(storedCart){
        shoppingCart=JSON.parse(storedCart)
    }
   //if the property exits get it
    const quantity=shoppingCart[id];
    if(quantity){
        
        const newQuantity=quantity+1;
        //shopping cart e set kora
        shoppingCart[id]=newQuantity;
       //localStorage.setItem(id,newQuantity)
    }
    else{
        shoppingCart[id]=1;
       // localStorage.setItem(id,1)
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
  
}
const removeFromDb = id =>{
const storedCart=localStorage.getItem('shopping-cart');
if(storedCart){
    const shoppingCart=JSON.parse(storedCart);
    if(id in shoppingCart){
      delete shoppingCart[id];
      localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
    }
}
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {addToDb,removeFromDb}