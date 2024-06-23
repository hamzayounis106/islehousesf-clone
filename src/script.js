const dot = document.querySelector("#dot");
const dotImg = document.querySelector("#dotImg");
let dotVisible = 0;

dot.addEventListener("click", () => {
  dotVisible = 1 - dotVisible;
  gsap.to("#dotImg", {
    duration: 0.4,
    opacity: dotVisible,
    ease: "power2.inOut",
  });
});

gsap.registerPlugin(ScrollTrigger);
function preloadImages(imageUrls) {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

// Array of images to preload
const imagesToPreload = [
  "../public/Images/6659d27197bbdb3a904d1efa_Web__0000_DB001_0025126_VIEW_11_BEDROOM_Vertical.webp",
  "../public/Images/665909aa19c56b4460baa8c0_Web__0005_DB001_0025121_VIEW_06_ROOFTOP_Vertical.jpg",
  "../public/Images/66590ba9e40bcd0472c9cd3c_Web__0005_TreasureIsland-0095_Vertical.webp",
  "../public/Images/6628f0a8ed906aa70de8d566_TreasureIsland-0361_1800x1200.webp",
  "../public/Images/6628f088184fbbacf3648728_DB001_0025117_VIEW 02 - CO-WORKING SPACE_1_1800x1800.webp",
  "../public/Images/6650b4e8d6b78c6d32c0c3fb_2021-10-19_TIDG_TI_KR5_7955.webp",
  "../public/Images/6628f0df7929bf37495cd719_TidalHouseViews_062823_Tower-West_03-High_2000x800.webp",
  "../public/Images/6628f05e5d10aa70347db0bd_HH014_0024043_VIEW_03_FINALLENS CORRECTION_1800x1425.webp",
  "../public/Images/6628f10e8c37d6f182e941c7_TreasureIsland-0948_1800x1200.webp",
  "../public/Images/6628f0f984ce6a2b2c021229_TreasureIsland-0095_1800x2700.webp",
];

// Preload images
preloadImages(imagesToPreload);
// Function to check if all images are loaded
function imagesLoaded(images, callback) {
  let loadedImages = 0;
  const totalImages = images.length;

  images.forEach((image) => {
    if (image.complete) {
      incrementCounter();
    } else {
      image.addEventListener("load", incrementCounter);
      image.addEventListener("error", incrementCounter);
    }
  });

  function incrementCounter() {
    loadedImages++;
    if (loadedImages === totalImages) {
      callback();
    }
  }
}

// Get all images
const images = document.querySelectorAll("img");

// When all images are loaded
imagesLoaded(images, () => {
  setTimeout(() => {
    document.scrollingElement.scrollTo(0, 0);
    document.getElementById("loader-wrapper").classList.add("hidden");
    startAnimation();
  }, 2000);
  // document.scrollingElement.scrollTo(0, 0);
  // document.getElementById("loader-wrapper").classList.add("hidden");
  // startAnimation();
});

// Animation function
function startAnimation() {
  let tl2 = gsap.timeline();
  tl2.from(".imgh", {
    delay: 0.5,
    duration: 1.5,
    scale: 0,
    ease: "power2.inOut",
    stagger: 0.2,
    borderRadius: "0%",

    // willChange: 'transform' ,
    // force3D: false
  });
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      pin: true,
      start: "top top",
      end: "+=200%",
      scrub: 0.5,
    },
  });
  tl.to("#himg1", {
    top: "-20%",
    right: "-20%",
    opacity: 0,
    duration: 2,
    ease: "none",
  });
  tl.to(
    "#himg2",
    {
      top: "-100%",
      opacity: 0,
      duration: 2,
      ease: "none",
    },
    "<"
  );
  tl.to(
    "#himg3",
    {
      top: "-1%",
      right: "-100%",
      opacity: 0,
      duration: 2,
      ease: "none",
    },
    "<"
  );
  tl.to(
    "#himg4",
    {
      top: "+=10%",
      right: "-100%",
      opacity: 0,
      duration: 2,
      ease: "none",
    },
    "<"
  );
  tl.to(
    "#himg5",
    {
      top: "-100%",
      left: "-100%",
      opacity: 0,
      duration: 2,
      ease: "none",
    },
    "<"
  );
  tl.to(
    "#himg6",
    {
      top: "-=10%",
      left: "-100%",
      opacity: 0,
      duration: 2,
      ease: "none",
    },
    "<"
  );
  tl.to(
    "#himg7",
    {
      top: "+=100%",
      left: "+=10%",
      opacity: 0,
      duration: 2,
      ease: "none",
    },
    "<"
  );
  gsap.from(".fadeup", {
    scrollTrigger: {
      trigger: ".fadeup",
      start: "top 80%",
    },
    duration: 0.5,
    ease: "power2.out",
    y: 50,
    opacity: 0,
    stagger: 0.3,
  });
  gsap.to(".circleimg", {
    duration: 5,
    clipPath: "circle(80% at 50% 50%)", // Start with a smaller circle
    scrollTrigger: {
      trigger: ".imageContainer_C",
      start: "top top",
      pin: true,
      end: "bottom top",
      ease: "ease-in-out",
      scrub: 0.1, // Increase sensitivity for smoother animation
    },
  });
  gsap.to(
    "#overImage",

    {
      scrollTrigger: {
        trigger: ".textscrollPage",
        start: "top 50%",
        end: "top 20%",
        scrub: 1,
      },
      height: "100%",
      width: "100%",
      duration: 0.5,
      ease: "power2.out",
    }
  );
  gsap.from(".form_field_line", {
    scaleX: 0,
    duration: 1.8,
    ease: "ease-in-out",
    opacity: 0,
    stagger: 0.4,
    transformOrigin: "center center",
    scrollTrigger: {
      trigger: "#formContainer",
      scrub: 1,
      start: "top 50%",
      end: "top 20%",
    },
  });
}
const image1 =
  "../public/Images/6659d27197bbdb3a904d1efa_Web__0000_DB001_0025126_VIEW_11_BEDROOM_Vertical.webp";
