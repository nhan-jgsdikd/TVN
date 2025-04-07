let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex) ? "block" : "none";
    });
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides(slideIndex);
}

showSlides(slideIndex);

document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', nextSlide);

const trangchu = [
    {
        imgSrc: "/img/fpfulyaucagjatq.thumb_500x.jpg",
        title: "Imouto Yandere?",
    },
    {
        imgSrc: "/img/UtsuroNoHako_vol1.jpg",
        title: "UtsuroNoHako",
    },
    {
        imgSrc: "/img/moi/Bìa_tập_1_light_novel_Makeine.jpg",
        title: "Makeine",
    },
    {
        imgSrc: "/img/moi/duoc_su_tu_su_-_ln_-_tap_2_80f9a85932634ffbae6b341eaf6a3f73_1024x1024.webp",
        title: "Drugstore",
    },
    {
        imgSrc: "/img/moi/monogatari.webp",
        title: "monogatari",
    },
    {
        imgSrc: "/img/moi/monster__8_theo_chan_doi_3__ln__bia_1_74d12feab3fb49d7ae2f0d3b3f3d1b64_master.webp",
        title: "Kaiju-8",
    },
    {
        imgSrc: "/img/Ck00MMy.jpg",
        title: "Unmei",
    },
    {
        imgSrc: "/img/Date-a-Live.jpg",
        title: "Date A Live",
    },
];

function renderProducts() {
    const container = document.querySelector('.product-list');
    container.innerHTML = ''; 

    trangchu.forEach(trangchu => {
        const productHTML = `
            <div class="product-item">
                <img src="${trangchu.imgSrc}" alt="${trangchu.title}">
                <div class="product-info">
                    <h3>${trangchu.title}</h3>
                </div>
            </div>
        `;
        container.innerHTML += productHTML; 
    });
}

renderProducts();

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
        imgSrc: "/img/bia_riviere_va_dat_nuoc_cua_loi_cau_nguyen_.webp",
        title: "Riviere Và Đất Nước Của Lời Cầu Nguyện",
        publisher: "Amak phát hành",
        author: "Shiraishi Jougi",
        translator: "Beast666",
        releaseDate: "30/07/2024",
        price: "139.000đ",
        description: `Ở quốc đảo Kururunervia - Đất nước của Lời cầu nguyện, khi đang đau khổ vì không tìm được việc làm, McMillia đã vô tình gặp Riviere - bà chủ tiệm đồ cổ Riviere, với năng lực hóa giải lời nguyền trên những Nguyện vật mang sức mạnh kỳ lạ. Sau khi được mời vào làm trợ thủ tại tiệm, hai người cùng nhau...`,
    },
    {
        imgSrc: "/img/Đợi Anh Trong Mùa Xuân Ngày Hôm Qua.webp",
        title: "Đợi Anh Trong Mùa Xuân Ngày Hôm Qua",
        publisher: "Thái Hà Books phát hành",
        author: "Hachimoku Mei",
        translator: "Nguyễn Thị Thu Hằng",
        releaseDate: "29/06/2024",
        price: "119.000đ",
        description: `Khi tiếng loa lúc 6h chiều vang lên bài Greensleeves, ý thức của Kanae thực hiện bước nhảy thời gian. Funami Kanae, người bỏ nhà ra đi từ Tokyo đến hòn đảo Sodeshima xa xôi nơi cậu từng sống, bị cuốn vào một hiện tượng gọi là “Rollback” đưa cậu ngược dòng về quá khứ. Giữa khoảng thời gian hỗn loạn n...`,
    },
    {
        imgSrc: "/img/dangoainoimatsaucuathegioi1fro.webp",
        title: "Dã Ngoại Nơi Mặt Sau Của Thế Giới",
        publisher: "Nhã Nam phát hành",
        author: "Miyazawa Iori",
        translator: "Nguyễn Dương Quỳnh",
        releaseDate: "08/07/2023",
        price: " 150.000đ",
        description: `Bên cạnh thế giới bình thường của con người tồn tại một “Thế giới Mặt sau”, nơi cư ngụ của những sinh vật kỳ dị và nguy hiểm trong truyện ma và truyền thuyết đô thị. Một ngày nọ, cô sinh viên Kamikoshi Sorawo vô tình mở ra cánh cửa đến với “Thế giới Mặt sau”, và gặp được Nishina Toriko - một cô gái...`,
    },
    {
        imgSrc: "/img/moi/monogatari.webp",
        title: "Monogatari Series",
        publisher: "IPM phát hành",
        author: "Nisioisin",
        translator: "Thu Hà",
        releaseDate: "09/02/2023",
        price: "115.000đ",
        description: `Giữa thời đại của động cơ tuyến tính và tàu đệm từ trường siêu tốc, nam sinh cấp ba Araragi Koyomi bị ma cà rồng tấn công tại một thị trấn vùng quê Nhật Bản, nhờ một ông chú vô gia cư lôi thôi tình cờ đi qua ra tay cứu giúp mới thoát nạn và biến thành “thứ” nửa người nửa ngợm. Kể từ sau sự kiện mang...`,
    },
    {
        imgSrc: "/img/thang-8-cung-em-va-nhung-ky-uc-vun-vo.jpg",
        title: "Tháng 8 Cùng Em Và Những Ký Ức Vụn Vỡ",
        publisher: "Ai Novel phát hành",
        author: "Amasawa Natsuki",
        translator: "Trang Ngọc",
        releaseDate: "12/08/2022",
        price: "125.000đ",
        description: `Một cuốn nhật ký kết nối với người mình yêu thương trong quá khứ.   “Tôi rất yêu em. Tôi chưa bao giờ nghĩ rằng mình có thể yêu ai nhiều đến như vậy. Từng lời nói, cử chỉ, sự thay đổi biểu cảm trên khuôn mặt, nụ cười hay thậm chí là hương thơm trên mái tóc... Mỗi khi nhớ về em, tôi lại thấy ngạt thở...`,
    },
];

function renderProducts2() {
    const container = document.querySelector('.TC-left2');
    container.innerHTML = ''; 

    products2.forEach(product => {
        const productHTML = `
            <div class="noidung">
                <div class="anh">
                    <img src="${product.imgSrc}" alt="${product.title}">
                </div>
                <div class="noidung-chinh">
                    <ul>
                        <li>${product.title}</li>
                        <p>${product.publisher}</p>
                        <i><b>Thông tin thêm</b></i>
                        <p><b>Tác Giả : </b>${product.author}</p>
                        <p><b>Dịch Giả : </b>${product.translator}</p>
                        <p><b>Ngày Phát Hành : </b>${product.releaseDate}</p>
                        <p><b>Giá Bán :</b><a>${product.price}</a></p>
                        <hr>
                        <b>${product.description}</b>
                    </ul>
                </div>
            </div>
            <br>
        `;
        container.innerHTML += productHTML;
    });
}

renderProducts2();