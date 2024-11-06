const PatternList = () => {
    const patterns = [
        { id: 1, name: "Pattern 1" },
        { id: 2, name: "Pattern 2" },
        { id: 3, name: "Pattern 3" },
    ];

    return `
        <ul>
            ${patterns.map(pattern => `<li key=${pattern.id}>${pattern.name}</li>`).join('')}
        </ul>
    `;
};

export default PatternList;
