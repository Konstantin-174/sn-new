import {v1} from 'uuid';
import {
    AddMessageActionType,
    AddPostActionType,
    ChangeNewMessageActionType,
    ChangeNewTextActionType,
    PostsType,
    ProfilePageType
} from '../store';


export const profileReducer = (state: ProfilePageType, action: AddPostActionType | ChangeNewTextActionType | AddMessageActionType | ChangeNewMessageActionType) => {
    switch (action.type){
        case "ADD-POST":
            state.newPostText = "";
            const newPost: PostsType = {
                id: v1(),
                name: '%@User_name@%',
                text: action.postMessage,
                likes: 0
            }
            state.posts.push(newPost)
            return state;
        case "CHANGE-NEW-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

// === ACTION CREATORS ===
export const addPostAC = (postText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        postMessage: postText
    }
}

export const changeNewTextAC = (newText: string): ChangeNewTextActionType => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    }
}

// === / ACTION CREATORS ===