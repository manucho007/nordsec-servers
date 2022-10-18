import React from 'react'

const ErrorBanner: React.FunctionComponent<{ message: string | undefined }> = ({
    message,
}) => {
    return (
        <div
            className="p-4 mb-4 text-sm  rounded-lg bg-red-200 text-red-800"
            role="alert"
        >
            <span className="font-medium">{message}</span>
        </div>
    )
}

export default ErrorBanner
