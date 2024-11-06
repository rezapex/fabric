const SessionList = () => {
    const sessions = [
        { id: 1, name: "Session 1" },
        { id: 2, name: "Session 2" },
        { id: 3, name: "Session 3" },
    ];

    return `
        <ul>
            ${sessions.map(session => `<li key=${session.id}>${session.name}</li>`).join('')}
        </ul>
    `;
};

export default SessionList;
