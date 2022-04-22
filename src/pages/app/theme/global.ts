export const global = {
  "body, html, #__next": {
    height: "100%",
    cursor: "default",
    scrollBehavior: "smooth"
  },
  ".years-vertical-slider .swiper-slide.swiper-slide-active": {
    fontSize: "96px",
    lineHeight: "75px",
    height: "120px !important",
    transition: "all 0.3s",
    color: "#365164 !important",
  },
  ".swiper-slide": {
    fontSize: "24px",
    height: "auto",
    color: "#8C949D",
    transition: "all 0.7s !important",
  },

  "@media (max-width: 991px)": {
    ".years-vertical-slider .swiper-slide.swiper-slide-active": {
      fontSize: "60px",
    },
    ".swiper-slide": {
      fontSize: "20px",
      height: "auto",
      color: "#8C949D",
      transition: "all 0.7s !important",
    },
  },
  "@media (max-width: 767px)": {
    ".years-vertical-slider .swiper-slide.swiper-slide-active": {
      fontSize: "44px",
      lineHeight: "1.3",
    },
    ".swiper-slide": {
      fontSize: "16px",
      lineHeight: "2",
      height: "auto",
      color: "#8C949D",
      transition: "all 0.7s !important",
    },
  },
  h4: {
    fontFamily: "Blender Pro",
  },
  h5: {
    fontFamily: "Blender Pro",
  }
}
