// ============ CATEGORY DEFINITIONS ============
const CATEGORIES = [
  { id:"light-fare", name:"Light Fare", emoji:"🥪", desc:"Sandwiches, rolls & quick bites", banner:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80" },
  { id:"deg-se", name:"Deg Se", emoji:"🍲", desc:"Traditional slow-cooked Hyderabadi biryani", banner:"https://images.unsplash.com/photo-1563379091339-03246963d96c?w=800&q=80" },
  { id:"tave-se", name:"Tave Se", emoji:"🍗", desc:"Fired fresh on the tava & tandoor", banner:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80" },
  { id:"gravy", name:"Gravy", emoji:"🍛", desc:"Rich curries simmered low & slow", banner:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80" },
  { id:"rice-and-naan", name:"Rice & Naan", emoji:"🍞", desc:"Tandoor breads & fragrant rice", banner:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80" },
  { id:"meetha", name:"Meetha", emoji:"🍮", desc:"Traditional Hyderabadi desserts", banner:"https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80" },
  { id:"platters", name:"Platters", emoji:"🍽️", desc:"Feasts built for sharing", banner:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80" },
  { id:"drinks", name:"Drinks", emoji:"🥤", desc:"Chai, cold drinks & Hyderabadi refreshers", banner:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80" },
  { id:"weekend-food-specials", name:"Weekend Specials", emoji:"🎉", desc:"Limited-batch Hyderabadi weekend classics", banner:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80" },
  { id:"catering-services", name:"Catering Services", emoji:"🥘", desc:"Trays for events, sized to serve a crowd", banner:"https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80" },
];

// Stock food photography (Unsplash, category-appropriate) reused sensibly across similar dishes
const IMG = {
  biryaniMutton: "/images/mutton-dum-pv.png",
  biryaniChicken: "/images/chicken-dum-pv.png  ",
  haleem: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=600&q=80",
  nahari: "https://images.unsplash.com/photo-1574653853027-5382a3d23a8d?w=600&q=80",
  sandwich: "/images/roast-beef-pv.png",
  quesadilla: "/images/chicken-q-pv.png",
  samosa: "/images/potli-samosa-pv.png",
  lukhmi: "/images/hyderabadi-lukhmi-pv",
  chickenRoll: "/images/chicken-roll-pv.png",
  chicken65: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80",
  talavaGosht: "/images/talva-ghost-pv.png",
  talavaMurg: "/images/talva-chicken-pv.png",
  jerkChicken: "/images/jerk-chicken-pv.png",
  paneer: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80",
  dopyazah: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
  laganChicken: "/images/lagan-chicken-pv",
  butterChicken: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80",
  dal: "/images/khatti-dal-pv.png",
  mirchiSalan: "/images/mirchi-ka-salan-pv.png",
  rice: "/images/zeerah-rice-pv.png",
  naan: "/images/butter-naan-pv.png",
  paratha: "/images/lachha-pv.png",
  qubani: "/images/qubani-pv.png.png",
  dabalMeetha: "/images/dabal-pv.png",
  malaiMeva: "/images/malai-pv.png",
  creme: "/images/brulee-pv.png",
  gilEFirdaus: "/images/gil-e-firdaus-pv.png",
  lycheeRabri: "/images/lychee-rabri-pv.png",
  platter: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
  kingPlatter: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
  chai: "/images/dum-chai-pv.png",
  biscuit: "/images/osmania-pv.png",
  aapshola: "/images/shola-pv.png",
  thandai: "/images/thandi-pv.png",
  canned: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80",
  bottled: "/images/bottled-water-pv.png",
  water: "/images/bottled-water-pv.png",
  catering: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80",
};

// ============ MENU ITEMS (real data from chullaexpress.ca/menu) ============
// spice: 0-3 | veg: bool | best: bool | chef: bool
const ITEMS = [
  // Weekend Specials
  { id:"wk1", cat:"weekend-food-specials", name:"Traditional Hyderabadi Lunch", desc:"Dalcha, Bagara Rice and Phalli Gosht. Available Friday lunch only, while quantities last.", price:16.99, img:IMG.biryaniMutton, spice:1, veg:false, best:true, chef:false, avail:"Friday Lunch Only", keywords:["mutton","lunch","friday","dalcha","rice"] },
  { id:"wk2", cat:"weekend-food-specials", name:"Traditional Hyderabadi Haleem", desc:"Slow-cooked wheat and meat porridge, pounded to perfection in the traditional Hyderabadi style.", price:16.99, img:IMG.haleem, spice:1, veg:false, best:true, chef:true, avail:"Saturday Only", keywords:["haleem","mutton","saturday","slow-cooked"] },
  { id:"wk3", cat:"weekend-food-specials", name:"Hyderabadi Nahari (Sun Only)", desc:"Paya and Zaban slow-cooked overnight with special Hyderabadi Nahari masala, served with choice of bread.", price:15.99, img:IMG.nahari, spice:2, veg:false, best:false, chef:true, avail:"Sunday Only", keywords:["nahari","paya","mutton","sunday","overnight"] },

  // Light Fare
  { id:"lf1", cat:"light-fare", name:"Roast Beef Sandwich", desc:"Shaved beef, caramelized onion, peppers melted with mozzarella cheese served with masala fries.", price:12.99, img:IMG.sandwich, spice:0, veg:false, best:false, chef:false, keywords:["beef","sandwich","cheese","fries"] },
  { id:"lf2", cat:"light-fare", name:"Chicken Quesadilla", desc:"Grilled chicken, sweet peppers, sautéed onions seasoned with spices and cilantro, packed with melted cheese and avocado dip.", price:10.99, img:IMG.quesadilla, spice:1, veg:false, best:false, chef:false, keywords:["chicken","quesadilla","cheese","avocado"] },
  { id:"lf3", cat:"light-fare", name:"Potli Samosa (3pc)", desc:"Minced chicken cooked with spices and herbs with a touch of cashew nuts and raisins, stuffed in crispy pastry, served with mint and tamarind chutney.", price:5.99, img:IMG.samosa, spice:1, veg:false, best:true, chef:false, keywords:["samosa","chicken","appetizer","chutney"] },
  { id:"lf4", cat:"light-fare", name:"Hyderabadi Lukhmi (Beef Qeema, 2pcs)", desc:"Savoury pastry filled with Hyderabadi dum ka kheema, traditionally cooked, served with pudina ki chutney.", price:5.99, img:IMG.lukhmi, spice:1, veg:false, best:false, chef:true, keywords:["lukhmi","beef","qeema","pastry"] },
  { id:"lf5", cat:"light-fare", name:"Hyderabadi Chicken Roll", desc:"Chicken 65 wrapped in naan with zesty laccha salad.", price:10.99, img:IMG.chickenRoll, spice:2, veg:false, best:true, chef:false, keywords:["chicken","roll","naan","wrap"] },

  // Deg Se
  { id:"ds1", cat:"deg-se", name:"Hyderabadi Mutton Dum Biryani", desc:"World-famous mutton biryani prepared the traditional Hyderabadi way, served with mirchi ka salan and dahi ki chutney.", price:16.99, img:IMG.biryaniMutton, spice:2, veg:false, best:true, chef:true, keywords:["biryani","mutton","dum","rice"] },
  { id:"ds2", cat:"deg-se", name:"Hyderabadi Chicken Dum Biryani", desc:"Chicken marinated in herbs and spices, flavoured with saffron, cooked the traditional Hyderabadi way, served with mirchi ka salan and dahi ki chutney.", price:12.99, img:IMG.biryaniChicken, spice:2, veg:false, best:true, chef:true, keywords:["biryani","chicken","dum","rice","saffron"] },
  { id:"ds3", cat:"deg-se", name:"Chulla Special Mutton Dum Biryani", desc:"Combo of mutton dum biryani, chicken 65, tava paratha (2pcs), mirchi ka salan and dahi ki chutney. Serves 2–3.", price:29.99, img:IMG.biryaniMutton, spice:2, veg:false, best:false, chef:true, keywords:["combo","mutton","biryani","sharing"] },
  { id:"ds4", cat:"deg-se", name:"Chulla Special Chicken Dum Biryani", desc:"Combo of chicken dum biryani, chicken 65, tava paratha (2pcs), mirchi ka salan and dahi ki chutney. Serves 2–3.", price:25.99, img:IMG.biryaniChicken, spice:2, veg:false, best:false, chef:false, keywords:["combo","chicken","biryani","sharing"] },

  // Tave Se
  { id:"tv1", cat:"tave-se", name:"Chicken 65", desc:"Boneless chicken tossed in butter with green chilli, curry leaves and spices, garnished with cilantro.", price:12.99, img:IMG.chicken65, spice:2, veg:false, best:true, chef:false, keywords:["chicken","65","spicy","fried","appetizer"] },
  { id:"tv2", cat:"tave-se", name:"Talava Gosht (Mutton)", desc:"Boneless lamb marinated in a house blend of spices, fired on a tava with hara masala.", price:14.99, img:IMG.talavaGosht, spice:2, veg:false, best:false, chef:false, keywords:["mutton","lamb","tava","fired"] },
  { id:"tv3", cat:"tave-se", name:"Talava Murg (Chicken)", desc:"Boneless chicken marinated in a house blend of spices, fired on a tava with hara masala.", price:12.99, img:IMG.talavaMurg, spice:2, veg:false, best:false, chef:false, keywords:["chicken","tava","fired","hara masala"] },
  { id:"tv4", cat:"tave-se", name:"Chulla Jerk Chicken (Half)", desc:"Chicken marinated with scotch bonnet peppers and jerk spices, char-cooked in the tandoor, served with jerk sauce.", price:13.99, img:IMG.jerkChicken, spice:3, veg:false, best:true, chef:true, keywords:["chicken","jerk","spicy","tandoor"] },
  { id:"tv5", cat:"tave-se", name:"Chulla Jerk Chicken (Full)", desc:"Chicken marinated with scotch bonnet peppers and jerk spices, char-cooked in the tandoor, served with jerk sauce.", price:24.99, img:IMG.jerkChicken, spice:3, veg:false, best:false, chef:true, keywords:["chicken","jerk","spicy","tandoor","sharing"] },

  // Gravy
  { id:"gv1", cat:"gravy", name:"Paneer Mattar Makhni", desc:"Malai paneer and green peas cooked in makhni sauce.", price:13.99, img:IMG.paneer, spice:1, veg:true, best:true, chef:false, keywords:["paneer","vegetarian","peas","makhni","creamy"] },
  { id:"gv2", cat:"gravy", name:"Mutton Dopyazah", desc:"Slow-cooked boneless lamb in lemon-onion gravy.", price:15.99, img:IMG.dopyazah, spice:2, veg:false, best:false, chef:false, keywords:["mutton","lamb","onion","gravy"] },
  { id:"gv3", cat:"gravy", name:"Hyderabadi Lagan Chicken", desc:"Chicken roasted and cooked in cashew-tomato gravy.", price:14.99, img:IMG.laganChicken, spice:2, veg:false, best:false, chef:true, keywords:["chicken","cashew","tomato","gravy"] },
  { id:"gv4", cat:"gravy", name:"Butter Chicken", desc:"Boneless tandoori chicken cooked in a creamy butter sauce.", price:14.99, img:IMG.butterChicken, spice:1, veg:false, best:true, chef:false, keywords:["chicken","butter","creamy","mild","tandoori"] },
  { id:"gv5", cat:"gravy", name:"Hyderabadi Khatti Dal", desc:"Masoor dal simmered with tamarind and herbs, tempered with spices.", price:8.99, img:IMG.dal, spice:1, veg:true, best:false, chef:false, keywords:["dal","vegetarian","tamarind","lentil"] },
  { id:"gv6", cat:"gravy", name:"Mirchi Ka Salan", desc:"Gravy made of peanuts, sesame and coconut, slow-cooked with green chillies, tempered with house spices.", price:8.99, img:IMG.mirchiSalan, spice:3, veg:true, best:false, chef:false, keywords:["mirchi","salan","spicy","vegetarian","peanut"] },

  // Rice & Naan
  { id:"rn1", cat:"rice-and-naan", name:"Chulla Zeerah Rice", desc:"Basmati rice flavoured with cumin seeds, green chillies and cilantro.", price:7.99, img:IMG.rice, spice:1, veg:true, best:false, chef:false, keywords:["rice","cumin","vegetarian","side"] },
  { id:"rn2", cat:"rice-and-naan", name:"Chulla Khushka (Plain Rice)", desc:"Basmati rice cooked to perfection.", price:5.99, img:IMG.rice, spice:0, veg:true, best:false, chef:false, keywords:["rice","plain","vegetarian","side"] },
  { id:"rn3", cat:"rice-and-naan", name:"Butter Naan", desc:"Crispy naan cooked in the tandoor, drizzled with butter.", price:2.49, img:IMG.naan, spice:0, veg:true, best:true, chef:false, keywords:["naan","bread","butter","vegetarian","tandoor"] },
  { id:"rn4", cat:"rice-and-naan", name:"Garlic Naan", desc:"Garlic-infused naan cooked in the tandoor, drizzled with butter.", price:2.99, img:IMG.naan, spice:0, veg:true, best:false, chef:false, keywords:["naan","bread","garlic","vegetarian","tandoor"] },
  { id:"rn5", cat:"rice-and-naan", name:"Tava Laccha Paratha", desc:"Laccha paratha cooked on the tava.", price:2.49, img:IMG.paratha, spice:0, veg:true, best:false, chef:false, keywords:["paratha","bread","vegetarian","tava"] },

  // Meetha
  { id:"mt1", cat:"meetha", name:"Qubani Ka Meetha", desc:"Dried apricot cooked in sweet syrup, garnished with cream custard and nuts.", price:6.99, img:IMG.qubani, spice:0, veg:true, best:true, chef:true, keywords:["dessert","apricot","sweet","vegetarian"] },
  { id:"mt2", cat:"meetha", name:"Dabal Ka Meetha", desc:"Golden crispy bread cooked in condensed cardamom-flavoured milk, topped with rabri.", price:5.99, img:IMG.dabalMeetha, spice:0, veg:true, best:false, chef:false, keywords:["dessert","bread","cardamom","rabri","vegetarian"] },
  { id:"mt3", cat:"meetha", name:"Malai Meva", desc:"Seasonal fresh fruits layered with homemade malai crème, dry fruits and nuts.", price:6.99, img:IMG.malaiMeva, spice:0, veg:true, best:false, chef:false, keywords:["dessert","fruit","cream","vegetarian"] },
  { id:"mt4", cat:"meetha", name:"Crème Brûlée", desc:"Rich custard base topped with a layer of hardened caramelized sugar.", price:6.99, img:IMG.creme, spice:0, veg:true, best:false, chef:false, keywords:["dessert","custard","caramel","vegetarian"] },
  { id:"mt5", cat:"meetha", name:"Gil-E-Firdaus", desc:"Sago and coarsely-crushed rice cooked in milk and flavoured with saffron.", price:5.99, img:IMG.gilEFirdaus, spice:0, veg:true, best:false, chef:false, keywords:["dessert","saffron","rice","sago","vegetarian"] },
  { id:"mt6", cat:"meetha", name:"Lychee Rabri", desc:"Dessert made by simmering full-fat milk until thick and creamy, flavoured with lychee.", price:6.99, img:IMG.lycheeRabri, spice:0, veg:true, best:false, chef:false, keywords:["dessert","lychee","milk","rabri","vegetarian"] },

  // Platters
  { id:"pl1", cat:"platters", name:"Hyderabadi Chulla Platter", desc:"Talava gosht, Chulla jerk roast (half chicken), Chicken 65, Lukhmi (4pcs) served on Chulla special rice with butter naan or tava paratha (4pcs), mint chutney and jerk sauce. Serves 4–6.", price:69.99, img:IMG.platter, spice:2, veg:false, best:true, chef:true, keywords:["platter","sharing","mutton","chicken","feast"] },
  { id:"pl2", cat:"platters", name:"Hyderabadi Chulla King Platter", desc:"Tiger grilled shrimp (8pcs), herb-crusted tilapia (2 fillets), Talava gosht, Chulla jerk roast (half chicken), Chicken 65, Lukhmi (4pcs), rice, bread, mint chutney and jerk sauce. Serves 6–8.", price:89.99, img:IMG.kingPlatter, spice:2, veg:false, best:true, chef:true, keywords:["platter","sharing","shrimp","seafood","feast","king"] },

  // Catering Services
  { id:"ct1", cat:"catering-services", name:"Hyderabadi Mutton Dum Biryani", desc:"Full tray of our signature mutton biryani, catering-sized.", price:80.00, priceFrom:true, img:IMG.biryaniMutton, spice:2, veg:false, best:true, chef:false, keywords:["catering","mutton","biryani","tray"] },
  { id:"ct2", cat:"catering-services", name:"Hyderabadi Chicken Dum Biryani", desc:"Full tray of our signature chicken biryani, catering-sized.", price:70.00, priceFrom:true, img:IMG.biryaniChicken, spice:2, veg:false, best:true, chef:false, keywords:["catering","chicken","biryani","tray"] },
  { id:"ct3", cat:"catering-services", name:"Talava Gosht (Mutton)", desc:"Boneless lamb fired on the tava, catering-sized tray.", price:80.00, priceFrom:true, img:IMG.talavaGosht, spice:2, veg:false, best:false, chef:false, keywords:["catering","mutton","tray"] },
  { id:"ct4", cat:"catering-services", name:"Talava Murg (Chicken)", desc:"Boneless chicken fired on the tava, catering-sized tray.", price:70.00, priceFrom:true, img:IMG.talavaMurg, spice:2, veg:false, best:false, chef:false, keywords:["catering","chicken","tray"] },
  { id:"ct5", cat:"catering-services", name:"Chicken 65", desc:"Our signature Chicken 65, catering-sized tray.", price:70.00, priceFrom:true, img:IMG.chicken65, spice:2, veg:false, best:false, chef:false, keywords:["catering","chicken","65","tray"] },
  { id:"ct6", cat:"catering-services", name:"Chulla Jerk Chicken (Full Tray)", desc:"Char-cooked jerk chicken, full catering tray.", price:70.00, priceFrom:false, img:IMG.jerkChicken, spice:3, veg:false, best:false, chef:false, keywords:["catering","chicken","jerk","tray"] },
  { id:"ct7", cat:"catering-services", name:"Kali Mirch Gosht (Mutton)", desc:"Black-pepper mutton, catering-sized tray.", price:80.00, priceFrom:true, img:IMG.talavaGosht, spice:2, veg:false, best:false, chef:false, keywords:["catering","mutton","pepper","tray"] },
  { id:"ct8", cat:"catering-services", name:"Kadhai Gosht (Mutton)", desc:"Mutton cooked kadhai-style, catering-sized tray.", price:80.00, priceFrom:true, img:IMG.dopyazah, spice:2, veg:false, best:false, chef:false, keywords:["catering","mutton","kadhai","tray"] },
  { id:"ct9", cat:"catering-services", name:"Dum Ka Murg (Chicken)", desc:"Slow-cooked dum-style chicken, catering-sized tray.", price:65.00, priceFrom:true, img:IMG.laganChicken, spice:2, veg:false, best:false, chef:false, keywords:["catering","chicken","dum","tray"] },
  { id:"ct10", cat:"catering-services", name:"Hyderabadi Lagan Chicken (With Bone)", desc:"Chicken in cashew-tomato gravy, bone-in, catering-sized tray.", price:65.00, priceFrom:true, img:IMG.laganChicken, spice:2, veg:false, best:false, chef:false, keywords:["catering","chicken","gravy","tray"] },
  { id:"ct11", cat:"catering-services", name:"Butter Chicken (Boneless)", desc:"Our creamy butter chicken, catering-sized tray.", price:75.00, priceFrom:true, img:IMG.butterChicken, spice:1, veg:false, best:true, chef:false, keywords:["catering","chicken","butter","mild","tray"] },
  { id:"ct12", cat:"catering-services", name:"Qubani Ka Meetha", desc:"Dried apricot dessert, catering-sized tray.", price:70.00, priceFrom:true, img:IMG.qubani, spice:0, veg:true, best:false, chef:false, keywords:["catering","dessert","apricot","tray","vegetarian"] },
  { id:"ct13", cat:"catering-services", name:"Dabal Ka Meetha", desc:"Bread pudding dessert with rabri, catering-sized tray.", price:55.00, priceFrom:true, img:IMG.dabalMeetha, spice:0, veg:true, best:false, chef:false, keywords:["catering","dessert","tray","vegetarian"] },
  { id:"ct14", cat:"catering-services", name:"Kaddu Ki Kheer", desc:"Pumpkin-based sweet kheer, catering-sized tray.", price:55.00, priceFrom:true, img:IMG.gilEFirdaus, spice:0, veg:true, best:false, chef:false, keywords:["catering","dessert","pumpkin","kheer","tray","vegetarian"] },
  { id:"ct15", cat:"catering-services", name:"Malai Meva", desc:"Fresh fruit and cream dessert, catering-sized tray.", price:70.00, priceFrom:true, img:IMG.malaiMeva, spice:0, veg:true, best:false, chef:false, keywords:["catering","dessert","fruit","tray","vegetarian"] },

  // Drinks
  { id:"dr1", cat:"drinks", name:"Hyderabadi Dum Ki Chai (Hot) - Large", desc:"World-famous chai prepared in the traditional Hyderabadi style.", price:3.50, img:IMG.chai, spice:0, veg:true, best:true, chef:false, keywords:["chai","tea","hot","drink"] },
  { id:"dr2", cat:"drinks", name:"Hyderabadi Dum Ki Chai (Hot) - Regular", desc:"World-famous chai prepared in the traditional Hyderabadi style.", price:2.65, img:IMG.chai, spice:0, veg:true, best:false, chef:false, keywords:["chai","tea","hot","drink"] },
  { id:"dr3", cat:"drinks", name:"Osmania Biscuit", desc:"Hyderabadi speciality biscuits.", price:0.99, img:IMG.biscuit, spice:0, veg:true, best:false, chef:false, keywords:["biscuit","snack","sweet","vegetarian"] },
  { id:"dr4", cat:"drinks", name:"Aapshola (Cold, Seasonal)", desc:"Raw mango char-cooked, finished with a fizz, served cold.", price:3.99, img:IMG.aapshola, spice:1, veg:true, best:false, chef:true, keywords:["drink","mango","cold","seasonal","tangy"] },
  { id:"dr5", cat:"drinks", name:"Thandai (Cold)", desc:"Drink made of almonds and special ingredients.", price:4.99, img:IMG.thandai, spice:0, veg:true, best:false, chef:false, keywords:["drink","almond","cold","thandai"] },
  { id:"dr6", cat:"drinks", name:"Canned Pops", desc:"Assorted canned soft drinks.", price:1.99, img:IMG.canned, spice:0, veg:true, best:false, chef:false, keywords:["drink","soda","cold","cold drink"] },
  { id:"dr7", cat:"drinks", name:"Bottled Drinks", desc:"Assorted bottled beverages.", price:2.99, img:IMG.bottled, spice:0, veg:true, best:false, chef:false, keywords:["drink","bottle","cold drink"] },
  { id:"dr8", cat:"drinks", name:"Bottled Water", desc:"Still bottled water.", price:1.49, img:IMG.water, spice:0, veg:true, best:false, chef:false, keywords:["water","drink"] },
];

// Curated "Best Sellers" shown in the swipeable favorites carousel on the landing page
const FAVORITE_IDS = ["ds1","ds2","tv1","tv4","lf5","gv4","rn3","mt1"];
const FAVORITE_RATINGS = { ds1:4.9, ds2:4.8, tv1:4.9, tv4:4.7, lf5:4.6, gv4:4.8, rn3:4.7, mt1:4.6 };

// First-time visitor guide — explains signature/unfamiliar dishes in one line
const FIRST_TIMER_IDS = ["ds2","tv1","gv4","rn3","mt1","dr1"];
const FIRST_TIMER_BLURB = {
  ds2: "Rice and chicken slow-cooked together in a sealed pot — Hyderabad's most iconic dish.",
  tv1: "Crispy fried chicken tossed in traditional South Indian spices.",
  gv4: "Tandoori chicken in a rich, mildly spiced tomato-butter sauce — a comforting, familiar favorite.",
  rn3: "Soft tandoor-baked flatbread brushed with butter — the classic partner to any curry.",
  mt1: "Sweet dried apricots in syrup, topped with custard — a beloved Hyderabadi dessert.",
  dr1: "Milky, cardamom-spiced tea slow-simmered the Hyderabadi way.",
};

function getItemsByCategory(catId){ return ITEMS.filter(i=>i.cat===catId); }
function getItem(id){ return ITEMS.find(i=>i.id===id); }
function getCategory(id){ return CATEGORIES.find(c=>c.id===id); }
