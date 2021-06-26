import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '26cd6eda-bc62-4bf5-b3d8-fb025b33cde9'
    }
})

export const usersAPI = {
    getUsers (currentPage: number, pagesSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
            .then(response => {
                return response.data
            })
    },
    unfollow (userID: number) {
        return instance.delete(`follow/${userID}`)
    },
    follow (userID: number) {
        return instance.post(`follow/${userID}`)
    },
    getProfile (userID: string) {
        return instance.get(`profile/${userID}`)
    }
}

export const authMe = {
    getMe () {
        return instance.get(`auth/me`)
    }
}