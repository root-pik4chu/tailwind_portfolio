import { Component, createRef } from "react";
import gsap from "gsap";
import react from "react";
class TextSlider extends Component {
  constructor(props) {
    super(props);
    this.textRef = createRef();
    this.index = 0;

    // Default text list (can be passed as props)
    this.texts = props.texts || [
      "Hello World",
      "GSAP Animation",
      "Smooth Motion",
      "Infinity Loop",
      "Text Motion"
    ];
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const el = this.textRef.current;
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";

    el.textContent = this.texts[this.index % this.texts.length];

    // Enter animation
    gsap.to(el, {
      opacity: 1,
      y: -40,
      duration: 1,
      ease: "power2.out"
    });

    // Leave after 3 seconds
    gsap.to(el, {
      opacity: 0,
      duration: 1,
      delay: 3,
      onComplete: () => {
        this.index++;
        this.animate(); // loop again
      }
    });
  }

  render() {
    const style = {
      position: "absolute",
      fontSize: "40px",
      color: "white",
      whiteSpace: "nowrap",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    };

    return <div ref={this.textRef} style={style}></div>;
  }
}

export default TextSlider;
