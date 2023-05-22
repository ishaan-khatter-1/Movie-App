const routes = {
  Onboarding: {
    getStarted: {
      path: 'GetStarted',
    },
    SplashScreen: {
      path: 'SplashSceen',
    },
  },
  root: {
    DrawerNavigation: {
      path: 'DrawerNavigation',
      BottomNavigation: {
        path: 'BottomNavigation',
        Home: {
          path: 'Home',
        },
        Movie: {
          path: 'Movie',
        },
        Television: {
          path: 'Television',
        },
      },
    },
  },

  dashboard: {
    MovieScreens: {
      Screens: {
        DiscoverTV: {
          path: 'DiscoverTV',
        },
        HotMovie: {
          path: 'HotMovie',
        },
        PopularMovie: {
          path: 'PopularMovie',
        },
        PopularTv: {
          path: 'PopularTv',
        },
        RecommendedMovie: {
          path: 'RecommendedMovie',
        },
        RecommendedTv: {
          path: 'RecommendedTv',
        },
        TrendingMovie: {
          path: 'TrendingMovie',
        },
        TrendingTv: {
          path: 'TrendingTv',
        },
        UpcomingMovie: {
          path: 'UpcomingMovie',
        },
      },
    },
    MovieTvDetail: {
      path: 'MovieTvDetail',
    },
    Drawer: {
      DrawerScreens: {
        Favourites: {
          path: 'Favourites',
        },
        About: {
          path: 'About',
        },
      },
    },
  },
};

export default routes;
