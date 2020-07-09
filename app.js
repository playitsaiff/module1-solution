(function (){
'use strict';

angular.module("ShoppingListCheckOff",[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
var buyNow=this;
buyNow.items=ShoppingListCheckOffService.getToBuy();
console.log(buyNow.items);
buyNow.removeItem=function(itemIndex){
    ShoppingListCheckOffService.removeItem(itemIndex);
}
// buyNow.check=buyNow.items.length;
}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
var boughtNow=this;
boughtNow.items=ShoppingListCheckOffService.getBought();
// boughtNow.check=boughtNow.items.length;
}

function ShoppingListCheckOffService(){
    var service=this;
    var buyingItems=[{name:'cookies',quantity:4},{name:'table',quantity:1},{name:"Kitkat",quantity:6},{name:"Tea",quantity:9},{name:"Taquila",quantity:1}];
    var buyedItems=[];
    service.removeItem=function(itemIndex){
        buyedItems.push(buyingItems[itemIndex]);
        buyingItems.splice(itemIndex,1);
    };
    service.getToBuy=function(){
        return buyingItems;
    }
    service.getBought=function(){
        return buyedItems;
    }
}
})();