function addElement(elem, text) {
    const container = document.getElementById("contextbox");
    const element = document.createElement(elem);
    element.textContent = text;
    container.appendChild(element);
}

function parseMarkdown(markdownText) {
    let lines = markdownText.split('\n');
  
    let output = '';
    let blockquote = false;
    let list = false;
  
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
  
      // 处理空行
      if (line.trim() === '') {
        if (blockquote) {
          output += '</blockquote>';
          blockquote = false;
        }
        if (list) {
          output += '</ul>';
          list = false;
        }
        output += '<br>';
        continue;
    }
  
    // 处理行内标记
    line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    line = line.replace(/\*(.*?)\*/g, '<em>$1</em>');
    line = line.replace(/`([^`]+)`/g, '<span>$1</span>');
  
    // 处理换行
    line = line.replace(/^<br>|<\/blockquote>$|<\/ul>$/g, '');
    if (blockquote || list) {
        line = '<br>' + line;
    }
  
      // 处理标题
    let match = line.match(/^(#{1,6})\s(.+)$/);
    if (match) {
        let tag = match[1].length;
        let text = match[2];
        line = `<h${tag}>${text}</h${tag}>`;
    }
    match = line.match(/^```(.*)$/);
    if (match) {
        let lang = match[1] || '';
        var code = new Array();
        for (i++; i < lines.length; i++) {
            if (lines[i] === '```') {
                break;
            }
            code[i] = lines[i] + '\n';
        }
        line = `<pre>`
        for (a = 0; a < code.length; a++) {
            if (code[a] != undefined)
                line += `<code class="language-${lang}"></code>` + code[a] + `</code>`;
        }
        line += `</pre>`
    }
  
      // 处理引用块
      match = line.match(/^> (.+)$/);
      if (match) {
        if (!blockquote) {
          output += '<blockquote>';
          blockquote = true;
        }
        line = match[1];
      }
  
      // 处理列表
      match = line.match(/^(\*|-) (.+)$/);
      if (match) {
        if (!list) {
          output += '<ul>';
          list = true;
        }
        line = `<li>${match[2]}</li>`;
      }
  
      output += line;
    }
  
    if (blockquote) {
      output += '</blockquote>';
    }
    if (list) {
      output += '</ul>';
    }
  
    return output;
}

var mdUrl = window.location.search.split('?')[1]
if (mdUrl == null) {
    addElement('h1','好喜欢小小的一只哇~');
}
var xhr = new XMLHttpRequest();
xhr.responseType = 'text';
xhr.open('GET', mdUrl, true);
try {
    xhr.send();
    xhr.onload = function() {
        if (xhr.status == 200) {
            console.log("Successfully requested markdown");
            const input = xhr.responseText;
            const html = parseMarkdown(input);
            document.getElementById("contextbox").innerHTML = html;
        }
    }
} catch(err) {
    console.log("Failed to load markdown");
    console.log(err);
}