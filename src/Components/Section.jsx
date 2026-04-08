import "./Section.css";
import Hero from "../assets/hero1.png";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
const Section = () => {
  return (
    <main className="section_container">
      <section className="section-holder">
        <img src={Hero} alt={"hero image"} />
      </section>
      <div className="Dot">
        <GoDotFill
          style={{
            marginTop: "20px",
            fontSize: "30px",
            color: "#02B928",
          }}
        />
        <GoDot
          style={{ marginTop: "20px", fontSize: "30px", color: "#02B928" }}
        />
        <GoDot
          style={{ marginTop: "20px", fontSize: "30px", color: "#02B928" }}
        />
      </div>
    </main>
  );
};

export default Section;
