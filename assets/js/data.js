const announcements = [
    {
        title: 'Skidpan Day',
        body: 'The next Skidpan day is on Saturday 10th of January from 12:30pm to 4:30pm',
        from: '2025-11-17',
        to: '2026-01-10'
    }
]

window.announcements = () => {
    const today = new Date();
    return announcements.filter(f => new Date(f.from) <= today && new Date(f.to) >= today)
}
