// NOTE: this may not work with server rendering
// see this discussion https://github.com/facebook/react/issues/5867
var idCounter = 0;

function generateUID(inst) {
  return btoa(inst.constructor.name) + idCounter++;
}

export default generateUID;
//# sourceMappingURL=generateUID.js.map
