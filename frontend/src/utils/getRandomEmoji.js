const getRandomEmoji = () => {
    const emojis = ['😀', '😍', '🎉', '🚀', '🌈', '🍕', '🐱', '🌺', '🎸', '📚', '🍦', '🚲', '🎮', '🏖️', '🌍', '🌟', '🍍', '🐧', '🌄', '👾'];

    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];

    return randomEmoji;
};

export default getRandomEmoji;
