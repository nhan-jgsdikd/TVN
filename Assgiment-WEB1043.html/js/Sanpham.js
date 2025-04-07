const products2 = [
    {
        imgSrc: "/img/moi/vicongai.jpg",
        title: "Vì Con Gái Tôi Có Thể Đánh Bại Cả Ma Vương",
        publisher: "Sky Light Novel phát hành",
        author: "CHIROLU",
        translator: "Minh Phương",
        releaseDate: "13/06/2024",
        price: "135.000đ",
        description: "Sau khi trải qua quãng thời gian mà các nhà sử học đời sau chỉ có thể than thở rằng “Đã có rất nhiều chuyện xảy ra”, Dale và Latina đã trở về Kreuz, hay nói cách khác là quay về với “những ngày bình dị” của họ. Điều khiến Latina hạnh phúc nhất khi trở về chính là được thưởng thức những món ăn ngon"
    },
    {
        imgSrc: "/img/moi/rom-com_4-b_a_o_2.jpg",
        title: "Ai Dám Bảo Rom-com Không Có Ngoài Đời Thực?",
        publisher: "Thái Hà Books phát hành",
        author: "Hajikano Sou",
        translator: "AQ",
        releaseDate: "17/04/2024",
        price: "129.000đ",
        description: "Cuộc bầu cử hội trưởng hội học sinh đầy biến động đã hạ màn với cái kết chẳng ai ngờ tới. Làm sao có thể thế này được…?! Kouhei thấy vừa hoang mang vừa hối hận đến cực độ, nhưng vì lý tưởng muốn hoàn thành tâm nguyện của tất cả mọi người… Cậu không còn cách nào khác ngoài liều mạng tìm kiếm đối sách..."
    },
    {
        imgSrc: "/img/moi/Spy_Room_bìa_vol_1.jpg",
        title: "SPY ROOM - Lớp Học Điệp Viên",
        publisher: "Thái Hà Books phát hành",
        author: "Takemachi",
        translator: "Ngọc Đỗ",
        releaseDate: "17/04/2024",
        price: "129.000đ",
        description: `Bằng sách lược thông minh, đội điệp viên “Tomoshibi” đã áp chế được cơ quan phản gián “Belias” thuộc Liên bang Fend – kẻ thù của các đồng đội “Ootori”. Nhưng, tương lai đang chờ đợi họ phía trước lại là bi kịch: 3 thành viên bị thương, 1 người bị bắt cóc, xảy ra bởi sự phản bội của một thiếu nữ.Tên...`
    },
    {
        imgSrc: "/img/moi/xamotchute1700643306713.webp",
        title: "Xa Một Chút Hơn Một Triệu Năm Ánh Sáng",
        publisher: "Nhã Nam phát hành",
        author: "Furuhashi Hideyuki",
        translator: "Lam Bình",
        releaseDate: "16/01/2024",
        price: "155.000đ",
        description: `NHỮNG CÂU CHUYỆN NHIỆM MÀU VỚI ĐỦ MỌI SẮC THÁI CẢM XÚC VỀ NƠI VŨ TRỤ XA XÔI, CÙNG NÉT VẼ MINH HỌA CỦA HỌA SĨ LỪNG DANH KENTARO YABUKI! Hằng đêm trước khi bạn chìm vào giấc ngủ, “cô ấy” sẽ kể cho bạn nghe một câu chuyện. Những câu chuyện khoa học viễn tưởng có thể thưởng thức trong năm phút sẽ đưa...`
    },
    {
        imgSrc: "/img/moi/ghots.jpg",
        title: "Ghost Hunt : Chuyện Ma Quỷ Ở Khu Học Xá Cũ",
        publisher: "Kim Đồng phát hành",
        author: "Ono Fuyumi",
        translator: "Liên Vũ",
        releaseDate: "08/01/2024",
        price: "129.000đ",
        description: `Có một lời đồn thổi tồn tại dai dẳng rằng khu học xá cũ sẽ nguyền rủa bất cứ ai có ý định phá dỡ nó. Vì nhiều lí do, cô nữ sinh trung học Mai phải giúp đỡ anh chàng Shibuya Kazuya đến để điều tra về tin đồn này. Shibuya, trẻ tuổi và điển trai (đồng thời tự tin tới mức kiêu ngạo), là giám đốc của văn...`
    },
    {
        imgSrc: "/img/moi/ma-phap-thieu-nu-tap-1-tang-kem-bookmark-be-hinh-postcard_123743_1.jpg",
        title: "Ma Pháp Thiếu Nữ",
        publisher: "Usagi Light Novel phát hành",
        author: "Endou Asari",
        translator: "Dandeega",
        releaseDate: "23/12/2023",
        price: "159.000đ",
        description: `Tựa đề của tập này là Limited. Nếu tra từ điển thì nó có nghĩa là “giới hạn” hoặc “hạn chế”. Vì thế mà câu chuyện trong tập này cũng bị giới hạn đủ kiểu: thời gian giới hạn, không gian giới hạn, sức chiến đấu bị giới hạn, quần áo của Ripple bị giới hạn,`
    },
    {
        imgSrc: "/img/moi/Suzume_no_Tojimari.tiff.jpg",
        title: "Khóa Chặt Cửa Nào Suzume (Bản Đặc Biệt)",
        publisher: "IPM phát hành",
        author: "Shinkai Makoto",
        translator: "Quế Đan",
        releaseDate: "30/11/2023",
        price: "190.000đ",
        description: `Cô nữ sinh 17 tuổi Suzume sống cùng dì ở một thị trấn bình yên ven biển Kyushu. Một ngày nọ, trên đường đến trường, Suzume đi ngang qua một thanh niên điển trai và nghe anh kể “Anh đang đi tìm cửa”. Tò mò theo dấu thanh niên nọ, Suzume tiến vào một phế tích trong núi. Điều cô bắt gặp ở đó là một cán...`
    },
    {
        imgSrc: "/img/moi/vn-11134207.jpg",
        title: "Cách Sống Của Thiếu Nữ Hành Quyết - Và Rồi, Cô Ấy Được Tái Sinh",
        publisher: "Ichi Light Novel phát hành",
        author: "Sato Mato",
        translator: "Thanh Nguyệt",
        releaseDate: "24/10/2023",
        price: "164.000đ",
        description: `Thế giới này tồn tại những người đi lạc đến từ Nhật Bản – một quốc gia nằm ở thế giới khác. Tuy nhiên, sự mất kiểm soát của những người đi lạc này là nguyên nhân gây ra những thảm họa vô cùng khủng khiếp trong quá khứ. Chính vì vậy, những kẻ hành quyết cần phải tiêu diệt họ. Trong lúc truy lùng,...`
    },
    {
        imgSrc: "/img/moi/Cách Sống.jpg",
        title: "Cách Sống Của Thiếu Nữ Hành Quyết - Và Rồi, Cô Ấy Được Tái Sinh",
        publisher: "Ichi Light Novel phát hành",
        author: "Sato Mato",
        translator: "Thanh Nguyệt",
        releaseDate: "24/10/2023",
        price: "164.000đ",
        description: `Thế giới này tồn tại những người đi lạc đến từ Nhật Bản – một quốc gia nằm ở thế giới khác. Tuy nhiên, sự mất kiểm soát của những người đi lạc này là nguyên nhân gây ra những thảm họa vô cùng khủng khiếp trong quá khứ. Chính vì vậy, những kẻ hành quyết cần phải tiêu diệt họ. Trong lúc truy lùng,...`
    },
    {
        imgSrc: "/img/moi/fahasa.webp",
        title: "Liệu Có Sai Lầm Khi Tìm Kiếm Cuộc Gặp Gỡ Định Mệnh Trong Dungeon",
        publisher: "Kim Đồng phát hành",
        author: "Omori Fujino",
        translator: "Otiak",
        releaseDate: "13/10/2023",
        price: "105.000đ",
        description: `Thế là, cậu thiếu niên lại tiếp tục chạy về phía trước. Bell đã trưởng thành hơn qua trận tử chiến với địch thủ. Thăng cấp, Denatus, danh hiệu mới. Giữa sự kiện thu hút sự chú ý của cả phàm nhân lẫn thần linh, một phong thư được gửi đến Bell. “Nhiệm vụ cưỡng chế… Viễn chinh?” Bell Cranel đã đủ`
    },
    {
        imgSrc: "/img/moi/duong-ham-toi-mua-ha.jpg",
        title: `Đường hầm tới mùa hạ - Lối thoát của Biệt ly`,
        publisher: "Thái Hà Books phát hành",
        author: "Hachimoku Mei",
        translator: "Đỗ Nguyên",
        releaseDate: "06/10/2023",
        price: "109.000đ",
        description: `“Cậu biết đường hầm Urashima chứ? Nghe bảo bước vào bên trong thì mọi mong ước sẽ biến thành hiện thực, nhưng phải đánh đổi bằng tuổi tác…” Cậu học sinh cấp ba Tono Kaoru tình cờ nghe hóng được về truyền thuyết đô thị đó. Ngay đêm hôm ấy, cậu lại tình cờ tìm thấy một đường hầm có nét tương đồng…`
    },
    {
        imgSrc: "/img/moi/Sword_Art_Online_Volume_25.webp",
        title: "Sword Art Online - Unital Ring V",
        publisher: "IPM phát hành",
        author: "Kawahara Reki",
        translator: "Mỹ Trinh",
        releaseDate: "25/09/2023",
        price: "125.000đ",
        description: `tiếp tục là lịch trình dày chóng mặt của Kirito và các bạn qua các không gian: hiện thực, Unital Ring và Underworld. Không gian nào cũng khó yên bình vì lẩn quất một nhân vật bí ẩn. Ở hiện thực, đó là cô bạn con nhà tài phiệt đầy năng lực chuẩn bị du học nước ngoài không hiểu thế nào lại chuy...`
    },
    {
        imgSrc: "/img/moi/vo-trong-game-cua-toi-la-idol-noi-tieng-ngoai-doi-tap-3.jpg",
        title: "Vợ Trong Game Của Tôi Là Idol Nổi Tiếng Ngoài Đời ",
        publisher: "Shine Novel phát hành",
        author: "Abone",
        translator: "Ngân Nhi",
        releaseDate: "18/09/2023",
        price: "139.000đ",
        description: `Tôi, Ayanokouji Kazuto khi đang trải qua kỳ nghỉ hè ở nhà của Mizuki Rinka thì nhận được tin nhắn của bố yêu cầu tôi hãy về nhà một chuyến. Nhưng lúc tôi về thì không thấy bố ở nhà, thay vào đó là một cô bé trùm chăn kín người dù đang là mùa hè. Sau khi hỏi chuyện, tôi kinh ngạc phát hiện cô bé đó lại chính là em gái mình!?`
    },
    {
        imgSrc: "/img/moi/nhat-ky-giac-mo-trong-giac-mo-cua-ban,-toi-khong-ton-tai-kikiyama.jpg",
        title: "Nhật Ký Giấc Mơ – Trong Giấc Mơ Của Bạn, Tôi Không Tồn Tại",
        publisher: "Quảng Văn phát hành",
        author: "Akira",
        translator: "Phạm Tiết Nguyên",
        releaseDate: "16/03/2018",
        price: "79.000đ",
        description: `Có một cô gái nọ, ở trong một căn phòng nhỏ nọ. Cô không bao giờ bước ra ngoài, không muốn phải đối mặt với thế giới bên kia cánh cửa phòng. Cô lắc đầu với vẻ mặt buồn thảm, nhất quyết không mở cửa để trốn tránh mọi thứ. Thế nhưng ở trong mơ, cô lại buông tay mở chốt, và những cảnh tượng hãi hùng ph...`
    },
    {
        imgSrc: "/img/moi/Fatestrange.jpg",
        title: "Fate/strange Fake",
        publisher: "IPM phát hành",
        author: "Urobuchi Gen",
        translator: "Quang Tùng",
        releaseDate: "13/03/2018",
        price: "90.000đ",
        description: `Giờ G sắp điểm, các pháp sư và anh linh ồ ạt đổ về Fuyuki, trận địa của Cuộc chiến Chén Thánh.Tuy xây dựng trên cùng một cơ cấu là master và servant, nhưng quan hệ cũng như phân bổ vai trò và chiến lược giữa các cặp rất khác nhau.Thông qua đụng độ và giao chiến, các nhân vật hé lộ dần bản lĩnh, khát...`
    },
];

