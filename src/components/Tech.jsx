import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div>
      <motion.div>
        <p className={`${styles.sectionSubText} text-center`}>
                  Technologies I worked with
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                  SKIILS
                </h2>
      </motion.div>
    
    <div className='flex flex-row flex-wrap justify-center gap-10' style={{marginTop:"50px"}}>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>

  );
};




export default SectionWrapper(Tech, "");