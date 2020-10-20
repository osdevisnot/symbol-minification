function i(n, e, r) {
  return { _name: n, _props: e, _children: r };
}
function t(n, e) {
  if (n._name === "div") return e.appendChild(document.createElement("div"));
  if (n._props == null)
    return e.appendChild(document.createTextNode("null props"));
}
export { i as h, t as render };
