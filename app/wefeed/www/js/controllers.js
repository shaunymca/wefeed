angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('PostsCtrl', function($scope) {
  // this will come from the backend eventually
  $scope.posts = [
    {image : "https://cdn3.vox-cdn.com/thumbor/ksRFJ97w2mS-uufZovectlfZq7Y=/0x84:500x417/400x267/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/49610873/Imageresizer.0.jpeg",
    title : 'A new piece of hardware',
    author : 'Frank the Tank',
    content : "<article>\n\n    \n\n    <header>\n  \n\n    \n\n\n    \n\n  <p>Rumors of wireless charging in the next iPhone are bolstered by recent hires</p>\n\n  \n\n  \n  \n  \n\n  \n</header>\n\n\n    <div>\n\n      <div>\n        <div>\n      <div>\n        <picture>\n  <source>\n  <img src=\"https://cdn0.vox-cdn.com/thumbor/_Nm_W7ywuy9yOnTh-O4-p2j900k=/3x0:1314x874/1080x720/cdn0.vox-cdn.com/uploads/chorus_image/image/49609907/Apple-lightning-2014-09-23-verge-1020.0.0.jpg\">\n</source></picture>\n        \n\n      </div>\n      \n  <div>\n    \n<div>\n    <a href=\"http://www.theverge.com/\">\n      \n\n    </a>\n  <div>\n      \n      \n  </div>\n</div>\n\n    \n\n    <div>\n      <p>Last week a former engineer from the much hyped wireless charging startup uBeam left some scathing criticism of the company <a href=\"http://liesandstartuppr.blogspot.com/\">on his blog</a>. He compared uBeam to the now disgraced startup Theranos, saying that uBeam has avoided any full-fledged public demonstrations because its technology doesn't work as advertised. While it can do some very limited charging over a short distance, he allowed, the basic laws of physics prevent the product from being practical at any commercial level.</p>\r\n<p>While poking around LinkedIn to try and figure out the identity of this blogger, I came across an interesting data point. In the last four months two former uBeam engineers with expertise in wireless charging and ultrasonic technology had been hired by Apple. In fact, public LinkedIn data on Apple's recent hires shows these former uBeam staffers were part of a much broader trend. In the last two years Apple has hired more than a dozen staffers with expertise in wireless charging.</p>\n\n\r\n \r\n\r\n\r\n<p>Earlier this year <a href=\"http://www.bloomberg.com/news/articles/2016-01-29/apple-said-developing-wireless-charged-phone-for-as-soon-as-2017-ijz3i4si\"><i>Bloomberg</i> reported</a> that Apple was hoping to add wireless charging to the new iPhone it releases in 2017. And the <i>Bloomberg</i> report specified that Apple wanted to go beyond the minor convenience of a charging mat — which lets you avoid the cable, but doesn't fully free up your device. According to <i>Bloomberg</i>'s sources, Apple wants to implement a much more advanced technology that would allow you to walk around a room and have your phone charging the entire time.</p>\r\n<p>That, of course, is the exactly the promise uBeam has been making. And as <i>Bloomberg</i> points out, Apple has filed patents around this idea before. Back in 2010 it floated the notion of using your personal computer as a charging station for various mobile devices in the vicinity. It hoped to work at a distance of about three feet using something called near field magnetic resonance. uBeam, on the other hand, has said that it hopes to use ultrasound waves.</p>\r\n<p>Two other companies, <a href=\"http://www.ossia.com/solutions/\">Ossia</a> and <a href=\"http://seekingalpha.com/article/3973899-energous-watt-ceo-stephen-rizzone-q1-2016-results-earnings-call-transcript?part=single\">Energous</a>, claim to have technology at a distance, but again, neither has submitted those technologies to rigorous public testing or shipped a commercial product that backs up that promise. Ossia's <a href=\"http://www.ossia.com/wp-content/uploads/2014/07/US8159364.pdf\">patents</a> focus on using microwaves to wirelessly transmit energy, while Energous claims to <a href=\"http://www.energous.com/transmitters/\">use radio frequencies</a>.</p>\r\n\n\n\r\n<p>There are many approaches to crafting a breakthrough in wireless charging, and also many applications for the expertise Apple has been acquiring. Its smartwatch already works with wireless charging, which could explain the hiring over the last two years. And it has hired lots of engineers who specialize in ultrasound technology to work on haptics and sensing for wearable devices, so the recent pick-ups from uBeam could be aimed at developing technology unrelated to charging. Apple declined to comment for this piece.</p>\r\n<p>Still, it's hard to imagine that this isn't an area Apple is at least investigating. Its most recent earnings release revealed a decline in iPhone sales and its first year-over-year revenue decline in 13 years. It is no doubt eager to find ways to differentiate its next generation of smartphones and tablets from the rest of the market. For Apple, which has over $200 billion in the bank and has <a href=\"http://www.aboveavalon.com/notes/2016/5/11/apple-rd-reveals-a-pivot-is-coming\">been ramping up R&amp;D spending</a>, there is little downside. If it finds a breakthrough, it can use it. If not, it will move on. Companies like Energous, which <a href=\"http://seekingalpha.com/article/2358075-watt-be-prepared-to-lose-all-of-your-investment\">went public without a revenue stream</a>, and uBeam, which has raised over $20 million in funding over the last five years but still has no commercial product, don't have that option.</p>\n      \n\n    </div>\n  </div>\n</div>\n\n\n        \n\n        \n\n\n      </div>\n\n      \n\n    </div>\n\n    \n\n    \n\n\n    \n\n  </article>\n\n"
    },
    {image : "https://cdn0.vox-cdn.com/thumbor/EBBUz90lFC8QmSvM7nIHwcY3Myc=/42x0:915x873/350x350/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/49609907/Apple-lightning-2014-09-23-verge-1020.0.0.jpg",
    title : 'This is a title of a thing',
    author : 'Zapp Brannigan',
    content : "<article>\n\n    \n\n    <header>\n  \n\n    \n\n\n    \n\n  <p>Rumors of wireless charging in the next iPhone are bolstered by recent hires</p>\n\n  \n\n  \n  \n  \n\n  \n</header>\n\n\n    <div>\n\n      <div>\n        <div>\n      <div>\n        <picture>\n  <source>\n  <img src=\"https://cdn0.vox-cdn.com/thumbor/_Nm_W7ywuy9yOnTh-O4-p2j900k=/3x0:1314x874/1080x720/cdn0.vox-cdn.com/uploads/chorus_image/image/49609907/Apple-lightning-2014-09-23-verge-1020.0.0.jpg\">\n</source></picture>\n        \n\n      </div>\n      \n  <div>\n    \n<div>\n    <a href=\"http://www.theverge.com/\">\n      \n\n    </a>\n  <div>\n      \n      \n  </div>\n</div>\n\n    \n\n    <div>\n      <p>Last week a former engineer from the much hyped wireless charging startup uBeam left some scathing criticism of the company <a href=\"http://liesandstartuppr.blogspot.com/\">on his blog</a>. He compared uBeam to the now disgraced startup Theranos, saying that uBeam has avoided any full-fledged public demonstrations because its technology doesn't work as advertised. While it can do some very limited charging over a short distance, he allowed, the basic laws of physics prevent the product from being practical at any commercial level.</p>\r\n<p>While poking around LinkedIn to try and figure out the identity of this blogger, I came across an interesting data point. In the last four months two former uBeam engineers with expertise in wireless charging and ultrasonic technology had been hired by Apple. In fact, public LinkedIn data on Apple's recent hires shows these former uBeam staffers were part of a much broader trend. In the last two years Apple has hired more than a dozen staffers with expertise in wireless charging.</p>\n\n\r\n \r\n\r\n\r\n<p>Earlier this year <a href=\"http://www.bloomberg.com/news/articles/2016-01-29/apple-said-developing-wireless-charged-phone-for-as-soon-as-2017-ijz3i4si\"><i>Bloomberg</i> reported</a> that Apple was hoping to add wireless charging to the new iPhone it releases in 2017. And the <i>Bloomberg</i> report specified that Apple wanted to go beyond the minor convenience of a charging mat — which lets you avoid the cable, but doesn't fully free up your device. According to <i>Bloomberg</i>'s sources, Apple wants to implement a much more advanced technology that would allow you to walk around a room and have your phone charging the entire time.</p>\r\n<p>That, of course, is the exactly the promise uBeam has been making. And as <i>Bloomberg</i> points out, Apple has filed patents around this idea before. Back in 2010 it floated the notion of using your personal computer as a charging station for various mobile devices in the vicinity. It hoped to work at a distance of about three feet using something called near field magnetic resonance. uBeam, on the other hand, has said that it hopes to use ultrasound waves.</p>\r\n<p>Two other companies, <a href=\"http://www.ossia.com/solutions/\">Ossia</a> and <a href=\"http://seekingalpha.com/article/3973899-energous-watt-ceo-stephen-rizzone-q1-2016-results-earnings-call-transcript?part=single\">Energous</a>, claim to have technology at a distance, but again, neither has submitted those technologies to rigorous public testing or shipped a commercial product that backs up that promise. Ossia's <a href=\"http://www.ossia.com/wp-content/uploads/2014/07/US8159364.pdf\">patents</a> focus on using microwaves to wirelessly transmit energy, while Energous claims to <a href=\"http://www.energous.com/transmitters/\">use radio frequencies</a>.</p>\r\n\n\n\r\n<p>There are many approaches to crafting a breakthrough in wireless charging, and also many applications for the expertise Apple has been acquiring. Its smartwatch already works with wireless charging, which could explain the hiring over the last two years. And it has hired lots of engineers who specialize in ultrasound technology to work on haptics and sensing for wearable devices, so the recent pick-ups from uBeam could be aimed at developing technology unrelated to charging. Apple declined to comment for this piece.</p>\r\n<p>Still, it's hard to imagine that this isn't an area Apple is at least investigating. Its most recent earnings release revealed a decline in iPhone sales and its first year-over-year revenue decline in 13 years. It is no doubt eager to find ways to differentiate its next generation of smartphones and tablets from the rest of the market. For Apple, which has over $200 billion in the bank and has <a href=\"http://www.aboveavalon.com/notes/2016/5/11/apple-rd-reveals-a-pivot-is-coming\">been ramping up R&amp;D spending</a>, there is little downside. If it finds a breakthrough, it can use it. If not, it will move on. Companies like Energous, which <a href=\"http://seekingalpha.com/article/2358075-watt-be-prepared-to-lose-all-of-your-investment\">went public without a revenue stream</a>, and uBeam, which has raised over $20 million in funding over the last five years but still has no commercial product, don't have that option.</p>\n      \n\n    </div>\n  </div>\n</div>\n\n\n        \n\n        \n\n\n      </div>\n\n      \n\n    </div>\n\n    \n\n    \n\n\n    \n\n  </article>\n\n"
    },
    {image : "https://cdn1.vox-cdn.com/thumbor/JjV5r3XJKee_zIzlpNSwlPeolJA=/799x0:3279x2480/350x350/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/49609569/GIC_BMWi8Futurism_frontA_12.0.0.jpg",
    title : '5 ways to live doctors hate him',
    author : 'Glenn Coco',
    content : "<article>\n\n    \n\n    <header>\n  \n\n    \n\n\n    \n\n  <p>Rumors of wireless charging in the next iPhone are bolstered by recent hires</p>\n\n  \n\n  \n  \n  \n\n  \n</header>\n\n\n    <div>\n\n      <div>\n        <div>\n      <div>\n        <picture>\n  <source>\n  <img src=\"https://cdn0.vox-cdn.com/thumbor/_Nm_W7ywuy9yOnTh-O4-p2j900k=/3x0:1314x874/1080x720/cdn0.vox-cdn.com/uploads/chorus_image/image/49609907/Apple-lightning-2014-09-23-verge-1020.0.0.jpg\">\n</source></picture>\n        \n\n      </div>\n      \n  <div>\n    \n<div>\n    <a href=\"http://www.theverge.com/\">\n      \n\n    </a>\n  <div>\n      \n      \n  </div>\n</div>\n\n    \n\n    <div>\n      <p>Last week a former engineer from the much hyped wireless charging startup uBeam left some scathing criticism of the company <a href=\"http://liesandstartuppr.blogspot.com/\">on his blog</a>. He compared uBeam to the now disgraced startup Theranos, saying that uBeam has avoided any full-fledged public demonstrations because its technology doesn't work as advertised. While it can do some very limited charging over a short distance, he allowed, the basic laws of physics prevent the product from being practical at any commercial level.</p>\r\n<p>While poking around LinkedIn to try and figure out the identity of this blogger, I came across an interesting data point. In the last four months two former uBeam engineers with expertise in wireless charging and ultrasonic technology had been hired by Apple. In fact, public LinkedIn data on Apple's recent hires shows these former uBeam staffers were part of a much broader trend. In the last two years Apple has hired more than a dozen staffers with expertise in wireless charging.</p>\n\n\r\n \r\n\r\n\r\n<p>Earlier this year <a href=\"http://www.bloomberg.com/news/articles/2016-01-29/apple-said-developing-wireless-charged-phone-for-as-soon-as-2017-ijz3i4si\"><i>Bloomberg</i> reported</a> that Apple was hoping to add wireless charging to the new iPhone it releases in 2017. And the <i>Bloomberg</i> report specified that Apple wanted to go beyond the minor convenience of a charging mat — which lets you avoid the cable, but doesn't fully free up your device. According to <i>Bloomberg</i>'s sources, Apple wants to implement a much more advanced technology that would allow you to walk around a room and have your phone charging the entire time.</p>\r\n<p>That, of course, is the exactly the promise uBeam has been making. And as <i>Bloomberg</i> points out, Apple has filed patents around this idea before. Back in 2010 it floated the notion of using your personal computer as a charging station for various mobile devices in the vicinity. It hoped to work at a distance of about three feet using something called near field magnetic resonance. uBeam, on the other hand, has said that it hopes to use ultrasound waves.</p>\r\n<p>Two other companies, <a href=\"http://www.ossia.com/solutions/\">Ossia</a> and <a href=\"http://seekingalpha.com/article/3973899-energous-watt-ceo-stephen-rizzone-q1-2016-results-earnings-call-transcript?part=single\">Energous</a>, claim to have technology at a distance, but again, neither has submitted those technologies to rigorous public testing or shipped a commercial product that backs up that promise. Ossia's <a href=\"http://www.ossia.com/wp-content/uploads/2014/07/US8159364.pdf\">patents</a> focus on using microwaves to wirelessly transmit energy, while Energous claims to <a href=\"http://www.energous.com/transmitters/\">use radio frequencies</a>.</p>\r\n\n\n\r\n<p>There are many approaches to crafting a breakthrough in wireless charging, and also many applications for the expertise Apple has been acquiring. Its smartwatch already works with wireless charging, which could explain the hiring over the last two years. And it has hired lots of engineers who specialize in ultrasound technology to work on haptics and sensing for wearable devices, so the recent pick-ups from uBeam could be aimed at developing technology unrelated to charging. Apple declined to comment for this piece.</p>\r\n<p>Still, it's hard to imagine that this isn't an area Apple is at least investigating. Its most recent earnings release revealed a decline in iPhone sales and its first year-over-year revenue decline in 13 years. It is no doubt eager to find ways to differentiate its next generation of smartphones and tablets from the rest of the market. For Apple, which has over $200 billion in the bank and has <a href=\"http://www.aboveavalon.com/notes/2016/5/11/apple-rd-reveals-a-pivot-is-coming\">been ramping up R&amp;D spending</a>, there is little downside. If it finds a breakthrough, it can use it. If not, it will move on. Companies like Energous, which <a href=\"http://seekingalpha.com/article/2358075-watt-be-prepared-to-lose-all-of-your-investment\">went public without a revenue stream</a>, and uBeam, which has raised over $20 million in funding over the last five years but still has no commercial product, don't have that option.</p>\n      \n\n    </div>\n  </div>\n</div>\n\n\n        \n\n        \n\n\n      </div>\n\n      \n\n    </div>\n\n    \n\n    \n\n\n    \n\n  </article>\n\n"
    },
    {image : "https://cdn0.vox-cdn.com/thumbor/-3CEtOGLLRcbRH41CuNrbcceEA8=/99x0:1179x720/180x120/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/49580495/VRG_VRS_003_Kindle_Oasis_Thumb.0.0.jpg",
    title : 'Craft is good food',
    author : 'Arthur the Ardvark',
    content : "<article>\n\n    \n\n    <header>\n  \n\n    \n\n\n    \n\n  <p>Rumors of wireless charging in the next iPhone are bolstered by recent hires</p>\n\n  \n\n  \n  \n  \n\n  \n</header>\n\n\n    <div>\n\n      <div>\n        <div>\n      <div>\n        <picture>\n  <source>\n  <img src=\"https://cdn0.vox-cdn.com/thumbor/_Nm_W7ywuy9yOnTh-O4-p2j900k=/3x0:1314x874/1080x720/cdn0.vox-cdn.com/uploads/chorus_image/image/49609907/Apple-lightning-2014-09-23-verge-1020.0.0.jpg\">\n</source></picture>\n        \n\n      </div>\n      \n  <div>\n    \n<div>\n    <a href=\"http://www.theverge.com/\">\n      \n\n    </a>\n  <div>\n      \n      \n  </div>\n</div>\n\n    \n\n    <div>\n      <p>Last week a former engineer from the much hyped wireless charging startup uBeam left some scathing criticism of the company <a href=\"http://liesandstartuppr.blogspot.com/\">on his blog</a>. He compared uBeam to the now disgraced startup Theranos, saying that uBeam has avoided any full-fledged public demonstrations because its technology doesn't work as advertised. While it can do some very limited charging over a short distance, he allowed, the basic laws of physics prevent the product from being practical at any commercial level.</p>\r\n<p>While poking around LinkedIn to try and figure out the identity of this blogger, I came across an interesting data point. In the last four months two former uBeam engineers with expertise in wireless charging and ultrasonic technology had been hired by Apple. In fact, public LinkedIn data on Apple's recent hires shows these former uBeam staffers were part of a much broader trend. In the last two years Apple has hired more than a dozen staffers with expertise in wireless charging.</p>\n\n\r\n \r\n\r\n\r\n<p>Earlier this year <a href=\"http://www.bloomberg.com/news/articles/2016-01-29/apple-said-developing-wireless-charged-phone-for-as-soon-as-2017-ijz3i4si\"><i>Bloomberg</i> reported</a> that Apple was hoping to add wireless charging to the new iPhone it releases in 2017. And the <i>Bloomberg</i> report specified that Apple wanted to go beyond the minor convenience of a charging mat — which lets you avoid the cable, but doesn't fully free up your device. According to <i>Bloomberg</i>'s sources, Apple wants to implement a much more advanced technology that would allow you to walk around a room and have your phone charging the entire time.</p>\r\n<p>That, of course, is the exactly the promise uBeam has been making. And as <i>Bloomberg</i> points out, Apple has filed patents around this idea before. Back in 2010 it floated the notion of using your personal computer as a charging station for various mobile devices in the vicinity. It hoped to work at a distance of about three feet using something called near field magnetic resonance. uBeam, on the other hand, has said that it hopes to use ultrasound waves.</p>\r\n<p>Two other companies, <a href=\"http://www.ossia.com/solutions/\">Ossia</a> and <a href=\"http://seekingalpha.com/article/3973899-energous-watt-ceo-stephen-rizzone-q1-2016-results-earnings-call-transcript?part=single\">Energous</a>, claim to have technology at a distance, but again, neither has submitted those technologies to rigorous public testing or shipped a commercial product that backs up that promise. Ossia's <a href=\"http://www.ossia.com/wp-content/uploads/2014/07/US8159364.pdf\">patents</a> focus on using microwaves to wirelessly transmit energy, while Energous claims to <a href=\"http://www.energous.com/transmitters/\">use radio frequencies</a>.</p>\r\n\n\n\r\n<p>There are many approaches to crafting a breakthrough in wireless charging, and also many applications for the expertise Apple has been acquiring. Its smartwatch already works with wireless charging, which could explain the hiring over the last two years. And it has hired lots of engineers who specialize in ultrasound technology to work on haptics and sensing for wearable devices, so the recent pick-ups from uBeam could be aimed at developing technology unrelated to charging. Apple declined to comment for this piece.</p>\r\n<p>Still, it's hard to imagine that this isn't an area Apple is at least investigating. Its most recent earnings release revealed a decline in iPhone sales and its first year-over-year revenue decline in 13 years. It is no doubt eager to find ways to differentiate its next generation of smartphones and tablets from the rest of the market. For Apple, which has over $200 billion in the bank and has <a href=\"http://www.aboveavalon.com/notes/2016/5/11/apple-rd-reveals-a-pivot-is-coming\">been ramping up R&amp;D spending</a>, there is little downside. If it finds a breakthrough, it can use it. If not, it will move on. Companies like Energous, which <a href=\"http://seekingalpha.com/article/2358075-watt-be-prepared-to-lose-all-of-your-investment\">went public without a revenue stream</a>, and uBeam, which has raised over $20 million in funding over the last five years but still has no commercial product, don't have that option.</p>\n      \n\n    </div>\n  </div>\n</div>\n\n\n        \n\n        \n\n\n      </div>\n\n      \n\n    </div>\n\n    \n\n    \n\n\n    \n\n  </article>\n\n"
    },
    {image : "https://cdn1.vox-cdn.com/thumbor/BiAotBxEZzHBPQsIlUuIYaVRuhQ=/0x0:1619x1079/180x120/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/49511969/VRG_TEC_010_SYNTEC_DRAFT_SYSTEM.0.0.jpg",
    title : 'Different strokes for same folks?',
    author : 'Vishnu',
    content : "<article>\n\n    \n\n    <header>\n  \n\n    \n\n\n    \n\n  <p>Rumors of wireless charging in the next iPhone are bolstered by recent hires</p>\n\n  \n\n  \n  \n  \n\n  \n</header>\n\n\n    <div>\n\n      <div>\n        <div>\n      <div>\n        <picture>\n  <source>\n  <img src=\"https://cdn0.vox-cdn.com/thumbor/_Nm_W7ywuy9yOnTh-O4-p2j900k=/3x0:1314x874/1080x720/cdn0.vox-cdn.com/uploads/chorus_image/image/49609907/Apple-lightning-2014-09-23-verge-1020.0.0.jpg\">\n</source></picture>\n        \n\n      </div>\n      \n  <div>\n    \n<div>\n    <a href=\"http://www.theverge.com/\">\n      \n\n    </a>\n  <div>\n      \n      \n  </div>\n</div>\n\n    \n\n    <div>\n      <p>Last week a former engineer from the much hyped wireless charging startup uBeam left some scathing criticism of the company <a href=\"http://liesandstartuppr.blogspot.com/\">on his blog</a>. He compared uBeam to the now disgraced startup Theranos, saying that uBeam has avoided any full-fledged public demonstrations because its technology doesn't work as advertised. While it can do some very limited charging over a short distance, he allowed, the basic laws of physics prevent the product from being practical at any commercial level.</p>\r\n<p>While poking around LinkedIn to try and figure out the identity of this blogger, I came across an interesting data point. In the last four months two former uBeam engineers with expertise in wireless charging and ultrasonic technology had been hired by Apple. In fact, public LinkedIn data on Apple's recent hires shows these former uBeam staffers were part of a much broader trend. In the last two years Apple has hired more than a dozen staffers with expertise in wireless charging.</p>\n\n\r\n \r\n\r\n\r\n<p>Earlier this year <a href=\"http://www.bloomberg.com/news/articles/2016-01-29/apple-said-developing-wireless-charged-phone-for-as-soon-as-2017-ijz3i4si\"><i>Bloomberg</i> reported</a> that Apple was hoping to add wireless charging to the new iPhone it releases in 2017. And the <i>Bloomberg</i> report specified that Apple wanted to go beyond the minor convenience of a charging mat — which lets you avoid the cable, but doesn't fully free up your device. According to <i>Bloomberg</i>'s sources, Apple wants to implement a much more advanced technology that would allow you to walk around a room and have your phone charging the entire time.</p>\r\n<p>That, of course, is the exactly the promise uBeam has been making. And as <i>Bloomberg</i> points out, Apple has filed patents around this idea before. Back in 2010 it floated the notion of using your personal computer as a charging station for various mobile devices in the vicinity. It hoped to work at a distance of about three feet using something called near field magnetic resonance. uBeam, on the other hand, has said that it hopes to use ultrasound waves.</p>\r\n<p>Two other companies, <a href=\"http://www.ossia.com/solutions/\">Ossia</a> and <a href=\"http://seekingalpha.com/article/3973899-energous-watt-ceo-stephen-rizzone-q1-2016-results-earnings-call-transcript?part=single\">Energous</a>, claim to have technology at a distance, but again, neither has submitted those technologies to rigorous public testing or shipped a commercial product that backs up that promise. Ossia's <a href=\"http://www.ossia.com/wp-content/uploads/2014/07/US8159364.pdf\">patents</a> focus on using microwaves to wirelessly transmit energy, while Energous claims to <a href=\"http://www.energous.com/transmitters/\">use radio frequencies</a>.</p>\r\n\n\n\r\n<p>There are many approaches to crafting a breakthrough in wireless charging, and also many applications for the expertise Apple has been acquiring. Its smartwatch already works with wireless charging, which could explain the hiring over the last two years. And it has hired lots of engineers who specialize in ultrasound technology to work on haptics and sensing for wearable devices, so the recent pick-ups from uBeam could be aimed at developing technology unrelated to charging. Apple declined to comment for this piece.</p>\r\n<p>Still, it's hard to imagine that this isn't an area Apple is at least investigating. Its most recent earnings release revealed a decline in iPhone sales and its first year-over-year revenue decline in 13 years. It is no doubt eager to find ways to differentiate its next generation of smartphones and tablets from the rest of the market. For Apple, which has over $200 billion in the bank and has <a href=\"http://www.aboveavalon.com/notes/2016/5/11/apple-rd-reveals-a-pivot-is-coming\">been ramping up R&amp;D spending</a>, there is little downside. If it finds a breakthrough, it can use it. If not, it will move on. Companies like Energous, which <a href=\"http://seekingalpha.com/article/2358075-watt-be-prepared-to-lose-all-of-your-investment\">went public without a revenue stream</a>, and uBeam, which has raised over $20 million in funding over the last five years but still has no commercial product, don't have that option.</p>\n      \n\n    </div>\n  </div>\n</div>\n\n\n        \n\n        \n\n\n      </div>\n\n      \n\n    </div>\n\n    \n\n    \n\n\n    \n\n  </article>\n\n"
    }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('StartCtrl', function($scope, $state, $stateParams, $http, $cordovaDevice) {
  document.addEventListener("deviceready", function () {

    var device = $cordovaDevice.getDevice();

    var cordova = $cordovaDevice.getCordova();

    var model = $cordovaDevice.getModel();

    var platform = $cordovaDevice.getPlatform();

    var uuid = $cordovaDevice.getUUID();
    //console.log('test');
    console.log(uuid);
    $scope.uuid = uuid;
    var version = $cordovaDevice.getVersion();

  }, false);
});
