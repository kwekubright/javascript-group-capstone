/* eslint-disable no-unused-expressions */
import movieCounter from '../src/modules/movieCounter.js';

const mockAPIResponse = [
  {
    score: 0.9095458,
    show: {
      id: 139,
      url: 'https://www.tvmaze.com/shows/139/girls',
      name: 'Girls',
      type: 'Scripted',
      language: 'English',
      genres: [
        'Drama',
        'Romance',
      ],
      status: 'Ended',
      runtime: 30,
      averageRuntime: 30,
      premiered: '2012-04-15',
      ended: '2017-04-16',
      officialSite: 'http://www.hbo.com/girls',
      schedule: {
        time: '22:00',
        days: [
          'Sunday',
        ],
      },
      rating: {
        average: 6.7,
      },
      weight: 97,
      network: {
        id: 8,
        name: 'HBO',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York',
        },
        officialSite: 'https://www.hbo.com/',
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 30124,
        thetvdb: 220411,
        imdb: 'tt1723816',
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg',
      },
      summary: '<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>',
      updated: 1611310521,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/139',
        },
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/1079686',
        },
      },
    },
  },
  {
    score: 0.8855909,
    show: {
      id: 41734,
      url: 'https://www.tvmaze.com/shows/41734/girls',
      name: 'GIRLS',
      type: 'Scripted',
      language: 'Mongolian',
      genres: [
        'Comedy',
      ],
      status: 'Ended',
      runtime: 41,
      averageRuntime: null,
      premiered: null,
      ended: null,
      officialSite: null,
      schedule: {
        time: '',
        days: [
          'Thursday',
        ],
      },
      rating: {
        average: null,
      },
      weight: 58,
      network: {
        id: 1672,
        name: 'UBS',
        country: {
          name: 'Mongolia',
          code: 'MN',
          timezone: 'Asia/Ulaanbaatar',
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: null,
        imdb: 'tt8709752',
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/191/478539.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/191/478539.jpg',
      },
      summary: null,
      updated: 1632080861,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/41734',
        },
      },
    },
  },
  {
    score: 0.7030498,
    show: {
      id: 49334,
      url: 'https://www.tvmaze.com/shows/49334/shining-girls',
      name: 'Shining Girls',
      type: 'Scripted',
      language: 'English',
      genres: [
        'Crime',
        'Thriller',
        'Supernatural',
      ],
      status: 'To Be Determined',
      runtime: null,
      averageRuntime: 49,
      premiered: '2022-04-29',
      ended: null,
      officialSite: 'https://tv.apple.com/show/shining-girls/umc.cmc.22xs4xobsimzy5qqdif0rhmdy',
      schedule: {
        time: '',
        days: [
          'Friday',
        ],
      },
      rating: {
        average: 7.8,
      },
      weight: 99,
      network: null,
      webChannel: {
        id: 310,
        name: 'Apple TV+',
        country: null,
        officialSite: 'https://tv.apple.com/',
      },
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 385810,
        imdb: 'tt2953250',
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/406/1015813.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/406/1015813.jpg',
      },
      summary: '<p><b>Shining Girls</b> is a metaphysical thriller, which follows a Chicago reporter who survived a brutal assault only to find her reality shifting as she hunts down her attacker.</p>',
      updated: 1654448061,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/49334',
        },
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/2272289',
        },
      },
    },
  },
  {
    score: 0.70289856,
    show: {
      id: 33320,
      url: 'https://www.tvmaze.com/shows/33320/derry-girls',
      name: 'Derry Girls',
      type: 'Scripted',
      language: 'English',
      genres: [
        'Comedy',
      ],
      status: 'Ended',
      runtime: null,
      averageRuntime: 33,
      premiered: '2018-01-04',
      ended: '2022-05-18',
      officialSite: 'http://www.channel4.com/programmes/derry-girls',
      schedule: {
        time: '',
        days: [],
      },
      rating: {
        average: 8.3,
      },
      weight: 99,
      network: {
        id: 45,
        name: 'Channel 4',
        country: {
          name: 'United Kingdom',
          code: 'GB',
          timezone: 'Europe/London',
        },
        officialSite: 'https://www.channel4.com/',
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 338903,
        imdb: 'tt7120662',
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/402/1007479.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/402/1007479.jpg',
      },
      summary: "<p>16-year-old Erin Quinn lives with her uncompromising mother, her long-suffering father and the fearsome ‘Granda Joe', a man whose love for his daughters and granddaughters is surpassed only by his contempt for his son-in-law.</p><p>It's the early 90s, and Erin is used to seeing her country on the nightly news and speaking in acronyms (The IRA, The UDA, The RUC). This is a time of armed police in armoured Land Rovers and British Army check points. But it's also the time of Murder She Wrote, The Cranberries, MJ and Lisa Marie, Doc Martens, bomber jackets, The X Files, Nirvana and Wayne's World. And while The Troubles may hang over her home town, Erin has troubles of her own</p>",
      updated: 1655484152,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/33320',
        },
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/2323336',
        },
      },
    },
  },
  {
    score: 0.7025162,
    show: {
      id: 42986,
      url: 'https://www.tvmaze.com/shows/42986/paper-girls',
      name: 'Paper Girls',
      type: 'Scripted',
      language: 'English',
      genres: [
        'Drama',
        'Science-Fiction',
      ],
      status: 'In Development',
      runtime: null,
      averageRuntime: null,
      premiered: '2022-07-29',
      ended: null,
      officialSite: null,
      schedule: {
        time: '',
        days: [],
      },
      rating: {
        average: null,
      },
      weight: 98,
      network: null,
      webChannel: {
        id: 3,
        name: 'Prime Video',
        country: null,
        officialSite: 'https://www.primevideo.com',
      },
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 368187,
        imdb: 'tt10623646',
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/412/1031682.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/412/1031682.jpg',
      },
      summary: '<p><b>Paper Girls </b>follows four young girls who, while out delivering papers on the morning after Halloween in 1988, become unwittingly caught in a conflict between warring factions of time-travelers, sending them on an adventure through time that will save the world. As they travel between our present, the past, and the future — they encounter future versions of themselves and now must choose to embrace or reject their fate. An emotional adventure in which the girls and the women they eventually become are tough, their friendships are authentic, and their journey through time is epic.</p>',
      updated: 1654957528,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/42986',
        },
        nextepisode: {
          href: 'https://api.tvmaze.com/episodes/2342533',
        },
      },
    },
  },
];

describe('movieCounter', () => {
  test('should return the number of movie as 5', () => {
    expect(movieCounter(mockAPIResponse)).toBe(5);
  });

  test('should return the number of comments as 0', () => {
    expect(movieCounter([])).toBe(0);
  });
});
