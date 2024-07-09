const images = {
    1: require("../assets/dress1.png"),
    2: require("../assets/dress2.png"),
    3: require("../assets/dress3.png"),
    4: require("../assets/dress4.png"),
    5: require("../assets/dress5.png"),
    6: require("../assets/dress6.png"),
    7: require("../assets/dress7.png"),
    8: require("../assets/dress3.png"),
}

const getImage = (imageId) => {
    for (let key in images) {
        if (images.hasOwnProperty(key) && key === imageId) {
            return images[imageId];
        }
      }
}


export default getImage;