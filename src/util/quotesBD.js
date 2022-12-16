const quotes = [
    {
        phrase: `It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.`,
        author: `Ann Landers`
    },
    {
        phrase: `I would rather die of passion than of boredom.`,
        author: `Vincent van Gogh`
    },
    {
        phrase: `Eighty percent of success is showing up.`,
        author: `Woody Allen`,
    },
    {
        phrase: `Life is not measured by the number of breaths we take, but by the moments that take our breath away.`,
        author: `Maya Angelou`,
    },
    {
        phrase: `You become what you believe.`,
        author: `Oprah Winfrey`,
    },
    {
        phrase: `If the wind will not serve, take to the oars.`,
        author: `Latin Proverb`,
    },
    {
        phrase: `What's money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.`,
        author: `Bob Dylan`,
    },
    {
        phrase: `You can't use up creativity. The more you use, the more you have.`,
        author: `Maya Angelou`
    },
    {
        phrase: `If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.`,
        author: `Vincent Van Gogh`
    },
    {
        phrase: `Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.`,
        author: `Jesus`
    },
    {
        phrase: `Challenges are what make life interesting and overcoming them is what makes life meaningful.`,
        author: `Joshua J. Marine`
    },
    {
        phrase: `The person who says it cannot be done should not interrupt the person who is doing it.`,
        author: `Chinese Proverb`
    },
    {
        phrase: `You miss 100% of the shots you don’t take.`,
        author: `Wayne Gretzky`
    },
    {
        phrase: `A truly rich man is one whose children run into his arms when his hands are empty.`,
        author: `Unknown`
    },
    {
        phrase: `Life is what happens to you while you’re busy making other plans.`,
        author: `John Lennon`
    },
    {
        phrase: `Build your own dreams, or someone else will hire you to build theirs.`,
        author: `Farrah Gray`
    },
    {
        phrase: `The two most important days in your life are the day you are born and the day you find out why.`,
        author: `Mark Twain`
    },
    {
        phrase: `You may be disappointed if you fail, but you are doomed if you don’t try.`,
        author: `Beverly Sills`
    },
    {
        phrase: `Either you run the day, or the day runs you.`,
        author: `Jim Rohn`
    },
    {
        phrase: `I have learned over the years that when one’s mind is made up, this diminishes fear.`,
        author: `Rosa Parks`
    },
    {
        phrase: `When I let go of what I am, I become what I might be.`,
        author: `Lao Tzu`
    },
    {
        phrase: `When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.`,
        author: `John Lennon`
    }
];

export function getQuote() {
    let q = quotes[Math.floor(Math.random() * quotes.length)];
    return q;
}

export function getRGB() {

    let r, g, b;
    do {
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
    } while (Math.abs(r-g) > 100 || Math.abs(r-b) > 100 || Math.abs(b-g) > 100 || r+g+b > 254*2)



    return [r, g, b];
}


