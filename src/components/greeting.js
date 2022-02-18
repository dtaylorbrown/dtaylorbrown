const Greeting = () => {
    const greetings = [
        'Yo',
        'Mooooorning',
        'Hello',
        'Nice to meet you',
        'Afternoon',
        'Evening',
    ];
    return greetings[Math.floor(Math.random(0) * greetings.length)];
};

export default Greeting;
