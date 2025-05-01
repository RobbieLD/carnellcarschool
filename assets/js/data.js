const announcements = [
    {
        title: 'July Madness',
        body: 'For the month of July all lessons are 10% off!',
        from: '2025-01-01',
        to: '2025-07-31'
    }
]

window.announcements = () => {
    const today = new Date();
    return announcements.filter(f => new Date(f.from) <= today && new Date(f.to) >= today)
}