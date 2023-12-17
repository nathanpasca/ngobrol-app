"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../app/Variants";

import Image from "../app/Assets/OIG.png";
export default function Home() {
	return (
		<div
			className="min-h-[85vh] lg:min-h-[78vh] flex items-center mx-[20%]"
			id="home">
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
					{/* {text} */}
					<div className="flex-1 text-center lg:text-left">
						<motion.div
							variants={fadeIn("up", 0.4)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1]">
							<TypeAnimation
								sequence={[
									"Halo.",
									2000,
									"Hello.",
									2000,
									"Bonjour.",
									2000,
									"Konnichiwa.",
									2000,
								]}
								speed={50}
								wrapper="span"
								repeat={Infinity}
							/>
						</motion.div>

						<motion.div
							variants={fadeIn("up", 0.5)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="flex flex-1 max-w-[320px] lg:hidden items-center justify-center">
							<img src={Image.src} alt="image" style={{ maxWidth: "100%" }} />
						</motion.div>

						<motion.p
							variants={fadeIn("up", 0.5)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-8 max-w-lg mx-auto lg:mx-0">
							Aliqua in tempor cupidatat incididunt deserunt. Exercitation
							occaecat esse occaecat anim velit ullamco aliqua sint duis dolor
							ex labore ex duis.
						</motion.p>
						<motion.div
							variants={fadeIn("up", 0.6)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
							<div className=" w-full flex items-center justify-center">
								<button className="btn btn-outline">Start</button>
							</div>
						</motion.div>
					</div>
					<div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
						<img src={Image.src} alt="image" />
					</div>
				</div>
			</div>
		</div>
	);
}
