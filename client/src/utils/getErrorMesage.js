export const getApiErrorMessage = (error) => {
    switch (error?.response?.status) {
        case 404:
            return 'check your url'
        
        case 401:
            return 'unothorized'
        
    
        default:
            return 'An error occured'
    }
}