function renderProducts() {
    const container = document.querySelector('.TC-left');
    container.innerHTML = '';

    products2.forEach(products2 => {
        const productHTML = `
            <div class="noidung">
                <div class="anh">
                    <img src="${products2.imgSrc}" alt="">
                </div>
                <div class="noidung-chinh">
                    <ul>
                        <li>${products2.title}</li>
                        <p>${products2.publisher}</p>
                        <i><b>Thông tin thêm</b></i>
                        <p><b>Tác Giả : </b>${products2.author}</p>
                        <p><b>Dịch Giả : </b>${products2.translator}</p>
                        <p><b>Ngày Phát Hành : </b>${products2.releaseDate}</p>
                        <p><b>Giá Bán :</b><a>${products2.price}</a></p>
                        <hr>
                        <b>${products2.description}</b>
                    </ul>
                    <button>Thêm Vào Giỏ Hàng</button>
                </div>
            </div>
            <hr>
        `;
        container.innerHTML += productHTML; 
    });
}
renderProducts();

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.noidung button');
    const cartTableBody = document.querySelector('.TC-right tbody');
    const cartFooter = document.querySelector('.TC-right tfoot');
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Đặt Trước';
    buyButton.id = 'buy-button';
    cartFooter.appendChild(buyButton);

    const addressForm = document.getElementById('address-form');
    const cancelButton = document.getElementById('cancel-button');
    const formAddress = document.getElementById('form-address');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const noidung = event.target.closest('.noidung');
            const title = noidung.querySelector('li').textContent;
            const imgSrc = noidung.querySelector('img').src;
            const priceText = noidung.querySelector('a').textContent;
            const price = parseFloat(priceText.replace('đ', '').replace('.', '').replace(',', '.').trim());

            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${imgSrc}" alt="${title}" style="width: 100px; height: auto;"></td>
                <td>${title}</td>
                <td>${priceText}</td>
            `;
            cartTableBody.appendChild(row);
            updateTotalPrice();
        });
    });

    buyButton.addEventListener('click', () => {
        if (cartTableBody.children.length == 0) {
            alert('Giỏ hàng của bạn hiện chưa có gì cả');
        } else {
            addressForm.style.display = 'block';
        }
    });

    cancelButton.addEventListener('click', () => {
        addressForm.style.display = 'none';
    });

    formAddress.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        
        cartTableBody.innerHTML = '';
        updateTotalPrice();
        alert('Cảm ơn bạn vì đã đặt trước, Tác phẩm này sẻ tới tay bạn nhanh nhất có thể');
        addressForm.style.display = 'none';
    });

    function updateTotalPrice() {
        const rows = cartTableBody.querySelectorAll('tr');
        let total = 0;
        rows.forEach(row => {
            const priceText = row.cells[2].textContent;
            const price = parseFloat(priceText.replace('đ', '').replace('.', '').replace(',', '.').trim());
            total += price;
        });

        const totalRow = cartFooter.querySelector('tr');
        if (totalRow) {
            totalRow.innerHTML = `
                <td colspan="2"><b>Tổng tiền:</b></td>
                <td>${total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
            `;
        }
    }
});