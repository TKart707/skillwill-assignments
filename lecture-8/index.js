// Assignment - 1

const expo = (num, quality, cb) => {
  if (quality === 0) {
    return cb(1);
  } else if (quality === 1) {
    return  cb(num);
  } else {
    return expo(num, quality - 1, (res) => {
      const power = res * num;
      cb(power);
    });
  }
};


expo(5, 1, (res) => {
  console.log(res);
});


// Assignment - 2

// fetch data with limitiones (10 posts)
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_page=0&_limit=10");
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log(error)
  }
}

fetchData();

const displayData = (data) => {
  data.map((item, index) => {
    // create elements
    let container = document.createElement('div');
    let heading = document.createElement('h2');
    let paragraph = document.createElement('p');
    // add class and id to container
    container.classList.add('container');
    container.setAttribute('id', index);
    // add content to elements
    paragraph.innerText = item.body;
    heading.innerText = item.title;
    // add elements to the body
    container.append(heading, paragraph);
    document.body.appendChild(container);
  })
} 

// Assignment - 3

const objData = {
  name: 'Tornike',
  age: 28,
  city: "Tbilisi"
}

const notObject = 'I am not object';

const deepCopy = async (obj) => {
  try {
    if (typeof obj === 'object') {
      const newObj = await {...obj};
      console.log(newObj);
    } else {
      throw new Error('It is not object');
    }
  } catch (error) {
    console.log(error);
  }
} 

deepCopy(objData);
deepCopy(notObject);