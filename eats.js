// 吃喝精选（东京 · 镰仓）。跟景点分开放：不进首页景点推荐、扭蛋、挑一挑和「帮我排」，有自己的「吃喝」列表和地图图钉。
// tags 用景点那套（walk sit water leaf view eat rain），心情筛选和搜索照样能用
// g：Google 评分快照（2026-11-20 在 Google Maps 查的）。r 评分 / n 评价数 / good、bad 是对评价的转述（不是原文），没看到明显吐槽的就不写 bad
// dish 推荐点什么（来自评价里最常被提到的东西）
var EATS_AT = '2026-11-20';
// 这座城市的吃喝类别，和首页「在 Google 搜附近」的按钮（[类别, 按钮文字, 搜什么]）
var EAT_KINDS = {cafe:'咖啡', food:'吃饭', izakaya:'居酒屋', bar:'喝一杯', sweet:'甜点'};
var EAT_QUICK = [['cafe','咖啡','cafe'],['food','拉面','ramen'],['izakaya','居酒屋','izakaya'],['bar','喝一杯','bar'],['sweet','甜点','dessert']];
var EATS = [
  // ───── 谷根千 · 上野 ─────
  {id:'e_kamachiku', zh:'根津釜竹 乌冬', jp:'釜揚げうどん専門店 根津釜竹', kind:'food', area:'谷根千 · 根津', zone:'tokyo', tags:['eat','rain'], best:['am','pm'], mins:60, lat:35.7180829, lng:139.7669646,
   dish:'冷的笊篱乌冬、釜扬乌冬，配高汤蛋卷、芝麻豆腐',
   blurb:'开在二十世纪初老仓库里的乌冬店，空间很美，离根津神社走路几分钟。', tip:'可以订位；冷乌冬最被推荐，照店员说的吃法来。',
   g:{r:4.3, n:1253, good:'乌冬口感好，冷的尤其出色；老仓库很漂亮，服务让人放松。'}},
  {id:'e_himitsudo', zh:'ひみつ堂 刨冰', jp:'ひみつ堂 谷中', kind:'sweet', area:'谷根千 · 谷中', zone:'tokyo', tags:['eat','walk'], best:['am','pm'], mins:45, lat:35.7273365, lng:139.7665968,
   dish:'草莓牛奶刨冰、当季水果刨冰',
   blurb:'用天然冰和手作果酱做刨冰的小店，冰很细很松，份量很大。', tip:'排队是常态，只收现金。逛谷中银座时顺路。',
   g:{r:3.7, n:2598, good:'刨冰非常绵细，里面还藏着冰淇淋，水果果酱很新鲜。', bad:'要排很久，价格也偏高。'}},
  // ───── 浅草 · 藏前 · 清澄白河 ─────
  {id:'e_kamiya', zh:'神谷酒吧', jp:'神谷バー 浅草', kind:'bar', area:'浅草', zone:'tokyo', tags:['sit','rain'], best:['pm','night'], mins:60, lat:35.7109309, lng:139.797503,
   dish:'电气白兰（デンキブラン）配生啤、蟹肉可乐饼、拿坡里意面',
   blurb:'1880 年开到现在，号称日本第一家酒吧，木头装潢的老派啤酒馆。', tip:'只收现金，常要和别人拼桌。看完浅草寺来喝一杯。',
   g:{r:4.1, n:4858, good:'很有历史感，一定要试招牌电气白兰；洋食下酒菜也好吃。'}},
  {id:'e_kagetsudo', zh:'花月堂 菠萝包', jp:'浅草 花月堂 本店', kind:'sweet', area:'浅草', zone:'tokyo', tags:['eat','walk'], best:['am','pm'], mins:20, lat:35.7146332, lng:139.7951685,
   dish:'巨大菠萝包（メロンパン），可以夹抹茶或香草冰淇淋',
   blurb:'浅草寺旁边的菠萝包老店，外皮酥脆、里面松软。', tip:'没有座位，买了边走边吃；开门前就有人排。',
   g:{r:4.4, n:3035, good:'外脆内软，现烤的香味很诱人；夹冰淇淋的吃法很受欢迎。'}},
  {id:'e_dandelion', zh:'Dandelion 巧克力工厂', jp:'ダンデライオン・チョコレート ファクトリー＆カフェ蔵前', kind:'sweet', area:'藏前', zone:'tokyo', tags:['sit','rain'], best:['pm'], mins:45, lat:35.7036599, lng:139.7896246,
   dish:'布朗尼、热巧克力、棉花糖夹心饼（S’more）',
   blurb:'从可可豆做到巧克力的工厂咖啡，一进门就是浓浓的巧克力香。', tip:'内用每人要点一样；外带比较不用等。',
   g:{r:4.2, n:2758, good:'环境好看，布朗尼和热巧克力浓郁。', bad:'座位常常满，S’more 有人觉得普通。'}},
  {id:'e_bluebottle', zh:'Blue Bottle 清澄白河', jp:'ブルーボトルコーヒー 清澄白河フラッグシップカフェ', kind:'cafe', area:'清澄白河', zone:'tokyo', tags:['sit','rain'], best:['am','pm'], mins:45, lat:35.6777557, lng:139.8005894,
   dish:'手冲咖啡、布丁、松饼',
   blurb:'蓝瓶咖啡在日本的第一家店，挑高的老仓库改的，很适合坐着看书。', tip:'周末早上就很满，平日或一开门去比较好。',
   g:{r:4.1, n:5108, good:'空间宽敞挑高，咖啡好喝，布丁和松饼受欢迎。'}},
  // ───── 神保町 · 神乐坂 ─────
  {id:'e_bondy', zh:'Bondy 欧风咖喱', jp:'ボンディ 神保町本店', kind:'food', area:'神保町', zone:'tokyo', tags:['eat','rain'], best:['pm','night'], mins:60, lat:35.6955738, lng:139.7573664,
   dish:'牛肉咖喱，先上的奶油马铃薯',
   blurb:'藏在旧书大楼二楼的老牌欧风咖喱，神保町最有名的一家。', tip:'排队很长（有人等超过一小时），错开饭点去。',
   g:{r:4.3, n:5523, good:'咖喱浓郁香醇，奶油马铃薯和饭后布丁也常被提到。', bad:'要排很久，常要拼桌。'}},
  {id:'e_saryo', zh:'神乐坂茶寮', jp:'神楽坂 茶寮 本店', kind:'sweet', area:'神乐坂', zone:'tokyo', tags:['sit','eat'], best:['pm','night'], mins:60, lat:35.7020637, lng:139.741111,
   dish:'抹茶冰淇淋、栗子蒙布朗、芭菲，也有京都风小菜定食',
   blurb:'神乐坂巷子里的和风甜点茶屋，有露台座位。', tip:'中午要在门口取号排队；晚上来吃甜点几乎不用等。',
   g:{r:4.2, n:1415, good:'甜点漂亮好吃，季节限定的蒙布朗和抹茶冰淇淋被推荐。', bad:'午餐时段带位很慢。'}},
  // ───── 新宿 · 涩谷 · 原宿 ─────
  {id:'e_fuunji', zh:'风云儿 沾面', jp:'風雲児 新宿本店', kind:'food', area:'新宿南口', zone:'tokyo', tags:['eat','rain'], best:['pm','night'], mins:30, lat:35.6868343, lng:139.6966393,
   dish:'特制沾面（つけ麺），面可以免费加大',
   blurb:'新宿最有名的沾面店之一，汤头浓厚。', tip:'座位少要排队；吃完可以请店家加高汤把汤喝完。',
   g:{r:4.3, n:5805, good:'汤头浓厚、面很好吃，份量足，店员很专业。', bad:'有人觉得沾面的汤有点温。'}},
  {id:'e_omoide', zh:'思出横丁', jp:'新宿西口 思い出横丁', kind:'izakaya', area:'新宿西口', zone:'tokyo', tags:['eat','walk'], best:['night'], mins:60, lat:35.6927037, lng:139.6995778,
   dish:'烤串配冰啤酒',
   blurb:'新宿车站旁的窄巷，挤满只坐得下几个人的小居酒屋，像走进电影场景。', tip:'很多店收约 400 日元座位费，多数只收现金；晚上最热闹也最挤。',
   g:{r:4.2, n:16044, good:'很有昭和氛围，烤串和小菜配啤酒很对味。', bad:'人很多很挤，常常找不到位子。'}},
  {id:'e_afuri', zh:'AFURI 柚子拉面', jp:'AFURI 原宿', kind:'food', area:'原宿', zone:'tokyo', tags:['eat','rain'], best:['am','pm','night'], mins:30, lat:35.6730053, lng:139.7038019,
   dish:'柚子盐拉面、叉烧饭',
   blurb:'清爽柚子香的盐味拉面，汤不油不咸，也有素食选项。', tip:'中午会排队，但翻桌很快。',
   g:{r:4.5, n:6469, good:'汤头清爽不腻，鸡胸叉烧意外地嫩，从食物到服务都很整齐。'}},
  {id:'e_fuglen', zh:'Fuglen 富谷', jp:'Fuglen Tokyo', kind:'cafe', area:'涩谷 · 富谷', zone:'tokyo', tags:['sit'], best:['am','pm','night'], mins:45, lat:35.6666181, lng:139.6923999,
   dish:'浅焙咖啡；晚上有鸡尾酒',
   blurb:'奥斯陆来的北欧风咖啡馆，白天咖啡、晚上变成酒吧。', tip:'在代代木公园旁，散步完来坐；周末下午很挤。',
   g:{r:4.3, n:3877, good:'浅焙咖啡很好喝，北欧家具很好看。', bad:'周末下午人太多，很难放松。'}},
  {id:'e_ebisu', zh:'惠比寿横丁', jp:'恵比寿横丁', kind:'izakaya', area:'惠比寿', zone:'tokyo', tags:['eat'], best:['night'], mins:90, lat:35.6482226, lng:139.7107674,
   dish:'肉寿司、牛舌、大阪烧',
   blurb:'外面看像普通店面，里面是一整条小摊挤在一起的屋台横丁，很热闹。', tip:'里面可以抽烟，在意的话要注意。',
   g:{r:3.8, n:1692, good:'很有当地小酒馆的气氛，选择多。'}},
  // ───── 中目黑 · 下北泽 · 吉祥寺 ─────
  {id:'e_onibus', zh:'ONIBUS 咖啡 中目黑', jp:'ONIBUS COFFEE 中目黒', kind:'cafe', area:'中目黑', zone:'tokyo', tags:['sit'], best:['am','pm'], mins:45, lat:35.6431767, lng:139.6980318,
   dish:'拿铁、香蕉面包',
   blurb:'老房子改的小咖啡馆，二楼窗边看得到电车经过。', tip:'一楼点单，上二楼或露台坐；散步目黑川时顺路。',
   g:{r:4.3, n:2366, good:'老房子很有味道，咖啡好喝，二楼看电车很可爱。'}},
  {id:'e_bearpond', zh:'Bear Pond 浓缩咖啡', jp:'Bear Pond Espresso 下北沢', kind:'cafe', area:'下北泽', zone:'tokyo', tags:['sit'], best:['am','pm'], mins:20, lat:35.6639833, lng:139.6678986,
   dish:'浓缩咖啡、Gibraltar、dirty 拿铁',
   blurb:'下北泽有名的浓缩咖啡小店，咖啡很浓很厚。', tip:'只收现金；咖啡师比较酷，不太笑。',
   g:{r:4.0, n:862, good:'浓缩咖啡浓郁有层次，dirty 拿铁很有名。', bad:'服务比较冷淡。'}},
  {id:'e_satou', zh:'吉祥寺 Satou 炸肉饼', jp:'吉祥寺さとう', kind:'food', area:'吉祥寺', zone:'tokyo', tags:['eat','walk'], best:['am','pm'], mins:20, lat:35.703975, lng:139.579041,
   dish:'炸肉饼（メンチカツ）、可乐饼',
   blurb:'吉祥寺商店街的肉铺，门口永远在排队买现炸的炸肉饼。', tip:'趁热吃；逛口琴横丁或井之头公园时顺路。',
   g:{r:4.2, n:1991, good:'炸肉饼外酥、肉汁很多，很多人说是吃过最好吃的。'}},
  // ───── 镰仓 · 江之岛 ─────
  {id:'e_vivement', zh:'Vivement Dimanche 咖啡', jp:'カフェ ヴィヴモン ディモンシュ 鎌倉', kind:'cafe', area:'镰仓 · 小町通', zone:'kamakura', tags:['sit','rain'], best:['am','pm'], mins:60, lat:35.3203713, lng:139.5512119,
   dish:'布丁芭菲、松饼、蛋包饭',
   blurb:'小町通附近的老牌咖啡馆，布丁芭菲很有名。', tip:'常常要排一下，但翻桌很快。',
   g:{r:4.5, n:702, good:'布丁芭菲是招牌，咖啡和蛋包饭也好吃，服务亲切。', bad:'有人觉得正餐普通，主要是来吃芭菲。'}},
  {id:'e_tobiccho', zh:'江之岛 とびっちょ', jp:'とびっちょ 江の島本店', kind:'food', area:'江之岛', zone:'kamakura', tags:['eat','water'], best:['am','pm'], mins:60, lat:35.3013114, lng:139.4822319,
   dish:'生吻仔鱼丼、吻仔鱼炸什锦',
   blurb:'江之岛有名的吻仔鱼（しらす）丼专门店，份量很大。', tip:'先在门口拿号码牌，可以先去逛再回来；用平板点餐。',
   g:{r:4.1, n:3293, good:'海鲜新鲜、价格合理，份量很大。', bad:'人多时要等很久，有人等了两个小时。'}}
];
if (typeof module !== 'undefined') module.exports = { EATS: EATS };
