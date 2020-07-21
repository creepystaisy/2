const stock = [
  { id:1, name:"Apple", quantity:12, cost:5},
  { id:2, name:"Pineapple", quantity:4, cost:1000},
];

const origin = [
  { id:1, name:"Apple", quantity:12, cost:5},
  { id:2, name:"Pineapple", quantity:4, cost:1000},
];

const cart = [
   { id:1, name:"Apple", quantity:12, cost:5},
  { id:2, name:"Pineapple", quantity:4, cost:1000},
];

table = webix.ui ({
    width:300,
    rows:[  
    {
            view:"datatable",
            id:"stock_table",
            select: "row",
            autoConfig:true,
            data:stock,
            autoheight:true,
            autowidth:true,
            scroll:false,
            scheme:{
                $init:function(obj){ 
                    obj.index = this.count(); 
                }
            },
           on:{
                onItemClick:function(){
                    let id = +this.getSelectedId(true).join();
                    let sel = +this.getSelectedId(true).join();
                    sel--;

                   
                    let stock_id = stock.findIndex(function (item) {
                    return item.id === id
                    });
                    stock[stock_id].quantity--;
                    $$("stock_table").refresh();
                   
                   

                    let cart_id = cart.findIndex(function (item) {
                    return item.id === id
                    });
                    cart[cart_id].quantity++;
                    $$("cart_table").refresh();
                    
                },
            },

    },
    {
    	autowidth:true,
        height:10,
        
    },
    {
            view:"datatable",
            id:"cart_table",
            select: "row",
            autoConfig:true,
            data:cart,
            autoheight:true,
            autowidth:true,
            scroll:false,
            scheme:{
                $init:function(obj){ 
                    obj.index = this.count(); 
                }
            },
           on:{
                onItemClick:function(){
                    let id = +this.getSelectedId(true).join();
                    let sel = +this.getSelectedId(true).join();
                    sel--;

                    let cart_id = cart.findIndex(function (item) {
                    return item.id === id
                    });
                    cart[cart_id].quantity--;
                    $$("cart_table").refresh();


                    let stock_id = stock.findIndex(function (item) {
                    return item.id === id
                    });
                    stock[stock_id].quantity++;
                    $$("stock_table").refresh();
                   
                   

                    
                },
            },
    }
]
});



