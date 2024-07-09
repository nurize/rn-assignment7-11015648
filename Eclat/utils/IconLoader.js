const icons = {
  1: require("../assets/bleach.png"),
  2: require("../assets/tumble-dry.png"),
  3: require("../assets/wash.png"),
  4: require("../assets/iron.png"),
}

const getIcon = (iconId) => {
  for (let key in icons) {
      if (icons.hasOwnProperty(key) && key === iconId) {
          return icons[iconId];
      }
    }
}


export default getIcon;