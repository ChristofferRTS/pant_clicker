let saveTimer = 45;

let timeout = saveTimer*1000;

document.getElementById('save').addEventListener('click', function(clickEvent){
    save();
});


function save(){

    console.log('saved');
    let varObj = {
        PriceIncreaser,apps,BuildingAmount,PantCount,a,StartClickValue,upgradeClickerPrice,upgradeClickerAmount,priceArr,amountArr
    }


    localStorage.setItem('data',JSON.stringify(varObj));
}
save();


(function autoSave() {
    setTimeout(function () {save();autoSave()
    }, timeout); 
  }());