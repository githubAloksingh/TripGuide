export const SelectTravelList = [
  {
    id: 1,
    title: 'Solo Explorer',
    desc: 'Embark on a personal journey of discovery.',
    icon: '✈️',
    people: '1 person',
  },
{
  id: 2,
  title: 'A Couple',
  desc: 'Two travelers exploring together.',
  icon: '🥂',
  people: '2 people',
},
  {
    id: 3,
    title: 'Family Vacation',
    desc: 'Unforgettable moments with your loved ones.',
    icon: '🏡',
    people: '3 to 5 people',
  },
  {
    id: 4,
    title: 'Adventure with Friends',
    desc: 'Make memories with your thrill-seeking crew.',
    icon: '⛵',
    people: '5 to 10 people',
  },
]


export const SelectBudgetOptions = [
    {
    id: 1,
    title: 'Budget-Friendly',
    desc: 'Travel smart and save money.',
    icon: '💵',
  },
    {
        id:2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: '💰',
    },
    {
        id:3,
        title: 'Luxury',
        desc: 'Dont worry about cost',
        icon: '💸',
    }
]

export const AI_PROMPT = 'Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} with a {budget} budget ,Give me a Hotels options list with Hotel Name, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with place Name, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format'