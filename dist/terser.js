export function h(n, r, e) {
  return { o: n, t: r, u: e };
}
export function render(n, r) {
  return "div" === n.o
    ? r.appendChild(document.createElement("div"))
    : null == n.t
    ? r.appendChild(document.createTextNode("null props"))
    : void 0;
}
