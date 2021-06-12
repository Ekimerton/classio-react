import _ from 'lodash';

// Groups sections of the same class and type into a single sets, returns all unique sets generated
export const generateSets = (courses) => {
    var sets = [];
    for (const course of courses) {
        const sections = _.filter(course.sections, section => section.timeslots.length > 0);
        const sectionGroups = _.groupBy(sections, section => section.kind);
        const courseSets = Object.values(sectionGroups);
        sets = sets.concat(courseSets);
    }
    return sets;
};

// Returns the cartesian product of the provided sets, i.e. returns all combinations generated by picking one item from each set
export const cartesianProduct = (sets, n = 0, result = [], current = []) => {
    if (n === sets.length) result.push(current)
    else sets[n].forEach(item => cartesianProduct(sets, n + 1, result, [...current, item]))

    return result
};

const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr'];
// Flattens timeslots and checks for any conflicts
export const generateTimetables = (combinations) => {
    var timetables = [];
    for (const combination of combinations) {
        const timeslots = _.flatMap(combination, set => set.timeslots)
        var days = _.groupBy(timeslots, timeslot => timeslot.day)
        for (const day of weekdays) {
            days[day] = _.sortBy(days[day], 'start_time');
        }
        timetables.push(days);
    }
    return timetables;
};


export const generateScores = (timetables) => {
    return timetables.map((timetable) => {
        return {
            scores: { total: 8, lunch: 3, dinner: 4, offTime: 8 },
            timetable
        }
    })
}