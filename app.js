/* app.js — Scout: Food & Drink Discovery for Tokyo */

/* ===== VENUE DATA ===== */
const VENUES = [
  // ===== EAT (15) =====
  {
    id: 'e1', name: 'Fuunji', nameJa: 'ふうんじ', type: 'Tsukemen Ramen', category: 'eat',
    neighbourhood: 'Shinjuku', cuisineType: 'Ramen',
    authenticityScore: 9.1, tabelogScore: 3.72, googleScore: 4.3, redditMentions: 87, blogMentions: 42,
    price: 1, distance: '4 min walk', vibe: 'casual',
    whyThisPlace: 'The tsukemen broth here is impossibly rich — regulars queue 30 mins and never complain.',
    insiderTip: 'Order "tokumori" (extra noodles) for ¥100 more — the portion is massive. Go at 2pm to skip the worst of the line.',
    vibeDescription: 'No-frills counter seating, slurping encouraged. Pure ramen focus.',
    coverCharge: 'None', hours: '11:00–21:00',
    translatedReview: '"I have eaten tsukemen across Japan and nothing comes close. The dipping broth is a perfect balance of fish and pork." — Tabelog reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop',
    lat: 35.6896, lng: 139.6998, tags: ['ramen', 'tsukemen', 'queue-worthy'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'e2', name: 'Nakiryu', nameJa: '鳴龍', type: 'Michelin Ramen', category: 'eat',
    neighbourhood: 'Otsuka', cuisineType: 'Ramen',
    authenticityScore: 8.9, tabelogScore: 3.68, googleScore: 4.4, redditMentions: 112, blogMentions: 67,
    price: 2, distance: '2 min walk', vibe: 'intimate',
    whyThisPlace: 'A Michelin star for ramen — the tantanmen is unlike anything else in Tokyo.',
    insiderTip: 'The dandan noodles (tantanmen) are the star. Arrive before 10:30am to put your name on the list.',
    vibeDescription: 'Tiny 10-seat counter. Hushed reverence. Every bowl is a masterwork.',
    coverCharge: 'None', hours: '11:00–15:00, 18:00–21:00',
    translatedReview: '"The sesame and chili oil fragrance hit me before I even saw the bowl. Perfectly balanced spice and umami." — Tabelog reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop',
    lat: 35.7318, lng: 139.7285, tags: ['ramen', 'michelin', 'tantanmen'],
    michelinStatus: 'star', touristTrapFlag: false
  },
  {
    id: 'e3', name: 'Toriki', nameJa: '鳥貴族', type: 'Yakitori Chain', category: 'eat',
    neighbourhood: 'Shibuya', cuisineType: 'Yakitori',
    authenticityScore: 7.2, tabelogScore: 3.05, googleScore: 3.9, redditMentions: 45, blogMentions: 28,
    price: 1, distance: '6 min walk', vibe: 'lively',
    whyThisPlace: 'Every skewer ¥360. The chain that proves cheap yakitori can still be genuinely good.',
    insiderTip: 'The momo (thigh) and kawa (skin) skewers are the best value. Pair with a mega-highball.',
    vibeDescription: 'Loud, busy, beer-fueled. Exactly the kind of place salarymen decompress after work.',
    coverCharge: 'None', hours: '17:00–01:00',
    translatedReview: '"You won\'t find Michelin quality here, but for the price it is unbeatable. Go with friends and order everything." — Google reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop',
    lat: 35.6598, lng: 139.7005, tags: ['yakitori', 'cheap', 'chain'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'e4', name: 'Birdland', nameJa: 'バードランド', type: 'Premium Yakitori', category: 'eat',
    neighbourhood: 'Ginza', cuisineType: 'Yakitori',
    authenticityScore: 9.4, tabelogScore: 3.89, googleScore: 4.5, redditMentions: 65, blogMentions: 55,
    price: 4, distance: '3 min walk', vibe: 'intimate',
    whyThisPlace: 'The only yakitori restaurant with a Michelin star. Toshihiro Wada is a living legend.',
    insiderTip: 'Book weeks ahead. Sit at the counter to watch Wada-san work. The chicken liver pâté is off-menu gold.',
    vibeDescription: 'Elegant counter dining below Tsukiji. Refined but never stuffy.',
    coverCharge: 'None — omakase only', hours: '17:00–21:30',
    translatedReview: '"Each skewer tells a story. The chicken oyster with wasabi made me close my eyes in disbelief." — Tabelog reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop',
    lat: 35.6721, lng: 139.7636, tags: ['yakitori', 'michelin', 'omakase'],
    michelinStatus: 'star', touristTrapFlag: false
  },
  {
    id: 'e5', name: 'Tonkatsu Maisen', nameJa: 'とんかつ まい泉', type: 'Tonkatsu', category: 'eat',
    neighbourhood: 'Shibuya', cuisineType: 'Tonkatsu',
    authenticityScore: 8.1, tabelogScore: 3.58, googleScore: 4.2, redditMentions: 72, blogMentions: 38,
    price: 2, distance: '8 min walk', vibe: 'casual',
    whyThisPlace: 'Set in a converted bathhouse — the kurobuta pork katsu here is textbook perfection.',
    insiderTip: 'The hire (tenderloin) is more popular but the rosu (loin) has better flavour. Get the katsu sando for takeaway.',
    vibeDescription: 'Spacious, clean, family-friendly. Beautiful historic building.',
    coverCharge: 'None', hours: '11:00–22:00',
    translatedReview: '"The breading is impossibly light and the pork melts on the tongue. A must-visit for any tonkatsu lover." — Tabelog reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=400&fit=crop',
    lat: 35.6628, lng: 139.7102, tags: ['tonkatsu', 'historic', 'family-friendly'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'e6', name: 'Kikanbo', nameJa: '鬼金棒', type: 'Spicy Ramen', category: 'eat',
    neighbourhood: 'Kanda', cuisineType: 'Ramen',
    authenticityScore: 8.8, tabelogScore: 3.72, googleScore: 4.1, redditMentions: 58, blogMentions: 33,
    price: 1, distance: '3 min walk', vibe: 'lively',
    whyThisPlace: 'Choose your spice and numbing levels independently — it\'s ramen meets choose-your-own-adventure.',
    insiderTip: 'Start with spice level 3, numbing level 2. It escalates fast. The karashibi miso is the signature.',
    vibeDescription: 'Demon-themed decor. Counter seats. Intense and fun.',
    coverCharge: 'None', hours: '11:00–15:00, 17:00–21:00',
    translatedReview: '"My lips were tingling for an hour. The miso broth underneath the chili is incredibly complex." — Google reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop',
    lat: 35.6952, lng: 139.7711, tags: ['ramen', 'spicy', 'sichuan'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'e7', name: 'Sushi Dai', nameJa: '寿司大', type: 'Market Sushi', category: 'eat',
    neighbourhood: 'Tsukiji', cuisineType: 'Sushi',
    authenticityScore: 7.8, tabelogScore: 3.58, googleScore: 4.3, redditMentions: 134, blogMentions: 89,
    price: 3, distance: '5 min walk', vibe: 'casual',
    whyThisPlace: 'Touristy? Yes. But the fish is from the market next door and the itamae have decades of experience.',
    insiderTip: 'The queue at Toyosu is brutal. Go to their Tsukiji Outer Market branch instead — same quality, shorter wait.',
    vibeDescription: 'Tiny counter right in the market. Authentic chaos.',
    coverCharge: 'None', hours: '07:00–14:00',
    translatedReview: '"Even as a local I come here. The omakase set is fair for the quality. Just be prepared to wait." — Tabelog reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop',
    lat: 35.6654, lng: 139.7707, tags: ['sushi', 'market', 'omakase'],
    michelinStatus: 'none', touristTrapFlag: true
  },
  {
    id: 'e8', name: 'Afuri', nameJa: '阿夫利', type: 'Yuzu Shio Ramen', category: 'eat',
    neighbourhood: 'Ebisu', cuisineType: 'Ramen',
    authenticityScore: 8.0, tabelogScore: 3.56, googleScore: 4.2, redditMentions: 63, blogMentions: 41,
    price: 1, distance: '3 min walk', vibe: 'casual',
    whyThisPlace: 'Citrusy, clear, light — the antidote to heavy tonkotsu. Their yuzu shio is a genre of its own.',
    insiderTip: 'The yuzu shio is the classic but try the yuzu shoyu if you want something richer. Get the ajitama egg.',
    vibeDescription: 'Modern, clean, slightly hip. Open kitchen.',
    coverCharge: 'None', hours: '11:00–22:00',
    translatedReview: '"A ramen for people who don\'t usually like ramen. The yuzu aroma is heavenly." — Google reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop',
    lat: 35.6470, lng: 139.7103, tags: ['ramen', 'yuzu', 'light'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'e9', name: 'Butagumi', nameJa: '豚組', type: 'Premium Tonkatsu', category: 'eat',
    neighbourhood: 'Roppongi', cuisineType: 'Tonkatsu',
    authenticityScore: 8.6, tabelogScore: 3.72, googleScore: 4.3, redditMentions: 41, blogMentions: 29,
    price: 3, distance: '5 min walk', vibe: 'intimate',
    whyThisPlace: 'They source from 10+ heritage pig breeds. Pick your pork like you\'d pick wine.',
    insiderTip: 'Ask for the TOKYO X pork — it\'s a rare heritage breed exclusive to Tokyo. The cabbage refill is free.',
    vibeDescription: 'Refined but relaxed. Like a tonkatsu sommelier experience.',
    coverCharge: 'None', hours: '11:30–14:30, 17:30–21:30',
    translatedReview: '"Each breed of pork has a distinct character. The TOKYO X was marbled like wagyu. Life-changing tonkatsu." — Tabelog reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=400&fit=crop',
    lat: 35.6596, lng: 139.7264, tags: ['tonkatsu', 'premium', 'heritage-pork'],
    michelinStatus: 'bibGourmand', touristTrapFlag: false
  },
  {
    id: 'e10', name: 'Udon Maruka', nameJa: 'うどん 丸香', type: 'Sanuki Udon', category: 'eat',
    neighbourhood: 'Jimbocho', cuisineType: 'Udon/Soba',
    authenticityScore: 8.9, tabelogScore: 3.77, googleScore: 4.4, redditMentions: 39, blogMentions: 22,
    price: 1, distance: '2 min walk', vibe: 'casual',
    whyThisPlace: 'The best Sanuki udon in Tokyo. Noodles are made fresh and have that perfect chewy bounce.',
    insiderTip: 'The kamatama udon (with raw egg) is the purist\'s choice. Arrive early — they often sell out.',
    vibeDescription: 'Tiny, functional, queue-out-the-door at lunch. No fuss.',
    coverCharge: 'None', hours: '11:00–16:00',
    translatedReview: '"These noodles have a life of their own. Thick, springy, and impossibly fresh. Better than most shops in Kagawa." — Tabelog reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=600&h=400&fit=crop',
    lat: 35.6955, lng: 139.7579, tags: ['udon', 'sanuki', 'handmade'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'e11', name: 'Gyukatsu Motomura', nameJa: '牛かつ もと村', type: 'Wagyu Beef Katsu', category: 'eat',
    neighbourhood: 'Shibuya', cuisineType: 'Wagyu',
    authenticityScore: 8.2, tabelogScore: 3.55, googleScore: 4.2, redditMentions: 88, blogMentions: 52,
    price: 2, distance: '5 min walk', vibe: 'casual',
    whyThisPlace: 'Deep-fried wagyu that you finish on a hot stone at your seat. Interactive, delicious, unforgettable.',
    insiderTip: 'Get the 130g set — 260g is too much beef katsu for most people. Dip in the wasabi soy, not the tonkatsu sauce.',
    vibeDescription: 'Counter seating with personal hot stones. Quick and efficient.',
    coverCharge: 'None', hours: '11:00–22:00',
    translatedReview: '"The outside is crispy, the inside is pink wagyu heaven. Cooking it on the stone is so much fun." — Google reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
    lat: 35.6610, lng: 139.6987, tags: ['wagyu', 'beef-katsu', 'interactive'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'e12', name: 'Tempura Kondo', nameJa: 'てんぷら 近藤', type: 'Michelin Tempura', category: 'eat',
    neighbourhood: 'Ginza', cuisineType: 'Tempura',
    authenticityScore: 9.6, tabelogScore: 4.09, googleScore: 4.6, redditMentions: 54, blogMentions: 71,
    price: 4, distance: '4 min walk', vibe: 'intimate',
    whyThisPlace: 'Kondo-san\'s sweet potato tempura is legendary. Two Michelin stars of pure precision.',
    insiderTip: 'The lunch omakase is significantly cheaper than dinner. Ask for the seasonal vegetable course — the sweet potato alone is worth the trip.',
    vibeDescription: 'Counter-only. Zen-like calm. You watch a master at work.',
    coverCharge: 'None — omakase only', hours: '12:00–13:30, 17:00–20:30',
    translatedReview: '"I never thought a sweet potato could make me emotional. Kondo-san fries vegetables with the precision of a surgeon." — Tabelog reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1615361200098-9e630ec29b4e?w=600&h=400&fit=crop',
    lat: 35.6713, lng: 139.7632, tags: ['tempura', 'michelin', 'omakase'],
    michelinStatus: 'star', touristTrapFlag: false
  },
  {
    id: 'e13', name: 'Ichiran Shibuya', nameJa: '一蘭 渋谷', type: 'Tonkotsu Ramen', category: 'eat',
    neighbourhood: 'Shibuya', cuisineType: 'Ramen',
    authenticityScore: 6.9, tabelogScore: 3.38, googleScore: 4.1, redditMentions: 210, blogMentions: 95,
    price: 1, distance: '2 min walk', vibe: 'casual',
    whyThisPlace: 'The solo booth concept is iconic. It\'s a tourist magnet, but the tonkotsu is reliable and customisable.',
    insiderTip: 'Honestly, you\'re paying for the experience. The ramen is good, not great. Skip if you only have time for one ramen shop.',
    vibeDescription: 'Individual booths with bamboo partitions. Private ramen meditation.',
    coverCharge: 'None', hours: '24 hours',
    translatedReview: '"It is fine. Good for a solo meal at 3am. But if people are telling you this is the best ramen in Tokyo, they haven\'t tried enough." — Reddit user',
    photoUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop',
    lat: 35.6594, lng: 139.7006, tags: ['ramen', 'tonkotsu', 'solo-dining'],
    michelinStatus: 'none', touristTrapFlag: true
  },
  {
    id: 'e14', name: 'Monja Street Tsukishima', nameJa: 'もんじゃストリート', type: 'Monjayaki', category: 'eat',
    neighbourhood: 'Tsukishima', cuisineType: 'Street Food',
    authenticityScore: 7.5, tabelogScore: 3.45, googleScore: 4.0, redditMentions: 38, blogMentions: 25,
    price: 2, distance: '1 min walk', vibe: 'lively',
    whyThisPlace: 'An entire street of monja restaurants. It\'s gooey, messy, and uniquely Tokyo comfort food.',
    insiderTip: 'Try Moheji or Iroha for the best monja. Order the mentaiko-mochi monja — the cheese-and-cod-roe combo is addictive.',
    vibeDescription: 'Bustling street, steam and smoke, cook-at-your-table fun.',
    coverCharge: 'None', hours: '11:00–22:00 (varies by shop)',
    translatedReview: '"Monja looks terrible but tastes incredible. Scrape it off the griddle with the tiny spatula and eat it crispy." — Google reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop',
    lat: 35.6620, lng: 139.7780, tags: ['monjayaki', 'street-food', 'interactive'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'e15', name: 'Onigiri Bongo', nameJa: 'おにぎり ぼんご', type: 'Legendary Onigiri', category: 'eat',
    neighbourhood: 'Otsuka', cuisineType: 'Street Food',
    authenticityScore: 8.7, tabelogScore: 3.72, googleScore: 4.5, redditMentions: 76, blogMentions: 48,
    price: 1, distance: '2 min walk', vibe: 'casual',
    whyThisPlace: 'A 63-year-old onigiri counter with 50+ fillings. Simple perfection. Lines around the block.',
    insiderTip: 'The sake (salmon) + sujiko (salmon roe) combo is divine. Arrive by 11am on weekends or face a 90-minute queue.',
    vibeDescription: 'Counter seating, watching them hand-press each onigiri. Meditative.',
    coverCharge: 'None', hours: '11:30–midnight',
    translatedReview: '"I ate onigiri every day of my life and thought I knew what they were. Bongo proved me wrong. The rice alone is extraordinary." — Tabelog reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1536304993881-4d72b97b090c?w=600&h=400&fit=crop',
    lat: 35.7321, lng: 139.7281, tags: ['onigiri', 'legendary', 'cheap-eats'],
    michelinStatus: 'none', touristTrapFlag: false
  },

  // ===== DRINK (15) =====
  {
    id: 'd1', name: 'Bar High Five', nameJa: 'バー ハイファイブ', type: 'Cocktail Bar', category: 'drink',
    neighbourhood: 'Ginza', barType: 'Cocktail Bar',
    authenticityScore: 9.5, tabelogScore: 3.50, googleScore: 4.5, redditMentions: 93, blogMentions: 78,
    price: 4, distance: '3 min walk', vibe: 'intimate',
    whyThisPlace: 'Hidetsugu Ueno is one of the greatest bartenders alive. No menu — just tell him your mood.',
    insiderTip: 'Sit at the bar, not a table. Tell Ueno-san what spirit you like and how you\'re feeling. Trust the process.',
    vibeDescription: 'Dimly lit, hushed, impeccable. Old-school Japanese bar culture at its finest.',
    coverCharge: '¥1,000', hours: '17:00–01:00',
    translatedReview: '"I said \'something refreshing with gin\' and received the best cocktail of my life. He reads your mind." — Google reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop',
    lat: 35.6722, lng: 139.7649, tags: ['cocktails', 'worlds-50-best', 'omakase-style'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'd2', name: 'Bar Araku (Golden Gai)', nameJa: 'バー アラク', type: 'Yokocho Bar', category: 'drink',
    neighbourhood: 'Shinjuku', barType: 'Yokocho',
    authenticityScore: 8.3, tabelogScore: 3.20, googleScore: 4.2, redditMentions: 52, blogMentions: 34,
    price: 2, distance: '6 min walk', vibe: 'lively',
    whyThisPlace: 'Golden Gai\'s friendliest bar. English-speaking owner, great music, zero pretension.',
    insiderTip: 'It\'s on the second floor of a tiny building — look for the small sign. Buy the owner a drink and you\'ll hear amazing stories.',
    vibeDescription: 'Cramped, warm, conversational. 8 seats max. Strangers become friends.',
    coverCharge: '¥500', hours: '20:00–03:00',
    translatedReview: '"I came alone and left with four new friends. The whisky highballs are strong and the music is perfect." — Google reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&h=400&fit=crop',
    lat: 35.6938, lng: 139.7034, tags: ['golden-gai', 'yokocho', 'social'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'd3', name: 'Zoetrope', nameJa: 'ゾエトロープ', type: 'Whisky Bar', category: 'drink',
    neighbourhood: 'Shinjuku', barType: 'Whisky Bar',
    authenticityScore: 9.0, tabelogScore: 3.55, googleScore: 4.4, redditMentions: 78, blogMentions: 51,
    price: 3, distance: '7 min walk', vibe: 'intimate',
    whyThisPlace: '300+ Japanese whiskies including bottles you can\'t find anywhere else on earth.',
    insiderTip: 'Ask for a Chichibu or a rare Karuizawa pour. The owner can guide you through the collection. Cash only.',
    vibeDescription: 'Small, cinema-themed, shelves floor to ceiling with amber bottles.',
    coverCharge: '¥700 (includes snack)', hours: '18:00–midnight',
    translatedReview: '"I tried a 25-year Nikka that I\'d only read about in books. This bar is a Japanese whisky museum you can drink at." — Reddit user',
    photoUrl: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=600&h=400&fit=crop',
    lat: 35.6930, lng: 139.7010, tags: ['whisky', 'japanese-whisky', 'rare-bottles'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'd4', name: 'The SG Club', nameJa: 'ザ・エスジー・クラブ', type: 'Speakeasy', category: 'drink',
    neighbourhood: 'Shibuya', barType: 'Speakeasy',
    authenticityScore: 9.2, tabelogScore: 3.60, googleScore: 4.5, redditMentions: 67, blogMentions: 58,
    price: 3, distance: '5 min walk', vibe: 'intimate',
    whyThisPlace: 'Shingo Gokan\'s flagship. Two floors: casual upstairs, speakeasy downstairs. Both are world-class.',
    insiderTip: 'Go downstairs to "Guzzle" for the speakeasy experience. The "SG Negroni" is the signature. Book ahead on weekends.',
    vibeDescription: 'Upstairs is vibrant; downstairs is dark, moody, and theatrical.',
    coverCharge: 'None', hours: '18:00–02:00',
    translatedReview: '"Shingo Gokan is a genius. The presentation is theatre and the flavours are flawless." — Blog reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&h=400&fit=crop',
    lat: 35.6614, lng: 139.6989, tags: ['cocktails', 'speakeasy', 'shingo-gokan'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'd5', name: 'Mikkeller Tokyo', nameJa: 'ミッケラー東京', type: 'Craft Beer', category: 'drink',
    neighbourhood: 'Shibuya', barType: 'Craft Beer',
    authenticityScore: 7.8, tabelogScore: 3.30, googleScore: 4.1, redditMentions: 41, blogMentions: 28,
    price: 2, distance: '8 min walk', vibe: 'casual',
    whyThisPlace: 'Danish craft beer excellence in Shibuya. 20 taps of rotating Japanese and international brews.',
    insiderTip: 'Ask what\'s collab\'d with local Japanese breweries — those exclusives are why regulars come. The terrace is great in spring.',
    vibeDescription: 'Scandi-minimalist interior, chill vibes, international crowd.',
    coverCharge: 'None', hours: '12:00–23:00',
    translatedReview: '"Finally a craft beer bar in Tokyo that isn\'t overpriced. Great selection and the staff know their hops." — Google reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&h=400&fit=crop',
    lat: 35.6598, lng: 139.6930, tags: ['craft-beer', 'international', 'taps'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'd6', name: 'Bar Trench', nameJa: 'バー トレンチ', type: 'Cocktail Bar', category: 'drink',
    neighbourhood: 'Ebisu', barType: 'Cocktail Bar',
    authenticityScore: 8.5, tabelogScore: 3.45, googleScore: 4.3, redditMentions: 55, blogMentions: 40,
    price: 3, distance: '4 min walk', vibe: 'intimate',
    whyThisPlace: 'Rogerio Igarashi Vaz\'s absinthe-forward cocktail bar. Dark, moody, and deeply creative.',
    insiderTip: 'Ask for an absinthe cocktail even if you think you don\'t like absinthe. The "Green Beast" changed my mind.',
    vibeDescription: 'Dark wood, candlelight, Victorian-meets-Tokyo aesthetic.',
    coverCharge: 'None', hours: '19:00–02:00',
    translatedReview: '"The bartender made me a drink with chartreuse and absinthe that tasted like walking through a forest. Magical." — Reddit user',
    photoUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop',
    lat: 35.6480, lng: 139.7110, tags: ['cocktails', 'absinthe', 'moody'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'd7', name: 'Omoide Yokocho Beer Stall', nameJa: '思い出横丁', type: 'Tachinomi', category: 'drink',
    neighbourhood: 'Shinjuku', barType: 'Tachinomi',
    authenticityScore: 7.9, tabelogScore: 3.10, googleScore: 4.0, redditMentions: 88, blogMentions: 55,
    price: 1, distance: '2 min walk', vibe: 'rowdy',
    whyThisPlace: 'Standing beers in a post-war alley. Smoke, grilled offal, and the best people-watching in Tokyo.',
    insiderTip: 'Don\'t pick the first stall — walk deeper in. The less tourist-friendly looking ones have the best yakitori. Cash only.',
    vibeDescription: 'Chaotic, smoky, cramped, alive. Pure old-school shitamachi energy.',
    coverCharge: 'None', hours: '15:00–midnight',
    translatedReview: '"Standing in a narrow alley drinking ¥300 beers while watching smoke rise from yakitori grills — this is the Tokyo I came for." — Reddit user',
    photoUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&h=400&fit=crop',
    lat: 35.6935, lng: 139.6983, tags: ['tachinomi', 'standing-bar', 'yokocho'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'd8', name: 'JBS (Jazz Bar Samurai)', nameJa: 'ジャズバーサムライ', type: 'Listening Bar', category: 'drink',
    neighbourhood: 'Shimokitazawa', barType: 'Listening Bar',
    authenticityScore: 8.8, tabelogScore: 3.40, googleScore: 4.3, redditMentions: 44, blogMentions: 37,
    price: 2, distance: '3 min walk', vibe: 'intimate',
    whyThisPlace: 'A dedicated jazz listening bar with a vinyl collection that\'d make audiophiles weep.',
    insiderTip: 'Go alone, order a whisky, and sit near the speakers. No talking during certain sets. Respect the music.',
    vibeDescription: 'Warm wood, vintage turntables, reverential atmosphere. Time slows down.',
    coverCharge: '¥500', hours: '18:00–02:00',
    translatedReview: '"I sat for three hours listening to Coltrane on vinyl through speakers older than me. Pure therapy." — Google reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1554797589-7241bb691973?w=600&h=400&fit=crop',
    lat: 35.6614, lng: 139.6682, tags: ['jazz', 'vinyl', 'listening-bar'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'd9', name: 'Albatross', nameJa: 'アルバトロス', type: 'Yokocho Bar', category: 'drink',
    neighbourhood: 'Shinjuku', barType: 'Yokocho',
    authenticityScore: 7.6, tabelogScore: 3.15, googleScore: 4.1, redditMentions: 62, blogMentions: 38,
    price: 2, distance: '5 min walk', vibe: 'lively',
    whyThisPlace: 'Three floors of chandeliers in Golden Gai. Absurdly beautiful for a bar this tiny.',
    insiderTip: 'Climb to the third floor for the most atmospheric spot. The absinthe selection is surprisingly good.',
    vibeDescription: 'Opulent chandeliers crammed into a space barely wider than a hallway. Magical.',
    coverCharge: '¥700', hours: '19:00–05:00',
    translatedReview: '"How did they fit chandeliers in here? It\'s like drinking inside a jewellery box. Golden Gai at its most surreal." — Google reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&h=400&fit=crop',
    lat: 35.6940, lng: 139.7031, tags: ['golden-gai', 'chandeliers', 'unique'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'd10', name: 'Gen Yamamoto', nameJa: 'ゲン ヤマモト', type: 'Seasonal Cocktails', category: 'drink',
    neighbourhood: 'Roppongi', barType: 'Cocktail Bar',
    authenticityScore: 9.3, tabelogScore: 3.65, googleScore: 4.6, redditMentions: 51, blogMentions: 63,
    price: 4, distance: '6 min walk', vibe: 'intimate',
    whyThisPlace: 'Omakase-style cocktails using hyper-seasonal Japanese ingredients. No menu, no choices, pure trust.',
    insiderTip: 'Book the 7-course cocktail omakase. Each drink uses one seasonal ingredient at its peak. No substitutions.',
    vibeDescription: 'Minimalist 8-seat counter. Hushed. Each cocktail is a ceremony.',
    coverCharge: 'None — omakase set price', hours: '15:00–23:00',
    translatedReview: '"He made a cocktail with shiso and nashi pear that tasted like autumn distilled into a glass. Extraordinary." — Blog reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop',
    lat: 35.6617, lng: 139.7289, tags: ['cocktails', 'omakase', 'seasonal'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'd11', name: 'Tight', nameJa: 'タイト', type: 'Standing Bar', category: 'drink',
    neighbourhood: 'Shinjuku', barType: 'Tachinomi',
    authenticityScore: 7.5, tabelogScore: 3.10, googleScore: 4.0, redditMentions: 48, blogMentions: 22,
    price: 1, distance: '5 min walk', vibe: 'lively',
    whyThisPlace: 'The name says it all — maybe the tiniest bar in Golden Gai. Five people and you\'re sardines.',
    insiderTip: 'If it\'s too full, just come back in 20 minutes. The turnover is fast. Order whatever the person next to you is having.',
    vibeDescription: 'Standing room only. Literally shoulder to shoulder. Everyone talks to everyone.',
    coverCharge: '¥500', hours: '20:00–04:00',
    translatedReview: '"I was pressed against a stranger from Osaka and a bartender from London. By the end we were all best friends. That\'s Tight." — Reddit user',
    photoUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&h=400&fit=crop',
    lat: 35.6937, lng: 139.7032, tags: ['golden-gai', 'tiny', 'standing-bar'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'd12', name: 'Buri', nameJa: 'ぶり', type: 'Sake Izakaya', category: 'drink',
    neighbourhood: 'Ebisu', barType: 'Izakaya',
    authenticityScore: 8.4, tabelogScore: 3.55, googleScore: 4.3, redditMentions: 36, blogMentions: 28,
    price: 2, distance: '4 min walk', vibe: 'lively',
    whyThisPlace: 'An izakaya with one of Tokyo\'s best sake lists. The food is just as good as the drinks.',
    insiderTip: 'Ask for the seasonal nama-sake (unpasteurised). Pair with the sashimi plate — the fish changes daily.',
    vibeDescription: 'Warm, buzzy, wooden interior. The kind of place where locals go after work.',
    coverCharge: '¥400 (includes otoshi appetizer)', hours: '17:00–midnight',
    translatedReview: '"I told the staff I like dry sake and they brought me a Juyondai that blew my mind. The hamachi sashimi was so fresh it was translucent." — Tabelog reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop',
    lat: 35.6476, lng: 139.7100, tags: ['sake', 'izakaya', 'fish'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'd13', name: 'Mixology Salon', nameJa: 'ミクソロジーサロン', type: 'Hotel Cocktail Bar', category: 'drink',
    neighbourhood: 'Ginza', barType: 'Cocktail Bar',
    authenticityScore: 8.7, tabelogScore: 3.50, googleScore: 4.4, redditMentions: 39, blogMentions: 44,
    price: 4, distance: '4 min walk', vibe: 'intimate',
    whyThisPlace: 'Molecular cocktails in a glamorous Ginza setting. Science meets art in every glass.',
    insiderTip: 'The "Crystal Ball" cocktail is Instagram-worthy but the classic Sidecar is where the real skill shows. Smart casual dress code.',
    vibeDescription: 'Plush seating, moody lighting, Ginza glamour. Dress up.',
    coverCharge: 'None', hours: '17:00–midnight',
    translatedReview: '"They served a cocktail inside a smoke-filled bubble that popped as I touched it. Theatre and taste in perfect harmony." — Blog reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop',
    lat: 35.6717, lng: 139.7640, tags: ['cocktails', 'molecular', 'glamorous'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'd14', name: 'Fuglen Tokyo', nameJa: 'フグレン東京', type: 'Cocktails & Coffee', category: 'drink',
    neighbourhood: 'Shibuya', barType: 'Craft Beer',
    authenticityScore: 8.1, tabelogScore: 3.35, googleScore: 4.2, redditMentions: 55, blogMentions: 35,
    price: 2, distance: '10 min walk', vibe: 'casual',
    whyThisPlace: 'Oslo\'s coolest café by day, Tokyo\'s cosiest cocktail bar by night. Vintage Scandinavian furniture everywhere.',
    insiderTip: 'Come for coffee in the afternoon, stay for cocktails at night. The Aquavit Old Fashioned is the crossover star.',
    vibeDescription: 'Mid-century modern furniture, natural light by day, candlelit by night.',
    coverCharge: 'None', hours: '08:00–01:00',
    translatedReview: '"I came for a flat white and left six hours later after three Negronis. This place has a gravitational pull." — Google reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&h=400&fit=crop',
    lat: 35.6647, lng: 139.6898, tags: ['coffee', 'cocktails', 'scandinavian'],
    michelinStatus: 'none', touristTrapFlag: false
  },
  {
    id: 'd15', name: 'Campari Bar at Park Hotel', nameJa: 'カンパリバー', type: 'Hotel Bar', category: 'drink',
    neighbourhood: 'Ginza', barType: 'Cocktail Bar',
    authenticityScore: 7.7, tabelogScore: 3.25, googleScore: 4.1, redditMentions: 28, blogMentions: 22,
    price: 3, distance: '5 min walk', vibe: 'intimate',
    whyThisPlace: 'Floor-to-ceiling windows with Tokyo Tower views. Come at sunset for an unforgettable Negroni.',
    insiderTip: 'Grab a window seat facing Tokyo Tower. Order a Campari Spritz as the sun sets. Thank me later.',
    vibeDescription: 'High-floor elegance. Panoramic city views. Perfect for a special occasion.',
    coverCharge: 'None', hours: '17:00–midnight',
    translatedReview: '"Watching Tokyo Tower light up while sipping a perfect Negroni Sbagliato is peak Tokyo luxury. Worth every yen." — Google reviewer',
    photoUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&h=400&fit=crop',
    lat: 35.6625, lng: 139.7587, tags: ['hotel-bar', 'views', 'negroni'],
    michelinStatus: 'none', touristTrapFlag: false
  }
];

/* ===== FILTER OPTIONS ===== */
const EAT_TYPES = ['All', 'Sushi', 'Ramen', 'Yakitori', 'Tempura', 'Tonkatsu', 'Udon/Soba', 'Wagyu', 'Street Food'];
const DRINK_TYPES = ['All', 'Izakaya', 'Tachinomi', 'Yokocho', 'Cocktail Bar', 'Speakeasy', 'Whisky Bar', 'Craft Beer', 'Listening Bar'];
const VIBES = ['Casual', 'Lively', 'Intimate', 'Rowdy'];
const BUDGETS = ['¥', '¥¥', '¥¥¥', '¥¥¥¥'];
const NEIGHBOURHOODS = ['All', 'Shinjuku', 'Shibuya', 'Ginza', 'Ebisu', 'Roppongi', 'Otsuka', 'Kanda', 'Tsukiji', 'Jimbocho', 'Tsukishima', 'Shimokitazawa'];

/* ===== APP STATE ===== */
const state = {
  screen: 'welcome',
  mode: 'eat',
  selectedTypes: ['All'],
  selectedVibes: [],
  selectedBudgets: [],
  neighbourhood: 'All',
  filteredVenues: [],
  currentIndex: 0,
  shortlist: [],
  theme: 'dark'
};

/* ===== ROUTING ===== */
function navigate(screen) {
  state.screen = screen;
  window.location.hash = screen;
  renderScreen();
}

function handleHash() {
  const hash = window.location.hash.replace('#', '') || 'welcome';
  const valid = ['welcome', 'discover', 'swipe', 'shortlist'];
  state.screen = valid.includes(hash) ? hash : 'welcome';
  renderScreen();
}

function renderScreen() {
  document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
  var el = document.getElementById('screen-' + state.screen);
  if (el) {
    el.classList.add('active');
    if (state.screen === 'discover') renderDiscover();
    if (state.screen === 'swipe') renderSwipe();
    if (state.screen === 'shortlist') renderShortlist();
  }
}

/* ===== THEME ===== */
function initTheme() {
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  state.theme = prefersDark ? 'dark' : 'dark'; // Dark default for Scout
  document.documentElement.setAttribute('data-theme', state.theme);
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.innerHTML = state.theme === 'dark'
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  btn.setAttribute('aria-label', 'Switch to ' + (state.theme === 'dark' ? 'light' : 'dark') + ' mode');
}

/* ===== DISCOVER SCREEN ===== */
function renderDiscover() {
  renderTypePills();
  renderVibePills();
  renderBudgetPills();
  updateModeToggle();
}

function updateModeToggle() {
  var eatBtn = document.getElementById('mode-eat');
  var drinkBtn = document.getElementById('mode-drink');
  var indicator = document.getElementById('mode-indicator');
  if (!eatBtn) return;
  eatBtn.classList.toggle('active', state.mode === 'eat');
  drinkBtn.classList.toggle('active', state.mode === 'drink');
  indicator.classList.toggle('drink', state.mode === 'drink');
}

function setMode(mode) {
  state.mode = mode;
  state.selectedTypes = ['All'];
  updateModeToggle();
  renderTypePills();
}

function renderTypePills() {
  var container = document.getElementById('type-pills');
  if (!container) return;
  var types = state.mode === 'eat' ? EAT_TYPES : DRINK_TYPES;
  container.innerHTML = types.map(function(t) {
    var active = state.selectedTypes.includes(t) ? ' active' : '';
    return '<button class="filter-pill' + active + '" data-type="' + t + '">' + t + '</button>';
  }).join('');

  container.querySelectorAll('.filter-pill').forEach(function(pill) {
    pill.addEventListener('click', function() {
      var type = this.getAttribute('data-type');
      if (type === 'All') {
        state.selectedTypes = ['All'];
      } else {
        state.selectedTypes = state.selectedTypes.filter(function(t) { return t !== 'All'; });
        if (state.selectedTypes.includes(type)) {
          state.selectedTypes = state.selectedTypes.filter(function(t) { return t !== type; });
        } else {
          state.selectedTypes.push(type);
        }
        if (state.selectedTypes.length === 0) state.selectedTypes = ['All'];
      }
      renderTypePills();
    });
  });
}

function renderVibePills() {
  var container = document.getElementById('vibe-pills');
  if (!container) return;
  container.innerHTML = VIBES.map(function(v) {
    var active = state.selectedVibes.includes(v.toLowerCase()) ? ' active' : '';
    return '<button class="filter-pill' + active + '" data-vibe="' + v.toLowerCase() + '">' + v + '</button>';
  }).join('');

  container.querySelectorAll('.filter-pill').forEach(function(pill) {
    pill.addEventListener('click', function() {
      var vibe = this.getAttribute('data-vibe');
      if (state.selectedVibes.includes(vibe)) {
        state.selectedVibes = state.selectedVibes.filter(function(v) { return v !== vibe; });
      } else {
        state.selectedVibes.push(vibe);
      }
      renderVibePills();
    });
  });
}

function renderBudgetPills() {
  var container = document.getElementById('budget-pills');
  if (!container) return;
  container.innerHTML = BUDGETS.map(function(b, i) {
    var val = i + 1;
    var active = state.selectedBudgets.includes(val) ? ' active' : '';
    return '<button class="filter-pill' + active + '" data-budget="' + val + '">' + b + '</button>';
  }).join('');

  container.querySelectorAll('.filter-pill').forEach(function(pill) {
    pill.addEventListener('click', function() {
      var budget = parseInt(this.getAttribute('data-budget'));
      if (state.selectedBudgets.includes(budget)) {
        state.selectedBudgets = state.selectedBudgets.filter(function(b) { return b !== budget; });
      } else {
        state.selectedBudgets.push(budget);
      }
      renderBudgetPills();
    });
  });
}

function scoutIt() {
  var filtered = VENUES.filter(function(v) {
    if (v.category !== state.mode) return false;
    if (state.neighbourhood !== 'All' && v.neighbourhood !== state.neighbourhood) return false;
    if (!state.selectedTypes.includes('All')) {
      var typeField = state.mode === 'eat' ? v.cuisineType : v.barType;
      if (!state.selectedTypes.includes(typeField)) return false;
    }
    if (state.selectedVibes.length > 0 && !state.selectedVibes.includes(v.vibe)) return false;
    if (state.selectedBudgets.length > 0 && !state.selectedBudgets.includes(v.price)) return false;
    return true;
  });

  // Shuffle
  for (var i = filtered.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = filtered[i];
    filtered[i] = filtered[j];
    filtered[j] = temp;
  }

  state.filteredVenues = filtered;
  state.currentIndex = 0;
  state.shortlist = [];
  navigate('swipe');
}

/* ===== SWIPE SCREEN ===== */
function renderSwipe() {
  var container = document.getElementById('card-stack');
  var counter = document.getElementById('swipe-counter');
  if (!container) return;
  container.innerHTML = '';

  // If navigated directly to swipe without filtering, load all eat venues
  if (state.filteredVenues.length === 0 && state.currentIndex === 0) {
    state.filteredVenues = VENUES.filter(function(v) { return v.category === state.mode; });
  }

  if (state.filteredVenues.length === 0) {
    container.innerHTML = '<div class="done-overlay"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg><h2>No venues found</h2><p>Try adjusting your filters</p><button class="btn-primary" onclick="navigate(\'discover\')">Back to Filters</button></div>';
    if (counter) counter.textContent = '';
    return;
  }

  var total = state.filteredVenues.length;
  var current = state.currentIndex;

  if (current >= total) {
    showDoneState(container);
    if (counter) counter.textContent = '';
    return;
  }

  if (counter) counter.textContent = (current + 1) + ' of ' + total;

  // Render up to 3 cards in stack
  var cardsToShow = Math.min(3, total - current);
  for (var i = cardsToShow - 1; i >= 0; i--) {
    var venue = state.filteredVenues[current + i];
    var card = createCardElement(venue, i);
    container.appendChild(card);
  }

  // Init swipe on top card
  var topCard = container.querySelector('.swipe-card:last-child');
  if (topCard) initSwipe(topCard);
}

function createCardElement(venue, stackIndex) {
  var card = document.createElement('div');
  card.className = 'swipe-card' + (stackIndex > 0 ? ' stack-' + stackIndex : '');
  card.setAttribute('data-venue-id', venue.id);

  var scoreClass = venue.authenticityScore >= 8.5 ? 'high' : (venue.authenticityScore >= 7 ? 'medium' : 'low');
  var priceStr = '';
  for (var p = 0; p < 4; p++) {
    priceStr += p < venue.price ? '¥' : '<span class="inactive">¥</span>';
  }

  var michelinHtml = '';
  if (venue.michelinStatus === 'star') {
    michelinHtml = '<span class="michelin-badge">★ Michelin</span>';
  } else if (venue.michelinStatus === 'bibGourmand') {
    michelinHtml = '<span class="michelin-badge">🍽 Bib Gourmand</span>';
  }

  var touristHtml = venue.touristTrapFlag ? '<span class="tourist-trap-badge">⚠ Tourist popular</span>' : '';

  card.innerHTML =
    '<div class="card-front">' +
      '<div class="card-image-wrap">' +
        '<img src="' + venue.photoUrl + '" alt="' + venue.name + '" loading="lazy" width="600" height="400">' +
        '<div class="card-image-gradient"></div>' +
        '<div class="card-image-tags">' +
          '<span class="card-tag accent">' + venue.type + '</span>' +
          '<span class="card-tag">' + venue.neighbourhood + '</span>' +
        '</div>' +
        '<div class="card-image-score ' + scoreClass + '">' + venue.authenticityScore.toFixed(1) + '</div>' +
        '<div class="card-image-bottom">' +
          '<div class="card-venue-name">' + venue.name + '</div>' +
          '<div class="card-venue-name-ja">' + venue.nameJa + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="card-info">' +
        '<div class="card-meta-row">' +
          '<span class="card-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' + venue.distance + '</span>' +
          '<span class="card-meta-sep"></span>' +
          '<span class="card-meta-item price-indicator">' + priceStr + '</span>' +
          (michelinHtml ? '<span class="card-meta-sep"></span>' + michelinHtml : '') +
          (touristHtml ? '<span class="card-meta-sep"></span>' + touristHtml : '') +
        '</div>' +
        '<div class="card-why">"' + venue.whyThisPlace + '"</div>' +
        '<div class="card-tap-hint">Tap for more details</div>' +
      '</div>' +
    '</div>' +
    '<div class="card-back">' +
      '<div class="card-back-header">' +
        '<h3>' + venue.name + '</h3>' +
        '<button class="card-back-close" aria-label="Close details"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>' +
      '</div>' +
      '<div class="card-back-content">' +
        renderScoreBreakdown(venue) +
        '<div class="info-box"><div class="info-box-label">Insider Tip</div><p>' + venue.insiderTip + '</p></div>' +
        '<div class="info-box"><div class="info-box-label">The Vibe</div><p>' + venue.vibeDescription + '</p></div>' +
        '<div class="detail-grid">' +
          '<div class="detail-item"><span class="label">Cover</span><span class="value">' + venue.coverCharge + '</span></div>' +
          '<div class="detail-item"><span class="label">Hours</span><span class="value">' + venue.hours + '</span></div>' +
        '</div>' +
        '<div class="info-box"><div class="info-box-label">Translated Review</div><div class="translated-review"><p>' + venue.translatedReview + '</p></div></div>' +
        '<a href="https://www.google.com/maps/dir/?api=1&destination=' + venue.lat + ',' + venue.lng + '" target="_blank" rel="noopener noreferrer" class="btn-navigate"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>Navigate</a>' +
      '</div>' +
    '</div>' +
    '<div class="swipe-overlay swipe-overlay-yes"><span class="swipe-overlay-label">YES</span></div>' +
    '<div class="swipe-overlay swipe-overlay-no"><span class="swipe-overlay-label">NOPE</span></div>';

  // Tap to flip
  var front = card.querySelector('.card-front');
  front.addEventListener('click', function(e) {
    if (card.classList.contains('swiping')) return;
    var back = card.querySelector('.card-back');
    back.classList.add('show');
  });

  var closeBtn = card.querySelector('.card-back-close');
  closeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    card.querySelector('.card-back').classList.remove('show');
  });

  // Prevent swipe when interacting with back content
  var backContent = card.querySelector('.card-back-content');
  backContent.addEventListener('touchstart', function(e) { e.stopPropagation(); });
  backContent.addEventListener('mousedown', function(e) { e.stopPropagation(); });

  return card;
}

function renderScoreBreakdown(venue) {
  var sources = [
    { label: 'Tabelog', value: venue.tabelogScore, max: 5 },
    { label: 'Google', value: venue.googleScore, max: 5 },
    { label: 'Reddit', value: Math.min(venue.redditMentions, 150), max: 150, display: venue.redditMentions + ' mentions' },
    { label: 'Blogs', value: Math.min(venue.blogMentions, 100), max: 100, display: venue.blogMentions + ' posts' }
  ];

  return '<div class="score-breakdown">' + sources.map(function(s) {
    var pct = Math.round((s.value / s.max) * 100);
    var displayVal = s.display || (s.value.toFixed ? s.value.toFixed(1) : s.value);
    return '<div class="score-row"><span class="score-label">' + s.label + '</span><div class="score-bar-track"><div class="score-bar-fill" style="width:' + pct + '%"></div></div><span class="score-value">' + displayVal + '</span></div>';
  }).join('') + '</div>';
}

function showDoneState(container) {
  var count = state.shortlist.length;
  container.innerHTML =
    '<div class="done-overlay">' +
      '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="' + (count > 0 ? 'var(--color-accent)' : 'var(--color-text-faint)') + '" stroke-width="1.5">' +
        '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>' +
      '</svg>' +
      '<h2>' + (count > 0 ? 'All scouted!' : 'Stack complete') + '</h2>' +
      '<p>' + (count > 0 ? 'You picked ' + count + ' spot' + (count > 1 ? 's' : '') + '. Ready to explore?' : 'No matches this time. Try different filters?') + '</p>' +
      (count > 0 ? '<button class="btn-primary" onclick="navigate(\'shortlist\')">View Shortlist</button>' : '') +
      '<button class="btn-secondary" style="margin-top:var(--space-2);max-width:280px" onclick="navigate(\'discover\')">Scout Again</button>' +
    '</div>';
}

/* ===== SWIPE MECHANICS ===== */
function initSwipe(card) {
  var startX = 0, startY = 0, currentX = 0, currentY = 0;
  var isDragging = false;
  var threshold = 100;
  var yesOverlay = card.querySelector('.swipe-overlay-yes');
  var noOverlay = card.querySelector('.swipe-overlay-no');

  function onStart(x, y) {
    // Don't start swipe if card back is showing
    var back = card.querySelector('.card-back');
    if (back && back.classList.contains('show')) return;
    isDragging = true;
    card.classList.add('swiping');
    startX = x;
    startY = y;
    currentX = 0;
    currentY = 0;
    card.style.transition = 'none';
  }

  function onMove(x, y) {
    if (!isDragging) return;
    currentX = x - startX;
    currentY = y - startY;

    var rotation = currentX * 0.08;
    var clampedRotation = Math.max(-15, Math.min(15, rotation));
    card.style.transform = 'translateX(' + currentX + 'px) translateY(' + currentY * 0.3 + 'px) rotate(' + clampedRotation + 'deg)';

    var progress = Math.min(Math.abs(currentX) / threshold, 1);
    if (currentX > 0) {
      yesOverlay.style.opacity = progress;
      noOverlay.style.opacity = 0;
    } else {
      noOverlay.style.opacity = progress;
      yesOverlay.style.opacity = 0;
    }
  }

  function onEnd() {
    if (!isDragging) return;
    isDragging = false;
    card.classList.remove('swiping');

    if (Math.abs(currentX) > threshold) {
      flyAway(card, currentX > 0);
    } else {
      card.style.transition = 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform = '';
      yesOverlay.style.opacity = 0;
      noOverlay.style.opacity = 0;
    }
  }

  // Touch events
  card.addEventListener('touchstart', function(e) {
    onStart(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  card.addEventListener('touchmove', function(e) {
    if (isDragging) {
      e.preventDefault();
      onMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: false });

  card.addEventListener('touchend', function() { onEnd(); });

  // Mouse events
  card.addEventListener('mousedown', function(e) {
    e.preventDefault();
    onStart(e.clientX, e.clientY);

    function mouseMove(ev) { onMove(ev.clientX, ev.clientY); }
    function mouseUp() {
      onEnd();
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
    }

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  });
}

function flyAway(card, isYes) {
  var venue = state.filteredVenues[state.currentIndex];
  if (isYes && venue) {
    state.shortlist.push(venue);
  }

  var flyX = isYes ? window.innerWidth : -window.innerWidth;
  var flyRotation = isYes ? 30 : -30;

  card.style.transition = 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease';
  card.style.transform = 'translateX(' + flyX + 'px) rotate(' + flyRotation + 'deg)';
  card.style.opacity = '0';

  setTimeout(function() {
    state.currentIndex++;
    renderSwipe();
  }, 300);
}

function buttonSwipe(isYes) {
  var container = document.getElementById('card-stack');
  var topCard = container ? container.querySelector('.swipe-card:last-child') : null;
  if (!topCard || topCard.querySelector('.done-overlay')) return;

  // Close back if open
  var back = topCard.querySelector('.card-back');
  if (back && back.classList.contains('show')) {
    back.classList.remove('show');
  }

  var yesOverlay = topCard.querySelector('.swipe-overlay-yes');
  var noOverlay = topCard.querySelector('.swipe-overlay-no');

  if (isYes && yesOverlay) yesOverlay.style.opacity = 1;
  if (!isYes && noOverlay) noOverlay.style.opacity = 1;

  setTimeout(function() {
    flyAway(topCard, isYes);
  }, 150);
}

/* ===== SHORTLIST SCREEN ===== */
function renderShortlist() {
  var body = document.getElementById('shortlist-body');
  var countEl = document.getElementById('shortlist-count');
  if (!body) return;

  if (countEl) countEl.textContent = state.shortlist.length;

  if (state.shortlist.length === 0) {
    body.innerHTML =
      '<div class="empty-state">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2M9 9h.01M15 9h.01"/></svg>' +
        '<h3>No matches yet</h3>' +
        '<p>Try adjusting your filters or being more generous with your swipes.</p>' +
      '</div>';
    return;
  }

  body.innerHTML = state.shortlist.map(function(venue, idx) {
    var scoreClass = venue.authenticityScore >= 8.5 ? 'high' : (venue.authenticityScore >= 7 ? 'medium' : 'low');
    var priceStr = '';
    for (var p = 0; p < venue.price; p++) priceStr += '¥';

    return '<div class="shortlist-card" data-index="' + idx + '">' +
      '<div class="shortlist-card-main" onclick="toggleShortlistCard(' + idx + ')">' +
        '<img class="shortlist-card-thumb" src="' + venue.photoUrl + '" alt="' + venue.name + '" loading="lazy" width="72" height="72">' +
        '<div class="shortlist-card-info">' +
          '<h4>' + venue.name + '</h4>' +
          '<div class="meta">' +
            '<span>' + venue.type + '</span>' +
            '<span class="card-meta-sep"></span>' +
            '<span>' + venue.neighbourhood + '</span>' +
            '<span class="card-meta-sep"></span>' +
            '<span>' + priceStr + '</span>' +
          '</div>' +
          '<div style="margin-top:auto;display:flex;align-items:center;gap:var(--space-2)">' +
            '<span class="score-badge" style="background:' + (scoreClass === 'high' ? 'var(--color-success)' : scoreClass === 'medium' ? 'var(--color-accent)' : 'var(--color-error)') + '">' + venue.authenticityScore.toFixed(1) + '</span>' +
            '<span style="font-size:var(--text-xs);color:var(--color-text-faint)">Authenticity</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="shortlist-card-expanded">' +
        '<div class="info-box"><div class="info-box-label">Insider Tip</div><p>' + venue.insiderTip + '</p></div>' +
        '<div class="detail-grid">' +
          '<div class="detail-item"><span class="label">Cover</span><span class="value">' + venue.coverCharge + '</span></div>' +
          '<div class="detail-item"><span class="label">Hours</span><span class="value">' + venue.hours + '</span></div>' +
        '</div>' +
        '<div class="info-box"><div class="info-box-label">Translated Review</div><div class="translated-review"><p>' + venue.translatedReview + '</p></div></div>' +
        '<a href="https://www.google.com/maps/dir/?api=1&destination=' + venue.lat + ',' + venue.lng + '" target="_blank" rel="noopener noreferrer" class="btn-navigate"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>Navigate</a>' +
      '</div>' +
    '</div>';
  }).join('');
}

function toggleShortlistCard(idx) {
  var cards = document.querySelectorAll('.shortlist-card');
  cards.forEach(function(c, i) {
    if (i === idx) {
      c.classList.toggle('expanded');
    } else {
      c.classList.remove('expanded');
    }
  });
}

function startOver() {
  state.shortlist = [];
  state.currentIndex = 0;
  state.filteredVenues = [];
  navigate('discover');
}

/* ===== NEIGHBOURHOOD SELECT ===== */
function onNeighbourhoodChange(el) {
  state.neighbourhood = el.value;
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  updateThemeIcon();

  // Handle neighbourhood select
  var nSelect = document.getElementById('neighbourhood-select');
  if (nSelect) {
    nSelect.addEventListener('change', function() {
      onNeighbourhoodChange(this);
    });
  }

  // Handle hash routing
  window.addEventListener('hashchange', handleHash);
  handleHash();
});
