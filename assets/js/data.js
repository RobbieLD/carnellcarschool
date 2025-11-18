const announcements = [
    {
        title: 'Skidpan Day',
        body: 'Next Skidpan day - Saturday 10th of January - 12:30pm to 4:30pm',
        from: '2025-11-18',
        to: '2026-01-10'
    }
]

window.announcements = () => {
    const today = new Date();
    return announcements.filter(f => new Date(f.from) <= today && new Date(f.to) >= today)
}
