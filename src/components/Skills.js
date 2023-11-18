import React from 'react'
import { motion } from "framer-motion"

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold
                     bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
            whileHover={{ scale: 1.05 }}
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y}}
            transition={{ duration: 1.5}}
            viewport={{once:true}} //for one time animating
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl w-full text-center">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight"> 
                <Skill name="Web" x="0vw" y="0vw"/>                         
                <Skill name="Web Design" x="0vw" y="-22vw"/>      
                <Skill name="HTML5" x="-18vw" y="-15vw"/>
                <Skill name="CSS3" x="0vw" y="-12vw"/>
                <Skill name="Javascript ES9" x="15vw" y="-14vw"/>

                <Skill name="ReactJS" x="-25vw" y="-5vw"/>
                <Skill name="Redux" x="-17vw" y="0vw"/>
                <Skill name="Tailwind CSS" x="23vw" y="1vw"/>

                <Skill name="MaterialUI" x="-8vw" y="7vw"/>
                <Skill name="Styled Components" x="10vw" y="11vw"/>

                <Skill name="Github" x="-4vw" y="17vw"/>
            </div>
        </>
    )
}

export default Skills