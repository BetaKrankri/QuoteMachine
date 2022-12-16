const quotes= [
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
        }
    ];

    export function getQuote() {
        let q = quotes[Math.floor(Math.random() * quotes.length)];
        return q;
    }

    export function getRGB() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        return [r,g,b];
    }


