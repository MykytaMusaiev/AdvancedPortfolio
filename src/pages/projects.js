import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";

import store from "../../public/images/projects/store.jpg";
import cms from "../../public/images/projects/cms.jpg";
import chat from "../../public/images/projects/chat.jpg";
import movie from "../../public/images/projects/movie.jpg";
import gadget1 from "../../public/images/projects/gadgets/1.jpg";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({
    type,
    title,
    summary,
    img,
    link,
    github,
    live = false,
}) => {
    return (
        <article
            className="w-full flex items-center justify-between rounded-3xl
        border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl
        dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        "
        >
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
             bg-dark rounded-br-3xl
             dark:bg-light
             xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            "
            />
            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary[0]}
                </p>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary[1]}
                    <br />
                    <span className="font-bold">{summary[2]}</span>
                </p>
                <div className="mt-2 flex items-center m-auto lg:justify-between">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                        dark:bg-light dark:text-dark
                        sm:px-4 sm:text-base
                        "
                    >
                        {live ? "Live Demo" : "More Details"}
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({ title, type, img, link, github }) => {
    return (
        <article
            className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative
         dark:bg-dark dark:border-light
         xs:p-4
         "
        >
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
            md:-righ-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
            />
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
                        {title}
                    </h2>
                </Link>
                <div className="mt-2 w-full flex items-center justify-between">
                    {/* TODO погратись з маржіном кнопок, доки не стане ок очам */}
                    <Link
                        href={github}
                        target="_blank"
                        className="mr-4 w-8 md:w-6"
                    >
                        <GithubIcon />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg text-lg font-semibold underline md:text-base"
                    >
                        Visit
                    </Link>
                </div>
            </div>
        </article>
    );
};

const projects = () => {
    return (
        <>
            {/* TODO додати окрему сторінку для лендінгів? */}
            <Head>
                <title>MykytaM | Projects Page</title>
                <meta name="description" concent="any description" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Imagination Trumps Knowledge!"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Code-Sich Project"
                                summary={[
                                    "A highly performant and SEO-optimized e-commerce storefront developed within a 3-person team, demonstrating a strong focus on core web vitals.",
                                    "Achieved PageSpeed 100 (Desktop) through hybrid SSR architecture and fully engineered SEO infrastructure (OpenGraph), built under strict Code Review processes.",
                                    "Used technologies: ReactJS, NextJS, TailwindCSS, Prisma, Clerk, Shadcn/UI",
                                ]}
                                link="https://gadgets-e-store.vercel.app/"
                                github="https://github.com/Code-Sich/gadgets_e-store/"
                                type="Featured Project"
                                img={gadget1}
                                live={true}
                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject
                                title="E-commerce Store"
                                summary={[
                                    "A dynamic e-commerce storefront designed for ordering goods, with content driven and fully managed by a custom administrative CMS (see Dashboard project).",
                                    "Features a secure, full-stack connection to its own backend, utilizing Prisma for robust data persistence and Clerk for user authentication.",
                                    "Used technologies: ReactJS, NextJS, TailwindCSS, Stripe, Shadcn/UI",
                                ]}
                                link="https://e-commerce-promo-store.vercel.app/"
                                github="https://github.com/MykytaMusaiev/e-commerce_store"
                                type="Featured Project"
                                img={store}
                                live={true}
                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject
                                title="E-commerce Dashboard & CMS"
                                summary={[
                                    "Full-Stack CMS and Dashboard developed to manage the entire e-commerce ecosystem.",
                                    "Implemented a custom API and utilized Prisma and Clerk for secure order statistics, inventory, and category management.",
                                    "Used technologies: ReactJS, NextJS, TailwindCSS, Prisma, Clerk, Shadcn/UI",
                                ]}
                                link="https://e-commerce-promo-admin.vercel.app/"
                                github="https://github.com/MykytaMusaiev/e-commerce_admin"
                                type="Featured Project"
                                img={cms}
                                live={true}
                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject
                                title="Real-Time Messenger"
                                summary={[
                                    "A scalable social messaging application supporting secure private and group chats in real-time.",
                                    "Leveraged Pusher for reliable Real-Time bi-directional data flow and NextAuth for E2E user authentication and authorization.",
                                    "Used technologies: ReactJS, NextJS, TailwindCSS, Prisma, NextAuth, Pusher",
                                ]}
                                link="https://messenger-jade.vercel.app/"
                                github="https://github.com/MykytaMusaiev/messenger/"
                                type="Featured Project"
                                img={chat}
                                live={true}
                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject
                                title="Movies recommendation app"
                                summary={[
                                    "A feature-rich movie recommendation application that allows users to create and share custom movie lists from TheMovieDB API.",
                                    "Utilizes GraphQL + Apollo for high-efficiency data fetching and Storybook for structured UI component isolation and development.",
                                    "Used technologies: ReactJS, React Router v6, Material UI, GraphQL + Apollo, Storybook, react-intl",
                                ]}
                                link="https://github.com/MykytaMusaiev/movies_recommendation"
                                github="https://github.com/MykytaMusaiev/movies_recommendation"
                                type="Favorite movie's app"
                                img={movie}
                                live={false}
                            />
                        </div>

                        {/* <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Photographer's portfolio website"
                                summary=""
                                link="/"
                                github="/"
                                type="Landing Page"
                                img={project1}
                            />
                        </div> */}
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default projects;
