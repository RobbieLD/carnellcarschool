const announcements = [
    {
        title: 'Skidpan Day',
        body: 'The next Skidpan day is on Saturday 21th of February from 12:30pm to 4:30pm',
        from: '2026-02-03',
        to: '2026-02-20'
    }
]

window.announcements = () => {
    const today = new Date();
    return announcements.filter(f => new Date(f.from) <= today && new Date(f.to) >= today)
}
