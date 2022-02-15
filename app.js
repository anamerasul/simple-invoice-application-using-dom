// console.log('skip')

const detailsButton=document.getElementById('detail-submit-btn');

detailsButton.addEventListener('click', function(e){
     const buyerDetails=document.getElementById('buyer-details-input');

     const buyerDetailsValue=buyerDetails.value;

     console.log(buyerDetailsValue);

     const buyerInfo= document.getElementById('buyer-info');

     buyerInfo.innerText=buyerDetailsValue;

     buyerDetails.value='';

});

const addProductBtn=document.getElementById('add-details-btn');

addProductBtn.addEventListener('click',function(e){
        console.log('click');

        const itemName=document.getElementById('item-name-input');

        const itemPrice=document.getElementById('item-price-input');

        const itemQuantity=document.getElementById('item-quantity-input');

        const infoTable=document.getElementById('info-table');

        // const totalPrice=praseInt(itemPrice.value) * praseInt(itemQuantity.value)

        const itempriceValue=parseInt(itemPrice.value);

        const itemQuantityValue=parseInt(itemQuantity.value)

       const totalPrice=itempriceValue * itemQuantityValue

        const tr=document.createElement('tr');
        const th=document.createElement('th');
        const td1=document.createElement('td');
        const td2=document.createElement('td');
        const td3=document.createElement('td');

        td3.classList.add('item-total')

        th.innerText=itemName.value;
        td1.innerText=itemPrice.value;
        td2.innerText=itemQuantity.value;
        td3.innerText=totalPrice

        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        infoTable.appendChild(tr);




        itemName.value='';
        itemPrice.value='';
        itemQuantity.value='';

        // SubTotal();
        // document.getElementById('sub-total').innerText= SubTotal();

        totalCalculation();
});

// function element(param){

// }

function totalCalculation(){

        const subTotal = calculateSubTotal();
const subTotalDisplay=document.getElementById('sub-total');

subTotalDisplay.innerText= subTotal;

const tax=subTotal*0.2

const taxdisplay=document.getElementById('tax');

taxdisplay.innerText=tax.toFixed(2);

const grandTotal=subTotal+tax;

const grandtotalDisplay=document.getElementById('grand-total');


grandtotalDisplay.innerText=grandTotal;

document.getElementById('grand-total-2').innerText=grandTotal;

};




function calculateSubTotal(){

        let subTotal=0;

        
        const cost=document.getElementsByClassName('item-total');

        for(let i=0; i < cost.length; i++){
                // debugger
                const element=cost[i];
                // console.log(element.innertext)
                const price=parseInt(element.innerText);

                subTotal=subTotal+price;


        }

        return subTotal;


}




// function calculateSubTotal() {
//         let subTotal = 0;
      
//         const cost = document.getElementsByClassName("item-total");
      
//         for (let i = 0; i < cost.length; i++) {
//           const element = cost[i]; //<td class="item-total">35</td>
//           const price = parseInt(element.innerText);
      
//           subTotal = subTotal + price;
//         }
      
//         return subTotal;
//       }
