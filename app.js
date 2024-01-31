let peopleInfoBox = document.querySelector('.people-info-box');
let personTemplate = document.querySelector('.person-template').content;
let newPersonTemplate = new DocumentFragment();




fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
        .then(result =>{
           
     
            result.forEach((el)=>{

            let clonePersonTemplate = personTemplate.cloneNode(true);

                clonePersonTemplate.querySelector('.person-name').innerHTML = `Name: ${el.name}`
                clonePersonTemplate.querySelector('.person-username').innerHTML = `Username: ${el.username}`
                clonePersonTemplate.querySelector('.person-email').innerHTML = `Email: ${el.email}`
                clonePersonTemplate.querySelector('.person-phone').innerHTML = `Phone: ${el.phone}`
                clonePersonTemplate.querySelector('.person-address-city').innerHTML = `${el.address.city} - City`
                clonePersonTemplate.querySelector('.person-address-street').innerHTML = `${el.address.street} - Street`
                clonePersonTemplate.querySelector('.person-address-suite').innerHTML = `${el.address.suite} - Home`

                clonePersonTemplate.querySelector('.person-web').innerHTML = el.website

    
                peopleInfoBox.appendChild(clonePersonTemplate)
               

              
            })

})