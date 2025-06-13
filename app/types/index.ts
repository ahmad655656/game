interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string | undefined;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  description_raw: string;
  metacritic: number | null;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: any | null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: Platform[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  stores: Store[];
  clip: string | null;
  tags: Tag[];
  esrb_rating: EsrbRating | null;
  short_screenshots: Screenshot[];
  data: GameData
}
   interface GameData {
     background_image: string;
     name: string;
     description_raw: string;
     rating: number;
   }

interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}
interface GamesSliderProps {
  title: string;
  games: Game[];
  slidesPerView?: number;
  big?: boolean;
  description?: string;
}
interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface ParentPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface Store {
  id: number;
  name: string;
  slug: string;
}

interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

interface EsrbRating {
  id: number;
  name: string;
  slug: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  role: string;
}

interface Friends {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
interface Platform {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    image: string | null;
    year_start: number | null;
    year_end: number | null;
    games: Game[];
}
interface Screenshot {
    id: number;
    image: string;
    width: number;
    height: number;
    is_deleted: boolean;
}

interface GameScreenshotsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Screenshot[];
}
interface SimilarGame {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: {
        id: number;
        title: string;
        count: number;
        percent: number;
    }[];
    ratings_count: number;
    reviews_text_count: number;
    added: number;
    added_by_status: {
        yet: number;
        owned: number;
        beaten: number;
        toplay: number;
        dropped: number;
        playing: number;
    };
    metacritic: number | null;
    playtime: number;
    suggestions_count: number;
    updated: string;
    user_game: any | null; // يمكنك تحديد نوع البيانات إذا كان معروفًا
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    platforms: {
        platform: {
            id: number;
            name: string;
            slug: string;
            image: string | null;
            year_end: number | null;
            year_start: number | null;
            games_count: number;
            image_background: string;
        };
        released_at: string;
        requirements_en: string | null;
        requirements_ru: string | null;
    }[];
    parent_platforms: {
        platform: {
            id: number;
            name: string;
            slug: string;
        };
    }[];
    genres: {
        id: number;
        name: string;
        slug: string;
        games_count: number;
        image_background: string;
    }[];
    stores: {
        id: number;
        store: {
            id: number;
            name: string;
            slug: string;
            domain: string;
            games_count: number;
            image_background: string;
        };
    }[];
    clip: any | null; // يمكنك تحديد نوع البيانات إذا كان معروفًا
    tags: {
        id: number;
        name: string;
        slug: string;
        language: string;
        games_count: number;
        image_background: string;
    }[];
    esrb_rating: { id: number; name: string; slug: string } | null;
    short_screenshots: {
        id: number;
        image: string;
    }[];
}

interface SimilarGamesResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: SimilarGame[];
}
