const BASE_URL = "https://wedding-reception-221663583843.asia-south1.run.app/api/"

export const createUserApi = (body) => {
console.log(JSON.stringify(body))

   return fetch(BASE_URL + "users",{
    method:"POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    }
   })
}

export const getUser = (uid) => {
   return fetch(BASE_URL+"users/"+uid)
}