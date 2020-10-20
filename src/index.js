// common pattern in many vdom based libraries
export function h(_name, _props, _children) {
  return { _name, _props, _children }
}

// ensure symbol minification in h function does not
// end up breaking the symbol names in render function
export function render(vNode, $node) {
  if (vNode._name === 'div') {
    return $node.appendChild(document.createElement('div'))
  } else if (vNode._props == null) {
    return $node.appendChild(document.createTextNode('null props'))
  }
}
