const DishSchema = require('../models/dishes');
const MenuSchema = require('../models/menu');
exports.test = async (req, res, next) => {
    try {
        
        res.json({data: menu});
        
    } catch (error) {
        
    }
};

const data = [
    {
        "ingredient": "700g thịt gà đùi hoặc cánh gà, 1 củ gừng, trái Muối, đường, nước mắm,hành khô, hành lá,dầu ăn, ớt"
    },
    {
        "ingredient": "1 bó rau muối, 1-2 muỗng tỏi, 1 ít muối, 1 miếng chanh"
    },
    {
        "ingredient": "100g nấm bào ngư trắng, 1 cây đậu hũ non, 1 củ cà rốt, 100g đậu cô ve, gia vị: muối, nước tương, bột ngọt, đường, hành ba rô."
    },
    {
        "ingredient": "1 con cá lóc, nước mắm, tiêu xay, nước màu dừa, đường, bột ngọt."
    },
    {
        "ingredient": "google.com"
    },
    {
        "ingredient": "2 bộ Lòng gà, 3 quả mướp đắng (khổ qua), 1 củ hành tím, hành lá."
    },
    {
        "ingredient": "1/4 trái bí đao nhỏ, 50 gram thịt nạc xay, Bột nêm, muối, tiêu, đường."
    },
    {
        "ingredient": "300g thịt lợn sấn mông, 20 quả trứng chim cút, gia vi: dầu ăn, hành, tỏi, nước mắm, mỳ chính, đường, tiêu xay."
    },
    {
        "ingredient": "1 con cá diêu hồng, 1/2 trái thơm, 2 trái cà chua, 1 cây bạc hà, vài trái đậu bắp, giá, 1 vắt me, tỏi ớt, nước mắm, muối, bột ngọt, đường, dầu ăn, rau om, ngò gai."
    },
    {
        "ingredient": "google.com"
    },
    {
        "ingredient": "3 muỗng cf hạt nêm, 1 muỗng cf dầu hào, 1 muỗng cf xì dầu, 4 tép tỏi to, 2 cây ngò rí."
    },
    {
        "ingredient": "Thịt ếch (8 con), 1 muỗng cf tỏi băm,2 muỗng cf muối, 2 muỗng canh dầu ăn, 2 muỗng cà phê nước mắm, 1 củ hành tây, 4 cái nấm mèo, 2 muỗng cà phê đường trắng, 15gr hạt điều (hạt điều màu), 1 muỗng cà phê hạt nêm."
    },
    {
        "ingredient": "300g chả cá,  quả trứng, hành, tiêu, tỏi, củ hành."
    },
    {
        "ingredient": "500gr ngao, rau cải xanh, gừng một nhánh, hạt nêm, muối, mì chính."
    },
    {
        "ingredient": "google.com"
    },
    {
        "ingredient": "0,5kg sườn chặt miếng vừa ăn, 1/2 củ tỏi băm nhỏ, 2 củ hành băm nhỏ, 3 thìa canh mắm, 2 thìa canh đường nâu, 1 thìa canh chanh, 1 thìa canh giấm, 1 thìa canh tương ớt (hoặc một quả ớt tươi), 1 quả cà chua to thái cay."
    },
    {
        "ingredient": "100gr xà lách, 100gr cà chua bi, 2/3 củ hành tây, 3 muỗng canh giấm, 1/2 muỗng cf muối, 1 nhánh ngò rí, 1 trái dưa leo, 50gr bắp mỹ, 2 muỗng canh dầu mè, 2 muỗng canh đường trắng, 1/2 muỗng cf tiêu."
    },
    {
        "ingredient": "1 bó rau ngót, 100gr thịt bò mềm, nước mắm, bột ngọt, tiêu, hành tím."
    },
    {
        "ingredient": "300gram thịt ba chỉ, 300gr tôm, 2-3 củ hành khô (hành hương), nước mắm, nước hàng (nước màu dừa), đường, muối, tiêu, dầu ăn."
    },
    {
        "ingredient": "google.com"
    },
    {
        "ingredient": "500gr rau má, 1 củ hành tím, 1 muỗng cf muối, 1 muỗng cf hạt nêm, 200gr tôm tươi, 2 muỗng canh dầu ăn, 1/2 muỗng cf bột ngọt."
    },
    {
        "ingredient": "Thịt bò, hành tây, hành ngò, tiêu, dầu hào."
    },
    {
        "ingredient": "0,5kg mực, 1 gói bột chiên giòn, tương ớt hoặc tương cà."
    },
    {
        "ingredient": "1 gói 400gr riêu cua, 1 bó rau đay, nước lọc, gia vị."
    },
    {
        "ingredient": "google.com"
    },
    {
        "ingredient": "400g cá ngừ, dầu ăn, nước mắm, tỏi, đường."
    },
    {
        "ingredient": "1 bó rau muống, 1-2 muỗng tỏi, 1 ít muối, 1 miếng chanh."
    },
    {
        "ingredient": "1 bó cải thìa, 1 miếng gừng, 2 tỏi tép, 2 muỗng canh dầu ăn, 1/2 muỗng cf đường trắng, 300gr thịt bò, 1/2 muỗng cf tiêu, 1 muỗng canh tương hột, 1/2 muỗng cf hạt nêm."
    },
    {
        "ingredient": "google.com"
    },
    {
        "ingredient": "500g khổ qua (mướp đắng), 2 trứng vịt, 1 trứng gà, 1/8 cup nước mắm, 1 tsp bột nêm, 1 tsp đường, đập dập hành lá (hành hoa) xắt khúc, tiêu xay, tỏi."
    },
    {
        "ingredient": "1 khúc bí đao, 100gr tôm, hành, ngò, muối, bột ngọt, tiêu."
    },
    {
        "ingredient": "cá cơm tươi, hành khô, nước mắm, hạt nêm, tiêu, ớt, đường, nước hàng."
    },
    {
        "ingredient": "google.com"
    },
    {
        "ingredient": "5 cái cánh gà = 600g, tỏi, nước mắm, tiêu xay, dầu ăn."
    },
    {
        "ingredient": "700gram cá rô phi, 1 quả chanh, bột canh, mỳ chính, tỏi, hành khô, muối, ớt, mắm."
    },
    {
        "ingredient": "40gr tôm khô, 1 muỗng cf hành tím băm, 2 muỗng cf nước mắm, 1/2 muỗng cf hạt nêm, 1 bó rau ngót, 2 muỗng cf dầu ăn, 1 muỗng cf muối, 1 muỗng cf bột ngọt."
    },
    {
        "ingredient": "google.com"
    },
    {
        "ingredient": "0,5kg sườn chặt miếng vừa ăn, 1/2 củ tỏi băm nhỏ, 2 củ hành băm nhỏ, 3 thìa canh mắm, 2 thìa canh đường nâu, 1 thìa canh chanh, 1 thìa canh giấm, 1 thìa canh tương ớt (hoặc một quả ớt tươi), 1 quả cà chua to thái cay."
    },
    {
        "ingredient": "100gr xà lách, 100gr cà chua bi, 2/3 củ hành tây, 3 muỗng canh giấm, 1/2 muỗng cf muối, 1 nhánh ngò rí, 1 trái dưa leo, 50gr bắp mỹ, 2 muỗng canh dầu mè, 2 muỗng canh đường trắng, 1/2 muỗng cf tiêu."
    },
    {
        "ingredient": "300g chả cá,  quả trứng, hành, tiêu, tỏi, củ hành."
    },
    {
        "ingredient": "google.com"
    },
    {
        "ingredient": "rau má 500gr, 1 củ hành tím, 1 muỗng cf muối, 1 muỗng cf hạt nêm, 200gr tôm tươi, 2 muỗng canh dầu ăn, 1/2 muỗng cf bột ngọt."
    },
    {
        "ingredient": "Dưa leo, khớm, thơm, cà pháo nếu có, mắm nêm, tỏi, ớt, đường, xíu muối."
    },
    {
        "ingredient": "2 con tầm 8 lạng cá lóc đồng, hành tím, tỏi, ớt, tiêu, hành lá,gia vị, nước dừa tươi."
    },
    {
        "ingredient": "google.com"
    },
    {
        "ingredient": "500g bào ngư tươi, 300g xương ống, 200g gạo tẻ, 50g gạo nếp, 100g nấm rơm, 1 quả trứng vịt muối, hành lá, ngò rí.dầu ăn, hạt nêm, bột ngọt, đường, tiêu."
    },
    {
        "ingredient": "Trái cây (xoài, dứa, dưa hấu, mãng cầu...), 20 ml đường, 20 ml sữa đặc, 20 ml sữa tươi không đường, 1 cốc đá."
    },
    {
        "ingredient": "google.com"
    },
    {
        "ingredient": "500 gr thịt ba ba (cua đinh), 300 gr đậu phụ, khoảng 2 bìa ( đậu hũ thanh)., 1 nắm lá tía tô (khoảng 20gr) + 4 cái lá lốt hoặc lá nghệ., 1/2 củ, nghệ khoảng 40 gr, 5 quả chuối tiêu xanh, 300 gr củ chuối, 4 thìa mẻ, 1 1/2 thìa mắm tôm., 80 gr thịt ba chỉ heo (ba rọi), 2 quả chanh, 2 củ hành khô, 4 nhánh hành lá, 1 quả ớt sừng, 1 muỗng hạt nêm."
    },
    {
        "ingredient": "Xương heo 400gr, Cà rốt 2 củ, khoai tây 3 củ, hành lá 50 gr, ngò rí 50 gr, muối 1 muỗng cà phê, bột ngọt 1/2 muỗng cà phê, hạt nêm 1 muỗng cà phê."
    },
    {
        "ingredient": "1kg-1,5kg thịt heo (tùy mỗi nhà thích ăn loại thịt nào nhé), 10 trứng vịt, 50 trứng cút, gia vị: nước mắm, đường, bột ngọt, hạt nêm, tiêu, nước dừa."
    },
    {
        "ingredient": "google.com"
    },
    {
        "ingredient": "3 trái khổ qua, 100 g thịt nạc băm, 50 g chả cá thác lác, 2 tai nấm mèo."
    },
    {
        "ingredient": "200gr sụn ức gà, bột bắp ,1 mcf Nước mắm, 1 mcf đường, tỏi bă, ớt băm, hành lá, tiêu xay, dầu chiên, hạt điều."
    },
    {
        "ingredient": "400g ngó sen, 300g bồn bồn, 1 củ cà rốt, 1 củ hành tây, 20g rau sống, 500g tôm tươi, đậu phộng rang, nước mắm, đường, chanh,tỏi, ớt."
    },
    {
        "ingredient": "500g cá lóc, gia vị, dầu ăn, nước mắm, tiêu, đường, hạt nêm, hành lá, hành tím, ớt."
    },
    {
        "ingredient": "google.com"
    },
    {
        "ingredient": "2 con 300gr Bạch tuộc, 2 trái Dưa leo, 1/4 trái thơm, 1 củ hành tây, rau ngò tây."
    },
    {
        "ingredient": "Cá rô đồng: 7 đến 10 con ( hoặc nhiều hơn tuỳ thích), rau cải canh: 1 mớ, gừng: 1 nhánh nhỏ, dầu ăn, hành khô, muối, nước mắm, bột canh, mì chính đủ dùng."
    },
    {
        "ingredient": "1 con gà, bột tẩm khô chiên giòn, bột năng, nước chấm: nước mắm, chanh, sả, quất, đường, tương ớt ,muối trộn gà: gạo tẻ, gạo nếp, đậu xanh, muối."
    },
    {
        "ingredient": "Mướp hương 700 gr, tôm tươi 200 gr, thịt heo 200 gr, hành lá 2 cây, hành tím 2 củ, dầu ăn 4 muỗng canh, nước mắm 2 muỗng canh, hạt nêm 1 muỗng canh, tiêu 1/2 muỗng cà phê, bột ngọt 1/2 muỗng cà phê."
    },
    {
        "ingredient": "google.com"
    },
    {
        "ingredient": "400g cá kèo sống, 50 g mỡ heo, 20 g rau răm, 2 muỗng soup giấm ăn, 1 muỗng soup ớt bột, muối, tiêu, nước mắm, hạt nêm, đường, nước màu dừa (kẹo đắng), vài trái ớt hiểm (ớt sừng , ớt xanh)."
    },
    {
        "ingredient": "Cà rốt, tai heo, xoài xanh, đậu phộng, rau thơm, chanh,đường, nước mắm."
    },
    {
        "ingredient": "1 con cá lóc đồng, bạc hà, đậu bắp, 1/4 trái thơm, giá, rau thơm, ớt, me, nước mắm, muối, đường, bột ngọt, tỏi băm."
    },
    {
        "ingredient": "1kg thịt ba chỉ nạc, 75 ml nước mắm, 75 ml nước dừa tươi hoặc nước lọc, 50 gr đường, 1/2 mcf muối, 1/2 mcf ngũ vị hương, 1 mc dầu màu điều, 1 mcf ớt băm nhỏ hoặc ớt bột (nếu bạn ăn được cay), rau sống các loại ăn kèm."
    },
    {
        "ingredient": "0,5kg sườn chặt miếng vừa ăn, 1/2 củ tỏi băm nhỏ, 2 củ hành băm nhỏ, 3 thìa canh mắm, 2 thìa canh đường nâu, 1 thìa canh chanh, 1 thìa canh giấm, 1 thìa canh tương ớt (hoặc một quả ớt tươi), 1 quả cà chua to thái cay."
    },
    {
        "ingredient": "2 con 300gr Bạch tuộc, 2 trái Dưa leo, 1/4 trái Thơm, 1 củ Hành tây, rau ngò tây."
    },
    {
        "ingredient": "3 trái khổ qua, 100 g thịt nạc băm, 50 g chả cá thác lác, 2 tai nấm mèo."
    },
    {
        "ingredient": "400g ngó sen, 300g bồn bồn, 1 củ cà rốt, 1 củ hành tây, 20 g rau sống, 500 g tôm tươi, đậu phộng rang, nước mắm, đường, chanh,tỏi, ớt."
    },
    {
        "ingredient": "Thịt ba chỉ, trứng. nước màu, đường, tiêu, mì chính, nước mắm, hành."
    },
    {
        "ingredient": "1 cây salad caron, 5 củ hành tím, dầu ăn, 1 mc bột nêm, 1 mcf tiêu, 1 mcf đường, 1/2 chén dấm táo, 1 trái cà chua."
    },
    {
        "ingredient": "Rau ngót, thịt bò, tiêu, dầu ăn, tỏi."
    },
    {
        "ingredient": "Thịt ếch: 400gr, hành tây: 2 củ, hành tím: 1 củ, ớt sừng: 1 trái, hành lá và ngò rí, hạt nêm, đường, muối,nước mắm, tiêu xay và dầu ăn."
    },
    {
        "ingredient": " Rau má 500 gr, tôm tươi 200 gr, hành tím 1 củ, dầu ăn 2 muỗng canh, muối 1 muỗng cà phê, bột ngọt 1/2 muỗng cà phê, hạt nêm 1 muỗng cà phê."
    },
    {
        "ingredient": "100 g thịt bò thăn, 1 quả cà chua, bột canh, dầu ăn, hạt tiêu vừa đủ, 1 củ tỏi băm nhỏ, 1 bó rau cần to rửa sạch, cắt khúc vừa ăn."
    },
    {
        "ingredient": "500 gr mực, bột bắp, bột mì, trứng gà, bột ngọt, dầu ăn, bột nêm"
    },
    {
        "ingredient": "1 con cá diêu hồng, 1/2 trái thơm, 2 trái cà chua, 1 cây bạc hà, vài trái đậu bắp, giá, 1 vắt me, tỏi,ớt, nước mắm, muối, bột ngọt, đường,dầu ăn, rau om, ngò gai."
    },
    {
        "ingredient": "700 g thịt gà đùi hoặc cánh gà, 1 củ gừng, trái muối, đường, nước mắm,hành khô, hành lá,dầu ăn, ớt."
    },
    {
        "ingredient": "1 cây salad caron, 5 củ hành tím, dầu ăn, 1 mc bột nêm, 1 mcf tiêu, 1 mcf đường, 1/2 chén dấm táo, 1 trái cà chua."
    },
    {
        "ingredient": "3 trái khổ qua, 100 g thịt nạc băm, 50 g chả cá thác lác, 2 tai nấm mèo."
    },
    {
        "ingredient": "500 g cá lóc, gia vị, dầu ăn, nước mắm, tiêu, đường, hạt nêm, hành lá, hành tím, ớt."
    }
]