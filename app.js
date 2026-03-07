/* app.js — Scout: Food & Drink Discovery for Tokyo */

/* ===== VENUE DATA ===== */
const VENUES = [
  { id: 'e1', name: 'Fuunji', nameJa: 'ふうんじ', type: 'Tsukemen Ramen', category: 'eat', neighbourhood: 'Shinjuku', cuisineType: 'Ramen', authenticityScore: 9.1, tabelogScore: 3.72, googleScore: 4.3, redditMentions: 87, blogMentions: 42, price: 1, distance: '4 min walk', vibe: 'casual', whyThisPlace: 'The tsukemen broth here is impossibly rich — regulars queue 30 mins and never complain.', insiderTip: 'Order tokumori for ¥100 more — the portion is massive. Go at 2pm to skip the line.', vibeDescription: 'No-frills counter seating, slurping encouraged. Pure ramen focus.', coverCharge: 'None', hours: '11:00–21:00', translatedReview: '"The dipping broth is a perfect balance of fish and pork." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop', lat: 35.6896, lng: 139.6998, tags: ['ramen', 'tsukemen', 'queue-worthy'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e2', name: 'Nakiryu', nameJa: '鳴龍', type: 'Michelin Tantanmen', category: 'eat', neighbourhood: 'Otsuka', cuisineType: 'Ramen', authenticityScore: 8.9, tabelogScore: 3.68, googleScore: 4.4, redditMentions: 112, blogMentions: 67, price: 2, distance: '2 min walk', vibe: 'intimate', whyThisPlace: 'A Michelin star for ramen — the tantanmen is unlike anything else in Tokyo.', insiderTip: 'Arrive before 10:30am to put your name on the list. The dandan noodles are the star.', vibeDescription: 'Tiny 10-seat counter. Hushed reverence. Every bowl is a masterwork.', coverCharge: 'None', hours: '11:00–15:00, 18:00–21:00', translatedReview: '"Sesame and chili oil fragrance hit me before I saw the bowl." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=600&h=400&fit=crop', lat: 35.7318, lng: 139.7285, tags: ['ramen', 'michelin', 'tantanmen'], michelinStatus: 'star', touristTrapFlag: false },
  { id: 'e3', name: 'Kikanbo', nameJa: '鬼金棒', type: 'Spicy Karashibi Ramen', category: 'eat', neighbourhood: 'Kanda', cuisineType: 'Ramen', authenticityScore: 8.8, tabelogScore: 3.72, googleScore: 4.1, redditMentions: 58, blogMentions: 33, price: 1, distance: '3 min walk', vibe: 'lively', whyThisPlace: 'Choose your spice and numbing levels independently — ramen meets choose-your-own-adventure.', insiderTip: 'Start with spice level 3, numbing level 2. The karashibi miso is the signature.', vibeDescription: 'Demon-themed decor. Counter seats. Intense and fun.', coverCharge: 'None', hours: '11:00–15:00, 17:00–21:00', translatedReview: '"My lips were tingling for an hour. The miso broth underneath is incredibly complex." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&h=400&fit=crop', lat: 35.6952, lng: 139.7711, tags: ['ramen', 'spicy', 'sichuan'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e4', name: 'Afuri', nameJa: '阿夫利', type: 'Yuzu Shio Ramen', category: 'eat', neighbourhood: 'Ebisu', cuisineType: 'Ramen', authenticityScore: 8.0, tabelogScore: 3.56, googleScore: 4.2, redditMentions: 63, blogMentions: 41, price: 1, distance: '3 min walk', vibe: 'casual', whyThisPlace: 'Citrusy, clear, light — the antidote to heavy tonkotsu. Yuzu shio is a genre of its own.', insiderTip: 'Try yuzu shoyu for something richer. Always get the ajitama egg.', vibeDescription: 'Modern, clean, slightly hip. Open kitchen counter.', coverCharge: 'None', hours: '11:00–22:00', translatedReview: '"A ramen for people who don\'t usually like ramen. Yuzu aroma is heavenly." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop', lat: 35.647, lng: 139.7103, tags: ['ramen', 'yuzu', 'light'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e5', name: 'Ichiran Shibuya', nameJa: '一蘭 渋谷', type: 'Solo-booth Tonkotsu', category: 'eat', neighbourhood: 'Shibuya', cuisineType: 'Ramen', authenticityScore: 6.9, tabelogScore: 3.38, googleScore: 4.1, redditMentions: 210, blogMentions: 95, price: 1, distance: '2 min walk', vibe: 'casual', whyThisPlace: 'The solo booth concept is iconic. Tourist magnet, but tonkotsu is reliable and customisable.', insiderTip: 'You\'re paying for the experience. Good not great. Skip if you only have time for one ramen shop.', vibeDescription: 'Individual booths with bamboo partitions. Private ramen meditation.', coverCharge: 'None', hours: '24 hours', translatedReview: '"Fine for a solo meal at 3am. But not the best ramen in Tokyo." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=600&h=400&fit=crop', lat: 35.6594, lng: 139.7006, tags: ['ramen', 'tonkotsu', 'solo-dining'], michelinStatus: 'none', touristTrapFlag: true },
  { id: 'e6', name: 'Rokurinsha', nameJa: '六厨舎', type: 'Tsukemen', category: 'eat', neighbourhood: 'Ginza', cuisineType: 'Ramen', authenticityScore: 8.6, tabelogScore: 3.65, googleScore: 4.3, redditMentions: 79, blogMentions: 48, price: 1, distance: '5 min walk', vibe: 'casual', whyThisPlace: 'The tsukemen that started Tokyo\'s dipping ramen craze. Rich, porky, addictive broth.', insiderTip: 'Inside Tokyo Station — great for last-day visit. The all-in set is worth it.', vibeDescription: 'Clean, efficient station-adjacent ramen. No fuss, serious flavour.', coverCharge: 'None', hours: '07:30–23:00', translatedReview: '"Broth concentration is extreme. Dilute at the end — two soups in one." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&h=400&fit=crop', lat: 35.6812, lng: 139.7671, tags: ['ramen', 'tsukemen', 'tokyo-station'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e7', name: 'Kagari', nameJa: 'かがり', type: 'Chicken Paitan', category: 'eat', neighbourhood: 'Ginza', cuisineType: 'Ramen', authenticityScore: 9.0, tabelogScore: 3.77, googleScore: 4.5, redditMentions: 92, blogMentions: 60, price: 2, distance: '4 min walk', vibe: 'intimate', whyThisPlace: 'Tokyo\'s most famous chicken broth ramen. Silky, pale, and mind-bendingly rich.', insiderTip: '8 seats only — arrive at opening. The tori paitan shio is the move.', vibeDescription: 'Minimalist counter. Reverent silence. The broth does all the talking.', coverCharge: 'None', hours: '11:30–15:00, 18:00–22:00', translatedReview: '"Thick as cream, tasting of pure umami. A religious experience." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop', lat: 35.6715, lng: 139.7658, tags: ['ramen', 'chicken', 'paitan'], michelinStatus: 'bibGourmand', touristTrapFlag: false },
  { id: 'e8', name: 'Mengokoro Kunimoto', nameJa: '麺処 國本', type: 'Shio Ramen', category: 'eat', neighbourhood: 'Asakusa', cuisineType: 'Ramen', authenticityScore: 8.7, tabelogScore: 3.7, googleScore: 4.3, redditMentions: 45, blogMentions: 30, price: 1, distance: '5 min walk', vibe: 'casual', whyThisPlace: 'Crystal-clear shio broth that looks deceptively simple but hides extraordinary depth.', insiderTip: 'The clear broth perfection is the draw. Pair with wonton topping.', vibeDescription: 'Small counter shop with focused intensity. Ramen purists love it.', coverCharge: 'None', hours: '11:00–15:00, 17:00–20:00', translatedReview: '"The clarity of the broth is deceiving — underneath is layers of umami." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=600&h=400&fit=crop', lat: 35.7112, lng: 139.7966, tags: ['ramen', 'shio', 'clear-broth'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e9', name: 'Sushi Dai', nameJa: '寿司大', type: 'Market Sushi', category: 'eat', neighbourhood: 'Tsukiji', cuisineType: 'Sushi', authenticityScore: 7.8, tabelogScore: 3.58, googleScore: 4.3, redditMentions: 134, blogMentions: 89, price: 3, distance: '5 min walk', vibe: 'casual', whyThisPlace: 'Fish from the market next door. Touristy? Yes. Worth it? Also yes.', insiderTip: 'Go to the Tsukiji Outer Market branch — same quality, shorter wait.', vibeDescription: 'Tiny counter right in the market. Authentic chaos.', coverCharge: 'None', hours: '07:00–14:00', translatedReview: '"The omakase set is fair for the quality. Be prepared to wait." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop', lat: 35.6654, lng: 139.7707, tags: ['sushi', 'market', 'omakase'], michelinStatus: 'none', touristTrapFlag: true },
  { id: 'e10', name: 'Daiwa Sushi', nameJa: 'だいわ寿司', type: 'Early-morning Sushi', category: 'eat', neighbourhood: 'Tsukiji', cuisineType: 'Sushi', authenticityScore: 8.2, tabelogScore: 3.62, googleScore: 4.4, redditMentions: 98, blogMentions: 65, price: 3, distance: '4 min walk', vibe: 'casual', whyThisPlace: 'Original legendary market sushi. Open 5:30am — best breakfast if you handle the queue.', insiderTip: 'Arrive 5am, bring a podcast. The set omakase is the only option.', vibeDescription: 'Standing queue, counter seats, frantic pace. Sushi as sport.', coverCharge: 'None', hours: '05:30–13:30', translatedReview: '"Waited 90 minutes in the cold and would do it again. Toro justified it." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop', lat: 35.6656, lng: 139.771, tags: ['sushi', 'early-morning', 'market'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e11', name: 'Sushi Zanmai Honten', nameJa: 'すしざんまい 本店', type: 'Late-night Sushi', category: 'eat', neighbourhood: 'Tsukiji', cuisineType: 'Sushi', authenticityScore: 7.5, tabelogScore: 3.45, googleScore: 4.2, redditMentions: 72, blogMentions: 43, price: 2, distance: '2 min walk', vibe: 'lively', whyThisPlace: '24-hour sushi at Tsukiji. Surprisingly good for a chain. Tuna is always fresh.', insiderTip: 'Kaisen don at 3am after a night out is unbeatable. Order extra-fatty toro.', vibeDescription: 'Buzzy, no-reservations, open all night. Tokyo never sleeps.', coverCharge: 'None', hours: '24 hours', translatedReview: '"Not the best sushi but the best you can get at 4am." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600&h=400&fit=crop', lat: 35.665, lng: 139.7703, tags: ['sushi', 'late-night', '24-hour'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e12', name: 'Sushi no Midori', nameJa: '梅丘寿司の美登利', type: 'Value Omakase', category: 'eat', neighbourhood: 'Shimokitazawa', cuisineType: 'Sushi', authenticityScore: 8.1, tabelogScore: 3.65, googleScore: 4.4, redditMentions: 85, blogMentions: 54, price: 2, distance: '6 min walk', vibe: 'casual', whyThisPlace: 'Best price-to-quality sushi in Tokyo. Enormous portions, fresh fish.', insiderTip: 'Put your name on the list at opening — get a number and come back.', vibeDescription: 'Bustling, local, unpretentious. Large tables and friendly staff.', coverCharge: 'None', hours: '11:00–22:00', translatedReview: '"Anago here is massive and perfectly grilled. Quarter the Ginza price." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop', lat: 35.6613, lng: 139.6682, tags: ['sushi', 'value', 'generous-portions'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e13', name: 'Sushi Saito', nameJa: '鰨 さいとう', type: 'Legendary Edomae', category: 'eat', neighbourhood: 'Roppongi', cuisineType: 'Sushi', authenticityScore: 9.8, tabelogScore: 4.25, googleScore: 4.8, redditMentions: 65, blogMentions: 88, price: 4, distance: '8 min walk', vibe: 'intimate', whyThisPlace: 'Routinely called the best sushi restaurant in the world. Once-in-a-lifetime meal.', insiderTip: 'Hotel concierge needed. Lunch is marginally easier. Go with no expectations.', vibeDescription: 'Eight seats. Saito-san at the counter. Complete silence except for reverence.', coverCharge: 'None — omakase only', hours: '12:00–14:00, 18:00–22:00', translatedReview: '"Every piece of nigiri was a different emotion." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop', lat: 35.6625, lng: 139.7352, tags: ['sushi', 'legendary', 'world-class'], michelinStatus: 'star', touristTrapFlag: false },
  { id: 'e14', name: 'Sushi Iwa', nameJa: '鰨 いわ', type: 'Counter Edomae', category: 'eat', neighbourhood: 'Ginza', cuisineType: 'Sushi', authenticityScore: 9.2, tabelogScore: 3.88, googleScore: 4.5, redditMentions: 42, blogMentions: 55, price: 4, distance: '3 min walk', vibe: 'intimate', whyThisPlace: 'Ginza counter sushi with impeccable Edomae technique and warm atmosphere.', insiderTip: 'Lunch omakase more accessible. Counter seats only — pure sushi focus.', vibeDescription: 'Intimate Ginza counter. Warm cedar wood, focused itamae.', coverCharge: 'None — omakase only', hours: '11:30–14:00, 17:00–22:00', translatedReview: '"Kohada aged to perfection. Classic Edomae at its finest." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600&h=400&fit=crop', lat: 35.671, lng: 139.7635, tags: ['sushi', 'edomae', 'ginza'], michelinStatus: 'star', touristTrapFlag: false },
  { id: 'e15', name: 'Harutaka', nameJa: '晴鷹', type: 'Omakase Perfection', category: 'eat', neighbourhood: 'Ginza', cuisineType: 'Sushi', authenticityScore: 9.5, tabelogScore: 4.12, googleScore: 4.7, redditMentions: 48, blogMentions: 72, price: 4, distance: '4 min walk', vibe: 'intimate', whyThisPlace: 'Two Michelin stars of pure sushi mastery. The toro here is unforgettable.', insiderTip: 'The toro is legendary. Book well ahead; trust the omakase completely.', vibeDescription: 'Refined Ginza counter. Unhurried precision with every piece.', coverCharge: 'None — omakase only', hours: '12:00–14:00, 17:30–22:00', translatedReview: '"Tuna aged four days melted on my tongue. Two stars deserved." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop', lat: 35.6708, lng: 139.764, tags: ['sushi', 'michelin-2-star', 'toro'], michelinStatus: 'star', touristTrapFlag: false },
  { id: 'e16', name: 'Birdland', nameJa: 'バードランド', type: 'Premium Yakitori', category: 'eat', neighbourhood: 'Ginza', cuisineType: 'Yakitori', authenticityScore: 9.4, tabelogScore: 3.89, googleScore: 4.5, redditMentions: 65, blogMentions: 55, price: 4, distance: '3 min walk', vibe: 'intimate', whyThisPlace: 'The only yakitori restaurant with a Michelin star. Wada is a legend.', insiderTip: 'Chicken liver pâté is off-menu gold. Sit at the counter.', vibeDescription: 'Elegant counter dining. Refined but never stuffy.', coverCharge: 'None — omakase only', hours: '17:00–21:30', translatedReview: '"Each skewer tells a story. Chicken oyster with wasabi is transcendent." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop', lat: 35.6721, lng: 139.7636, tags: ['yakitori', 'michelin', 'omakase'], michelinStatus: 'star', touristTrapFlag: false },
  { id: 'e17', name: 'Toriki', nameJa: '鳥貴族', type: 'Budget Yakitori Chain', category: 'eat', neighbourhood: 'Shibuya', cuisineType: 'Yakitori', authenticityScore: 7.2, tabelogScore: 3.05, googleScore: 3.9, redditMentions: 45, blogMentions: 28, price: 1, distance: '6 min walk', vibe: 'lively', whyThisPlace: 'Every skewer ¥360. Cheap yakitori that\'s genuinely good.', insiderTip: 'Momo and kawa skewers are best value. Pair with a mega-highball.', vibeDescription: 'Loud, busy, beer-fueled. Salarymen decompressing after work.', coverCharge: 'None', hours: '17:00–01:00', translatedReview: '"For the price it is unbeatable. Order everything." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=600&h=400&fit=crop', lat: 35.6598, lng: 139.7005, tags: ['yakitori', 'cheap', 'chain'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e18', name: 'Torishiki', nameJa: '鳥しき', type: 'Artisan Yakitori', category: 'eat', neighbourhood: 'Meguro', cuisineType: 'Yakitori', authenticityScore: 9.2, tabelogScore: 4.1, googleScore: 4.6, redditMentions: 52, blogMentions: 61, price: 4, distance: '5 min walk', vibe: 'intimate', whyThisPlace: 'Hardest reservation in Tokyo. Birds sourced directly from farmers.', insiderTip: 'Use a hotel concierge. Trust the omakase completely.', vibeDescription: 'Counter-only, hushed, intensely focused. The pinnacle of yakitori.', coverCharge: 'None — omakase only', hours: '18:00–22:00', translatedReview: '"The tsukune changed my understanding of chicken." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop', lat: 35.6342, lng: 139.7157, tags: ['yakitori', 'michelin', 'legendary'], michelinStatus: 'star', touristTrapFlag: false },
  { id: 'e19', name: 'Yakitori Imai', nameJa: 'やきとりイマイ', type: 'Neighbourhood Yakitori', category: 'eat', neighbourhood: 'Shibuya', cuisineType: 'Yakitori', authenticityScore: 8.3, tabelogScore: 3.66, googleScore: 4.3, redditMentions: 35, blogMentions: 22, price: 2, distance: '7 min walk', vibe: 'lively', whyThisPlace: 'The neighbourhood yakitori locals go to — no Michelin, just great skewers.', insiderTip: 'Negima is their best. Ask for the daily specials board.', vibeDescription: 'Smoke-filled, laughter-filled, unpretentious joy.', coverCharge: '¥400 otoshi', hours: '17:30–23:00', translatedReview: '"No reservations, no ceremony, just perfectly grilled chicken." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=600&h=400&fit=crop', lat: 35.658, lng: 139.702, tags: ['yakitori', 'local', 'no-fuss'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e20', name: 'Toriyoshi', nameJa: '鳥よし', type: 'Local Yakitori', category: 'eat', neighbourhood: 'Nakameguro', cuisineType: 'Yakitori', authenticityScore: 8.0, tabelogScore: 3.55, googleScore: 4.2, redditMentions: 30, blogMentions: 18, price: 2, distance: '4 min walk', vibe: 'lively', whyThisPlace: 'Nakameguro locals keep this one secret. No reservations, honest yakitori.', insiderTip: 'Go early — no reservations. Tsukune with egg yolk is the standout.', vibeDescription: 'Cozy spot with smoke, laughter, and regulars.', coverCharge: '¥300 otoshi', hours: '17:00–23:00', translatedReview: '"Unpretentious and delicious. Where Nakameguro locals eat." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop', lat: 35.644, lng: 139.6985, tags: ['yakitori', 'local', 'nakameguro'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e21', name: 'Tempura Kondo', nameJa: 'てんぷら近藤', type: 'Michelin Tempura', category: 'eat', neighbourhood: 'Ginza', cuisineType: 'Tempura', authenticityScore: 9.6, tabelogScore: 4.09, googleScore: 4.6, redditMentions: 54, blogMentions: 71, price: 4, distance: '4 min walk', vibe: 'intimate', whyThisPlace: 'Kondo-san\'s sweet potato tempura is legendary. Two Michelin stars.', insiderTip: 'Sweet potato alone is worth the trip. Lunch omakase is cheaper.', vibeDescription: 'Counter-only. Zen-like calm. You watch a master at work.', coverCharge: 'None — omakase only', hours: '12:00–13:30, 17:00–20:30', translatedReview: '"Never thought a sweet potato could make me emotional." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1615361200098-9e630ec29b4e?w=600&h=400&fit=crop', lat: 35.6713, lng: 139.7632, tags: ['tempura', 'michelin', 'omakase'], michelinStatus: 'star', touristTrapFlag: false },
  { id: 'e22', name: 'Tsunahachi', nameJa: 'つな八', type: 'Classic Tempura', category: 'eat', neighbourhood: 'Shinjuku', cuisineType: 'Tempura', authenticityScore: 8.0, tabelogScore: 3.6, googleScore: 4.2, redditMentions: 48, blogMentions: 35, price: 2, distance: '3 min walk', vibe: 'casual', whyThisPlace: 'Since 1923. Century-old house tempura style still impeccable.', insiderTip: 'Set lunches are exceptional value. Shrimp and kakiage is the classic.', vibeDescription: 'Old-school elegance. Warm service. Very Tokyo.', coverCharge: 'None', hours: '11:00–22:00', translatedReview: '"100 years of tempura knowledge in every bite." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1615361200098-9e630ec29b4e?w=600&h=400&fit=crop', lat: 35.6903, lng: 139.699, tags: ['tempura', 'historic', 'classic'], michelinStatus: 'bibGourmand', touristTrapFlag: false },
  { id: 'e23', name: 'Mikawa Zezankyo', nameJa: '三河 是山居', type: 'Kaiseki Tempura', category: 'eat', neighbourhood: 'Kiyosumi', cuisineType: 'Tempura', authenticityScore: 9.3, tabelogScore: 3.95, googleScore: 4.5, redditMentions: 33, blogMentions: 47, price: 4, distance: '8 min walk', vibe: 'intimate', whyThisPlace: 'Garden restaurant where tempura is elevated to art. Like feudal Japan.', insiderTip: 'Garden seat essential. Lunch set includes seasonal specials.', vibeDescription: 'Traditional machiya house, Japanese garden, unhurried and serene.', coverCharge: 'None — set menu only', hours: '12:00–14:00, 18:00–21:00', translatedReview: '"Tempura overlooking a garden while cherry blossoms fall. Unforgettable." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1615361200098-9e630ec29b4e?w=600&h=400&fit=crop', lat: 35.6748, lng: 139.7972, tags: ['tempura', 'garden', 'kaiseki'], michelinStatus: 'star', touristTrapFlag: false },
  { id: 'e24', name: 'Tendon Tenya', nameJa: '天丼てんや', type: 'Budget Tempura', category: 'eat', neighbourhood: 'Shinjuku', cuisineType: 'Tempura', authenticityScore: 7.2, tabelogScore: 3.25, googleScore: 4.0, redditMentions: 42, blogMentions: 20, price: 1, distance: '2 min walk', vibe: 'casual', whyThisPlace: 'Best value tempura bowl in Tokyo. ¥500 for a crispy, satisfying tendon.', insiderTip: 'The shrimp tendon set is the go-to. Fast, cheap, consistently good.', vibeDescription: 'Quick-service counter dining. No fuss, solid tempura.', coverCharge: 'None', hours: '11:00–22:00', translatedReview: '"¥500 for a perfectly crispy tendon. Japan never ceases to amaze." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1615361200098-9e630ec29b4e?w=600&h=400&fit=crop', lat: 35.69, lng: 139.6985, tags: ['tempura', 'budget', 'tendon'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e25', name: 'Tonkatsu Maisen', nameJa: 'とんかつ まい泉', type: 'Heritage Tonkatsu', category: 'eat', neighbourhood: 'Omotesando', cuisineType: 'Tonkatsu', authenticityScore: 8.1, tabelogScore: 3.58, googleScore: 4.2, redditMentions: 72, blogMentions: 38, price: 2, distance: '8 min walk', vibe: 'casual', whyThisPlace: 'Converted bathhouse — kurobuta pork katsu is textbook perfection.', insiderTip: 'Rosu > hire for flavour. Get the katsu sando for takeaway.', vibeDescription: 'Spacious, clean, family-friendly. Beautiful historic building.', coverCharge: 'None', hours: '11:00–22:00', translatedReview: '"Breading is impossibly light and the pork melts on the tongue." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=400&fit=crop', lat: 35.6628, lng: 139.7102, tags: ['tonkatsu', 'historic', 'family-friendly'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e26', name: 'Butagumi', nameJa: '豚組', type: 'Heritage-breed Tonkatsu', category: 'eat', neighbourhood: 'Roppongi', cuisineType: 'Tonkatsu', authenticityScore: 8.6, tabelogScore: 3.72, googleScore: 4.3, redditMentions: 41, blogMentions: 29, price: 3, distance: '5 min walk', vibe: 'intimate', whyThisPlace: 'Pick your pork like wine — 10+ heritage pig breeds to choose from.', insiderTip: 'Ask for TOKYO X pork — rare heritage breed exclusive to Tokyo.', vibeDescription: 'Refined but relaxed. Like a tonkatsu sommelier experience.', coverCharge: 'None', hours: '11:30–14:00, 17:30–21:30', translatedReview: '"TOKYO X was marbled like wagyu. Life-changing tonkatsu." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=400&fit=crop', lat: 35.6596, lng: 139.7264, tags: ['tonkatsu', 'premium', 'heritage-pork'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e27', name: 'Tonkatsu Suzuki', nameJa: 'とんかつ 鈴木', type: 'Premium Tonkatsu', category: 'eat', neighbourhood: 'Ginza', cuisineType: 'Tonkatsu', authenticityScore: 8.8, tabelogScore: 3.85, googleScore: 4.4, redditMentions: 35, blogMentions: 40, price: 3, distance: '4 min walk', vibe: 'intimate', whyThisPlace: 'Aged pork specialist with Bib Gourmand recognition.', insiderTip: 'Ask about the ageing process. Lunch sets are superb value.', vibeDescription: 'Small counter, serious pork focus. Ginza quality.', coverCharge: 'None', hours: '11:30–14:00, 17:30–21:00', translatedReview: '"Aged pork has a depth that fresh pork cannot achieve." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=400&fit=crop', lat: 35.6705, lng: 139.7638, tags: ['tonkatsu', 'aged-pork', 'bib-gourmand'], michelinStatus: 'bibGourmand', touristTrapFlag: false },
  { id: 'e28', name: 'Tonkatsu Juroku', nameJa: 'とんかつ 十六', type: 'Local Tonkatsu', category: 'eat', neighbourhood: 'Asakusa', cuisineType: 'Tonkatsu', authenticityScore: 7.8, tabelogScore: 3.5, googleScore: 4.1, redditMentions: 25, blogMentions: 15, price: 2, distance: '5 min walk', vibe: 'casual', whyThisPlace: 'Small local place, not touristy. Every neighbourhood deserves one like this.', insiderTip: 'Rosu katsu set at lunch is the local\'s choice.', vibeDescription: 'Neighbourhood diner energy. Locals at every table.', coverCharge: 'None', hours: '11:30–14:00, 17:30–21:00', translatedReview: '"No tourists, just great tonkatsu. Sesame sauce is homemade." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=400&fit=crop', lat: 35.713, lng: 139.7955, tags: ['tonkatsu', 'local', 'asakusa'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e29', name: 'Shin Udon', nameJa: '真うどん', type: 'Fresh Udon', category: 'eat', neighbourhood: 'Shimokitazawa', cuisineType: 'Udon/Soba', authenticityScore: 8.5, tabelogScore: 3.72, googleScore: 4.3, redditMentions: 39, blogMentions: 22, price: 1, distance: '3 min walk', vibe: 'casual', whyThisPlace: 'Hand-pulled udon right in front of you. Perfect chewy bounce.', insiderTip: 'Kamatama udon with raw egg is the purist\'s choice. They sell out early.', vibeDescription: 'Tiny, functional, queue-out-the-door at lunch.', coverCharge: 'None', hours: '11:30–15:00, 18:00–21:00', translatedReview: '"Noodles have a life of their own. Thick, springy, impossibly fresh." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=600&h=400&fit=crop', lat: 35.6615, lng: 139.668, tags: ['udon', 'handmade', 'fresh'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e30', name: 'Maruka Udon', nameJa: '丸香', type: 'Sanuki Udon', category: 'eat', neighbourhood: 'Ginza', cuisineType: 'Udon/Soba', authenticityScore: 8.9, tabelogScore: 3.62, googleScore: 4.4, redditMentions: 42, blogMentions: 25, price: 1, distance: '2 min walk', vibe: 'casual', whyThisPlace: 'Best Sanuki udon in Tokyo. Perfect chewy noodles worth the lunch queue.', insiderTip: 'Lunch queue worth it. Kamatama for the purest experience.', vibeDescription: 'Small counter shop, efficient service, serious noodle focus.', coverCharge: 'None', hours: '11:00–15:30', translatedReview: '"Better than most shops in Kagawa. Noodles bounce back." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=600&h=400&fit=crop', lat: 35.6955, lng: 139.7579, tags: ['udon', 'sanuki', 'handmade'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e31', name: 'Kanda Matsuya', nameJa: '神田まつや', type: 'Historic Soba', category: 'eat', neighbourhood: 'Kanda', cuisineType: 'Udon/Soba', authenticityScore: 9.0, tabelogScore: 3.55, googleScore: 4.3, redditMentions: 55, blogMentions: 44, price: 1, distance: '3 min walk', vibe: 'casual', whyThisPlace: 'Classic seiro soba since 1880. A piece of Edo history on your plate.', insiderTip: 'Seiro soba, classic since 1880. Slurp loudly — it\'s expected.', vibeDescription: 'Tatami rooms, old Tokyo refinement. Peaceful and historic.', coverCharge: 'None', hours: '11:00–20:00', translatedReview: '"Soba has a nutty depth never found elsewhere." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=600&h=400&fit=crop', lat: 35.6948, lng: 139.7717, tags: ['soba', 'historic', 'since-1880'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e32', name: 'Sarashina Horii', nameJa: '更科堀井', type: 'Edo-period Soba', category: 'eat', neighbourhood: 'Roppongi', cuisineType: 'Udon/Soba', authenticityScore: 9.1, tabelogScore: 3.68, googleScore: 4.4, redditMentions: 38, blogMentions: 35, price: 2, distance: '5 min walk', vibe: 'intimate', whyThisPlace: 'Pure white sarashina noodles since 1789. An Edo-period tradition.', insiderTip: 'Pure white sarashina noodles — delicate and unlike any other soba.', vibeDescription: 'Traditional elegance. Unhurried dining with centuries of history.', coverCharge: 'None', hours: '11:30–20:30', translatedReview: '"White soba glows on the plate. Delicate, pure, impossibly smooth." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=600&h=400&fit=crop', lat: 35.6585, lng: 139.729, tags: ['soba', 'historic', 'since-1789'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e33', name: 'Yoroniku', nameJa: 'よろにく', type: 'Premium Yakiniku', category: 'eat', neighbourhood: 'Omotesando', cuisineType: 'Wagyu', authenticityScore: 9.1, tabelogScore: 4.18, googleScore: 4.6, redditMentions: 56, blogMentions: 67, price: 4, distance: '5 min walk', vibe: 'intimate', whyThisPlace: 'Yakitori-counter philosophy applied to yakiniku. Exceptional A5 wagyu.', insiderTip: 'The silk road (uni wrapped wagyu) is the signature. Tell staff your budget.', vibeDescription: 'Dark, moody, theatrical. Every plate on a curated board.', coverCharge: 'None', hours: '17:00–23:00', translatedReview: '"A5 sirloin practically dissolved before I could chew it." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop', lat: 35.6653, lng: 139.7127, tags: ['wagyu', 'yakiniku', 'A5', 'premium'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e34', name: 'Ushigoro Ginza', nameJa: '牛蔵 銀座', type: 'A5 Wagyu', category: 'eat', neighbourhood: 'Ginza', cuisineType: 'Wagyu', authenticityScore: 8.8, tabelogScore: 3.75, googleScore: 4.4, redditMentions: 45, blogMentions: 38, price: 4, distance: '4 min walk', vibe: 'intimate', whyThisPlace: 'Ginza A5 wagyu yakiniku with refined presentation and impeccable cuts.', insiderTip: 'Lunch course is half the dinner price. Tongue and rib cap are must-orders.', vibeDescription: 'Upscale Ginza yakiniku. Private booths for groups.', coverCharge: 'None', hours: '11:30–14:30, 17:00–23:00', translatedReview: '"Marbling on the sirloin was like a work of art." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&fit=crop', lat: 35.671, lng: 139.7645, tags: ['wagyu', 'yakiniku', 'ginza'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e35', name: 'Han no Daidokoro', nameJa: '焚肉 韓の台所', type: 'Value Yakiniku', category: 'eat', neighbourhood: 'Shibuya', cuisineType: 'Wagyu', authenticityScore: 7.6, tabelogScore: 3.4, googleScore: 4.1, redditMentions: 67, blogMentions: 35, price: 2, distance: '4 min walk', vibe: 'lively', whyThisPlace: 'Surprisingly great quality for the price. Popular all-you-can-eat wagyu.', insiderTip: 'Go at lunch when the set menu is cheaper. Pace yourself.', vibeDescription: 'Energetic, popular, smoky. Bring friends for maximum fun.', coverCharge: 'None', hours: '17:00–23:30', translatedReview: '"All-you-can-eat wagyu for ¥5500 at lunch. Cannot believe it exists." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop', lat: 35.6605, lng: 139.699, tags: ['wagyu', 'value', 'all-you-can-eat'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e36', name: 'Nikugatou', nameJa: '肉雅灯', type: 'Late-night Yakiniku', category: 'eat', neighbourhood: 'Shinjuku', cuisineType: 'Wagyu', authenticityScore: 8.0, tabelogScore: 3.6, googleScore: 4.2, redditMentions: 40, blogMentions: 28, price: 3, distance: '5 min walk', vibe: 'lively', whyThisPlace: 'Open til 5am — the post-bar yakiniku spot for A5 at 3am.', insiderTip: 'Open til 5am. Post-bar yakiniku at its finest. Short rib is outstanding.', vibeDescription: 'Late-night energy. Smoke, sizzle, and beer being poured.', coverCharge: 'None', hours: '17:00–05:00', translatedReview: '"A5 wagyu at 3am after Golden Gai. Perfect end to a Tokyo night." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&fit=crop', lat: 35.692, lng: 139.6975, tags: ['wagyu', 'late-night', 'yakiniku'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e37', name: 'SATOBriand', nameJa: 'サトブリアン', type: 'Contemporary Wagyu', category: 'eat', neighbourhood: 'Daikanyama', cuisineType: 'Wagyu', authenticityScore: 9.0, tabelogScore: 3.88, googleScore: 4.5, redditMentions: 35, blogMentions: 48, price: 4, distance: '6 min walk', vibe: 'intimate', whyThisPlace: 'French-trained chef creates wagyu omakase. French meets Japanese beef.', insiderTip: 'French-trained chef, wagyu omakase. Each cut prepared differently.', vibeDescription: 'Intimate counter dining. Daikanyama sophistication.', coverCharge: 'None — omakase only', hours: '18:00–22:00', translatedReview: '"French technique on wagyu. The chateaubriand was a revelation." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop', lat: 35.649, lng: 139.7035, tags: ['wagyu', 'french-japanese', 'omakase'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e38', name: 'Rojiura Curry Samurai', nameJa: '路地裏カリィ侍', type: 'Soup Curry', category: 'eat', neighbourhood: 'Shimokitazawa', cuisineType: 'Curry', authenticityScore: 8.2, tabelogScore: 3.6, googleScore: 4.3, redditMentions: 52, blogMentions: 30, price: 1, distance: '4 min walk', vibe: 'casual', whyThisPlace: 'The Shimokitazawa curry legend. Soup curry loaded with massive vegetables.', insiderTip: 'Get the chicken leg — it falls off the bone.', vibeDescription: 'Cozy basement shop with curry aroma pulling you in.', coverCharge: 'None', hours: '11:30–15:00, 17:00–22:00', translatedReview: '"Soup curry with vegetables the size of your fist." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop', lat: 35.661, lng: 139.6678, tags: ['curry', 'soup-curry', 'shimokitazawa'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e39', name: 'Ethiopian Curry', nameJa: 'エチオピアカリー', type: 'Spice Curry', category: 'eat', neighbourhood: 'Shimokitazawa', cuisineType: 'Curry', authenticityScore: 8.0, tabelogScore: 3.55, googleScore: 4.2, redditMentions: 45, blogMentions: 25, price: 1, distance: '3 min walk', vibe: 'casual', whyThisPlace: 'Not Ethiopian food — Japanese spice curry with a cult following.', insiderTip: 'Not Ethiopian food — Japanese spice curry. Complex slow-build heat.', vibeDescription: 'Tiny, quirky, full of students and curry nerds.', coverCharge: 'None', hours: '11:30–21:00', translatedReview: '"Spice layering is extraordinary for ¥900 curry." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop', lat: 35.6612, lng: 139.6685, tags: ['curry', 'spice-curry', 'shimokitazawa'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e40', name: 'CoCo Ichibanya', nameJa: 'カレーハウスCoCo壱番屋', type: 'Chain Curry', category: 'eat', neighbourhood: 'Shibuya', cuisineType: 'Curry', authenticityScore: 7.0, tabelogScore: 3.15, googleScore: 4.0, redditMentions: 95, blogMentions: 48, price: 1, distance: '2 min walk', vibe: 'casual', whyThisPlace: 'The definitive Japanese curry chain. Customise spice 1–10.', insiderTip: 'Spice 1–10 customisation. Pork katsu topping makes it a meal.', vibeDescription: 'Counter seats, family-friendly, functional.', coverCharge: 'None', hours: '11:00–23:00', translatedReview: '"Spice level 5 and happy tears. Addictive." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop', lat: 35.659, lng: 139.7, tags: ['curry', 'chain', 'customisable'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e41', name: 'Bondy', nameJa: 'ボンディ', type: 'Butter Curry', category: 'eat', neighbourhood: 'Jimbocho', cuisineType: 'Curry', authenticityScore: 8.4, tabelogScore: 3.65, googleScore: 4.3, redditMentions: 48, blogMentions: 32, price: 2, distance: '3 min walk', vibe: 'casual', whyThisPlace: 'Famous for potato side and rich butter curry. A Jimbocho institution.', insiderTip: 'Famous for the potato side. Butter curry is deeply comforting.', vibeDescription: 'Old-school Jimbocho charm. Worn wooden tables.', coverCharge: 'None', hours: '11:00–21:00', translatedReview: '"Butter curry with famous boiled potato. Old Tokyo comfort." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop', lat: 35.696, lng: 139.7575, tags: ['curry', 'butter-curry', 'jimbocho'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e42', name: 'Den', nameJa: '傳', type: 'Playful Kaiseki', category: 'eat', neighbourhood: 'Jimbocho', cuisineType: 'Kaiseki', authenticityScore: 9.1, tabelogScore: 4.08, googleScore: 4.6, redditMentions: 65, blogMentions: 80, price: 4, distance: '5 min walk', vibe: 'intimate', whyThisPlace: 'Two Michelin stars with a sense of humour. Chef Hasegawa cooks with wit.', insiderTip: 'Dentucky Fried Chicken course — Japanese fried chicken in a KFC-style box.', vibeDescription: 'Playful, warm, surprisingly relaxed for two-star dining.', coverCharge: 'None — omakase only', hours: '18:00–22:00', translatedReview: '"Fried chicken in KFC box and perfect dashi in same meal. Genius." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&h=400&fit=crop', lat: 35.6967, lng: 139.7574, tags: ['kaiseki', 'michelin-2-star', 'playful'], michelinStatus: 'star', touristTrapFlag: false },
  { id: 'e43', name: 'Kanda', nameJa: '神田', type: 'Pure Kaiseki', category: 'eat', neighbourhood: 'Roppongi', cuisineType: 'Kaiseki', authenticityScore: 9.7, tabelogScore: 4.3, googleScore: 4.8, redditMentions: 43, blogMentions: 78, price: 4, distance: '7 min walk', vibe: 'intimate', whyThisPlace: 'Japan\'s highest-rated restaurant. Three Michelin stars of pure kaiseki.', insiderTip: 'Book 3 months ahead. Trust the seasonal menu completely.', vibeDescription: 'Hushed, ceremonial. One of Tokyo\'s most refined experiences.', coverCharge: 'None — kaiseki set only', hours: '12:00–13:00, 18:00–21:00', translatedReview: '"Each course arrived like a painting. Dashi is extraordinary." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=600&h=400&fit=crop', lat: 35.6555, lng: 139.7348, tags: ['kaiseki', 'michelin-3-star', 'luxury'], michelinStatus: 'star', touristTrapFlag: false },
  { id: 'e44', name: 'NARISAWA', nameJa: 'ナリサワ', type: 'Innovative Kaiseki', category: 'eat', neighbourhood: 'Omotesando', cuisineType: 'Kaiseki', authenticityScore: 9.4, tabelogScore: 4.15, googleScore: 4.7, redditMentions: 58, blogMentions: 85, price: 4, distance: '4 min walk', vibe: 'intimate', whyThisPlace: 'Nature-forward kaiseki. Bread from forest soil, sustainability as philosophy.', insiderTip: 'Bread from forest soil, nature-forward. An environmental masterpiece.', vibeDescription: 'Grand, thoughtful. One of Asia\'s 50 Best.', coverCharge: 'None — tasting menu only', hours: '12:00–13:30, 18:00–21:00', translatedReview: '"Forest moss course literally tasted of the earth in the best way." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&h=400&fit=crop', lat: 35.6648, lng: 139.7126, tags: ['kaiseki', 'michelin-2-star', 'sustainability'], michelinStatus: 'star', touristTrapFlag: false },
  { id: 'e45', name: 'L\'Effervescence', nameJa: 'レフェルヴェソンス', type: 'French-Kaiseki', category: 'eat', neighbourhood: 'Roppongi', cuisineType: 'Kaiseki', authenticityScore: 9.2, tabelogScore: 4.1, googleScore: 4.6, redditMentions: 40, blogMentions: 62, price: 4, distance: '6 min walk', vibe: 'intimate', whyThisPlace: 'Vegetable-driven French-Kaiseki with stunning wine list. Two Michelin stars.', insiderTip: 'Vegetable-driven. The potato course is deceptively brilliant.', vibeDescription: 'Light-filled, elegant, modern. French and Japanese aesthetics bridged.', coverCharge: 'None — tasting menu only', hours: '12:00–13:30, 18:30–21:00', translatedReview: '"A humble potato transformed into something unforgettable." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=600&h=400&fit=crop', lat: 35.658, lng: 139.727, tags: ['kaiseki', 'michelin-2-star', 'french-japanese'], michelinStatus: 'star', touristTrapFlag: false },
  { id: 'e46', name: 'Narukiyo', nameJa: '成清', type: 'Creative Izakaya', category: 'eat', neighbourhood: 'Shibuya', cuisineType: 'Izakaya Food', authenticityScore: 8.7, tabelogScore: 3.78, googleScore: 4.4, redditMentions: 58, blogMentions: 42, price: 2, distance: '6 min walk', vibe: 'lively', whyThisPlace: 'Chaotic menu, incredible food. Shibuya\'s most creative izakaya.', insiderTip: 'Chaotic menu. Just point at what others are eating.', vibeDescription: 'Eclectic, loud, joyful. Creative dishes from nowhere.', coverCharge: '500 otoshi', hours: '18:00–02:00', translatedReview: '"I have no idea what I ate but everything was extraordinary." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1540648639573-8c848de23f0a?w=600&h=400&fit=crop', lat: 35.6595, lng: 139.6995, tags: ['izakaya', 'creative', 'shibuya'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e47', name: 'Shirubee', nameJa: 'しるべぇ', type: 'Local Izakaya', category: 'eat', neighbourhood: 'Shimokitazawa', cuisineType: 'Izakaya Food', authenticityScore: 8.3, tabelogScore: 3.62, googleScore: 4.3, redditMentions: 44, blogMentions: 32, price: 2, distance: '4 min walk', vibe: 'lively', whyThisPlace: 'Shimokitazawa\'s favourite izakaya. Flaming mackerel is a spectacular show.', insiderTip: 'Flaming mackerel spectacular. Come before 7pm or queue.', vibeDescription: 'Warm, wooden, always full of laughter.', coverCharge: '400 otoshi', hours: '17:00–23:00', translatedReview: '"Flaming saba was a show and a masterpiece." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?w=600&h=400&fit=crop', lat: 35.6617, lng: 139.6685, tags: ['izakaya', 'local-favourite', 'shimokitazawa'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e48', name: 'Uoharu', nameJa: '魚春', type: 'Seafood Izakaya', category: 'eat', neighbourhood: 'Roppongi', cuisineType: 'Izakaya Food', authenticityScore: 8.4, tabelogScore: 3.55, googleScore: 4.3, redditMentions: 45, blogMentions: 35, price: 3, distance: '4 min walk', vibe: 'lively', whyThisPlace: 'Best sashimi platter in Roppongi. Rivals dedicated sushi spots.', insiderTip: 'Best sashimi in Roppongi. Grilled whole fish is outstanding.', vibeDescription: 'Upscale izakaya. Warm wood, good sake, serious fish.', coverCharge: '500 otoshi', hours: '17:00–23:30', translatedReview: '"Sashimi platter was art. Each piece glistening and fresh." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1540648639573-8c848de23f0a?w=600&h=400&fit=crop', lat: 35.659, lng: 139.728, tags: ['izakaya', 'seafood', 'roppongi'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e49', name: 'Torishin', nameJa: '鳥しん', type: 'Chicken Izakaya', category: 'eat', neighbourhood: 'Shinjuku', cuisineType: 'Izakaya Food', authenticityScore: 8.0, tabelogScore: 3.6, googleScore: 4.2, redditMentions: 38, blogMentions: 25, price: 2, distance: '5 min walk', vibe: 'lively', whyThisPlace: 'Chicken nanban is incredible — crispy fried chicken with tartar sauce.', insiderTip: 'Chicken nanban is the must-order. Pair with cold draught beer.', vibeDescription: 'Bustling Shinjuku izakaya. Smoke and laughter.', coverCharge: '400 otoshi', hours: '17:00–23:00', translatedReview: '"Chicken nanban sets the standard here. Crispy, juicy, perfect." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?w=600&h=400&fit=crop', lat: 35.691, lng: 139.697, tags: ['izakaya', 'chicken', 'shinjuku'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e50', name: 'Andy\'s Shin-Hinomoto', nameJa: '新日の本', type: 'Under-the-tracks Izakaya', category: 'eat', neighbourhood: 'Ginza', cuisineType: 'Izakaya Food', authenticityScore: 7.8, tabelogScore: 3.42, googleScore: 4.3, redditMentions: 67, blogMentions: 44, price: 2, distance: '2 min walk', vibe: 'rowdy', whyThisPlace: 'British owner, Japanese soul, under Yamanote line. English-friendly.', insiderTip: 'Ask Andy what\'s fresh — he goes to the market daily.', vibeDescription: 'Noisy, smoky, joyful. Under the tracks. Old Tokyo charm.', coverCharge: 'None', hours: '17:00–23:30', translatedReview: '"Andy knows every regular. Grilled mackerel was the best." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1540648639573-8c848de23f0a?w=600&h=400&fit=crop', lat: 35.6756, lng: 139.7628, tags: ['izakaya', 'english-friendly', 'under-tracks'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e51', name: 'Tsukiji Outer Market', nameJa: '築地場外市場', type: 'Market Street Food', category: 'eat', neighbourhood: 'Tsukiji', cuisineType: 'Street Food', authenticityScore: 8.2, tabelogScore: 3.6, googleScore: 4.3, redditMentions: 110, blogMentions: 78, price: 1, distance: '2 min walk', vibe: 'lively', whyThisPlace: 'Tamagoyaki on a stick, fresh oysters, fishcakes — a walking feast.', insiderTip: 'Go at 8am before crowds. Tamagoyaki + uni on a stick is the move.', vibeDescription: 'Narrow lanes, smoke, sizzle, fishmongers calling out.', coverCharge: 'None', hours: '06:00–14:00', translatedReview: '"Seven things in one morning for ¥2500. Pure joy." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=400&fit=crop', lat: 35.6655, lng: 139.7706, tags: ['street-food', 'market', 'morning'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e52', name: 'Takoyaki Gindaco', nameJa: '銀だこ', type: 'Takoyaki', category: 'eat', neighbourhood: 'Shibuya', cuisineType: 'Street Food', authenticityScore: 7.5, tabelogScore: 3.3, googleScore: 4.1, redditMentions: 48, blogMentions: 25, price: 1, distance: '3 min walk', vibe: 'casual', whyThisPlace: 'Crispy outside, creamy inside. The takoyaki chain that does it right.', insiderTip: 'Eat them hot — not the same cooled down.', vibeDescription: 'Quick street-food counter. Grab and go.', coverCharge: 'None', hours: '11:00–22:00', translatedReview: '"Crispiest takoyaki anywhere. Octopus inside is generous." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1513862153653-69c5f0840027?w=600&h=400&fit=crop', lat: 35.6592, lng: 139.7005, tags: ['street-food', 'takoyaki', 'quick'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e53', name: 'Asakusa Menchi', nameJa: '浅草メンチ', type: 'Menchi Katsu', category: 'eat', neighbourhood: 'Asakusa', cuisineType: 'Street Food', authenticityScore: 8.0, tabelogScore: 3.55, googleScore: 4.2, redditMentions: 42, blogMentions: 28, price: 1, distance: '3 min walk', vibe: 'casual', whyThisPlace: 'Wagyu menchi katsu, queue-worthy. Perfect Asakusa street snack.', insiderTip: 'Wagyu menchi katsu — eat it hot from the fryer.', vibeDescription: 'Small shopfront with a queue. The smell stops you.', coverCharge: 'None', hours: '10:00–19:00', translatedReview: '"Hot, juicy wagyu menchi katsu. Best ¥300 in Tokyo." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=400&fit=crop', lat: 35.714, lng: 139.796, tags: ['street-food', 'menchi-katsu', 'asakusa'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e54', name: 'Onigiri Asakusa Yadoroku', nameJa: 'おにぎり 宿六', type: 'Onigiri', category: 'eat', neighbourhood: 'Asakusa', cuisineType: 'Street Food', authenticityScore: 8.8, tabelogScore: 3.72, googleScore: 4.4, redditMentions: 55, blogMentions: 38, price: 1, distance: '5 min walk', vibe: 'casual', whyThisPlace: 'Oldest onigiri shop in Tokyo since 1954. Bib Gourmand for rice balls.', insiderTip: 'Since 1954. Salmon and umeboshi are perfection.', vibeDescription: 'Tiny counter. Watch the master press each onigiri.', coverCharge: 'None', hours: '11:30–17:00', translatedReview: '"Rice alone is extraordinary. Perfectly seasoned, pressed." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1513862153653-69c5f0840027?w=600&h=400&fit=crop', lat: 35.7148, lng: 139.795, tags: ['street-food', 'onigiri', 'bib-gourmand'], michelinStatus: 'bibGourmand', touristTrapFlag: false },
  { id: 'e55', name: 'Savoy', nameJa: 'サヴォイ', type: 'Neapolitan Pizza', category: 'eat', neighbourhood: 'Asakusa', cuisineType: 'Street Food', authenticityScore: 8.5, tabelogScore: 3.72, googleScore: 4.4, redditMentions: 45, blogMentions: 35, price: 2, distance: '6 min walk', vibe: 'casual', whyThisPlace: 'Only 2 pizzas: margherita and marinara. Both perfect.', insiderTip: 'Only margherita and marinara — both perfect. Simplicity is the point.', vibeDescription: 'Small cozy pizzeria. Wood-fired oven from every seat.', coverCharge: 'None', hours: '11:30–14:30, 17:30–22:00', translatedReview: '"Best margherita outside Naples. Two options, both perfect." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop', lat: 35.7135, lng: 139.794, tags: ['pizza', 'neapolitan', 'asakusa'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e56', name: 'Cremia', nameJa: 'クレミア', type: 'Soft Serve', category: 'eat', neighbourhood: 'Shinjuku', cuisineType: 'Dessert', authenticityScore: 7.8, tabelogScore: 3.5, googleScore: 4.2, redditMentions: 45, blogMentions: 30, price: 1, distance: '3 min walk', vibe: 'casual', whyThisPlace: 'Langues de Chat cone, 25% cream. Richest soft serve ever.', insiderTip: 'Langues de Chat cone — the waffle cone is a cookie. 25% cream.', vibeDescription: 'Small counter. Quick visit, maximum pleasure.', coverCharge: 'None', hours: '10:00–20:00', translatedReview: '"The cone is a cookie. Cream is 25% fat. Heaven in a cone." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop', lat: 35.6895, lng: 139.698, tags: ['dessert', 'soft-serve', 'cream'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e57', name: 'Dominique Ansel Bakery', nameJa: 'ドミニクアンセル', type: 'Pastry', category: 'eat', neighbourhood: 'Omotesando', cuisineType: 'Dessert', authenticityScore: 7.5, tabelogScore: 3.55, googleScore: 4.3, redditMentions: 52, blogMentions: 38, price: 2, distance: '4 min walk', vibe: 'casual', whyThisPlace: 'Cookie shot and frozen s\'more brought Cronut fame to Omotesando.', insiderTip: 'Cookie shot + frozen s\'more. Better than the NYC original.', vibeDescription: 'Bright, Instagram-friendly bakery on Omotesando.', coverCharge: 'None', hours: '10:00–19:00', translatedReview: '"Cookie shot filled with milk is genius." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&h=400&fit=crop', lat: 35.665, lng: 139.709, tags: ['dessert', 'pastry', 'omotesando'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e58', name: 'Suzukien', nameJa: '壽々喜園', type: 'Matcha Gelato', category: 'eat', neighbourhood: 'Asakusa', cuisineType: 'Dessert', authenticityScore: 8.5, tabelogScore: 3.68, googleScore: 4.4, redditMentions: 62, blogMentions: 45, price: 1, distance: '5 min walk', vibe: 'casual', whyThisPlace: '7 levels of matcha intensity. Level 7 is nearly savoury.', insiderTip: 'Go for level 7 if you dare. It\'s intense and unforgettable.', vibeDescription: 'Small shop, green everything. Perfect Asakusa dessert stop.', coverCharge: 'None', hours: '10:00–17:00', translatedReview: '"Level 7 matcha is unlike any gelato. Earthy, bitter, grassy." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop', lat: 35.7145, lng: 139.7935, tags: ['dessert', 'matcha', 'gelato'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e59', name: 'I\'m donut?', nameJa: 'アイムドーナツ', type: 'Brioche Donuts', category: 'eat', neighbourhood: 'Nakameguro', cuisineType: 'Dessert', authenticityScore: 8.2, tabelogScore: 3.62, googleScore: 4.3, redditMentions: 82, blogMentions: 55, price: 1, distance: '5 min walk', vibe: 'casual', whyThisPlace: 'Melt-in-your-mouth brioche donuts. Expect a queue and pure joy.', insiderTip: 'Melt-in-your-mouth. Expect a queue. Plain butter is the best.', vibeDescription: 'Minimalist bakery, queue-worthy, Nakameguro cool.', coverCharge: 'None', hours: '10:00–20:00', translatedReview: '"Layers like a croissant, shape of a doughnut. Perfection." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&h=400&fit=crop', lat: 35.6484, lng: 139.7038, tags: ['dessert', 'donut', 'queue-worthy'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e60', name: 'Tsukiji Soba Academy', nameJa: '築地そばアカデミー', type: 'Morning Soba', category: 'eat', neighbourhood: 'Tsukiji', cuisineType: 'Breakfast', authenticityScore: 8.0, tabelogScore: 3.5, googleScore: 4.2, redditMentions: 35, blogMentions: 22, price: 1, distance: '3 min walk', vibe: 'casual', whyThisPlace: '7am soba, the Tsukiji way. Perfect light breakfast before the market.', insiderTip: '7am soba. Simple, fresh, the perfect start to a market morning.', vibeDescription: 'Standing counter, market workers alongside tourists.', coverCharge: 'None', hours: '07:00–15:00', translatedReview: '"Soba for breakfast felt strange until I tried it." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=600&h=400&fit=crop', lat: 35.6652, lng: 139.77, tags: ['breakfast', 'soba', 'tsukiji'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e61', name: 'Pelican Cafe', nameJa: 'ペリカンカフェ', type: 'Toast Cafe', category: 'eat', neighbourhood: 'Asakusa', cuisineType: 'Breakfast', authenticityScore: 8.5, tabelogScore: 3.65, googleScore: 4.4, redditMentions: 55, blogMentions: 40, price: 1, distance: '5 min walk', vibe: 'casual', whyThisPlace: 'Legendary bread since 1942. Simple thick toast elevated to art.', insiderTip: 'Legendary bread since 1942. Order the fruit sandwich too.', vibeDescription: 'Bright, retro, unhurried. Fresh bread smell everywhere.', coverCharge: 'None', hours: '08:00–17:00', translatedReview: '"Thickest, most perfect toast ever. Since 1942." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&h=400&fit=crop', lat: 35.712, lng: 139.7945, tags: ['breakfast', 'toast', 'since-1942'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e62', name: 'Bills Omotesando', nameJa: 'bills 表参道', type: 'Ricotta Pancakes', category: 'eat', neighbourhood: 'Omotesando', cuisineType: 'Breakfast', authenticityScore: 7.2, tabelogScore: 3.41, googleScore: 4.2, redditMentions: 58, blogMentions: 42, price: 2, distance: '3 min walk', vibe: 'casual', whyThisPlace: 'The ricotta pancakes that conquered the world. Better here than Sydney.', insiderTip: 'Ricotta hotcakes with honeycomb butter. Book on weekends.', vibeDescription: 'Bright, light-filled, stylish. Omotesando energy.', coverCharge: 'None', hours: '08:30–23:00', translatedReview: '"Pancakes taste better here than in Sydney. Impossibly fluffy." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=600&h=400&fit=crop', lat: 35.6652, lng: 139.7083, tags: ['breakfast', 'pancakes', 'brunch'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e63', name: 'Sato Yosuke', nameJa: '佐藤養助', type: 'Morning Inaniwa Udon', category: 'eat', neighbourhood: 'Ginza', cuisineType: 'Breakfast', authenticityScore: 8.3, tabelogScore: 3.62, googleScore: 4.3, redditMentions: 32, blogMentions: 28, price: 2, distance: '4 min walk', vibe: 'casual', whyThisPlace: 'Akita-style thin udon, silky smooth. Opens early at Tokyo Station.', insiderTip: 'Akita-style thin udon. Cold dipping is best for texture.', vibeDescription: 'Clean station-adjacent restaurant. Perfect for travellers.', coverCharge: 'None', hours: '07:30–21:00', translatedReview: '"Thinnest, silkiest udon. Like noodle silk." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&h=400&fit=crop', lat: 35.681, lng: 139.767, tags: ['breakfast', 'udon', 'inaniwa'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e64', name: 'La Fleur de Sarrasin', nameJa: 'ラ・フルール・ド・サラザン', type: 'French Crêpes', category: 'eat', neighbourhood: 'Asakusa', cuisineType: 'Fusion', authenticityScore: 8.0, tabelogScore: 3.58, googleScore: 4.3, redditMentions: 28, blogMentions: 22, price: 2, distance: '6 min walk', vibe: 'intimate', whyThisPlace: 'Japanese couple trained in France. Authentic buckwheat galettes.', insiderTip: 'Complete galette is the classic order.', vibeDescription: 'Tiny, charming, French-bistro in Asakusa.', coverCharge: 'None', hours: '11:30–14:00, 17:30–21:00', translatedReview: '"Better galettes than most of Brittany. Perfectly nutty." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop', lat: 35.7125, lng: 139.793, tags: ['fusion', 'french', 'crepes'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e65', name: 'Florilège', nameJa: 'フロリレージュ', type: 'French-Japanese', category: 'eat', neighbourhood: 'Roppongi', cuisineType: 'Fusion', authenticityScore: 9.2, tabelogScore: 4.2, googleScore: 4.7, redditMentions: 50, blogMentions: 75, price: 4, distance: '5 min walk', vibe: 'intimate', whyThisPlace: 'Sustainable philosophy, multi-course art. Two Michelin stars.', insiderTip: 'Sustainable philosophy. Counter seating lets you watch every dish.', vibeDescription: 'Theatrical, counter-only, quietly spectacular.', coverCharge: 'None — tasting menu only', hours: '12:00–13:00, 18:30–21:00', translatedReview: '"Japanese strawberry with French cream — works in Paris and Kyoto." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop', lat: 35.665, lng: 139.7128, tags: ['fusion', 'michelin-2-star', 'french-japanese'], michelinStatus: 'star', touristTrapFlag: false },
  { id: 'e66', name: 'Junkadelic', nameJa: 'ジャンカデリック', type: 'Mexican Fusion', category: 'eat', neighbourhood: 'Nakameguro', cuisineType: 'Fusion', authenticityScore: 7.5, tabelogScore: 3.45, googleScore: 4.2, redditMentions: 38, blogMentions: 22, price: 2, distance: '4 min walk', vibe: 'lively', whyThisPlace: 'Funky Mexican in Tokyo. Surprisingly authentic tacos with Japanese twists.', insiderTip: 'Get a reservation. Al pastor tacos are the standout.', vibeDescription: 'Colourful, energetic, DJ nights on weekends.', coverCharge: 'None', hours: '18:00–01:00', translatedReview: '"Mexican food has no right being this good in Tokyo." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop', lat: 35.644, lng: 139.699, tags: ['fusion', 'mexican', 'tacos'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e67', name: 'Gyukatsu Motomura', nameJa: '牛かつ もと村', type: 'Gyukatsu', category: 'eat', neighbourhood: 'Shibuya', cuisineType: 'Fusion', authenticityScore: 8.2, tabelogScore: 3.55, googleScore: 4.2, redditMentions: 88, blogMentions: 52, price: 2, distance: '5 min walk', vibe: 'casual', whyThisPlace: 'Cook the rare beef on your hot stone. Interactive and delicious.', insiderTip: 'Cook rare beef on hot stone. Dip in wasabi soy, not tonkatsu sauce.', vibeDescription: 'Counter seating with personal hot stones. Quick and efficient.', coverCharge: 'None', hours: '11:00–22:00', translatedReview: '"Crispy outside, pink wagyu inside. Cooking on the stone is fun." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop', lat: 35.661, lng: 139.6987, tags: ['fusion', 'gyukatsu', 'interactive'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'e68', name: 'Takazawa', nameJa: '高澤', type: '8-seat Innovation', category: 'eat', neighbourhood: 'Roppongi', cuisineType: 'Fusion', authenticityScore: 9.5, tabelogScore: 4.22, googleScore: 4.7, redditMentions: 35, blogMentions: 65, price: 4, distance: '6 min walk', vibe: 'intimate', whyThisPlace: '2 chefs, 8 guests, edible art. Two Michelin stars of pure innovation.', insiderTip: '2 chefs, 8 guests. Book months ahead for this experience.', vibeDescription: 'The most intimate fine dining in Tokyo.', coverCharge: 'None — tasting menu only', hours: '12:00–13:00, 18:00–21:00', translatedReview: '"Eight guests, two chefs. Each course was edible art." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop', lat: 35.6595, lng: 139.7275, tags: ['fusion', 'michelin-2-star', 'innovation'], michelinStatus: 'star', touristTrapFlag: false },
  { id: 'd1', name: 'Uoshin', nameJa: '魚心', type: 'Standing Seafood Izakaya', category: 'drink', neighbourhood: 'Shibuya', barType: 'Izakaya', authenticityScore: 8.3, tabelogScore: 3.55, googleScore: 4.3, redditMentions: 42, blogMentions: 28, price: 2, distance: '3 min walk', vibe: 'lively', whyThisPlace: 'Best value seafood near the station. Standing format, outstanding fish.', insiderTip: 'Best value seafood near Shibuya station. Sashimi changes daily.', vibeDescription: 'Bustling standing izakaya. Fresh fish, cold beer.', coverCharge: 'None', hours: '16:00–23:30', translatedReview: '"Genuine and unforgettable izakaya atmosphere." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1554502078-ef0fc409efce?w=600&h=400&fit=crop', lat: 35.659, lng: 139.701, tags: ['izakaya', 'seafood', 'standing'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd2', name: 'Torikizoku', nameJa: '鳥貴族', type: '¥360 Yakitori Chain', category: 'drink', neighbourhood: 'Shibuya', barType: 'Izakaya', authenticityScore: 7.0, tabelogScore: 3.05, googleScore: 3.9, redditMentions: 55, blogMentions: 22, price: 1, distance: '5 min walk', vibe: 'rowdy', whyThisPlace: 'Every skewer ¥360, mega-highball. Most democratic bar in Japan.', insiderTip: 'Every skewer ¥360. Mega-highball is enormous. Cash only.', vibeDescription: 'Young, loud, salarymen and students. Maximum fun.', coverCharge: 'None', hours: '17:00–01:00', translatedReview: '"The most fun you can have for ¥2000 in Tokyo." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1540648639573-8c848de23f0a?w=600&h=400&fit=crop', lat: 35.66, lng: 139.7008, tags: ['izakaya', 'budget', 'yakitori'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd3', name: 'Hoppy Dori', nameJa: 'ホッピー通り', type: 'Hoppy Street', category: 'drink', neighbourhood: 'Asakusa', barType: 'Izakaya', authenticityScore: 7.8, tabelogScore: 3.15, googleScore: 4.1, redditMentions: 58, blogMentions: 35, price: 1, distance: '3 min walk', vibe: 'rowdy', whyThisPlace: 'Sit outside on Hoppy Street with old-timers. Shitamachi culture.', insiderTip: 'Order naka (refill of cold shochu inside mug) — the local way.', vibeDescription: 'Outdoor seating, low stools, laneway noise. Old Tokyo magic.', coverCharge: 'None', hours: '14:00–22:00', translatedReview: '"Drinking hoppy under paper lanterns with old-timers. Peak Tokyo." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1554502078-ef0fc409efce?w=600&h=400&fit=crop', lat: 35.7142, lng: 139.7948, tags: ['izakaya', 'hoppy', 'shitamachi'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd4', name: 'Kanemasu', nameJa: '金ます', type: 'Standing Wine Izakaya', category: 'drink', neighbourhood: 'Tsukiji', barType: 'Izakaya', authenticityScore: 8.5, tabelogScore: 3.68, googleScore: 4.3, redditMentions: 40, blogMentions: 32, price: 2, distance: '2 min walk', vibe: 'lively', whyThisPlace: 'Natural wine + Japanese tapas in a standing izakaya.', insiderTip: 'Natural wine + Japanese tapas. Wine list changes constantly.', vibeDescription: 'Buzzy standing bar near Tsukiji. Wine and fish.', coverCharge: 'None', hours: '16:00–22:00', translatedReview: '"Natural wine and tsukiji-fresh fish. Perfect combination." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1540648639573-8c848de23f0a?w=600&h=400&fit=crop', lat: 35.665, lng: 139.7705, tags: ['izakaya', 'natural-wine', 'tapas'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd5', name: 'Donjaca', nameJa: 'ドンジャカ', type: 'Craft Sake Izakaya', category: 'drink', neighbourhood: 'Shimokitazawa', barType: 'Izakaya', authenticityScore: 8.0, tabelogScore: 3.5, googleScore: 4.2, redditMentions: 35, blogMentions: 25, price: 2, distance: '4 min walk', vibe: 'lively', whyThisPlace: 'Rotating sake list with excellent small plates.', insiderTip: 'Rotating sake list, small plates. Ask what\'s new.', vibeDescription: 'Warm, wooden, neighbourhood favourite.', coverCharge: 'None', hours: '17:00–23:00', translatedReview: '"The sake list rotates and there\'s always a discovery." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1554502078-ef0fc409efce?w=600&h=400&fit=crop', lat: 35.6618, lng: 139.668, tags: ['izakaya', 'sake', 'shimokitazawa'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd6', name: 'Ahiru Store', nameJa: 'アヒルストア', type: 'Natural Wine Tachinomi', category: 'drink', neighbourhood: 'Shibuya', barType: 'Tachinomi', authenticityScore: 8.8, tabelogScore: 3.8, googleScore: 4.4, redditMentions: 62, blogMentions: 45, price: 2, distance: '5 min walk', vibe: 'lively', whyThisPlace: 'Hardest walk-in in Shibuya. Natural wine in a tiny standing bar.', insiderTip: 'Hardest walk-in in Shibuya. Go at opening or forget it.', vibeDescription: 'Tiny, packed, natural wine paradise. Everyone happy.', coverCharge: 'None', hours: '17:00–00:00', translatedReview: '"Standing with natural wine, surrounded by locals. Real Tokyo." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1554502078-ef0fc409efce?w=600&h=400&fit=crop', lat: 35.6565, lng: 139.6975, tags: ['tachinomi', 'natural-wine', 'queue-worthy'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd7', name: 'Ginza Shimada', nameJa: '銀座しまだ', type: 'Classic Standing Bar', category: 'drink', neighbourhood: 'Ginza', barType: 'Tachinomi', authenticityScore: 8.5, tabelogScore: 3.72, googleScore: 4.3, redditMentions: 35, blogMentions: 28, price: 2, distance: '3 min walk', vibe: 'intimate', whyThisPlace: 'Tiny, refined, salaryman haven. Standing bar perfection.', insiderTip: 'Tiny, refined. The sake selection is superb.', vibeDescription: 'Small and elegant. Quiet oasis of standing refinement.', coverCharge: 'None', hours: '17:00–23:00', translatedReview: '"Standing here with sake in hand — this is the real Tokyo." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop', lat: 35.6708, lng: 139.764, tags: ['tachinomi', 'ginza', 'refined'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd8', name: 'Tachinomi Margin', nameJa: 'タチノミ マージン', type: 'Craft Beer Standing', category: 'drink', neighbourhood: 'Ebisu', barType: 'Tachinomi', authenticityScore: 7.8, tabelogScore: 3.45, googleScore: 4.2, redditMentions: 30, blogMentions: 20, price: 2, distance: '4 min walk', vibe: 'casual', whyThisPlace: '6 rotating taps, no seats, pure vibes.', insiderTip: '6 rotating taps. Check social media for what\'s on tap.', vibeDescription: 'Small, friendly, unpretentious. Beer nerds welcome.', coverCharge: 'None', hours: '16:00–23:00', translatedReview: '"Pure standing craft beer vibes. No pretension." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1554502078-ef0fc409efce?w=600&h=400&fit=crop', lat: 35.6478, lng: 139.7105, tags: ['tachinomi', 'craft-beer', 'standing'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd9', name: 'Fuji', nameJa: '富士', type: 'Showa-era Standing Bar', category: 'drink', neighbourhood: 'Shinjuku', barType: 'Tachinomi', authenticityScore: 7.5, tabelogScore: 3.2, googleScore: 4.0, redditMentions: 28, blogMentions: 18, price: 1, distance: '3 min walk', vibe: 'casual', whyThisPlace: 'Retro standing bar since the 1960s. Cheap drinks, pure Showa.', insiderTip: 'Retro since the \'60s. Cheapest drinks in Shinjuku.', vibeDescription: 'Faded Showa-era charm. Fluorescent lights. Time machine.', coverCharge: 'None', hours: '16:00–22:00', translatedReview: '"Standing in a Showa time capsule. ¥300 whisky. Perfect." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop', lat: 35.6935, lng: 139.698, tags: ['tachinomi', 'showa', 'retro'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd10', name: 'Tachinomi Sharemon', nameJa: '立飲み しゃれもん', type: 'Budget Standing Bar', category: 'drink', neighbourhood: 'Asakusa', barType: 'Tachinomi', authenticityScore: 7.2, tabelogScore: 3.1, googleScore: 3.9, redditMentions: 32, blogMentions: 15, price: 1, distance: '2 min walk', vibe: 'rowdy', whyThisPlace: '¥100 draft beers. Cheapest drinks in Asakusa.', insiderTip: '¥100 draft beers — can\'t beat it.', vibeDescription: 'Rowdy, cheap, cheerful. Asakusa\'s budget champion.', coverCharge: 'None', hours: '14:00–22:00', translatedReview: '"¥100 beers in Asakusa. Budget paradise." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1554502078-ef0fc409efce?w=600&h=400&fit=crop', lat: 35.7145, lng: 139.7955, tags: ['tachinomi', 'budget', 'asakusa'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd11', name: 'Golden Gai', nameJa: 'ゴールデン街', type: '200+ Tiny Bars', category: 'drink', neighbourhood: 'Shinjuku', barType: 'Yokocho', authenticityScore: 8.5, tabelogScore: 3.2, googleScore: 4.2, redditMentions: 120, blogMentions: 75, price: 2, distance: '6 min walk', vibe: 'rowdy', whyThisPlace: '200+ tiny bars, each 5-8 seats. Just pick one.', insiderTip: 'Just pick one. Avoid ones with aggressive touts.', vibeDescription: 'Labyrinthine alleys of tiny lit bars. Post-war Tokyo preserved.', coverCharge: 'Varies (¥500-1000)', hours: '20:00–04:00', translatedReview: '"Golden Gai glowed with lanterns and laughter. Pure magic." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&h=400&fit=crop', lat: 35.6938, lng: 139.7034, tags: ['yokocho', 'golden-gai', 'nightlife'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd12', name: 'Omoide Yokocho', nameJa: '思い出横丁', type: 'Memory Lane', category: 'drink', neighbourhood: 'Shinjuku', barType: 'Yokocho', authenticityScore: 8.0, tabelogScore: 3.15, googleScore: 4.1, redditMentions: 88, blogMentions: 55, price: 1, distance: '2 min walk', vibe: 'rowdy', whyThisPlace: 'Yakitori + beer under the smoke. Memory Lane in all its glory.', insiderTip: 'Walk deeper in. Less tourist-friendly ones have best yakitori.', vibeDescription: 'Chaotic, smoky, cramped, alive. Old-school energy.', coverCharge: 'None', hours: '16:00–00:00', translatedReview: '"Smoke, yakitori, beer. Memory Lane is pure magic." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop', lat: 35.6935, lng: 139.6983, tags: ['yokocho', 'yakitori', 'smoke'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd13', name: 'Nonbei Yokocho', nameJa: 'のんべい横丁', type: 'Shibuya\'s Hidden Alley', category: 'drink', neighbourhood: 'Shibuya', barType: 'Yokocho', authenticityScore: 8.3, tabelogScore: 3.25, googleScore: 4.2, redditMentions: 52, blogMentions: 35, price: 2, distance: '4 min walk', vibe: 'intimate', whyThisPlace: '1950s time warp. TIGHT bar has 5 seats. Shibuya\'s secret alley.', insiderTip: '1950s time warp. Bar TIGHT has 5 seats and is unmissable.', vibeDescription: 'Narrow alley, Showa-era bars, lantern-lit and intimate.', coverCharge: 'Varies (¥500-800)', hours: '18:00–02:00', translatedReview: '"Nonbei Yokocho is a 1950s time warp. Magical." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&h=400&fit=crop', lat: 35.66, lng: 139.7015, tags: ['yokocho', 'shibuya', 'hidden'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd14', name: 'Ebisu Yokocho', nameJa: '恵比寿横丁', type: 'Food Hall Alley', category: 'drink', neighbourhood: 'Ebisu', barType: 'Yokocho', authenticityScore: 7.8, tabelogScore: 3.35, googleScore: 4.1, redditMentions: 42, blogMentions: 30, price: 2, distance: '3 min walk', vibe: 'lively', whyThisPlace: '10 food stalls in a converted parking garage.', insiderTip: '10 food stalls. Try multiple in one visit.', vibeDescription: 'Open, social, communal tables. Everyone sharing.', coverCharge: 'None', hours: '17:00–00:00', translatedReview: '"Ebisu Yokocho is the most social eating in Tokyo." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop', lat: 35.6472, lng: 139.7098, tags: ['yokocho', 'food-hall', 'ebisu'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd15', name: 'Harmonica Yokocho', nameJa: 'ハーモニカ横丁', type: 'Vintage Alley', category: 'drink', neighbourhood: 'Shimokitazawa', barType: 'Yokocho', authenticityScore: 7.8, tabelogScore: 3.2, googleScore: 4.1, redditMentions: 38, blogMentions: 25, price: 1, distance: '3 min walk', vibe: 'lively', whyThisPlace: 'Post-war black market turned bar alley.', insiderTip: 'Post-war black market turned bar alley. Wander and explore.', vibeDescription: 'Narrow alleys, vintage shops between bars.', coverCharge: 'None', hours: '17:00–23:00', translatedReview: '"Harmonica Yokocho is old Japan charm." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&h=400&fit=crop', lat: 35.6612, lng: 139.6682, tags: ['yokocho', 'vintage', 'kichijoji'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd16', name: 'Bar Benfiddich', nameJa: 'バー ベンフィディック', type: 'World\'s 50 Best Bar', category: 'drink', neighbourhood: 'Shinjuku', barType: 'Cocktail Bar', authenticityScore: 9.1, tabelogScore: 3.58, googleScore: 4.5, redditMentions: 74, blogMentions: 60, price: 3, distance: '4 min walk', vibe: 'intimate', whyThisPlace: 'Kayama grinds spices live, taxidermy decor. Asia\'s 50 Best.', insiderTip: 'Ask for house-made absinthe or seasonal infusions. Cash only.', vibeDescription: 'Dark, botanical, otherworldly. Shelves of hand-labelled tinctures.', coverCharge: '¥1,000', hours: '18:00–02:00', translatedReview: '"Bartender crafted something matching my mood perfectly." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop', lat: 35.6912, lng: 139.6955, tags: ['cocktail', 'worlds-50-best', 'botanical'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd17', name: 'Bar High Five', nameJa: 'バー ハイファイブ', type: 'Legendary Cocktails', category: 'drink', neighbourhood: 'Ginza', barType: 'Cocktail Bar', authenticityScore: 9.5, tabelogScore: 3.5, googleScore: 4.5, redditMentions: 93, blogMentions: 78, price: 3, distance: '3 min walk', vibe: 'intimate', whyThisPlace: 'Ueno-san reads your mood — no menu needed. Greatest bartenders alive.', insiderTip: 'Sit at the bar. Tell Ueno-san your mood. Trust him.', vibeDescription: 'Dimly lit, hushed, impeccable. Old-school bar culture.', coverCharge: '¥1,000', hours: '17:00–00:00', translatedReview: '"Said \'something refreshing with gin\' and received the best cocktail of my life." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&h=400&fit=crop', lat: 35.6722, lng: 139.7649, tags: ['cocktail', 'omakase-style', 'legendary'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd18', name: 'The SG Club', nameJa: 'ザ・エスジー・クラブ', type: 'Two-floor Experience', category: 'drink', neighbourhood: 'Shibuya', barType: 'Cocktail Bar', authenticityScore: 9.2, tabelogScore: 3.6, googleScore: 4.5, redditMentions: 67, blogMentions: 58, price: 3, distance: '5 min walk', vibe: 'lively', whyThisPlace: 'Sip downstairs (quiet), Guzzle upstairs (party). World\'s 50 Best.', insiderTip: 'Go downstairs for speakeasy. SG Negroni is the signature.', vibeDescription: 'Upstairs vibrant; downstairs dark, moody, theatrical.', coverCharge: 'None', hours: '17:00–02:00', translatedReview: '"Shingo Gokan is a genius. Presentation is theatre, flavours flawless." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=400&fit=crop', lat: 35.6614, lng: 139.6989, tags: ['cocktail', 'worlds-50-best', 'two-floors'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd19', name: 'The Bellwood', nameJa: 'ザ・ベルウッド', type: 'Innovative Cocktails', category: 'drink', neighbourhood: 'Shibuya', barType: 'Cocktail Bar', authenticityScore: 8.8, tabelogScore: 3.52, googleScore: 4.4, redditMentions: 45, blogMentions: 38, price: 3, distance: '6 min walk', vibe: 'intimate', whyThisPlace: 'Atmospheric interior, boundary-pushing cocktails.', insiderTip: 'Seasonal menu changes quarterly. Ask what\'s new.', vibeDescription: 'Moody, intimate, creative. Pushing boundaries.', coverCharge: 'None', hours: '18:00–02:00', translatedReview: '"Boundary-pushing cocktails in a world-class setting." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop', lat: 35.6608, lng: 139.6998, tags: ['cocktail', 'innovative', 'atmospheric'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd20', name: 'Flying Bumblebee', nameJa: 'フライングバンブルビー', type: 'Industrial Speakeasy', category: 'drink', neighbourhood: 'Daikanyama', barType: 'Cocktail Bar', authenticityScore: 8.6, tabelogScore: 3.48, googleScore: 4.3, redditMentions: 38, blogMentions: 32, price: 3, distance: '5 min walk', vibe: 'intimate', whyThisPlace: 'Basement bar, killer gin cocktails. Asia\'s 50 Best.', insiderTip: 'Basement bar — killer gin cocktails. Look for the discreet entrance.', vibeDescription: 'Industrial-chic basement. Exposed brick, dim lighting.', coverCharge: 'None', hours: '18:00–01:00', translatedReview: '"Killer gin cocktails in a hidden basement. Perfection." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&h=400&fit=crop', lat: 35.6485, lng: 139.703, tags: ['cocktail', 'gin', 'basement'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd21', name: 'Gold Bar at EDITION', nameJa: 'ゴールドバー', type: 'Hotel Bar Excellence', category: 'drink', neighbourhood: 'Ginza', barType: 'Cocktail Bar', authenticityScore: 9.0, tabelogScore: 3.55, googleScore: 4.5, redditMentions: 42, blogMentions: 45, price: 4, distance: '4 min walk', vibe: 'intimate', whyThisPlace: 'Pre-Prohibition meets future. Hidden UV menu. Asia\'s 50 Best.', insiderTip: 'Ask about the hidden UV menu — secret cocktails under blacklight.', vibeDescription: 'Opulent, gold-toned, hotel-bar glamour.', coverCharge: '¥1,500', hours: '17:00–01:00', translatedReview: '"Hidden UV menu revealed secret cocktails. World-class." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=400&fit=crop', lat: 35.6715, lng: 139.7655, tags: ['cocktail', 'hotel-bar', 'hidden-menu'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd22', name: 'Bar Ishinohana', nameJa: 'バー 石の花', type: 'Old Fashioned Masters', category: 'drink', neighbourhood: 'Shibuya', barType: 'Cocktail Bar', authenticityScore: 8.4, tabelogScore: 3.45, googleScore: 4.3, redditMentions: 32, blogMentions: 25, price: 2, distance: '7 min walk', vibe: 'intimate', whyThisPlace: 'Best old fashioned in all of Tokyo.', insiderTip: 'Best old fashioned in Tokyo. If that\'s your drink, this is your bar.', vibeDescription: 'Quiet, focused, classic. One thing done perfectly.', coverCharge: 'None', hours: '18:00–02:00', translatedReview: '"The old fashioned here is the benchmark for all of Tokyo." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop', lat: 35.6575, lng: 139.7005, tags: ['cocktail', 'old-fashioned', 'classic'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd23', name: 'Mori Bar Gran', nameJa: 'モリバーグラン', type: 'Terrace Martinis', category: 'drink', neighbourhood: 'Ginza', barType: 'Cocktail Bar', authenticityScore: 8.6, tabelogScore: 3.52, googleScore: 4.4, redditMentions: 35, blogMentions: 30, price: 3, distance: '3 min walk', vibe: 'intimate', whyThisPlace: 'Martini on the terrace. ¥1000 cover includes consom\é.', insiderTip: 'Martini on the terrace. ¥1000 cover includes consom\é — worth it.', vibeDescription: 'Elegant Ginza terrace. Perfect for a special-occasion martini.', coverCharge: '¥1,000 (incl. consom\é)', hours: '17:00–00:00', translatedReview: '"Martini on the Ginza terrace at sunset. Perfect." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&h=400&fit=crop', lat: 35.671, lng: 139.7645, tags: ['cocktail', 'martini', 'terrace'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd24', name: 'Tokyo Confidential', nameJa: 'トーキョーコンフィデンシャル', type: 'Hidden Bar', category: 'drink', neighbourhood: 'Roppongi', barType: 'Speakeasy', authenticityScore: 8.8, tabelogScore: 3.52, googleScore: 4.4, redditMentions: 45, blogMentions: 40, price: 3, distance: '5 min walk', vibe: 'intimate', whyThisPlace: 'Holly Graham\'s creative speakeasy. World\'s 50 Best Bars.', insiderTip: 'Holly Graham\'s creative speakeasy. Look for the unmarked door.', vibeDescription: 'Dimly lit, creative, playful. Every cocktail tells a story.', coverCharge: 'None', hours: '18:00–02:00', translatedReview: '"Finding it felt like discovering a secret. Cocktails justified the search." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=600&h=400&fit=crop', lat: 35.656, lng: 139.735, tags: ['speakeasy', 'worlds-50-best', 'creative'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd25', name: 'Bar Trench', nameJa: 'バー トレンチ', type: 'Unmarked Basement', category: 'drink', neighbourhood: 'Ebisu', barType: 'Speakeasy', authenticityScore: 8.5, tabelogScore: 3.45, googleScore: 4.3, redditMentions: 55, blogMentions: 40, price: 2, distance: '4 min walk', vibe: 'intimate', whyThisPlace: 'Masquerades as nothing, delivers everything. Absinthe-forward.', insiderTip: 'Ask for an absinthe cocktail even if you think you don\'t like it.', vibeDescription: 'Dark wood, candlelight, Victorian-meets-Tokyo.', coverCharge: 'None', hours: '18:00–02:00', translatedReview: '"Finding Bar Trench felt like discovering a secret." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&h=400&fit=crop', lat: 35.648, lng: 139.711, tags: ['speakeasy', 'absinthe', 'ebisu'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd26', name: 'Bar K-Julep', nameJa: 'バー Kジュレップ', type: 'Gentlemen\'s Club', category: 'drink', neighbourhood: 'Roppongi', barType: 'Speakeasy', authenticityScore: 8.2, tabelogScore: 3.4, googleScore: 4.2, redditMentions: 28, blogMentions: 22, price: 3, distance: '6 min walk', vibe: 'intimate', whyThisPlace: 'Discreet facade, leather chairs, bespoke cocktails.', insiderTip: 'Discreet facade. Leather chairs, bespoke cocktails. Smart casual.', vibeDescription: 'Classic gentlemen\'s club. Leather, wood, whisky.', coverCharge: 'None', hours: '18:00–02:00', translatedReview: '"Bespoke cocktails in a gentlemen\'s club setting. Impeccable." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=600&h=400&fit=crop', lat: 35.6588, lng: 139.7295, tags: ['speakeasy', 'bespoke', 'classic'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd27', name: 'Gen Yamamoto', nameJa: 'ゲン ヤマモト', type: '8-seat Juice Bar', category: 'drink', neighbourhood: 'Roppongi', barType: 'Speakeasy', authenticityScore: 9.3, tabelogScore: 3.65, googleScore: 4.6, redditMentions: 51, blogMentions: 63, price: 3, distance: '6 min walk', vibe: 'intimate', whyThisPlace: 'Seasonal fruit cocktails, no-alcohol option. 8 seats, pure trust.', insiderTip: 'Book the 7-course cocktail omakase. Each drink uses one seasonal ingredient.', vibeDescription: 'Minimalist 8-seat counter. Hushed. Each cocktail is a ceremony.', coverCharge: 'None — omakase set price', hours: '15:00–22:00', translatedReview: '"Each cocktail was a different season distilled into a glass." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&h=400&fit=crop', lat: 35.656, lng: 139.7348, tags: ['speakeasy', 'seasonal', 'omakase'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd28', name: 'Eureka!', nameJa: 'ユリイカ', type: 'Sake Speakeasy', category: 'drink', neighbourhood: 'Roppongi', barType: 'Speakeasy', authenticityScore: 8.5, tabelogScore: 3.55, googleScore: 4.3, redditMentions: 35, blogMentions: 30, price: 3, distance: '5 min walk', vibe: 'intimate', whyThisPlace: 'Sake + food pairings by Marie Chiba. Michelin Guide featured.', insiderTip: 'Each sake pairing is perfectly matched. Let the sommelier guide you.', vibeDescription: 'Hidden entrance, intimate counter. Michelin Guide featured.', coverCharge: 'None', hours: '18:00–00:00', translatedReview: '"Sake pairings that elevated my understanding of the drink." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1567003672198-6b597704a266?w=600&h=400&fit=crop', lat: 35.657, lng: 139.728, tags: ['speakeasy', 'sake', 'michelin-guide'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd29', name: 'Zoetrope', nameJa: 'ゾエトロープ', type: 'Japanese Whisky Library', category: 'drink', neighbourhood: 'Shinjuku', barType: 'Whisky Bar', authenticityScore: 9.0, tabelogScore: 3.55, googleScore: 4.4, redditMentions: 78, blogMentions: 51, price: 3, distance: '7 min walk', vibe: 'intimate', whyThisPlace: '300+ Japanese whiskies, cinema-themed. A whisky museum you can drink at.', insiderTip: 'Ask for a Chichibu or rare Karuizawa pour. Cash only.', vibeDescription: 'Small, cinema-themed, floor-to-ceiling amber bottles.', coverCharge: '¥700 (incl. snack)', hours: '16:00–00:00', translatedReview: '"A Japanese whisky museum you can drink at. Staggering collection." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=600&h=400&fit=crop', lat: 35.693, lng: 139.701, tags: ['whisky', 'japanese-whisky', 'rare-bottles'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd30', name: 'Bar Kage', nameJa: 'バー カゲ', type: 'Whisky Specialist', category: 'drink', neighbourhood: 'Ginza', barType: 'Whisky Bar', authenticityScore: 8.5, tabelogScore: 3.48, googleScore: 4.3, redditMentions: 38, blogMentions: 30, price: 2, distance: '4 min walk', vibe: 'intimate', whyThisPlace: 'Recommended in Whisky Rising book. Serious collection.', insiderTip: 'Ask for the recommended pour of the day.', vibeDescription: 'Quiet, serious, knowledgeable. Whisky lover\'s sanctuary.', coverCharge: 'None', hours: '18:00–02:00', translatedReview: '"The collection here is staggering. Things I\'d only read about." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=400&fit=crop', lat: 35.6698, lng: 139.762, tags: ['whisky', 'specialist', 'ginza'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd31', name: 'Black Sea', nameJa: 'ブラックシー', type: 'Hidden Whisky Gem', category: 'drink', neighbourhood: 'Ginza', barType: 'Whisky Bar', authenticityScore: 8.2, tabelogScore: 3.42, googleScore: 4.2, redditMentions: 30, blogMentions: 22, price: 2, distance: '5 min walk', vibe: 'intimate', whyThisPlace: 'Near Shimbashi, serious collection. Hidden gem for enthusiasts.', insiderTip: 'Ask about Japanese craft distilleries.', vibeDescription: 'Dimly lit, wood-panelled. Serious whisky appreciation.', coverCharge: 'None', hours: '18:00–01:00', translatedReview: '"Hidden gem near Shimbashi. Serious whisky collection." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=600&h=400&fit=crop', lat: 35.6668, lng: 139.7585, tags: ['whisky', 'hidden-gem', 'shimbashi'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd32', name: 'J\'s Bar', nameJa: 'ジェイズバー', type: 'Daytime Whisky', category: 'drink', neighbourhood: 'Ikebukuro', barType: 'Whisky Bar', authenticityScore: 7.5, tabelogScore: 3.3, googleScore: 4.0, redditMentions: 25, blogMentions: 18, price: 2, distance: '4 min walk', vibe: 'casual', whyThisPlace: 'Only whisky bar open from 1pm daily. Perfect for afternoon drams.', insiderTip: 'Only whisky bar open from 1pm. Perfect for a pre-dinner pour.', vibeDescription: 'Casual, daytime-friendly. Rare afternoon whisky spot.', coverCharge: 'None', hours: '13:00–22:00', translatedReview: '"Afternoon whisky in Ikebukuro. A rare find." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=400&fit=crop', lat: 35.7295, lng: 139.7108, tags: ['whisky', 'daytime', 'ikebukuro'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd33', name: 'Baird Beer Taproom', nameJa: 'ベアードビール', type: 'Craft Brewery', category: 'drink', neighbourhood: 'Nakameguro', barType: 'Craft Beer', authenticityScore: 8.2, tabelogScore: 3.48, googleScore: 4.3, redditMentions: 48, blogMentions: 33, price: 2, distance: '5 min walk', vibe: 'lively', whyThisPlace: 'New Haven pizza + craft beer by the Nakameguro canal.', insiderTip: 'Testarossa Amber Ale is the classic. Canal-view seats at sunset.', vibeDescription: 'Casual, outdoor seating by the canal.', coverCharge: 'None', hours: '17:00–23:00', translatedReview: '"Craft beer by Nakameguro canal. Paradise." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&h=400&fit=crop', lat: 35.6425, lng: 139.6995, tags: ['craft-beer', 'canal', 'nakameguro'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd34', name: 'Popeye', nameJa: 'ポパイ', type: '70 Taps', category: 'drink', neighbourhood: 'Asakusa', barType: 'Craft Beer', authenticityScore: 8.5, tabelogScore: 3.55, googleScore: 4.4, redditMentions: 55, blogMentions: 40, price: 2, distance: '6 min walk', vibe: 'lively', whyThisPlace: '70 rotating Japanese craft taps. Ultimate craft beer bar.', insiderTip: '70 rotating taps. Ask for a flight to sample widely.', vibeDescription: 'Large, friendly, always busy. Pilgrimage destination.', coverCharge: 'None', hours: '17:00–23:30', translatedReview: '"70 taps of Japanese craft beer. A pilgrimage." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=600&h=400&fit=crop', lat: 35.696, lng: 139.795, tags: ['craft-beer', '70-taps', 'japanese-craft'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd35', name: 'Coasters', nameJa: 'コースターズ', type: 'Smash Burgers + Beer', category: 'drink', neighbourhood: 'Shimokitazawa', barType: 'Craft Beer', authenticityScore: 7.8, tabelogScore: 3.4, googleScore: 4.2, redditMentions: 35, blogMentions: 25, price: 2, distance: '3 min walk', vibe: 'lively', whyThisPlace: 'Craft beers + best smash burgers in Shimokitazawa.', insiderTip: 'Double cheeseburger + craft beer is the move.', vibeDescription: 'Casual American-style bar. Great food, great beer.', coverCharge: 'None', hours: '16:00–23:00', translatedReview: '"Smash burgers + craft beer in Shimokitazawa. Perfect." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&h=400&fit=crop', lat: 35.6615, lng: 139.6678, tags: ['craft-beer', 'burgers', 'shimokitazawa'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd36', name: 'Good Beer Faucets', nameJa: 'グッドビアフォーセッツ', type: 'Craft Beer Bar', category: 'drink', neighbourhood: 'Shibuya', barType: 'Craft Beer', authenticityScore: 8.0, tabelogScore: 3.42, googleScore: 4.2, redditMentions: 42, blogMentions: 28, price: 2, distance: '5 min walk', vibe: 'casual', whyThisPlace: '20 rotating taps, standing room. Shibuya\'s craft beer hub.', insiderTip: '20 rotating taps. Standing room gives great social energy.', vibeDescription: 'Modern standing bar. Beer nerds and casual drinkers mixing.', coverCharge: 'None', hours: '15:00–23:00', translatedReview: '"Shibuya\'s best craft beer selection. Always something new." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=600&h=400&fit=crop', lat: 35.659, lng: 139.6985, tags: ['craft-beer', 'standing', 'shibuya'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd37', name: 'Bar Martha', nameJa: 'バー マーサ', type: 'Vinyl + Cocktails', category: 'drink', neighbourhood: 'Shibuya', barType: 'Listening Bar', authenticityScore: 8.5, tabelogScore: 3.48, googleScore: 4.3, redditMentions: 42, blogMentions: 35, price: 2, distance: '6 min walk', vibe: 'intimate', whyThisPlace: 'Top recommendation for listening bars. Vinyl and cocktails.', insiderTip: 'Let the bartender pick the music. Trust the vinyl.', vibeDescription: 'Warm, dim, vinyl-filled. Music wraps around you.', coverCharge: '¥500', hours: '19:00–03:00', translatedReview: '"Music filled the room and my soul. Temple of sound." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop', lat: 35.6585, lng: 139.699, tags: ['listening-bar', 'vinyl', 'cocktails'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd38', name: 'Ginza Music Bar', nameJa: '銀座ミュージックバー', type: 'DJ-owned Vinyl Bar', category: 'drink', neighbourhood: 'Ginza', barType: 'Listening Bar', authenticityScore: 8.8, tabelogScore: 3.55, googleScore: 4.4, redditMentions: 38, blogMentions: 42, price: 3, distance: '4 min walk', vibe: 'intimate', whyThisPlace: '3000 vinyl records, Tannoy speakers. DJ-curated listening.', insiderTip: '3000 records. Ask the DJ for a mood-based recommendation.', vibeDescription: 'Refined, warm, music-forward. Tannoy speakers fill the room.', coverCharge: '¥1,000', hours: '18:00–02:00', translatedReview: '"3000 records and Tannoy speakers. A temple of sound." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1545128485-c400e7702b3b?w=600&h=400&fit=crop', lat: 35.6715, lng: 139.765, tags: ['listening-bar', 'vinyl', 'dj'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd39', name: 'Meikyoku Kissa Lion', nameJa: '名曲喫茶ライオン', type: 'Classical Music OG', category: 'drink', neighbourhood: 'Shinjuku', barType: 'Listening Bar', authenticityScore: 9.1, tabelogScore: 3.6, googleScore: 4.5, redditMentions: 55, blogMentions: 50, price: 1, distance: '5 min walk', vibe: 'intimate', whyThisPlace: 'No talking allowed. Classical only. Since 1926.', insiderTip: 'No talking. No phones. Sit in the pews and listen. Since 1926.', vibeDescription: 'Gothic interior. Church pews. Absolute silence.', coverCharge: '¥700 (incl. one drink)', hours: '11:00–22:00', translatedReview: '"Sat in the pews and listened to Beethoven. Tears running down my face." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop', lat: 35.6935, lng: 139.6985, tags: ['listening-bar', 'classical', 'since-1926'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd40', name: 'Little Soul Cafe', nameJa: 'リトルソウルカフェ', type: 'Rum + Vinyl', category: 'drink', neighbourhood: 'Shimokitazawa', barType: 'Listening Bar', authenticityScore: 8.4, tabelogScore: 3.38, googleScore: 4.3, redditMentions: 36, blogMentions: 28, price: 2, distance: '3 min walk', vibe: 'casual', whyThisPlace: 'Rum cocktails to a vinyl soundtrack. Soul, funk, and R&B.', insiderTip: 'Rum cocktails to vinyl. Request a track if the DJ\'s generous.', vibeDescription: 'Warm, dim, inviting. Sound fills without overpowering.', coverCharge: '¥500', hours: '18:00–01:00', translatedReview: '"Aretha on vinyl through room-filling speakers. Felt it in my chest." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1545128485-c400e7702b3b?w=600&h=400&fit=crop', lat: 35.6612, lng: 139.668, tags: ['listening-bar', 'rum', 'soul'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd41', name: 'Violon', nameJa: 'ヴィオロン', type: 'Reverent Vinyl Bar', category: 'drink', neighbourhood: 'Kanda', barType: 'Listening Bar', authenticityScore: 8.6, tabelogScore: 3.5, googleScore: 4.4, redditMentions: 30, blogMentions: 25, price: 2, distance: '4 min walk', vibe: 'intimate', whyThisPlace: 'Customers tiptoe to avoid creaking floors. Pure reverence.', insiderTip: 'Customers tiptoe to avoid creaking floors. Beautiful.', vibeDescription: 'Dark, silent except for music. Floor-to-ceiling records.', coverCharge: '¥500', hours: '18:00–23:00', translatedReview: '"Customers tiptoe. Music fills the silence. Sacred space." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop', lat: 35.695, lng: 139.771, tags: ['listening-bar', 'classical', 'reverent'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd42', name: 'Champion', nameJa: 'チャンピオン', type: 'Mama-san Snack Bar', category: 'drink', neighbourhood: 'Shinjuku', barType: 'Snack Bar', authenticityScore: 7.8, tabelogScore: 3.05, googleScore: 4.0, redditMentions: 44, blogMentions: 25, price: 2, distance: '5 min walk', vibe: 'lively', whyThisPlace: 'Most foreigner-friendly Golden Gai spot.', insiderTip: 'Most foreigner-friendly Golden Gai spot. Buy the mama-san a drink.', vibeDescription: 'Smoke-stained walls, photos floor to ceiling.', coverCharge: '¥500', hours: '20:00–04:00', translatedReview: '"Mama-san made me feel like family. Genuine warmth." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&h=400&fit=crop', lat: 35.6939, lng: 139.703, tags: ['snack-bar', 'golden-gai', 'mama-san'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd43', name: 'Bar TIGHT', nameJa: 'バー タイト', type: '5-seat Time Warp', category: 'drink', neighbourhood: 'Shibuya', barType: 'Snack Bar', authenticityScore: 7.5, tabelogScore: 3.1, googleScore: 4.0, redditMentions: 48, blogMentions: 22, price: 2, distance: '4 min walk', vibe: 'intimate', whyThisPlace: '1950s decor, 5 seats. Time machine in Nonbei Yokocho.', insiderTip: '5 seats — if full, come back in 20 minutes.', vibeDescription: 'Tiny, warm, 1950s in every detail.', coverCharge: '¥500', hours: '19:00–02:00', translatedReview: '"5 seats, shoulder to shoulder. Everyone became friends." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&h=400&fit=crop', lat: 35.6602, lng: 139.7012, tags: ['snack-bar', 'nonbei-yokocho', 'tiny'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd44', name: 'Albatross', nameJa: 'アルバトロス', type: 'Chandelier Snack Bar', category: 'drink', neighbourhood: 'Shinjuku', barType: 'Snack Bar', authenticityScore: 7.6, tabelogScore: 3.15, googleScore: 4.1, redditMentions: 62, blogMentions: 38, price: 2, distance: '5 min walk', vibe: 'lively', whyThisPlace: '3 floors of chandeliers in Golden Gai.', insiderTip: 'Climb to the third floor. Try the absinthe.', vibeDescription: 'Opulent chandeliers in a space barely wider than a hallway.', coverCharge: '¥700', hours: '18:00–04:00', translatedReview: '"Chandeliers in Golden Gai. Drinking inside a jewellery box." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&h=400&fit=crop', lat: 35.694, lng: 139.7031, tags: ['snack-bar', 'chandeliers', 'golden-gai'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd45', name: 'Virtù', nameJa: 'ヴァーチュ', type: 'Four Seasons 39F', category: 'drink', neighbourhood: 'Ginza', barType: 'Hotel Bar', authenticityScore: 9.0, tabelogScore: 3.55, googleScore: 4.5, redditMentions: 42, blogMentions: 45, price: 4, distance: '5 min walk', vibe: 'intimate', whyThisPlace: 'French-Japanese cocktails, panoramic view. Asia\'s 50 Best #18.', insiderTip: 'Request a window seat for the panoramic view.', vibeDescription: 'Sky-high sophistication. Panoramic Tokyo views.', coverCharge: 'None', hours: '17:00–01:00', translatedReview: '"View from 39F with a cocktail. Pure Tokyo glamour." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=400&fit=crop', lat: 35.685, lng: 139.763, tags: ['hotel-bar', 'panoramic', 'asias-50-best'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd46', name: 'Punch Room Tokyo', nameJa: 'パンチルーム東京', type: 'EDITION Hotel', category: 'drink', neighbourhood: 'Ginza', barType: 'Hotel Bar', authenticityScore: 8.6, tabelogScore: 3.5, googleScore: 4.4, redditMentions: 35, blogMentions: 38, price: 3, distance: '4 min walk', vibe: 'intimate', whyThisPlace: '19th-century London club vibes. Asia\'s 50 Best.', insiderTip: 'House punch is the signature. London club vibes.', vibeDescription: 'Dark, clubby, intimate. Leather and mahogany.', coverCharge: 'None', hours: '17:00–01:00', translatedReview: '"19th-century London club vibes in Ginza. Impeccable." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop', lat: 35.6718, lng: 139.7648, tags: ['hotel-bar', 'punch', 'london-club'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd47', name: 'Bar Libre', nameJa: 'バー リブレ', type: 'Park Hyatt 52F', category: 'drink', neighbourhood: 'Shinjuku', barType: 'Hotel Bar', authenticityScore: 8.3, tabelogScore: 3.42, googleScore: 4.3, redditMentions: 95, blogMentions: 72, price: 3, distance: '3 min walk', vibe: 'intimate', whyThisPlace: 'Lost in Translation vibes, 52F. Most cinematic bar in Tokyo.', insiderTip: 'Pay the cover after 8pm — live jazz is worth it.', vibeDescription: 'Cinematic, glamorous, views for miles.', coverCharge: '¥2,200 (after 20:00)', hours: '17:00–00:00', translatedReview: '"Midnight at 52F, ten million lights, drinking a Martini." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=400&fit=crop', lat: 35.6886, lng: 139.6923, tags: ['hotel-bar', 'views', 'lost-in-translation'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd48', name: 'Bvlgari Bar', nameJa: 'ブルガリバー', type: 'Luxury Hotel Bar', category: 'drink', neighbourhood: 'Ginza', barType: 'Hotel Bar', authenticityScore: 8.8, tabelogScore: 3.48, googleScore: 4.4, redditMentions: 28, blogMentions: 32, price: 4, distance: '5 min walk', vibe: 'intimate', whyThisPlace: 'Italian luxury meets Japanese precision. Michelin Guide featured.', insiderTip: 'The Negroni is perfect here. Italian luxury, Japanese precision.', vibeDescription: 'Opulent, Italian design, impeccable service.', coverCharge: 'None', hours: '17:00–01:00', translatedReview: '"Italian luxury in Ginza. Impeccable Negroni." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop', lat: 35.6812, lng: 139.7668, tags: ['hotel-bar', 'luxury', 'italian'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd49', name: 'Highball Bar 1923', nameJa: 'ハイボールバー1923', type: 'Suntory Heritage', category: 'drink', neighbourhood: 'Ginza', barType: 'Highball Bar', authenticityScore: 8.2, tabelogScore: 3.45, googleScore: 4.3, redditMentions: 35, blogMentions: 25, price: 2, distance: '3 min walk', vibe: 'casual', whyThisPlace: 'Dedicated Suntory highball bar. Perfect ratio.', insiderTip: 'Dedicated Suntory highball. Perfect ratio is their obsession.', vibeDescription: 'Clean, focused, Suntory-branded. Highball perfection.', coverCharge: 'None', hours: '16:00–23:00', translatedReview: '"Perfect highball: precise carbonation, cold glass, right ratio." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop', lat: 35.6705, lng: 139.7635, tags: ['highball', 'suntory', 'heritage'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd50', name: 'Tori Daisuki', nameJa: '鳥大好き', type: 'Highball + Chicken', category: 'drink', neighbourhood: 'Shinjuku', barType: 'Highball Bar', authenticityScore: 7.5, tabelogScore: 3.2, googleScore: 4.0, redditMentions: 42, blogMentions: 20, price: 1, distance: '4 min walk', vibe: 'rowdy', whyThisPlace: '¥200 mega-highball, cheap yakitori. Best deal in Shinjuku.', insiderTip: '¥200 mega-highball. Cheap yakitori. Value is insane.', vibeDescription: 'Rowdy, cheap, joyful. Salarymen at their most relaxed.', coverCharge: 'None', hours: '16:00–00:00', translatedReview: '"¥200 mega-highball and ¥100 yakitori. Budget paradise." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop', lat: 35.6925, lng: 139.697, tags: ['highball', 'cheap', 'yakitori'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd51', name: 'Tachinomi Fuji', nameJa: '立飲み富士', type: 'Showa Highball', category: 'drink', neighbourhood: 'Shinjuku', barType: 'Highball Bar', authenticityScore: 7.3, tabelogScore: 3.15, googleScore: 3.9, redditMentions: 28, blogMentions: 15, price: 1, distance: '3 min walk', vibe: 'casual', whyThisPlace: 'Retro atmosphere, cheap strong highballs. Showa nostalgia.', insiderTip: 'Retro atmosphere. Cheap, strong highballs. Cash only.', vibeDescription: 'Faded charm, standing only. Highballs and nostalgia.', coverCharge: 'None', hours: '16:00–22:00', translatedReview: '"Cheap strong highballs in a Showa time capsule." — Reddit user', photoUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop', lat: 35.6932, lng: 139.6978, tags: ['highball', 'showa', 'standing'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd52', name: 'Kayaba Coffee', nameJa: 'カヤバ珈琲', type: 'Heritage Kissaten', category: 'drink', neighbourhood: 'Asakusa', barType: 'Kissaten', authenticityScore: 8.5, tabelogScore: 3.6, googleScore: 4.4, redditMentions: 55, blogMentions: 42, price: 1, distance: '5 min walk', vibe: 'casual', whyThisPlace: '1916 building, famous egg sandwich. Heritage perfection.', insiderTip: '1916 building. Famous egg sandwich is the must-order.', vibeDescription: 'Old wooden building, natural light, Taisho-era charm.', coverCharge: 'None', hours: '08:00–18:00', translatedReview: '"Coffee prepared with a reverence I\'ve never seen elsewhere." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop', lat: 35.718, lng: 139.769, tags: ['kissaten', 'heritage', 'egg-sandwich'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd53', name: 'Chatei Hatou', nameJa: '茶亭羽當', type: 'Coffee Perfection', category: 'drink', neighbourhood: 'Shibuya', barType: 'Kissaten', authenticityScore: 9.0, tabelogScore: 3.72, googleScore: 4.5, redditMentions: 62, blogMentions: 48, price: 2, distance: '6 min walk', vibe: 'intimate', whyThisPlace: 'Aged beans, hand-poured, pure ritual. Finest kissaten in Tokyo.', insiderTip: 'Order house blend. Sit at counter. No laptop. No phone. Just coffee.', vibeDescription: 'Hushed, amber-lit, antique wood. Untouched by time.', coverCharge: 'None', hours: '11:00–22:00', translatedReview: '"Most perfectly extracted coffee I have ever tasted." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop', lat: 35.6565, lng: 139.7015, tags: ['kissaten', 'coffee', 'showa'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd54', name: 'Coffee Bar Cielo', nameJa: 'コーヒーバー シエロ', type: 'Coffee Cocktails', category: 'drink', neighbourhood: 'Shimokitazawa', barType: 'Kissaten', authenticityScore: 7.8, tabelogScore: 3.38, googleScore: 4.2, redditMentions: 30, blogMentions: 20, price: 1, distance: '4 min walk', vibe: 'casual', whyThisPlace: 'Coffee + cocktail hybrid. Chill Shimokitazawa vibes.', insiderTip: 'Try the espresso martini for the best of both worlds.', vibeDescription: 'Relaxed, creative, Shimokitazawa cool.', coverCharge: 'None', hours: '12:00–22:00', translatedReview: '"Coffee cocktail hybrid. Perfect for any time of day." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop', lat: 35.6618, lng: 139.6676, tags: ['kissaten', 'coffee-cocktails', 'shimokitazawa'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd55', name: 'Café de l\'Ambre', nameJa: 'カフェ・ド・ランブル', type: 'Since 1948', category: 'drink', neighbourhood: 'Ginza', barType: 'Kissaten', authenticityScore: 9.3, tabelogScore: 3.8, googleScore: 4.5, redditMentions: 70, blogMentions: 55, price: 2, distance: '4 min walk', vibe: 'intimate', whyThisPlace: 'Single-origin pioneer since 1948. Aged coffee like nothing else.', insiderTip: 'Order the aged 10-year blend if available. Counter seat is essential.', vibeDescription: 'Old beyond imagining. Absolute mastery of craft.', coverCharge: 'None', hours: '12:00–21:00', translatedReview: '"Coffee from beans aged 15 years. Dark, smooth, unforgettable." — Blog reviewer', photoUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop', lat: 35.6712, lng: 139.7665, tags: ['kissaten', 'aged-coffee', 'since-1948'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd56', name: 'Ahiru Sha', nameJa: 'アヒル舎', type: 'Vinyl + Wine', category: 'drink', neighbourhood: 'Shinjuku', barType: 'Wine Bar', authenticityScore: 8.2, tabelogScore: 3.45, googleScore: 4.3, redditMentions: 32, blogMentions: 25, price: 2, distance: '6 min walk', vibe: 'intimate', whyThisPlace: 'Vintage records + cool natural wines. Perfect evening.', insiderTip: 'Vintage records + natural wines. Let the owner pick for you.', vibeDescription: 'Warm, dim, vinyl playing. Wine and music in harmony.', coverCharge: 'None', hours: '18:00–01:00', translatedReview: '"Natural wine and vinyl records. An evening I\'ll remember." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop', lat: 35.694, lng: 139.6955, tags: ['wine-bar', 'natural-wine', 'vinyl'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd57', name: 'Le Petit Marche', nameJa: 'ル・プティ・マルシェ', type: 'French Wine Bar', category: 'drink', neighbourhood: 'Ebisu', barType: 'Wine Bar', authenticityScore: 8.0, tabelogScore: 3.42, googleScore: 4.2, redditMentions: 28, blogMentions: 22, price: 2, distance: '4 min walk', vibe: 'casual', whyThisPlace: 'Tiny French-style natural wine bar. No pretension.', insiderTip: 'Tiny French-style. Ask for the wine of the day.', vibeDescription: 'Small, friendly, French atmosphere. Wine flows freely.', coverCharge: 'None', hours: '17:00–00:00', translatedReview: '"French natural wine in Ebisu. No pretension, just joy." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop', lat: 35.6475, lng: 139.7108, tags: ['wine-bar', 'french', 'natural-wine'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd58', name: 'Wine Stand Waltz', nameJa: 'ワインスタンド ワルツ', type: 'Standing Wine Bar', category: 'drink', neighbourhood: 'Shibuya', barType: 'Wine Bar', authenticityScore: 7.8, tabelogScore: 3.38, googleScore: 4.1, redditMentions: 35, blogMentions: 20, price: 2, distance: '5 min walk', vibe: 'lively', whyThisPlace: 'Rotating glass pours, no seats, no pretension.', insiderTip: 'Rotating glass pours. No seats. No pretension. Just great wine.', vibeDescription: 'Standing room only. Social, fun, unpretentious.', coverCharge: 'None', hours: '17:00–23:00', translatedReview: '"Standing wine in Shibuya. Social and unpretentious." — Google reviewer', photoUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop', lat: 35.658, lng: 139.6995, tags: ['wine-bar', 'standing', 'no-pretension'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd59', name: 'Sake Bar Decibel', nameJa: '酒バー デシベル', type: 'Underground Sake', category: 'drink', neighbourhood: 'Shinjuku', barType: 'Sake Bar', authenticityScore: 8.3, tabelogScore: 3.45, googleScore: 4.3, redditMentions: 45, blogMentions: 32, price: 2, distance: '5 min walk', vibe: 'intimate', whyThisPlace: 'Graffiti walls, 200+ sakes in a basement.', insiderTip: '200+ sakes. Graffiti walls. Ask for a flight.', vibeDescription: 'Underground, graffiti-covered, counter seating.', coverCharge: 'None', hours: '18:00–02:00', translatedReview: '"Each sake told a different story. Guidance is worth the visit." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1567003672198-6b597704a266?w=600&h=400&fit=crop', lat: 35.692, lng: 139.696, tags: ['sake-bar', 'underground', 'graffiti'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd60', name: 'Kurand Sake Market', nameJa: 'KURAND SAKE MARKET', type: 'All-you-can-drink Sake', category: 'drink', neighbourhood: 'Ikebukuro', barType: 'Sake Bar', authenticityScore: 7.5, tabelogScore: 3.25, googleScore: 4.1, redditMentions: 55, blogMentions: 30, price: 2, distance: '3 min walk', vibe: 'lively', whyThisPlace: '¥3000 for 100+ sakes, self-serve.', insiderTip: '¥3000 for 100+ sakes. Pace yourself — they\'re all different.', vibeDescription: 'Open, social, self-serve. Sake education through drinking.', coverCharge: '¥3,000 (all-you-can-drink)', hours: '12:00–22:00', translatedReview: '"100+ sakes self-serve. Sake education through drinking." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1567003672198-6b597704a266?w=600&h=400&fit=crop', lat: 35.7298, lng: 139.7112, tags: ['sake-bar', 'all-you-can-drink', 'self-serve'], michelinStatus: 'none', touristTrapFlag: false },
  { id: 'd61', name: 'GEM by Moto', nameJa: 'ジェム バイ モト', type: 'Premium Sake Pairing', category: 'drink', neighbourhood: 'Roppongi', barType: 'Sake Bar', authenticityScore: 8.8, tabelogScore: 3.6, googleScore: 4.4, redditMentions: 38, blogMentions: 35, price: 3, distance: '5 min walk', vibe: 'intimate', whyThisPlace: 'Flight pairings, sake sommelier guided. Premium education.', insiderTip: 'Flight pairings guided by sake sommelier. Each sake matched to food.', vibeDescription: 'Refined, intimate, educational. Sake elevated to fine dining.', coverCharge: 'None', hours: '17:00–23:00', translatedReview: '"Sake sommelier guided me through flavours I didn\'t know existed." — Tabelog reviewer', photoUrl: 'https://images.unsplash.com/photo-1567003672198-6b597704a266?w=600&h=400&fit=crop', lat: 35.6585, lng: 139.7285, tags: ['sake-bar', 'sommelier', 'pairings'], michelinStatus: 'none', touristTrapFlag: false }
];


/* ===== FILTER OPTIONS ===== */
const EAT_TYPES = ['All', 'Sushi', 'Ramen', 'Yakitori', 'Tempura', 'Tonkatsu', 'Udon/Soba', 'Wagyu', 'Curry', 'Kaiseki', 'Izakaya Food', 'Street Food', 'Dessert', 'Breakfast', 'Fusion'];
const DRINK_TYPES = ['All', 'Izakaya', 'Tachinomi', 'Yokocho', 'Cocktail Bar', 'Speakeasy', 'Whisky Bar', 'Craft Beer', 'Listening Bar', 'Snack Bar', 'Hotel Bar', 'Highball Bar', 'Kissaten', 'Wine Bar', 'Sake Bar'];
const VIBES = ['Casual', 'Lively', 'Intimate', 'Rowdy'];
const BUDGETS = ['¥', '¥¥', '¥¥¥', '¥¥¥¥'];

/* ===== APP STATE ===== */
var state = {
  screen: 'welcome',
  mode: 'eat',
  selectedTypes: ['All'],
  selectedVibes: [],
  selectedBudgets: [],
  neighbourhood: 'All',
  filteredVenues: [],
  currentIndex: 0,
  shortlist: [],
  theme: 'dark',
  hasStack: false
};

/* ===== ROUTING ===== */
function navigate(screen) {
  state.screen = screen;
  window.location.hash = screen;
  renderScreen();
}

function handleHash() {
  var hash = window.location.hash.replace('#', '') || 'welcome';
  var valid = ['welcome', 'discover', 'swipe', 'shortlist'];
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

  var bottomNav = document.getElementById('bottom-nav');
  if (bottomNav) {
    if (state.screen === 'welcome') {
      bottomNav.classList.remove('visible');
    } else {
      bottomNav.classList.add('visible');
    }
  }
  updateBottomNav();
}

/* ===== BOTTOM NAV ===== */
function updateBottomNav() {
  var items = document.querySelectorAll('.bottom-nav-item');
  items.forEach(function(item) {
    var nav = item.getAttribute('data-nav');
    item.classList.remove('active', 'disabled');
    if (nav === state.screen) {
      item.classList.add('active');
    }
    if (nav === 'swipe' && !state.hasStack) {
      item.classList.add('disabled');
    }
  });

  var badge = document.getElementById('nav-shortlist-badge');
  if (badge) {
    if (state.shortlist.length > 0) {
      badge.textContent = state.shortlist.length;
      badge.classList.add('visible');
    } else {
      badge.textContent = '';
      badge.classList.remove('visible');
    }
  }

  var swipeBadge = document.getElementById('shortlist-badge');
  if (swipeBadge) {
    swipeBadge.textContent = state.shortlist.length > 0 ? state.shortlist.length : '';
  }
}

function resumeSwipe() {
  if (!state.hasStack) return;
  navigate('swipe');
}

/* ===== TOAST ===== */
function showToast(message) {
  var toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(function() {
    toast.classList.remove('show');
  }, 2000);
}

/* ===== THEME ===== */
function initTheme() {
  state.theme = 'dark';
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

/* ===== NEIGHBOURHOOD SELECT — Dynamic ===== */
function buildNeighbourhoodDropdown() {
  var select = document.getElementById('neighbourhood-select');
  if (!select) return;

  var seen = {};
  var neighbourhoods = [];
  VENUES.forEach(function(v) {
    if (!seen[v.neighbourhood]) {
      seen[v.neighbourhood] = true;
      neighbourhoods.push(v.neighbourhood);
    }
  });
  neighbourhoods.sort();

  select.innerHTML = '<option value="All">All Neighbourhoods</option>';
  neighbourhoods.forEach(function(n) {
    var opt = document.createElement('option');
    opt.value = n;
    opt.textContent = n;
    select.appendChild(opt);
  });

  select.value = state.neighbourhood;
}

/* ===== DISCOVER SCREEN ===== */
function renderDiscover() {
  buildNeighbourhoodDropdown();
  var select = document.getElementById('neighbourhood-select');
  if (select) select.value = state.neighbourhood;

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
  if (indicator) indicator.classList.toggle('drink', state.mode === 'drink');
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
  var select = document.getElementById('neighbourhood-select');
  if (select) state.neighbourhood = select.value;

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

  for (var i = filtered.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = filtered[i];
    filtered[i] = filtered[j];
    filtered[j] = temp;
  }

  state.filteredVenues = filtered;
  state.currentIndex = 0;
  state.shortlist = [];
  state.hasStack = true;
  navigate('swipe');
}

/* ===== SWIPE SCREEN ===== */
function renderSwipe() {
  var container = document.getElementById('card-stack');
  var counter = document.getElementById('swipe-counter');
  if (!container) return;
  container.innerHTML = '';

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
    updateBottomNav();
    return;
  }

  if (counter) counter.textContent = (current + 1) + ' of ' + total;

  var cardsToShow = Math.min(3, total - current);
  for (var i = cardsToShow - 1; i >= 0; i--) {
    var venue = state.filteredVenues[current + i];
    var card = createCardElement(venue, i);
    container.appendChild(card);
  }

  var topCard = container.querySelector('.swipe-card:last-child');
  if (topCard) initSwipe(topCard);

  updateBottomNav();
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

  var michelinBadge = '';
  if (venue.michelinStatus === 'star') {
    michelinBadge = '<div class="card-michelin-row"><span class="michelin-badge">★ Michelin</span></div>';
  } else if (venue.michelinStatus === 'bibGourmand') {
    michelinBadge = '<div class="card-michelin-row"><span class="michelin-badge">🍽 Bib Gourmand</span></div>';
  }

  var touristHtml = venue.touristTrapFlag ? '<span class="tourist-trap-badge">⚠ Tourist popular</span>' : '';

  var vibeTag = '<span class="card-vibe-tag">' + venue.vibe + '</span>';

  var tipPreview = venue.insiderTip.length > 80 ? venue.insiderTip.substring(0, 77) + '...' : venue.insiderTip;

  card.innerHTML =
    '<div class="card-front">' +
      '<div class="card-image-wrap" style="flex:0 0 40%">' +
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
          '<span class="card-meta-sep"></span>' +
          vibeTag +
          (touristHtml ? '<span class="card-meta-sep"></span>' + touristHtml : '') +
        '</div>' +
        '<div class="card-hours"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ' + venue.hours + '</div>' +
        michelinBadge +
        '<div class="card-why">"' + venue.whyThisPlace + '"</div>' +
        '<div class="card-tip-preview">💡 ' + tipPreview + '</div>' +
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

  var front = card.querySelector('.card-front');
  front.addEventListener('click', function(e) {
    if (card.classList.contains('swiping')) return;
    card.querySelector('.card-back').classList.add('show');
  });

  var closeBtn = card.querySelector('.card-back-close');
  closeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    card.querySelector('.card-back').classList.remove('show');
  });

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
    showToast('Added to shortlist ♥');
  }

  var flyX = isYes ? window.innerWidth : -window.innerWidth;
  var flyRotation = isYes ? 30 : -30;

  card.style.transition = 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease';
  card.style.transform = 'translateX(' + flyX + 'px) rotate(' + flyRotation + 'deg)';
  card.style.opacity = '0';

  updateBottomNav();

  setTimeout(function() {
    state.currentIndex++;
    renderSwipe();
  }, 300);
}

function buttonSwipe(isYes) {
  var container = document.getElementById('card-stack');
  var topCard = container ? container.querySelector('.swipe-card:last-child') : null;
  if (!topCard || topCard.querySelector('.done-overlay')) return;

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
  updateBottomNav();

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
  state.hasStack = false;
  navigate('discover');
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', function() {
  /* Inject extra CSS for card redesign */
  var extraCSS = document.createElement('style');
  extraCSS.textContent = '.card-image-wrap { flex: 0 0 40% !important; } .card-hours { display: flex; align-items: center; gap: 4px; font-size: var(--text-xs, 0.75rem); color: var(--color-text-muted, #888); margin-top: 2px; } .card-hours svg { flex-shrink: 0; } .card-tip-preview { font-size: var(--text-xs, 0.75rem); color: var(--color-accent, #00bcd4); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 4px; } .card-why { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; } .card-michelin-row { margin-top: 2px; } .card-vibe-tag { font-size: var(--text-xs, 0.75rem); text-transform: capitalize; color: var(--color-text-muted, #888); }';
  document.head.appendChild(extraCSS);

  initTheme();
  updateThemeIcon();

  var nSelect = document.getElementById('neighbourhood-select');
  if (nSelect) {
    buildNeighbourhoodDropdown();
    nSelect.addEventListener('change', function() {
      state.neighbourhood = this.value;
    });
  }

  window.addEventListener('hashchange', handleHash);
  handleHash();
});
