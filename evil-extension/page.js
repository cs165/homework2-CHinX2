const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
  if(node.nodeType === Node.TEXT_NODE)
  {
    console.log("text:"+node.textContent);
    var text = node.textContent;
    var words = text.split(' '); // split by space
    for(var i=0 ; i < words.length ; i++)
    {
      console.log(words[i]);
      var tmp = words[i].replace(/\s+/g, ''); //remove exp
      if(MATCH_LIST[tmp])
      {
        words[i] = MATCH_LIST[tmp];
      }
    }
    node.textContent = words.join(' ');
  }
  else {
    console.log("node:"+node.nodeName);
  }
  if(node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.nodeName !== "NOSCRIPT")
  {
    for (const child of node.childNodes)
    {
      transformTextNodes(child);
    }
  }
}


transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');
