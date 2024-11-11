import axios from 'axios';

export const apiClient={
    // async get(URL){
    //     try{
    //         const response= await fetch.then((response) => {
    //             console.log(response);
    //           });

    //         return response;
    //     }
    //     catch(err){
    //         console.log('Error during integration', err);
    //     }
    // },

    async get(URL) {
        try {
            const response = await fetch(URL, {
                method: 'GET',    // Use GET method
                credentials: 'include',  // Include cookies in the request if needed
            });

            if (!response.ok) {   // Check if the response is not ok
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json(); // Parse the response as JSON
            console.log(data);   // Log the data
            return data;         // Return the parsed data
        } catch (err) {
            console.error('Error during GET request', err);
            throw err; // Optionally rethrow the error if you want to handle it later
        }
    },

    async post(URL, data){
        try{
            const response= await axios.post(URL, data, { withCredentials: true });
            return response.data;
        }
        catch(err){
            console.log('Error during integration', err);
        }
    }
}