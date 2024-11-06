const ContextList = () => {
    const contexts = [
        { id: 1, name: "Context 1" },
        { id: 2, name: "Context 2" },
        { id: 3, name: "Context 3" },
    ];

    return `
        <ul>
            ${contexts.map(context => `<li key=${context.id}>${context.name}</li>`).join('')}
        </ul>
    `;
};

export default ContextList;
