document.body.style.fontFamily = 'san-serif, helvetica';

let wrapper = document.querySelector('.wrapper');

let getDate = () => {
    let d = new Date();
    
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let monthIndex = d.getMonth();
    let year = d.getFullYear();
    let date = d.getDate();
    let hour = d.getHours();
    let mins = d.getMinutes();
    
    date = date < 10? '0'+date.toString(): date;
    hour = hour < 10? '0'+hour.toString(): hour;  
    mins = mins < 10? '0'+mins.toString():mins;
    
    return `${months[monthIndex]} ${date}, ${year}  ${hour}:${mins}`;
}

let generateColor = () => {
    let alphanums = '0123456789abcdef';
    
    let colorArr = [];
    
    for(let i=0; i<6; i++) {
        let index = Math.floor(Math.random() * 15);
        colorArr.push(alphanums[index]);
    }
    
    return '#' + colorArr.join('');
}

let h1 = document.createElement('h1');
h1.innerHTML = 'Asabeneh Yetayeh Challenges in <year>2023</year>';
h1.style.textAlign = 'center';
h1.style.fontSize = '20px';
h1.style.fontWeight = '400';
h1.style.marginBottom = '5px';
h1.style.padding = '5px';
wrapper.appendChild(h1);

let yearText = document.querySelector('year');
yearText.style.fontSize = '40px';

setInterval(() => {
    yearText.style.color = generateColor();
}, 1000)

let h3 = document.createElement('h3');
h3.textContent = '30DaysOfJavaScript Challenge';
h3.style.fontWeight = '370';
h3.style.fontSize = '15px';
h3.style.textDecoration = 'underline';
h3.style.textAlign = 'center';
h3.style.padding = '3px';
h3.style.margin = '0px';

wrapper.appendChild(h3);

let date = document.createElement('h4');
date.textContent = getDate();
        
date.style.margin = 'auto';
date.style.padding = '6px'
date.style.textAlign = 'center';
date.style.fontSize = '12px';
date.style.fontWeight = '400';
date.style.width = '40%';
        
setInterval(() => {
    date.style.backgroundColor = generateColor();
}, 2000);

wrapper.appendChild(date);

let list = document.createElement('ul');
list.style.listStyleType = 'none';
list.style.width = '60%';
list.style.margin = 'auto';

asabenehChallenges2020.challenges.forEach(x => {
    let item = document.createElement('li');
    
    // innerHTML live :)     
    // 1   
    let titleSpan = document.createElement('span');
    let title = document.createTextNode(x.name);
    titleSpan.appendChild(title);

    // 2   
    let dropdown = document.createElement('details');
    let dropdownSpan = document.createElement('span');

    // modify detail   
    let summary = document.createElement('summary');
    summary.textContent = x.name.split(' ')[x.name.split(' ').length -1];
    // add the topics 
    let topics = document.createElement('ul');
    
    x.topics.forEach(i => {
      let item = document.createElement('li');
      item.textContent = i;
      
      topics.appendChild(item);
      
      // styling    
      item.style.padding='5px';
      item.style.width = '90%';
      item.style.marginTop ='3px';
      item.style.marginBottom = '3px';
    })
    // styling   
    topics.style.listStyleType = 'none';
    topics.style.width = '60%';
    topics.style.margin = 'auto';
    
    dropdownSpan.appendChild(dropdown);
    // 3 
    let status = document.createTextNode(x.status);
    let statusSpan = document.createElement('span');
    statusSpan.appendChild(status);
    if(x.status.endsWith('Done')){
        item.style.backgroundColor = '#228b22';
    }else if(x.status.endsWith('Ongoing')){
        item.style.backgroundColor = '#FFFF00';
    }else{
        item.style.backgroundColor = '#DC143C';
    }
   
    // appends    
    item.appendChild(titleSpan);
    dropdown.appendChild(summary);
    dropdown.appendChild(topics);
    item.appendChild(dropdownSpan);
    item.appendChild(statusSpan);
    list.appendChild(item);
  
    // styling     
    item.style.border='1px blue solid'; 
    item.style.padding='5px';
    item.style.width = '90%';
    item.style.marginTop ='3px';
    item.style.marginBottom = '3px';
})

  
wrapper.appendChild(list);

let h2 = document.createElement('h2');
h2.innerHTML = 'Asabeneh Yetayeh';
h2.style.textAlign = 'center';
h2.style.fontSize = '20px';
h2.style.fontWeight = '400';
h2.style.marginBottom = '5px';
h2.style.padding = '5px';
wrapper.appendChild(h2);



let info = document.createElement('h5');

info.textContent = asabenehChallenges2020.author.bio;
info.style.textAlign = 'center';
info.style.fontSize = '20px';
info.style.fontWeight = '400';
info.style.marginBottom = '5px';
info.style.padding = '5px';
wrapper.appendChild(info);


