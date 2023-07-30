import React from "react";

function Footer() {
    return (
        <div className="py-5 text-center">
            <div className="flex items-center justify-center flex-col text-center">
                <ul className="flex gap-3 mb-1">
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
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getUTCFullYear()} mahiuha. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;