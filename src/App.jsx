
import React, { useEffect, useRef } from 'react'

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

function App() {  

    const transitionDivsRef = useRef([]);
    const seperatorSection = useRef(null);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        transitionDivsRef.current.forEach((div, index) => {

            const heights = [100, 200, 400, 200, 300];
      
            gsap.to(div, {
                scrollTrigger: {
                    trigger: seperatorSection.current,
                    scrub: true,
                    start: 'bottom bottom',
                    end: 'bottom +=100',
                },
                height: `${heights[index]}px`,
                ease: 'none',
            });
        });

        gsap.to(seperatorSection.current, {
            scrollTrigger: {
                trigger: seperatorSection.current,
                scrub: true,
                start: 'bottom bottom',
                end: 'bottom +=100',
            },
            opacity: 0,
            ease: 'none',
        });

    }, []);

    return (
        <>
            <main>
                
                <section ref={seperatorSection} className="h-screen flex items-center justify-center">
                    <p className="text-white font-sans text-xl">Scroll</p>
                </section>

                <section className="relative z-10">
                    <div className='grid grid-cols-5 absolute w-full h-auto left-0 bottom-full items-end'>
                        {[...Array(5)].map((_, index) => (
                            <div key={index} ref={(el) => (transitionDivsRef.current[index] = el)} className="bg-white h-0"></div>
                        ))}
                    </div>
                    <div className='bg-white h-screen'></div>
                </section>

            </main>
        </>
    )
}

export default App