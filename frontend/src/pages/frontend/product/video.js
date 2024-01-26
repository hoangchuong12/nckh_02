import React from 'react'
import videoImage from './images/video-image.jpg';
function video() {
    return (
        <>
            <section id="our-video">
                <div className="video-section jarallax d-flex align-items-center justify-content-center" style={{ background: `url(${videoImage})` }}>
                    <div className="video-player text-center">
                        <a type="button" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/W_tIumKa8VY" href="#a" data-bs-target="#myModal" className="play-btn position-relative">
                            <svg className="position-absolute top-0 bottom-0 start-0 end-0 m-auto" width={41} height={41}><use xlinkHref="#play" /></svg>
                            <img src={require(`./images/text-pattern.png`)}
                                alt="" className="text-pattern" />
                        </a>
                    </div>
                </div>

            </section>
        </>
    )
}

export default video
