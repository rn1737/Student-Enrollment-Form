function renderSubmittedData() {
    var cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';       

    submittedData.forEach(function(data) {
        var card = document.createElement('div');
        card.classList.add('info-card');      

        var infoSection = document.createElement('div');
        infoSection.classList.add('info-section');   

        var heading = document.createElement('h3'); 
        heading.textContent = data.name;
        infoSection.appendChild(heading);  
        var email = document.createElement('p');
        email.textContent = 'Email: ' + data.email;
        infoSection.appendChild(email);                                                                                        
         
        var website = document.createElement('p');
        website.textContent = 'Website: ' + data.website;
        infoSection.appendChild(website); 

        var gender = document.createElement('p');
        gender.textContent = 'Gender: ' + data.gender;
        infoSection.appendChild(gender); 

        var skills = document.createElement('p');
        skills.textContent = 'Skills: ' + data.skills;
        infoSection.appendChild(skills); 

        card.appendChild(infoSection);  

        var imageSection = document.createElement('div');
        imageSection.classList.add('image-section');

        var image = document.createElement('img');
        image.src = data.image; 
        image.alt = 'Image';
        imageSection.appendChild(image); 

        card.appendChild(imageSection); 

        cardsContainer.appendChild(card);
    }); 
} 
 


var submittedData = [];


function handleFormSubmit(event) {
    event.preventDefault(); 
    var form = document.getElementById('info-form');   

    var name = form.elements['name'].value;  
    var email = form.elements['email'].value; 
    var website = form.elements['website'].value;
    var gender = form.elements['gender'].value;
    var skills = form.elements['skills'].value;
    var image = form.elements['image'].value;
    var data = {
        name: name,
        email: email,
        website: website,
        gender: gender,
        skills: skills,
        image: image 
    };

    submittedData.push(data);

    renderSubmittedData();

    form.reset();
}
var form = document.getElementById('info-form');
form.addEventListener('submit', handleFormSubmit);  