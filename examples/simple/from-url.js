
function checkLoadStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function applyTextToNode(node, text) {
  node.innerHTML = text;
  var scripts = node.getElementsByTagName('script');
  scripts = Array.prototype.slice.call( scripts, 0 );
  scripts.forEach(function (el) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    if (el.src) {
      s.src = el.src;
    } else {
      s.textContent = el.innerText;
    }
    // re-insert the script tag so it executes.
    el.parentNode.insertBefore(s, el);
    el.parentNode.removeChild(el);
  });
}

function setXhrResponse(url, node, fallbackContent) {
  fetch(url, {credentials: 'same-origin'})
    .then(checkLoadStatus)
    .then(response => response.text())
    .then(data => applyTextToNode(node, data))
    .catch(function (error) {
      node.innerHTML = fallbackContent;
      console.log('Request failed', error);
    });
}

function createWindowFromUrl(url, iframe, options) {
  var fallbackContent = '<h1>Oops, could not get content with given url: "'+ url +'".</h1>';
  var element = document.createElement('div');
  if (iframe === true) {
    element = document.createElement('iframe');
    element.setAttribute('width', '100%');
    element.setAttribute('height', '100%');
    element.setAttribute('src', url);
    element.setAttribute('frameBorder', '0');
  }
  element.setAttribute('class', 'windowContent');
  element.setAttribute('data-url', url);
  element.innerHTML = fallbackContent;

  if (iframe === false) {
    setXhrResponse(url, element, fallbackContent);
  }
  if (typeof options === 'undefined') {
    options = {
      title: 'Iframe window',
      x: 50,
      y: 50,
      width: 500,
      height: 350,
      events: {
        closed: function () {
          this.destroy();
        }
      }
    };
  }
  if (typeof options.events === 'undefined') {
    options.events = {};
  }
  if (typeof options.events.reload === 'undefined') {
    options.events.reload = function () {
      if (iframe === false) {
        setXhrResponse(url, element, fallbackContent);
      } else {
        element.setAttribute('src', url);
      }
    };
  }

  wm.createWindow.fromQuery(element, options).open();
}
