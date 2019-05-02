const initState = {
    courses: [ 
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
}

const courseReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_COURSE':
            console.log('created the course', action.course)
            return state;
        case 'CREATE_COURSE_ERROR':
            console.log('create course error', action.err)
            return state;
        default:
            return state;
    }
}

export default courseReducer