(function(){
	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController',toBuy)
	.controller('AlreadyBoughtController',alreadyBought)
	.service('ShoppingListCheckOffService',listCheckoff);

	toBuy.$inject=['ShoppingListCheckOffService'];
	function toBuy(ShoppingListCheckOffService){
		
		this.toBuyList=ShoppingListCheckOffService.getbuyItems();
		this.bought=function(index){
			ShoppingListCheckOffService.removeItem(index);
		}

	}

	alreadyBought.$inject=['ShoppingListCheckOffService'];
	function alreadyBought(ShoppingListCheckOffService){
		this.boughtList=ShoppingListCheckOffService.getboughtItems();
	}


	function listCheckoff(){
		var toBuyList=[
		{
			name:"cookies",
			quantity:10
		},{
			name:"freshmilk",
			quantity:5
		},{
			name:"Apple",
			quantity:15
		},{
			name:"Bread",
			quantity:3
		},{
			name:"chip packets",
			quantity:6
		}];

		var boughtList=[];

		this.getbuyItems=function(){
			return toBuyList;
		}

		this.getboughtItems=function(){
			return boughtList;
		}

		this.removeItem=function(index){
			boughtList.push(toBuyList[index]);
			toBuyList.splice(index,1);

		}
	}

	

})();	