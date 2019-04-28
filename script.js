// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

var tab1 = false;
var tab2 = false;
var tab3 = false;
var answer = ['0','0','0'];

function pick(item)
{
  if(!tab1 || !tab2 || !tab3)
  {
    switch(item.dataset.questionId)
    {
      case 'one':
        freshChoice1(item.dataset.choiceId);
        break;
      case 'two':
        freshChoice2(item.dataset.choiceId);
        break;
      case 'three':
        freshChoice3(item.dataset.choiceId);
        break;
    }
  }
}

function freshChoice1(key)
{
  if(tab1){
    if(answer[0] === key)
    {
      console.log('uncheck 1:'+key);
      tab1 = false;
      answer[0] = '0';
      /* style */
      var x = document.querySelectorAll('div[data-question-id="one"]');
      for (i = 0; i < x.length; i++) {
        if(x[i].getAttribute('data-choice-id') === key)
        {
          x[i].querySelectorAll(".checkbox")[0].src = "images/unchecked.png";
          x[i].style.backgroundColor = "#f4f4f4";
        }
        else{
          x[i].style.opacity = "1";
        }
      }
    }
    else{
      console.log('check 1:'+key);
      /* style */
      var x = document.querySelectorAll('div[data-question-id="one"]');
      for (i = 0; i < x.length; i++) {
        if(x[i].getAttribute('data-choice-id') === key)
        {
          x[i].querySelectorAll(".checkbox")[0].src = "images/checked.png";
          x[i].style.backgroundColor = "#cfe3ff";
          x[i].style.opacity = "1";
        }
        else if(x[i].getAttribute('data-choice-id') === answer[0])
        {
          x[i].querySelectorAll(".checkbox")[0].src = "images/unchecked.png";
          x[i].style.backgroundColor = "#f4f4f4";
          x[i].style.opacity = "0.6";
        }
        else{
          x[i].style.opacity = "0.6";
        }
      }
      answer[0] = key;
    }
  }
  else{
    console.log('check 1:'+key);
    tab1 = true;
    answer[0] = key;
    /* style */
    var x = document.querySelectorAll('div[data-question-id="one"]');
    for (i = 0; i < x.length; i++) {
      if(x[i].getAttribute('data-choice-id') === key)
      {
        x[i].querySelectorAll(".checkbox")[0].src = "images/checked.png";
        x[i].style.backgroundColor = "#cfe3ff";
      }
      else{
        x[i].style.opacity = "0.6";
      }
    }
  }
  showAns();
}

function freshChoice2(key)
{
  if(tab2){
    if(answer[1] === key)
    {
      console.log('uncheck 2:'+key);
      tab2 = false;
      answer[1] = '0';
      /* style */
      var x = document.querySelectorAll('div[data-question-id="two"]');
      for (i = 0; i < x.length; i++) {
        if(x[i].getAttribute('data-choice-id') === key)
        {
          x[i].querySelectorAll(".checkbox")[0].src = "images/unchecked.png";
          x[i].style.backgroundColor = "#f4f4f4";
        }
        else{
          x[i].style.opacity = "1";
        }
      }
    }
    else{
      console.log('check 2:'+key);
      /* style */
      var x = document.querySelectorAll('div[data-question-id="two"]');
      for (i = 0; i < x.length; i++) {
        if(x[i].getAttribute('data-choice-id') === key)
        {
          x[i].querySelectorAll(".checkbox")[0].src = "images/checked.png";
          x[i].style.backgroundColor = "#cfe3ff";
          x[i].style.opacity = "1";
        }
        else if(x[i].getAttribute('data-choice-id') === answer[1])
        {
          x[i].querySelectorAll(".checkbox")[0].src = "images/unchecked.png";
          x[i].style.backgroundColor = "#f4f4f4";
          x[i].style.opacity = "0.6";
        }
        else{
          x[i].style.opacity = "0.6";
        }
      }
      answer[1] = key;
    }
  }
  else{
    console.log('check 2:'+key);
    tab2 = true;
    answer[1] = key;
    /* style */
    var x = document.querySelectorAll('div[data-question-id="two"]');
    for (i = 0; i < x.length; i++) {
      if(x[i].getAttribute('data-choice-id') === key)
      {
        x[i].querySelectorAll(".checkbox")[0].src = "images/checked.png";
        x[i].style.backgroundColor = "#cfe3ff";
      }
      else{
        x[i].style.opacity = "0.6";
      }
    }
  }
  showAns();
}

