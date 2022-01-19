const ADD_BIRD = 'ADD_BIRD';

export function addBird(bird) {
    return {
        type: ADD_BIRD,
        bird
    }
}

const defaultBirds = [
    {
        name: "robin",
        views: 1
    }
];

function birds(state = defaultBirds, action) {
    switch (action.type) {
        case ADD_BIRD:
            return [
                ...state,
                {
                    name: action.bird,
                    views: 1
                }
            ]
        default:
            return state;
    }
}