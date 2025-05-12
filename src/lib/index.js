export const resolveRatings = (rating) => {
    let rate;
    switch (parseInt(rating)) {
        case 1:
            rate = [1];
        break;
        case 2:
            rate = [1, 2];
        break;
        case 3:
            rate = [1, 2, 3];
        break;
        case 4:
            rate = [1, 2, 3, 4];
        break;
        case 5:
            rate = [1, 2, 3, 4, 5];
        break;
    
        default:
            break;
    }
    return rate;
}