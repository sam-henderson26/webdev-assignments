const target = document.querySelector('#target');

const firstItem = document.createElement('li');
firstItem.innerText = 'First item';

const secondItem = document.createElement('li');
secondItem.innerText = 'Second item';
secondItem.classList.add('my-item');

const thirdItem = document.createElement('li');
thirdItem.innerText = 'Third item';

target.appendChild(firstItem);
target.appendChild(secondItem);
target.appendChild(thirdItem);