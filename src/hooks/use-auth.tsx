import React from "react"
export const useAuth = () => {
    const [isAuthenticated, setAuthenticated] = React.useState<boolean>(true)
    return {
        isAuthenticated
    }
}