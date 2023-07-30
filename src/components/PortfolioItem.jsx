import React from "react";

function PortfolioItem({ title, imgUrl, stack, linkCode, link }) {
    return (
        <a href={link} target='_blank' rel='noopener noreferrer' className="border-2 border-stone-900 dark:border-stone-300 rounded-md overflow-hidden">
            <img src={imgUrl} alt="portfolio-image" className="w-full h-36 md:h-48 object-cover cursor-pointer" />
            <div className="w-full p-4">
                <h3 className="text-lg text-center md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm mb-2">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-stone-300 dark:text-white rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
                <a href={linkCode} aria-label="Source code" target="_blank" rel="noopener" className="flex flex-wrap flex-row items-center justify-center gap-1 text-cyan-500 hover:underline underline-offset-2 decoration-2"><i class="fa-solid fa-code" aria-hidden="true"></i> Code</a>
            </div>
        </a>
    )
}

export default PortfolioItem;