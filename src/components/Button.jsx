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
                        <ion-icon name="eye-outline"></ion-icon>
                        {text}
                    </a>
            }           
        </>
    )
}