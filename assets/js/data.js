const announcements = [
    {
        title: 'Skidpan Day',
        body: 'Fancy a Skidpan day? Sign up to our newsletter to find out when the next one will be',
        from: '2025-01-01',
        to: '2025-07-31'
    }
]

window.announcements = () => {
    const today = new Date();
    return announcements.filter(f => new Date(f.from) <= today && new Date(f.to) >= today)
}
