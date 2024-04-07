import { Firm } from './Firm';

export const Logo = () => {
    return (
        <>
            <img src="/jhoem.webp" alt="Jhoem Picture" className="pictureJHM" width={250} height={250}/>
            <Firm />
            <h3 id="titlePageName">Software</h3>
            <p><span>&#60;</span> Web Full Stack Developer <span>&#47;&#62;</span></p>
        </>
    )
}