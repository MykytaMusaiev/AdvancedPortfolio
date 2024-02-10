import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion";
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
                            md:w-[80%]
        '>

            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<span>@{company}</span>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <ul className='list-disc ml:w-[3vw] md:ml-[4vw] sm:ml-[5vw] xl:ml-[3vw] 2xl:ml-[3vw]'>
                    {work.map((phrase, index) => (
                        <li className='font-medium w-full md:text-sm' key={index}>{phrase}</li>
                    ))
                    }
                </ul>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>
            <div ref={ref} className='w-[75] mx-auto relative lg:w-[90 md:w-full]'>

                <motion.div
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
                                dark:bg-light
                                md:w-[2px] md:left-[30px] xs:left-[20px]
                    '
                    style={{ scaleY: scrollYProgress }}
                />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="Javascript developer"
                        company="LLC WAA"
                        time="04.2022 - 09.2023"
                        companyLink=""
                        address="Kyiv"
                        work={[
                            "Created modern and responsive layouts based on designs and messaging provided by the creative team",
                            "Developed new features, enhance existing features, and implement bug fixes for code",
                            "Self-document development processes, and gave actionable feedback",
                            "Worked as part of a team of front-end web developers and back-end software engineers to meet various sprint and project deadlines"
                        ]}
                    />
                    <Details
                        position="Frontend Developer"
                        company="Elit-taxi"
                        time="02.2021 – 03.2022"
                        companyLink=""
                        address="Kyiv"
                        work={[
                            "Developed UI components using React and Redux",
                            "Built reusable code for future uses",
                            "Ensured the technical feasibility of UI/UX designs",
                            "Optimized application for maximum speed and scalability",                          
                            "Maintained frontend infrastructure, monitor for exceptions in the code, and debug any faults that occur in production",
                            "Supported an SPA admin panel integrated with microservice backend",
                            "Collaborated with cross-functional teams to ensure consistency in UI design and functionality"
                        ]}
                    />
                    <Details
                        position="Frontend Developer"
                        company="Freelance"
                        time="07.2020 – 09.2020"
                        companyLink=""
                        address="Kyiv"
                        work={["Created interactive elements on each page, such as dropdown menus, tabs, accordions, and modals, using  HTML, CSS, and Javascript for website.",
                            "Ensured that the website is responsive and mobile-friendly and that it adheres to web accessibility standards",
                            "Developed tests for existing code to catch bugs and ensure the software is secure and stabled"]}
                    />
                    <Details
                        position="Frontend Developer"
                        company="Freelance"
                        time="05.2020 – 06.2020"
                        companyLink=""
                        address="Kyiv"
                        work={[
                            "Created a visually appealing and responsive login page",
                            " Develop validation of the user credentials and authenticate their access to the web application",
                            "Ensured involved sending HTTP requests to the server-side code to check the user's credentials against a database of registered users",
                            "Implemented responsive design and cross-browser compatibility",
                            "Collaborated with cross-functional teams to ensure consistency in UI design and functionality"]}
                    />
                    <Details
                        position="Frontend Developer"
                        company="Freelance"
                        time="12.2019 – 04.2020"
                        companyLink=""
                        address="Kyiv"
                        work={[
                            "Designed, developed and optimized web site using HTML, CSS and JavaScript",
                            "Ensured high-quality graphics and visual elements are incorporated into website",
                            "Troubleshoot and debug front-end issues",
                            "Collaborated with designers and back-end developers to ensure seamless integration of UI components"
                        ]}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience