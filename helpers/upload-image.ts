export const uploadImage = async ( image: File ) => {
    try{
        const formData = new FormData();
        formData.append("photo", image);

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT ?? ""}/api/upload`, {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if(data.success === false){
            return {
                success: data.success,
                error: data.error,
            };
        }

        return {
            success: data.success,
            url: data?.data.url,
        };
    }
    catch(error){
        if(error instanceof Error) {
            return {
                success: false,
                error: error.message
            }
        }

        return {
            success: false,
            error: "Internal Server Error"
        };
    }
};