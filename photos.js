// 照片来自 Wikimedia Commons，各自的作者与授权见对应文件页。每个地点一个数组，第一张是封面。
var PHOTOS={
 "yanaka": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yanaka_Ginza_Street_from_Yuyake_Dandan_%28Oct_2024%29.jpg/960px-Yanaka_Ginza_Street_from_Yuyake_Dandan_%28Oct_2024%29.jpg",
   "w": 960,
   "file": "Yanaka_Ginza_Street_from_Yuyake_Dandan_(Oct_2024).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Yanaka_Ginza_2.jpg/960px-Yanaka_Ginza_2.jpg",
   "w": 960,
   "file": "Yanaka Ginza 2.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Yanaka_Ginza%2C_Yanaka_%2853417016334%29.jpg/960px-Yanaka_Ginza%2C_Yanaka_%2853417016334%29.jpg",
   "w": 960,
   "file": "Yanaka Ginza, Yanaka (53417016334).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Yanaka_Ginza_entrance.jpg/960px-Yanaka_Ginza_entrance.jpg",
   "w": 960,
   "file": "Yanaka Ginza entrance.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Yanaka_Ginza_%2852492570926%29.jpg/960px-Yanaka_Ginza_%2852492570926%29.jpg",
   "w": 960,
   "file": "Yanaka Ginza (52492570926).jpg"
  }
 ],
 "nezu": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Nezu_Shrine_2010.jpg/960px-Nezu_Shrine_2010.jpg",
   "w": 960,
   "file": "Nezu_Shrine_2010.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Entrance_to_The_Path_of_Torii_in_Nezu_Shrine_Tokyo.jpg/960px-Entrance_to_The_Path_of_Torii_in_Nezu_Shrine_Tokyo.jpg",
   "w": 960,
   "file": "Entrance to The Path of Torii in Nezu Shrine Tokyo.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Senbon_Torii_-_Nezu_Shrine_29-5-2026.jpg/960px-Senbon_Torii_-_Nezu_Shrine_29-5-2026.jpg",
   "w": 960,
   "file": "Senbon Torii - Nezu Shrine 29-5-2026.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/New_Year_at_Nezu_Shrine%2C_2011.jpg/960px-New_Year_at_Nezu_Shrine%2C_2011.jpg",
   "w": 960,
   "file": "New Year at Nezu Shrine, 2011.jpg"
  }
 ],
 "kiyosumi": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Kiyosumi_Teien_-_Japanese_gardern_1.JPG/960px-Kiyosumi_Teien_-_Japanese_gardern_1.JPG",
   "w": 960,
   "file": "Kiyosumi_Teien_-_Japanese_gardern_1.JPG"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Kiyosumi-1.JPG/960px-Kiyosumi-1.JPG",
   "w": 960,
   "file": "Kiyosumi-1.JPG"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kiyosumi_Garden_5.jpg/960px-Kiyosumi_Garden_5.jpg",
   "w": 960,
   "file": "Kiyosumi Garden 5.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Kiyosumi_Garden_pond.jpg/960px-Kiyosumi_Garden_pond.jpg",
   "w": 960,
   "file": "Kiyosumi Garden pond.jpg"
  }
 ],
 "kuramae": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Komagata_Bashi_kara_no_Keshiki_20181024.jpg/960px-Komagata_Bashi_kara_no_Keshiki_20181024.jpg",
   "w": 960,
   "file": "Komagata Bashi kara no Keshiki 20181024.jpg"
  }
 ],
 "kagurazaka": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Kagurazaka-1.jpg/960px-Kagurazaka-1.jpg",
   "w": 960,
   "file": "Kagurazaka-1.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/%E7%A5%9E%E6%A5%BD%E5%9D%82%E5%A4%9C%E6%99%AF.jpg/960px-%E7%A5%9E%E6%A5%BD%E5%9D%82%E5%A4%9C%E6%99%AF.jpg",
   "w": 960,
   "file": "神楽坂夜景.jpg"
  }
 ],
 "daikanyama": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Daikanyama_T-Site_%2852501800649%29.jpg/960px-Daikanyama_T-Site_%2852501800649%29.jpg",
   "w": 960,
   "file": "Daikanyama T-Site (52501800649).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Daikanyama_T-SITE_2016-04-04.jpg/960px-Daikanyama_T-SITE_2016-04-04.jpg",
   "w": 960,
   "file": "Daikanyama T-SITE 2016-04-04.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Daikanyama_T-Site_%2852501997300%29.jpg/960px-Daikanyama_T-Site_%2852501997300%29.jpg",
   "w": 960,
   "file": "Daikanyama T-Site (52501997300).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Daikanyama_T-Site_%2852501800754%29.jpg/960px-Daikanyama_T-Site_%2852501800754%29.jpg",
   "w": 960,
   "file": "Daikanyama T-Site (52501800754).jpg"
  }
 ],
 "meguro": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Walk_along_Meguro_river_near_Nakameguro_8.jpg/960px-Walk_along_Meguro_river_near_Nakameguro_8.jpg",
   "w": 960,
   "file": "Walk along Meguro river near Nakameguro 8.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Walk_along_Meguro_river_near_Nakameguro_4.jpg/960px-Walk_along_Meguro_river_near_Nakameguro_4.jpg",
   "w": 960,
   "file": "Walk along Meguro river near Nakameguro 4.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Walk_along_Meguro_river_near_Nakameguro_6.jpg/960px-Walk_along_Meguro_river_near_Nakameguro_6.jpg",
   "w": 960,
   "file": "Walk along Meguro river near Nakameguro 6.jpg"
  }
 ],
 "yoyogi": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mainstreet_Yoyogipark.JPG/960px-Mainstreet_Yoyogipark.JPG",
   "w": 960,
   "file": "Mainstreet_Yoyogipark.JPG"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Yoyogi_Koen_in_autumn.jpg/960px-Yoyogi_Koen_in_autumn.jpg",
   "w": 960,
   "file": "Yoyogi Koen in autumn.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Yoyogipark_in_Autumn_1.jpg/960px-Yoyogipark_in_Autumn_1.jpg",
   "w": 960,
   "file": "Yoyogipark in Autumn 1.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Yoyogipark_in_Autumn_2.jpg/960px-Yoyogipark_in_Autumn_2.jpg",
   "w": 960,
   "file": "Yoyogipark in Autumn 2.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Fallinyoyogipark-nov30-2014.jpg/960px-Fallinyoyogipark-nov30-2014.jpg",
   "w": 960,
   "file": "Fallinyoyogipark-nov30-2014.jpg"
  }
 ],
 "shimokita": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Shimokitazawa_Street_2015.jpg/960px-Shimokitazawa_Street_2015.jpg",
   "w": 960,
   "file": "Shimokitazawa_Street_2015.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Shimokitazawa_Street_2015.jpg/960px-Shimokitazawa_Street_2015.jpg",
   "w": 960,
   "file": "Shimokitazawa Street 2015.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Walk_in_Shimokitazawa_5.jpg/960px-Walk_in_Shimokitazawa_5.jpg",
   "w": 960,
   "file": "Walk in Shimokitazawa 5.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Dense_Street_in_Shimokitazawa_%2811919213554%29.jpg/960px-Dense_Street_in_Shimokitazawa_%2811919213554%29.jpg",
   "w": 960,
   "file": "Dense Street in Shimokitazawa (11919213554).jpg"
  }
 ],
 "nishiogi": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Nishiogikubo-Sta-S.jpg/960px-Nishiogikubo-Sta-S.jpg",
   "w": 960,
   "file": "Nishiogikubo-Sta-S.jpg"
  }
 ],
 "koenji": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Koshin_dori_shopping_street_koenjikita.JPG/960px-Koshin_dori_shopping_street_koenjikita.JPG",
   "w": 960,
   "file": "Koshin dori shopping street koenjikita.JPG"
  }
 ],
 "jimbocho": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Secondhand_bookstores%2C_at_Kanda-Jinbocho_1.jpg/960px-Secondhand_bookstores%2C_at_Kanda-Jinbocho_1.jpg",
   "w": 960,
   "file": "Secondhand_bookstores,_at_Kanda-Jinbocho_1.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Used_bookstore_in_Jimbocho_%2850495926321%29.jpg/960px-Used_bookstore_in_Jimbocho_%2850495926321%29.jpg",
   "w": 960,
   "file": "Used bookstore in Jimbocho (50495926321).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Sanseido_bookstore_kanda-jimbocho_Oct_15_2021_various.jpeg/960px-Sanseido_bookstore_kanda-jimbocho_Oct_15_2021_various.jpeg",
   "w": 960,
   "file": "Sanseido bookstore kanda-jimbocho Oct 15 2021 various.jpeg"
  }
 ],
 "shibamata": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Shibamata_Taishakuten_March_11_2021_various_20_44_16_882000.jpeg/960px-Shibamata_Taishakuten_March_11_2021_various_20_44_16_882000.jpeg",
   "w": 960,
   "file": "Shibamata_Taishakuten_March_11_2021_various_20_44_16_882000.jpeg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Shibamata_Taishakuten.jpg/960px-Shibamata_Taishakuten.jpg",
   "w": 960,
   "file": "Shibamata Taishakuten.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Shibamata_Taishakuten_-02.jpg/960px-Shibamata_Taishakuten_-02.jpg",
   "w": 960,
   "file": "Shibamata Taishakuten -02.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Shibamata_Taishakuten_March_11_2021_various_20_44_40_638000.jpeg/960px-Shibamata_Taishakuten_March_11_2021_various_20_44_40_638000.jpeg",
   "w": 960,
   "file": "Shibamata Taishakuten March 11 2021 various 20 44 40 638000.jpeg"
  }
 ],
 "jiyugaoka": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/%E3%83%9E%E3%83%AA%E3%82%AF%E3%83%AC%E3%83%BC%E3%83%AB%E9%80%9A%E3%82%8A_-_panoramio.jpg/960px-%E3%83%9E%E3%83%AA%E3%82%AF%E3%83%AC%E3%83%BC%E3%83%AB%E9%80%9A%E3%82%8A_-_panoramio.jpg",
   "w": 960,
   "file": "マリクレール通り_-_panoramio.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Street_views_in_Jiyugaoka_9.jpg/960px-Street_views_in_Jiyugaoka_9.jpg",
   "w": 960,
   "file": "Street views in Jiyugaoka 9.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Street_views_in_Jiyugaoka_13.jpg/960px-Street_views_in_Jiyugaoka_13.jpg",
   "w": 960,
   "file": "Street views in Jiyugaoka 13.jpg"
  }
 ],
 "harmonica": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Harmonica_side_street_1.jpg/960px-Harmonica_side_street_1.jpg",
   "w": 960,
   "file": "Harmonica_side_street_1.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/In_Harmonica_Yokocho%2C_Kichijoji_%2853417121000%29.jpg/960px-In_Harmonica_Yokocho%2C_Kichijoji_%2853417121000%29.jpg",
   "w": 960,
   "file": "In Harmonica Yokocho, Kichijoji (53417121000).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Harmonica_Yokocho_4.jpg/960px-Harmonica_Yokocho_4.jpg",
   "w": 960,
   "file": "Harmonica Yokocho 4.jpg"
  }
 ],
 "gaien": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Jingu-Gaien-Ginkgo-Street-04.jpg/960px-Jingu-Gaien-Ginkgo-Street-04.jpg",
   "w": 960,
   "file": "Jingu-Gaien-Ginkgo-Street-04.jpg"
  }
 ],
 "rikugien": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/ja/thumb/e/e0/Bunkyo_Rikugien_Panoramic_View_In_Late_Autumn_1.JPG/960px-Bunkyo_Rikugien_Panoramic_View_In_Late_Autumn_1.JPG",
   "w": 960,
   "file": "Bunkyo_Rikugien_Panoramic_View_In_Late_Autumn_1.JPG"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Bunkyo_Rikugien_Panoramic_View_In_Late_Autumn_1.JPG/960px-Bunkyo_Rikugien_Panoramic_View_In_Late_Autumn_1.JPG",
   "w": 960,
   "file": "Bunkyo Rikugien Panoramic View In Late Autumn 1.JPG"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Rikugien_Garden_%40_Komagome_%2811165852244%29.jpg/960px-Rikugien_Garden_%40_Komagome_%2811165852244%29.jpg",
   "w": 960,
   "file": "Rikugien Garden @ Komagome (11165852244).jpg"
  }
 ],
 "furukawa": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kyu-Furukawa_Tei_%28House%292.jpg/960px-Kyu-Furukawa_Tei_%28House%292.jpg",
   "w": 960,
   "file": "Kyu-Furukawa_Tei_(House)2.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Kyu-Furukawa_Garden_%40_Nishigahara_%2811029178266%29.jpg/960px-Kyu-Furukawa_Garden_%40_Nishigahara_%2811029178266%29.jpg",
   "w": 960,
   "file": "Kyu-Furukawa Garden @ Nishigahara (11029178266).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Rose_Festival_%40_Kyu_Furukawa_Garden_%2814018144140%29.jpg/960px-Rose_Festival_%40_Kyu_Furukawa_Garden_%2814018144140%29.jpg",
   "w": 960,
   "file": "Rose Festival @ Kyu Furukawa Garden (14018144140).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kyu-Furukawa_Tei_%28House%292.jpg/960px-Kyu-Furukawa_Tei_%28House%292.jpg",
   "w": 960,
   "file": "Kyu-Furukawa Tei (House)2.jpg"
  }
 ],
 "korakuen": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Koishikawa_korakuen_-_Osensui_and_Horaijima.jpg/960px-Koishikawa_korakuen_-_Osensui_and_Horaijima.jpg",
   "w": 960,
   "file": "Koishikawa_korakuen_-_Osensui_and_Horaijima.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Red_autumn_leaves_%40_Koishikawa_Korakuen_Gardens_%2811168255075%29.jpg/960px-Red_autumn_leaves_%40_Koishikawa_Korakuen_Gardens_%2811168255075%29.jpg",
   "w": 960,
   "file": "Red autumn leaves @ Koishikawa Korakuen Gardens (11168255075).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Koishikawa_Korakuen_Gardens_%2811168283853%29.jpg/960px-Koishikawa_Korakuen_Gardens_%2811168283853%29.jpg",
   "w": 960,
   "file": "Koishikawa Korakuen Gardens (11168283853).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Red_leaves_%40_Koishikawa_Korakuen_Gardens_%2811168460943%29.jpg/960px-Red_leaves_%40_Koishikawa_Korakuen_Gardens_%2811168460943%29.jpg",
   "w": 960,
   "file": "Red leaves @ Koishikawa Korakuen Gardens (11168460943).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Red_leaves_%40_Koishikawa_Korakuen_Gardens_%2811168238715%29.jpg/960px-Red_leaves_%40_Koishikawa_Korakuen_Gardens_%2811168238715%29.jpg",
   "w": 960,
   "file": "Red leaves @ Koishikawa Korakuen Gardens (11168238715).jpg"
  }
 ],
 "gyoen": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Autumn_in_Shinjuku_Park_-_panoramio.jpg/960px-Autumn_in_Shinjuku_Park_-_panoramio.jpg",
   "w": 960,
   "file": "Autumn in Shinjuku Park - panoramio.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Shinjuku_gyoen_sunny_autumn_day.jpg/960px-Shinjuku_gyoen_sunny_autumn_day.jpg",
   "w": 960,
   "file": "Shinjuku gyoen sunny autumn day.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Autumn_leaves_-_Shinjuku_gyoen_-_nov_2016.jpg/960px-Autumn_leaves_-_Shinjuku_gyoen_-_nov_2016.jpg",
   "w": 960,
   "file": "Autumn leaves - Shinjuku gyoen - nov 2016.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Shinjuku_Gyoen_autumn_season.jpg/960px-Shinjuku_Gyoen_autumn_season.jpg",
   "w": 960,
   "file": "Shinjuku Gyoen autumn season.jpg"
  }
 ],
 "nezumuseum": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/2018_Nezu_Museum_1.jpg/960px-2018_Nezu_Museum_1.jpg",
   "w": 960,
   "file": "2018_Nezu_Museum_1.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Nezu_Museum_Garden_view_201805.jpg/960px-Nezu_Museum_Garden_view_201805.jpg",
   "w": 960,
   "file": "Nezu Museum Garden view 201805.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Nezu_Museum_Garden_view1_201805.jpg/960px-Nezu_Museum_Garden_view1_201805.jpg",
   "w": 960,
   "file": "Nezu Museum Garden view1 201805.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Nezu_Museum_Garten-20091020-RM-114344.jpg/960px-Nezu_Museum_Garten-20091020-RM-114344.jpg",
   "w": 960,
   "file": "Nezu Museum Garten-20091020-RM-114344.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Nezu_Museum_Garten-20091020-RM-113550.jpg/960px-Nezu_Museum_Garten-20091020-RM-113550.jpg",
   "w": 960,
   "file": "Nezu Museum Garten-20091020-RM-113550.jpg"
  }
 ],
 "teien": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Tokyo_Metropolitan_Teien_Art_Museum.jpg/960px-Tokyo_Metropolitan_Teien_Art_Museum.jpg",
   "w": 960,
   "file": "Tokyo_Metropolitan_Teien_Art_Museum.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tokyo_Metropolitan_Teien_Art_Museum_PB292588.jpg/960px-Tokyo_Metropolitan_Teien_Art_Museum_PB292588.jpg",
   "w": 960,
   "file": "Tokyo Metropolitan Teien Art Museum PB292588.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Tokyo_Metropolitan_Teien_Art_Museum_PB292377.jpg/960px-Tokyo_Metropolitan_Teien_Art_Museum_PB292377.jpg",
   "w": 960,
   "file": "Tokyo Metropolitan Teien Art Museum PB292377.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tokyo_Metropolitan_Teien_Art_Museum_PB292520.jpg/960px-Tokyo_Metropolitan_Teien_Art_Museum_PB292520.jpg",
   "w": 960,
   "file": "Tokyo Metropolitan Teien Art Museum PB292520.jpg"
  }
 ],
 "showa": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2018_Showa_Memorial_Park_01.jpg/960px-2018_Showa_Memorial_Park_01.jpg",
   "w": 960,
   "file": "2018_Showa_Memorial_Park_01.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/2018_Showa_Memorial_Park_02.jpg/960px-2018_Showa_Memorial_Park_02.jpg",
   "w": 960,
   "file": "2018 Showa Memorial Park 02.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2018_Showa_Memorial_Park_01.jpg/960px-2018_Showa_Memorial_Park_01.jpg",
   "w": 960,
   "file": "2018 Showa Memorial Park 01.jpg"
  }
 ],
 "hamarikyu": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/2018_Hama-riky%C5%AB_Garden_02.jpg/960px-2018_Hama-riky%C5%AB_Garden_02.jpg",
   "w": 960,
   "file": "2018_Hama-rikyū_Garden_02.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tokio_Hamarikyu-Garten-20091017-RM-141110.jpg/960px-Tokio_Hamarikyu-Garten-20091017-RM-141110.jpg",
   "w": 960,
   "file": "Tokio Hamarikyu-Garten-20091017-RM-141110.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Tokio_Hamarikyu-Garten-20091017-RM-142118.jpg/960px-Tokio_Hamarikyu-Garten-20091017-RM-142118.jpg",
   "w": 960,
   "file": "Tokio Hamarikyu-Garten-20091017-RM-142118.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Tokio_Hamarikyu-Garten-20091017-RM-142657.jpg/960px-Tokio_Hamarikyu-Garten-20091017-RM-142657.jpg",
   "w": 960,
   "file": "Tokio Hamarikyu-Garten-20091017-RM-142657.jpg"
  }
 ],
 "higashigyoen": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/%C5%8Cte-mon_gate%2C_Edo_Castle_Tokyo_Japan_by_Don_Ramey_Logan.jpg/960px-%C5%8Cte-mon_gate%2C_Edo_Castle_Tokyo_Japan_by_Don_Ramey_Logan.jpg",
   "w": 960,
   "file": "Ōte-mon_gate,_Edo_Castle_Tokyo_Japan_by_Don_Ramey_Logan.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Imperial_Palace_East_Garden_%40_Tokyo_%2811165579846%29.jpg/960px-Imperial_Palace_East_Garden_%40_Tokyo_%2811165579846%29.jpg",
   "w": 960,
   "file": "Imperial Palace East Garden @ Tokyo (11165579846).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Imperial_Palace_East_Garden_%40_Tokyo_%2811165738014%29.jpg/960px-Imperial_Palace_East_Garden_%40_Tokyo_%2811165738014%29.jpg",
   "w": 960,
   "file": "Imperial Palace East Garden @ Tokyo (11165738014).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Imperial_Palace_East_Garden_%40_Tokyo_%2811165733453%29.jpg/960px-Imperial_Palace_East_Garden_%40_Tokyo_%2811165733453%29.jpg",
   "w": 960,
   "file": "Imperial Palace East Garden @ Tokyo (11165733453).jpg"
  }
 ],
 "hibiya": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Hibiya_Park_summer.jpg/960px-Hibiya_Park_summer.jpg",
   "w": 960,
   "file": "Hibiya_Park_summer.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Autumn_in_the_Hibiya_Park_%2832924609708%29.jpg/960px-Autumn_in_the_Hibiya_Park_%2832924609708%29.jpg",
   "w": 960,
   "file": "Autumn in the Hibiya Park (32924609708).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Autumn_in_the_Hibiya_Park_%2839834979803%29.jpg/960px-Autumn_in_the_Hibiya_Park_%2839834979803%29.jpg",
   "w": 960,
   "file": "Autumn in the Hibiya Park (39834979803).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Morning_stroll_last_gasp_of_autumn_in_Hibiya_Park_%2852565156459%29.jpg/960px-Morning_stroll_last_gasp_of_autumn_in_Hibiya_Park_%2852565156459%29.jpg",
   "w": 960,
   "file": "Morning stroll last gasp of autumn in Hibiya Park (52565156459).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tokyo_-_Hibiya_Park_-_last_gasp_of_autumn_%2852565406143%29.jpg/960px-Tokyo_-_Hibiya_Park_-_last_gasp_of_autumn_%2852565406143%29.jpg",
   "w": 960,
   "file": "Tokyo - Hibiya Park - last gasp of autumn (52565406143).jpg"
  }
 ],
 "ueno": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Pink_swanboat_hosting_a_real_bird_on_its_head%2C_on_Shinobazu_Pond%2C_Ueno_Park%2C_Tokyo.jpg/960px-Pink_swanboat_hosting_a_real_bird_on_its_head%2C_on_Shinobazu_Pond%2C_Ueno_Park%2C_Tokyo.jpg",
   "w": 960,
   "file": "Pink swanboat hosting a real bird on its head, on Shinobazu Pond, Ueno Park, Tokyo.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Shinobazu_pond_sunset_Ueno_park_panorama_2024_July_29.jpeg/960px-Shinobazu_pond_sunset_Ueno_park_panorama_2024_July_29.jpeg",
   "w": 960,
   "file": "Shinobazu pond sunset Ueno park panorama 2024 July 29.jpeg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Shinobazu_no_ike_by_kolshica_in_Ueno_Park%2C_Tokyo.jpg/960px-Shinobazu_no_ike_by_kolshica_in_Ueno_Park%2C_Tokyo.jpg",
   "w": 960,
   "file": "Shinobazu no ike by kolshica in Ueno Park, Tokyo.jpg"
  }
 ],
 "takao": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/%E9%AB%98%E5%B0%BE%E5%B1%B1%E3%83%BC%EF%BC%92.JPG/960px-%E9%AB%98%E5%B0%BE%E5%B1%B1%E3%83%BC%EF%BC%92.JPG",
   "w": 960,
   "file": "高尾山ー２.JPG"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Temple_on_Mount_Takao.jpg/960px-Temple_on_Mount_Takao.jpg",
   "w": 960,
   "file": "Temple on Mount Takao.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Takao-Lift.JPG/960px-Takao-Lift.JPG",
   "w": 960,
   "file": "Takao-Lift.JPG"
  }
 ],
 "sumida": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sumida_Park.jpg/960px-Sumida_Park.jpg",
   "w": 960,
   "file": "Sumida_Park.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Asahi_Breweries_headquarters_building_with_the_Asahi_Flame_and_Skytree_at_blue_hour_with_full_moon%2C_Sumida-ku%2C_Tokyo%2C_Japan.jpg/960px-Asahi_Breweries_headquarters_building_with_the_Asahi_Flame_and_Skytree_at_blue_hour_with_full_moon%2C_Sumida-ku%2C_Tokyo%2C_Japan.jpg",
   "w": 960,
   "file": "Asahi Breweries headquarters building with the Asahi Flame and Skytree at blue hour with full moon, Sumida-ku, Tokyo, Japan.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tokyo_Skytree%2C_view_from_Kuramae-bashi_bridge_on_Sumida-gawa_river._%2814555040147%29.jpg/960px-Tokyo_Skytree%2C_view_from_Kuramae-bashi_bridge_on_Sumida-gawa_river._%2814555040147%29.jpg",
   "w": 960,
   "file": "Tokyo Skytree, view from Kuramae-bashi bridge on Sumida-gawa river. (14555040147).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Sumidagawa_Bridge_of_Tobu_Skytree_Line_and_Tokyo_Skytree_Tower_2.JPG/960px-Sumidagawa_Bridge_of_Tobu_Skytree_Line_and_Tokyo_Skytree_Tower_2.JPG",
   "w": 960,
   "file": "Sumidagawa Bridge of Tobu Skytree Line and Tokyo Skytree Tower 2.JPG"
  }
 ],
 "sensoji": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Asakusa_Senso-ji_2021-12_ac_%282%29.jpg/960px-Asakusa_Senso-ji_2021-12_ac_%282%29.jpg",
   "w": 960,
   "file": "Asakusa_Senso-ji_2021-12_ac_(2).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Sensoji_at_night_4.jpg/960px-Sensoji_at_night_4.jpg",
   "w": 960,
   "file": "Sensoji at night 4.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sensoji_at_night_5.JPG/960px-Sensoji_at_night_5.JPG",
   "w": 960,
   "file": "Sensoji at night 5.JPG"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Sensoji_at_night.JPG/960px-Sensoji_at_night.JPG",
   "w": 960,
   "file": "Sensoji at night.JPG"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Sensoji_at_night_8.jpg/960px-Sensoji_at_night_8.jpg",
   "w": 960,
   "file": "Sensoji at night 8.jpg"
  }
 ],
 "inokashira": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Inokashira_Park_Momiji.jpg/960px-Inokashira_Park_Momiji.jpg",
   "w": 960,
   "file": "Inokashira Park Momiji.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Inokashira_park_pond_2024.jpg/960px-Inokashira_park_pond_2024.jpg",
   "w": 960,
   "file": "Inokashira park pond 2024.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Inokashira_Park_Momiji_1.jpg/960px-Inokashira_Park_Momiji_1.jpg",
   "w": 960,
   "file": "Inokashira Park Momiji 1.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inokashira_Pond.jpg/960px-Inokashira_Pond.jpg",
   "w": 960,
   "file": "Inokashira Pond.jpg"
  }
 ],
 "futako": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Futako-Tamagawa_overview_2018.jpg/960px-Futako-Tamagawa_overview_2018.jpg",
   "w": 960,
   "file": "Futako-Tamagawa_overview_2018.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Tamagawa-river%2CFutako-Tamagawa_-_panoramio.jpg/960px-Tamagawa-river%2CFutako-Tamagawa_-_panoramio.jpg",
   "w": 960,
   "file": "Tamagawa-river,Futako-Tamagawa - panoramio.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Futako_tamagawa_river_2007_%281112853910%29.jpg/960px-Futako_tamagawa_river_2007_%281112853910%29.jpg",
   "w": 960,
   "file": "Futako tamagawa river 2007 (1112853910).jpg"
  }
 ],
 "odaiba": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Odaiba_Seashore_Park.jpg/960px-Odaiba_Seashore_Park.jpg",
   "w": 960,
   "file": "Odaiba_Seashore_Park.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Little_girl_gazes_the_Rainbow_Bridge_in_Odaiba_beach_on_a_cloudy_day_at_sunset.jpg/960px-Little_girl_gazes_the_Rainbow_Bridge_in_Odaiba_beach_on_a_cloudy_day_at_sunset.jpg",
   "w": 960,
   "file": "Little girl gazes the Rainbow Bridge in Odaiba beach on a cloudy day at sunset.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Rainbow_bridge%2C_seen_from_the_beach_at_Odaiba_%286155473457%29.jpg/960px-Rainbow_bridge%2C_seen_from_the_beach_at_Odaiba_%286155473457%29.jpg",
   "w": 960,
   "file": "Rainbow bridge, seen from the beach at Odaiba (6155473457).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Rainbow_bridge_from_Decks_beach_-_panoramio.jpg/960px-Rainbow_bridge_from_Decks_beach_-_panoramio.jpg",
   "w": 960,
   "file": "Rainbow bridge from Decks beach - panoramio.jpg"
  }
 ],
 "bunkyo": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Skyscrapers_of_Shinjuku_2009_January_%28revised%29.jpg/960px-Skyscrapers_of_Shinjuku_2009_January_%28revised%29.jpg",
   "w": 960,
   "file": "Skyscrapers of Shinjuku 2009 January (revised).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Observation_deck%2C_Bunkyo_Civic_Center_20190422_1.jpg/960px-Observation_deck%2C_Bunkyo_Civic_Center_20190422_1.jpg",
   "w": 960,
   "file": "Observation deck, Bunkyo Civic Center 20190422 1.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Bunkyo_Civic_Center_-_Observation_Deck.jpg/960px-Bunkyo_Civic_Center_-_Observation_Deck.jpg",
   "w": 960,
   "file": "Bunkyo Civic Center - Observation Deck.jpg"
  }
 ],
 "shibuyasky": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Shibuya_Scramble_Square_-_SHIBUYA_SKY_10.jpg/960px-Shibuya_Scramble_Square_-_SHIBUYA_SKY_10.jpg",
   "w": 960,
   "file": "Shibuya Scramble Square - SHIBUYA SKY 10.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Shibuya_Scramble_Square_2.jpg/960px-Shibuya_Scramble_Square_2.jpg",
   "w": 960,
   "file": "Shibuya Scramble Square 2.jpg"
  }
 ],
 "tokyotower": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/%E6%97%A5%E6%9C%AC%E9%9B%BB%E6%B3%A2%E5%A1%94%EF%BC%88%E6%9D%B1%E4%BA%AC%E3%82%BF%E3%83%AF%E3%83%BC%EF%BC%89.jpg/960px-%E6%97%A5%E6%9C%AC%E9%9B%BB%E6%B3%A2%E5%A1%94%EF%BC%88%E6%9D%B1%E4%BA%AC%E3%82%BF%E3%83%AF%E3%83%BC%EF%BC%89.jpg",
   "w": 960,
   "file": "日本電波塔（東京タワー）.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Tokyo_Tower_and_Zojoji_temple_%287475558188%29.jpg/960px-Tokyo_Tower_and_Zojoji_temple_%287475558188%29.jpg",
   "w": 960,
   "file": "Tokyo Tower and Zojoji temple (7475558188).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Tokyo_Tower_path_next_to_Zojoji_2.jpg/960px-Tokyo_Tower_path_next_to_Zojoji_2.jpg",
   "w": 960,
   "file": "Tokyo Tower path next to Zojoji 2.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Tokyo_Marathon_2010_Tokyo_Tower_and_Zojoji.jpg/960px-Tokyo_Marathon_2010_Tokyo_Tower_and_Zojoji.jpg",
   "w": 960,
   "file": "Tokyo Marathon 2010 Tokyo Tower and Zojoji.jpg"
  }
 ],
 "toden": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/TodenArakawaline8800Asukayama2.jpg/960px-TodenArakawaline8800Asukayama2.jpg",
   "w": 960,
   "file": "TodenArakawaline8800Asukayama2.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Toden_Arakawa_Line_Near_the_Otsuka_Station.jpg/960px-Toden_Arakawa_Line_Near_the_Otsuka_Station.jpg",
   "w": 960,
   "file": "Toden Arakawa Line Near the Otsuka Station.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Tokyo_Sakura_Tram_%28%E9%83%BD%E9%9B%BB%E8%8D%92%E5%B7%9D%E7%B7%9A%29.jpg/960px-Tokyo_Sakura_Tram_%28%E9%83%BD%E9%9B%BB%E8%8D%92%E5%B7%9D%E7%B7%9A%29.jpg",
   "w": 960,
   "file": "Tokyo Sakura Tram (都電荒川線).jpg"
  }
 ],
 "setagaya": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tokyu-EC300-3.jpg/960px-Tokyu-EC300-3.jpg",
   "w": 960,
   "file": "Tokyu-EC300-3.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Tokyu_Setagaya_Line_-01.jpg/960px-Tokyu_Setagaya_Line_-01.jpg",
   "w": 960,
   "file": "Tokyu Setagaya Line -01.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Tokyu_Setagaya_Line_-02.jpg/960px-Tokyu_Setagaya_Line_-02.jpg",
   "w": 960,
   "file": "Tokyu Setagaya Line -02.jpg"
  }
 ],
 "gotokuji": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/G%C5%8Dtoku-ji.jpg/960px-G%C5%8Dtoku-ji.jpg",
   "w": 960,
   "file": "Gōtoku-ji.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/2015-10-20_Maneki_neko_in_Gotokuji_02.jpg/960px-2015-10-20_Maneki_neko_in_Gotokuji_02.jpg",
   "w": 960,
   "file": "2015-10-20 Maneki neko in Gotokuji 02.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/2015-10-20_Maneki_neko_in_Gotokuji_03.jpg/960px-2015-10-20_Maneki_neko_in_Gotokuji_03.jpg",
   "w": 960,
   "file": "2015-10-20 Maneki neko in Gotokuji 03.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Maneki-neko_%28Japanese_Lucky_Cat%29_Statues_at_Gotokuji_Temple%2C_Tokyo.jpg/960px-Maneki-neko_%28Japanese_Lucky_Cat%29_Statues_at_Gotokuji_Temple%2C_Tokyo.jpg",
   "w": 960,
   "file": "Maneki-neko (Japanese Lucky Cat) Statues at Gotokuji Temple, Tokyo.jpg"
  }
 ],
 "tsukiji": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2018_Tsukiji_fish_market.jpg/960px-2018_Tsukiji_fish_market.jpg",
   "w": 960,
   "file": "2018_Tsukiji_fish_market.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Tsukiji_Outer_Market_2.jpg/960px-Tsukiji_Outer_Market_2.jpg",
   "w": 960,
   "file": "Tsukiji Outer Market 2.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Tsukiji_Outer_Market_-06.jpg/960px-Tsukiji_Outer_Market_-06.jpg",
   "w": 960,
   "file": "Tsukiji Outer Market -06.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Tsukiji_Outer_Market_-02.jpg/960px-Tsukiji_Outer_Market_-02.jpg",
   "w": 960,
   "file": "Tsukiji Outer Market -02.jpg"
  }
 ],
 "enoden": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Enoden_and_Shonan_sea_001.jpg/960px-Enoden_and_Shonan_sea_001.jpg",
   "w": 960,
   "file": "Enoden and Shonan sea 001.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Waiting_to_board_the_Enoden_train_at_Fujisawa_Station.jpg/960px-Waiting_to_board_the_Enoden_train_at_Fujisawa_Station.jpg",
   "w": 960,
   "file": "Waiting to board the Enoden train at Fujisawa Station.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Enoden_Train_%40_Hase_%2813920893215%29.jpg/960px-Enoden_Train_%40_Hase_%2813920893215%29.jpg",
   "w": 960,
   "file": "Enoden Train @ Hase (13920893215).jpg"
  }
 ],
 "hasedera": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Kamakura_Hasedera_Kannondou.jpg/960px-Kamakura_Hasedera_Kannondou.jpg",
   "w": 960,
   "file": "Kamakura_Hasedera_Kannondou.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/230128_Hasedera_Kamakura_Kanagawa_pref_Japan04s3.jpg/960px-230128_Hasedera_Kamakura_Kanagawa_pref_Japan04s3.jpg",
   "w": 960,
   "file": "230128 Hasedera Kamakura Kanagawa pref Japan04s3.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/1993-11-23_View_from_Hasedera_%28Kamakura%29.jpg/960px-1993-11-23_View_from_Hasedera_%28Kamakura%29.jpg",
   "w": 960,
   "file": "1993-11-23 View from Hasedera (Kamakura).jpg"
  }
 ],
 "daibutsu": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/230128_Kamakura_Daibutsu_Japan01s3.jpg/960px-230128_Kamakura_Daibutsu_Japan01s3.jpg",
   "w": 960,
   "file": "230128_Kamakura_Daibutsu_Japan01s3.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Kamakura_Budda_Daibutsu_front_1885.jpg/960px-Kamakura_Budda_Daibutsu_front_1885.jpg",
   "w": 960,
   "file": "Kamakura Budda Daibutsu front 1885.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/The_Great_Buddha_of_K%C5%8Dtoku-in_%28Kamakura_Daibutsu%29.jpg/960px-The_Great_Buddha_of_K%C5%8Dtoku-in_%28Kamakura_Daibutsu%29.jpg",
   "w": 960,
   "file": "The Great Buddha of Kōtoku-in (Kamakura Daibutsu).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kamakura_Daibutsu_20170210.jpg/960px-Kamakura_Daibutsu_20170210.jpg",
   "w": 960,
   "file": "Kamakura Daibutsu 20170210.jpg"
  }
 ],
 "hokokuji": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Hokokuji_bamboo_forest_%285712271526%29.jpg/960px-Hokokuji_bamboo_forest_%285712271526%29.jpg",
   "w": 960,
   "file": "Hokokuji bamboo forest (5712271526).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Hokokuji_Bamboo_Forest_Kamakura.jpg/960px-Hokokuji_Bamboo_Forest_Kamakura.jpg",
   "w": 960,
   "file": "Hokokuji Bamboo Forest Kamakura.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/H%C5%8Dkoku-ji%2C_Bamboo_Forest_001.jpg/960px-H%C5%8Dkoku-ji%2C_Bamboo_Forest_001.jpg",
   "w": 960,
   "file": "Hōkoku-ji, Bamboo Forest 001.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Peeking_Sun_%2821907530901%29.jpg/960px-Peeking_Sun_%2821907530901%29.jpg",
   "w": 960,
   "file": "Peeking Sun (21907530901).jpg"
  }
 ],
 "engakuji": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Engakuji_Sanmon_Kamakura.jpg",
   "w": 800,
   "file": "Engakuji_Sanmon_Kamakura.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Engakuji_Myokochi.jpg/960px-Engakuji_Myokochi.jpg",
   "w": 960,
   "file": "Engakuji Myokochi.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Engakuji-Shariden-M9239.jpg/960px-Engakuji-Shariden-M9239.jpg",
   "w": 960,
   "file": "Engakuji-Shariden-M9239.jpg"
  }
 ],
 "hachimangu": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/TsurugaokaHachimangu_by_ulysses_powers_in_Kamakura.jpg/960px-TsurugaokaHachimangu_by_ulysses_powers_in_Kamakura.jpg",
   "w": 960,
   "file": "TsurugaokaHachimangu_by_ulysses_powers_in_Kamakura.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tsurugaoka_Hachimangu_001.jpg/960px-Tsurugaoka_Hachimangu_001.jpg",
   "w": 960,
   "file": "Tsurugaoka Hachimangu 001.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tsurugaoka_Hachimangu_%2811417%29.jpg/960px-Tsurugaoka_Hachimangu_%2811417%29.jpg",
   "w": 960,
   "file": "Tsurugaoka Hachimangu (11417).jpg"
  }
 ],
 "shichiri": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/230128_At_Shichirigahama_Kamakura_Kanagawa_pref_Japan02s3.jpg/960px-230128_At_Shichirigahama_Kamakura_Kanagawa_pref_Japan02s3.jpg",
   "w": 960,
   "file": "230128_At_Shichirigahama_Kamakura_Kanagawa_pref_Japan02s3.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Shichirigahama_from_Inamuragasaki.jpg/960px-Shichirigahama_from_Inamuragasaki.jpg",
   "w": 960,
   "file": "Shichirigahama from Inamuragasaki.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Shichirigahama_op_een_zomerdag%2C_-21_juli_2024_12%EF%BC%9A46.jpg/960px-Shichirigahama_op_een_zomerdag%2C_-21_juli_2024_12%EF%BC%9A46.jpg",
   "w": 960,
   "file": "Shichirigahama op een zomerdag, -21 juli 2024 12：46.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Een_meisje_met_zwemband_staat_aan_de_waterkant_van_strand_Shichirigahama_in_Kamakura%2C_-23_augustus_2012_13%EF%BC%9A50.jpg/960px-Een_meisje_met_zwemband_staat_aan_de_waterkant_van_strand_Shichirigahama_in_Kamakura%2C_-23_augustus_2012_13%EF%BC%9A50.jpg",
   "w": 960,
   "file": "Een meisje met zwemband staat aan de waterkant van strand Shichirigahama in Kamakura, -23 augustus 2012 13：50.jpg"
  }
 ],
 "kamakurakoko": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kamakura-Koko-Mae_Station.jpg/960px-Kamakura-Koko-Mae_Station.jpg",
   "w": 960,
   "file": "Kamakura-Koko-Mae_Station.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Enoden-EN08-Kamakura-koko-mae-station-building-20200315-134942.jpg/960px-Enoden-EN08-Kamakura-koko-mae-station-building-20200315-134942.jpg",
   "w": 960,
   "file": "Enoden-EN08-Kamakura-koko-mae-station-building-20200315-134942.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kamakura-Koko-Mae_Station.jpg/960px-Kamakura-Koko-Mae_Station.jpg",
   "w": 960,
   "file": "Kamakura-Koko-Mae Station.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Kamakura_Koko_mae_Station_%2853149810226%29.jpg/960px-Kamakura_Koko_mae_Station_%2853149810226%29.jpg",
   "w": 960,
   "file": "Kamakura Koko mae Station (53149810226).jpg"
  }
 ],
 "enoshima": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Enoshima_view_from_Kugenuma_beach.jpg/960px-Enoshima_view_from_Kugenuma_beach.jpg",
   "w": 960,
   "file": "Enoshima_view_from_Kugenuma_beach.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Sunset_at_Enoshima_%289409544613%29.jpg/960px-Sunset_at_Enoshima_%289409544613%29.jpg",
   "w": 960,
   "file": "Sunset at Enoshima (9409544613).jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Enoshima-sunset-jan11-2016.jpg/960px-Enoshima-sunset-jan11-2016.jpg",
   "w": 960,
   "file": "Enoshima-sunset-jan11-2016.jpg"
  }
 ],
 "kayaba": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Kayaba_Coffee_by_Sansakisaka_Street_in_Ueno_Sakuragi%2C_Taito%2C_Tokyo%2C_Japan%2C_2024_May_-_2.jpg/960px-Kayaba_Coffee_by_Sansakisaka_Street_in_Ueno_Sakuragi%2C_Taito%2C_Tokyo%2C_Japan%2C_2024_May_-_2.jpg",
   "w": 960,
   "file": "Kayaba Coffee by Sansakisaka Street in Ueno Sakuragi, Taito, Tokyo, Japan, 2024 May - 2.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Kayaba_Coffee_by_Sansakisaka_Street_in_Ueno_Sakuragi%2C_Taito%2C_Tokyo%2C_Japan%2C_2024_May.jpg/960px-Kayaba_Coffee_by_Sansakisaka_Street_in_Ueno_Sakuragi%2C_Taito%2C_Tokyo%2C_Japan%2C_2024_May.jpg",
   "w": 960,
   "file": "Kayaba Coffee by Sansakisaka Street in Ueno Sakuragi, Taito, Tokyo, Japan, 2024 May.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/%E3%82%AB%E3%83%A4%E3%83%90%E7%8F%88%E7%90%B2_%2818564719713%29.jpg/960px-%E3%82%AB%E3%83%A4%E3%83%90%E7%8F%88%E7%90%B2_%2818564719713%29.jpg",
   "w": 960,
   "file": "カヤバ珈琲 (18564719713).jpg"
  }
 ]
};
