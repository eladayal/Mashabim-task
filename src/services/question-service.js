export const questionService = {
    getQuestions,
}

const gQuestion = [
    { idx: 1 },
    { idx: 2 },
    {
        idx: 3,
        txt: 'על מנת שנוכל לעזור לך לשים את כספך באפיק הנכון, נא לסמן את המקומות בהם יש לך כסף',
        answers: [
            { icon: 'atm', title: 'כסף בעו\"ש' },
            { icon: 'crypto', title: 'מטבע דיגיטלי' },
            { icon: 'stock', title: 'תיק מניות' },
            { icon: 'finance', title: 'קרן השתלמות' },
            { icon: 'safe', title: 'קופת גמל' },
            { icon: 'piggy-bank', title: 'חיסכון בבנק' },
            { icon: 'currency', title: 'מטבע חוץ' },
            { icon: 'none', title: 'אין לי' },
        ]
    },
    { idx: 4 },
    { idx: 5 },
    { idx: 6 },
    { idx: 7 },
]

function getQuestions() {
    return gQuestion
}