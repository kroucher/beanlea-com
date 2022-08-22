window.plausible =
  window.plausible ||
  function () {
    (window.plausible.q = window.plausible.q || []).push(arguments);
  };

let links = document.querySelectorAll("a[data-analytics]");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", handleLinkEvent);
  links[i].addEventListener("auxclick", handleLinkEvent);
}

function handleLinkEvent(event) {
  var link = event.target;
  var middle = event.type == "auxclick" && event.which == 2;
  var click = event.type == "click";
  while (
    link &&
    (typeof link.tagName == "undefined" ||
      link.tagName.toLowerCase() != "a" ||
      !link.href)
  ) {
    link = link.parentNode;
  }
  if (middle || click) {
    let attributes = link.getAttribute("data-analytics").split(/,(.+)/);
    let events = [JSON.parse(attributes[0]), JSON.parse(attributes[1] || "{}")];
    plausible(...events);
  }
  if (!link.target) {
    if (!(event.ctrlKey || event.metaKey || event.shiftKey) && click) {
      setTimeout(function () {
        location.href = link.href;
      }, 150);
      event.preventDefault();
    }
  }
}
