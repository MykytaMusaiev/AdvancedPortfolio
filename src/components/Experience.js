import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
                            md:w-[80%]
        "
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position}&nbsp;<span>@{company}</span>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>
                <ul className="list-disc ml:w-[3vw] md:ml-[4vw] sm:ml-[5vw] xl:ml-[3vw] 2xl:ml-[3vw]">
                    {work.map((phrase, index) => (
                        <li
                            className="font-medium w-full md:text-sm"
                            key={index}
                        >
                            {phrase}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Experience
            </h2>
            <div
                ref={ref}
                className="w-[75] mx-auto relative lg:w-[90 md:w-full]"
            >
                <motion.div
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
                                dark:bg-light
                                md:w-[2px] md:left-[30px] xs:left-[20px]
                    "
                    style={{ scaleY: scrollYProgress }}
                />

                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        position="Frontend Developer"
                        company="Code-Sich"
                        time="04.2025 - 09.2025"
                        companyLink=""
                        address="Kyiv"
                        work={[
                            "Achieved a PageSpeed score of 94 (mobile) and 100 (desktop) by deploying a hybrid SSR-client architecture on Next.js v15.5.3 and integrating RTK Query to optimize initial data loading.",
                            "Contributed to code quality by adhering to strict coding standards and systematic code review processes (including PR mentoring) for a 3-person team, significantly boosting overall code quality and reducing the average merge time to under 10 minutes.",
                            "Fully engineered the SEO infrastructure, dynamically generating OpenGraph and metadata for product pages, which ensured high click-through rates (CTR) and enhanced organic search visibility.",
                        ]}
                    />
                    <Details
                        position="Frontend Developer"
                        company="LLC WAA"
                        time="04.2022 - 09.2023"
                        companyLink=""
                        address="Kyiv"
                        work={[
                            "Independently developed and maintained the admin panel using React and Redux Toolkit to centralize all game PoC data, including user achievements, error logs, and personalized feedback.",
                            "Engineered dynamic data visualization using a customized ShadCN UI library, enabling internal stakeholders to track essential metrics for product decision-making.",
                            "Ensured the scalability of the data reporting system by implementing Redux Toolkit for robust state management, which provided seamless integration points for future features (e.g., admin bonus system).",
                            "Managed the end-to-end integration between the admin UI and the backend API, operating as the sole Front-end developer responsible for the entire administration interface",
                        ]}
                    />
                    <Details
                        position="Frontend Developer"
                        company="Elit-taxi"
                        time="02.2021 – 03.2022"
                        companyLink=""
                        address="Kyiv"
                        work={[
                            "Led the implementation of the website modernizatio and rebranding of the legacy multi-page website into a modern, SPA-like experience with a focus on speed and user engagement.",
                            "Developed a high-speed, adaptive order form with direct API integration to the backend system.",
                            "Result: Enhanced client engagement, increasing the average session duration by 30% and drastically streamlining the user's taxi ordering process.",
                            "Designed and implemented a secure B2B monitoring cabinet for taxi fleet owners, featuring a realtime driver geolocation and status UI.",
                            "Result: Increased operational efficiency for B2B clients by reducing the time spent on manual driver control by 60% (transitioning from physical checks to online monitoring), receiving high user satisfaction.",
                            "Functioned as the sole Front-end specialist, owning the entire UI/UX lifecycle, E2E integration, and ensuring high technical reliability of the critical service.",
                        ]}
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
