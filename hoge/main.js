const comment = document.getElementById('message');
const send = document.getElementById('send');
const mList = document.getElementById('mList');

'use strict'
send.addEventListener('click', () => {
  if(message.value != '') {
    const block = document.createElement('div');
    const li = document.createElement('li');

    mList.appendChild(block);
    block.insertBefore(li,mList);

    li.innerHTML = message.value;
    message.value = '';
  }
})