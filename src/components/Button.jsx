export const Button = ({ text = 'button', url = '#', open = false }) => {
    return (
        <>
            {
                (open) ? 
                    <a className="button" href={url} target="_blank">
                        <ion-icon name="document-text-outline"></ion-icon>
                        {text}
                    </a>
                    :
                    <a className="button" href={url}>
                        <ion-icon name="chevron-down-outline"></ion-icon>
                        {text}
                    </a>
            }           
        </>
    )
}