const image2 =
  "../public/Images/665909aa19c56b4460baa8c0_Web__0005_DB001_0025121_VIEW_06_ROOFTOP_Vertical.jpg";
const image3 =
  "../public/Images/66590ba9e40bcd0472c9cd3c_Web__0005_TreasureIsland-0095_Vertical.webp";

let parentAccordation = document.querySelectorAll(".parent");
let childAccordation = document.querySelectorAll(".child");

let currentIndex = 0; // Initialize with an invalid index to ensure the first change happens

parentAccordation.forEach((parent, index) => {
  parent.addEventListener("click", () => {
    // Close all child elements immediately except the clicked one
    childAccordation.forEach((child, childIndex) => {
      if (childIndex !== index && !child.classList.contains("hidden")) {
        gsap.to(child, {
          height: 0,
          padding: 0,
          duration: 0.5,
          ease: "ease-in-out",
          onComplete: () => {
            gsap.set(child, { clearProps: "all" });
            child.classList.remove("block");
            child.classList.add("hidden");
          },
        });
      }
    });

    // Toggle the clicked child element
    if (childAccordation[index].classList.contains("hidden")) {
      childAccordation[index].classList.remove("hidden");
      childAccordation[index].classList.add("block");
      gsap.fromTo(
        childAccordation[index],
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.5 }
      );
    } else {
      gsap.to(childAccordation[index], {
        height: 0,
        opacity: 0,
        duration: 1,
        padding: 0,
        margin: 0,
        onComplete: () => {
          gsap.set(childAccordation[index], { clearProps: "all" });
          childAccordation[index].classList.remove("block");
          childAccordation[index].classList.add("hidden");
        },
      });
    }

    // Change the image if the index has changed
    if (index !== currentIndex) {
      let dynoImage = document.getElementById("imageAcc");
      let newImageSrc;
      if (index === 0) {
        newImageSrc = image1;
      } else if (index === 1) {
        newImageSrc = image2;
      } else {
        newImageSrc = image3;
      }
      dynoImage.src = newImageSrc;
      // Animate the current image out
      gsap.from(dynoImage, {
        delay: 0.2,
        scale: 1.5,

        duration: 1,
        ease: "power2.inOut",
      });

      // Update the current index
      currentIndex = index;
    }
  });
});
