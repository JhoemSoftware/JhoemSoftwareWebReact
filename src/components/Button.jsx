export const Button = ({ text = 'button', url = '#', open = false, iconImg = '' }) => {
    let iconFigure;

    if(iconImg == 'doc') iconFigure = <ion-icon name="document-text-outline"></ion-icon>
    if(iconImg == 'down') iconFigure = <ion-icon name="chevron-down-outline"></ion-icon>
    if(iconImg == 'git') iconFigure = <ion-icon name="logo-github"></ion-icon>
    if(iconImg == 'eye') iconFigure = <ion-icon name="eye-outline"></ion-icon>

    return (
        <>
            {
                (open) ? 
                    <a className="button" href={url} target="_blank">
                        {iconFigure}
                        {text}
                    </a>
                    :
                    <a className="button" href={url}>
                        {iconFigure}
                        {text}
                    </a>
            }           
        </>
    )
}