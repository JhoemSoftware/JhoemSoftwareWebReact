import { Button } from '../components/Button';
import { Logo } from './../components/Logo';

export const MainPage = () => {
    return (
        <div className="principlePage">
            <Logo />
            <div class="socialLinks">
                <div class="socialBox">
                    <a href="https://github.com/JhoemSoftware" target="_blank" aria-label="view">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </div>
                <div class="socialBox">
                    <a href="https://www.linkedin.com/in/jhoemsoftware/" target="_blank" aria-label="view">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </div>
                <div class="socialBox">
                    <a href="https://twitter.com/JhoemLive" target="_blank" aria-label="view">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                </div>
            </div>
            <div className="buttons">
                <Button text='View Profile' url='#PerfilPage' open={false} iconImg='down' />
                {/* <Button text='CV Preview' url='/JhonAlexMarinCV_WebDeveloper.pdf' open={true} iconImg='doc' /> */}
            </div>
        </div>
    )
}
