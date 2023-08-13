import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Joseph Mahiuha</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Frontend Developer</p>
            <p className="text-sm max-w-2xl mb-3 font-bold">A little bit of myself, I'm from Kenya, you can find me online as <a href="https://mahiuha.me" target="_blank" className="text-cyan-500 hover:underline underline-offset-2 decoration-2" rel="noopener">@mahiuha</a>, my experience is in Web Development and I enjoy working in projects related to Back-end</p>
            <ul className="flex gap-3 mb-6">
                <li>
                    <a href="https://github.com/Mahiuha" aria-label="Find me on GitHub" target="_blank" rel="noopener" className="text-cyan-500 hover:underline underline-offset-2 decoration-2"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/joseph-mahiuha-498a52162/" aria-label="Find me on LinkedIn" target="_blank" rel="noopener" className="text-cyan-500 hover:underline underline-offset-2 decoration-2"><i class="fab fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
                </li>
                <li>
                    <a href="https://twitter.com/Joseph_Mahiuha" aria-label="Find me on Twitter" target="_blank" rel="noopener" className="text-cyan-500 hover:underline underline-offset-2 decoration-2"><i class="fab fa-twitter" aria-hidden="true"></i> Twitter</a>
                </li>
                <li>
                    <a href="https://gitlab.com/Mahiuha" aria-label="Find me on GitLab" target="_blank" rel="noopener" className="text-cyan-500 hover:underline underline-offset-2 decoration-2"><i class="fab fa-gitlab" aria-hidden="true"></i> GitLab</a>
                </li>
            </ul>
        </div>
    )
}

export default Intro;
