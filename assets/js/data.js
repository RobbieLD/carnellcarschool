const announcements = [
    {
        title: 'Skidpan Day',
        body: 'The next Skidpan event is on Saturday 25th of July from 5pm to 9pm',
        from: '2026-07-14',
        to: '2026-07-25'
    }
]

window.announcements = () => {
    const today = new Date();
    return announcements.filter(f => new Date(f.from) <= today && new Date(f.to) >= today)
}
