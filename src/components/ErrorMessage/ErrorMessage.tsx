import "./ErrorMessage.css";

interface ErrorMessageProps {
    message: string
    textColorTheme?: string
    size?: string
}

/**
 * 
 * @param {string} message - of error to view
 * @param {string} textColorTheme - text of color - possible values light/dark
 * @param {string} size - font size - possible values - 1/2/3/4/5 (value are in rem)
 * @returns 
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({message, textColorTheme = "dark", size = 1}) => {

    const textColor = textColorTheme === "light" ? "#e3e2e2" : "#002626";

    return (
        <div 
            className="error-message"
            style={{
                color: textColor,
                fontSize: `${size}rem`
            }}
        >
            <span>{message}</span>
        </div>
    )
}

export default ErrorMessage;