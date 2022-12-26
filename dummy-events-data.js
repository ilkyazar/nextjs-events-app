const DUMMY_EVENTS = [
  {
    id: '1',
    title: 'Red Hot Chili Peppers: 2023 Tour',
    description: 'Rock Werchter Festival',
    location: 'Werchter, Belgium',
    date: '2023-06-30',
    image: 'images/rhcp.jpg',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Harry Styles Love on Tour 2023',
    description: "Kia Forum is Harry's House",
    location: 'Kia Forum, Inglewood CA',
    date: '2023-01-27',
    image: 'images/hs.jpg',
    isFeatured: true,
  },
  {
    id: '3',
    title: 'SZA - SOS Tour',
    description:
      'In the best interest of fans and staff, the Event Organizer will continue to monitor local COVID-19 trends and meet or exceed protocols mandated by local governments. By purchasing tickets to this event, you agree to abide by the health and safety measures in effect at the time of the event, which may include, but not be limited to, wearing masks, providing proof of vaccination status and/or providing proof of negative COVID-19 test. Government mandates, venue protocols, and event requirements are subject to change. For more information, please search your event on msg.com. Tickets are not available at the box office on the first day of the public on sale. ARRIVE EARLY: Please arrive one-hour prior to showtime. All packages, including briefcases and pocketbooks, will be inspected prior to entry.',
    location: 'Madison Square Garden, New York, NY',
    date: '2023-03-05',
    image: 'images/sza.jpg',
    isFeatured: false,
  },
  {
    id: '4',
    title: 'Metallica M72 World Tour',
    description:
      'In the best interest of fans and staff, the Event Organizer will continue to monitor local COVID-19 trends and meet or exceed protocols mandated by local governments. By purchasing tickets to this event, you agree to abide by the health and safety measures in effect at the time of the event, which may include, but not be limited to, wearing masks, providing proof of vaccination status and/or providing proof of negative COVID-19 test. Government mandates, venue protocols, and event requirements are subject to change. For more information, please search your event on msg.com. Tickets are not available at the box office on the first day of the public on sale. ARRIVE EARLY: Please arrive one-hour prior to showtime. All packages, including briefcases and pocketbooks, will be inspected prior to entry.',
    location: 'Parken Stadium - Copenhagen, Denmark',
    date: '2024-06-14',
    image: 'images/m72.jpg',
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year &&
      eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
