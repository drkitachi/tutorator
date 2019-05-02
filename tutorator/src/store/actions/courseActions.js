export const createCourse = (course) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('courses').add({
            ...course,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_COURSE', course})
        }).catch((err) => {
            dispatch({ type: 'CREATE_COURSE_ERROR', err})
        })
        

    }
        
    
}