function freshChoice3(key)
{
  if(tab3){
    if(answer[2] === key)
    {
      console.log('uncheck 3:'+key);
      tab3 = false;
      answer[2] = '0';
      /* style */
      var x = document.querySelectorAll('div[data-question-id="three"]');
      for (i = 0; i < x.length; i++) {
        if(x[i].getAttribute('data-choice-id') === key)
        {
          x[i].querySelectorAll(".checkbox")[0].src = "images/unchecked.png";
          x[i].style.backgroundColor = "#f4f4f4";
        }
        else{
          x[i].style.opacity = "1";
        }
      }
    }
    else{
      console.log('check 3:'+key);
      /* style */
      var x = document.querySelectorAll('div[data-question-id="three"]');
      for (i = 0; i < x.length; i++) {
        if(x[i].getAttribute('data-choice-id') === key)
        {
          x[i].querySelectorAll(".checkbox")[0].src = "images/checked.png";
          x[i].style.backgroundColor = "#cfe3ff";
          x[i].style.opacity = "1";
        }
        else if(x[i].getAttribute('data-choice-id') === answer[2])
        {
          x[i].querySelectorAll(".checkbox")[0].src = "images/unchecked.png";
          x[i].style.backgroundColor = "#f4f4f4";
          x[i].style.opacity = "0.6";
        }
        else{
          x[i].style.opacity = "0.6";
        }
      }
      answer[2] = key;
    }
  }
  else{
    console.log('check 3:'+key);
    tab3 = true;
    answer[2] = key;
    /* style */
    var x = document.querySelectorAll('div[data-question-id="three"]');
    for (i = 0; i < x.length; i++) {
      if(x[i].getAttribute('data-choice-id') === key)
      {
        x[i].querySelectorAll(".checkbox")[0].src = "images/checked.png";
        x[i].style.backgroundColor = "#cfe3ff";
      }
      else{
        x[i].style.opacity = "0.6";
      }
    }
  }
  showAns();
}

function getFinalAns()
{
  var res = answer[0];
  if(answer[1] !== res)
  {
    var tmp = answer[1];
    return answer[2] === tmp ? tmp : res;
  }
  return res;
}

function showAns() {
  if(tab1 && tab2 && tab3)
  {
    var ansKey = getFinalAns();
    console.log('ans:{'+answer[0]+','+answer[1]+','+answer[2]+'}='+ansKey);
    var ans = document.getElementById('answer');
    ans.style.display = "flex";
    switch(ansKey){
      case 'blep':
        ans.getElementsByTagName('h1')[0].innerHTML = RESULTS_MAP.blep.title;
        ans.getElementsByTagName('p')[0].innerHTML = RESULTS_MAP.blep.contents;
        break;
      case 'burger':
        ans.getElementsByTagName('h1')[0].innerHTML = RESULTS_MAP.burger.title;
        ans.getElementsByTagName('p')[0].innerHTML = RESULTS_MAP.burger.contents;
        break;
      case 'cart':
        ans.getElementsByTagName('h1')[0].innerHTML = RESULTS_MAP.cart.title;
        ans.getElementsByTagName('p')[0].innerHTML = RESULTS_MAP.cart.contents;
        break;
      case 'dopey':
        ans.getElementsByTagName('h1')[0].innerHTML = RESULTS_MAP.dopey.title;
        ans.getElementsByTagName('p')[0].innerHTML = RESULTS_MAP.dopey.contents;
        break;
      case 'happy':
        ans.getElementsByTagName('h1')[0].innerHTML = RESULTS_MAP.happy.title;
        ans.getElementsByTagName('p')[0].innerHTML = RESULTS_MAP.happy.contents
      break;
      case 'nerd':
        ans.getElementsByTagName('h1')[0].innerHTML = RESULTS_MAP.nerd.title;
        ans.getElementsByTagName('p')[0].innerHTML = RESULTS_MAP.nerd.contents
        break;
      case 'shy':
        ans.getElementsByTagName('h1')[0].innerHTML = RESULTS_MAP.shy.title;
        ans.getElementsByTagName('p')[0].innerHTML = RESULTS_MAP.shy.contents
        break;
      case 'sleeping':
        ans.getElementsByTagName('h1')[0].innerHTML = RESULTS_MAP.sleeping.title;
        ans.getElementsByTagName('p')[0].innerHTML = RESULTS_MAP.sleeping.contents
        break;
      case 'sleepy':
        ans.getElementsByTagName('h1')[0].innerHTML = RESULTS_MAP.sleepy.title;
        ans.getElementsByTagName('p')[0].innerHTML = RESULTS_MAP.sleepy.contents
        break;
    }
    ans.scrollIntoView();
  }
}

function pageRestart() {
  window.scrollTo(0, 0);
  window.location.reload();
}
