export  const getData = async <T>(url:string): Promise<T> => {
    const reponse = await fetch (url);
    return await reponse.json()

    

}