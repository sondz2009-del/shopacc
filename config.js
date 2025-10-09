// Configuration for SHOPCLONE6 Static Website
const config = {
    project: 'SHOPCLONE6',
    version: '3.0.1',
    max_time_load: 4,
    site: {
        title: 'SHOPCLONE6 - Mua Tài Khoản Game',
        description: 'Mua tài khoản game giá rẻ, uy tín, chất lượng cao',
        keywords: 'mua tài khoản game, shopclone6, tài khoản game giá rẻ',
        author: 'CMSNT.CO',
        favicon: 'assets/img/favicon.png',
        logo: 'assets/img/logo.png',
        theme_color: '#007bff',
        theme_color2: '#6c757d',
        menu_title: 'SHOPCLONE6',
        thongbao: 'Chào mừng bạn đến với SHOPCLONE6 - Nơi mua tài khoản game uy tín nhất!',
        status_giao_dich_gan_day: 1,
        position_gd_gan_day: 1,
        display_box_shop: 1,
        display_show_product: 1,
        type_showProduct: 1,
        hide_product_empty: 0,
        display_sold: 1,
        display_rating: 1,
        display_country: 1,
        display_preview: 1,
        status_store_fanpage: 1,
        status_buff_like_sub: 1,
        status_ref: 1,
        status_paypal: 1,
        status_perfectmoney: 1,
        status_crypto: 1,
        status_napthe: 1,
        display_blog: 1,
        display_tool: 1,
        display_question: 1,
        display_api: 1,
        display_contact: 1,
        status_spin: 1,
        mouse_click_effect: 1,
        font_family: 'font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;',
        gif_loader: 'public/datum/assets/images/loader.gif',
        gif_loading: 'public/datum/assets/images/loading.gif',
        bg_card: 'assets/img/card-bg.jpg',
        javascript_header: '',
        javascript: ''
    },
    config_listbank: [
        'Vietcombank',
        'ACB',
        'MBBank',
        'VPBank',
        'Techcombank',
        'TPBank',
        'VPBank',
        'Vietinbank',
        'Sacombank',
        'THESIEURE',
        'MOMO',
        'Viettelpay',
        'Zalo Pay',
        'Cake',
        'Shopee Pay',
        'MSB',
        'NamABank',
        'LienVietPostBank',
        'VietCapitalBank',
        'BIDV',
        'VIB',
        'HDBank',
        'SeABank',
        'GPBank',
        'PVcomBank',
        'NCB',
        'ShinhanBank',
        'SCB',
        'PGBank',
        'Agribank',
        'SaigonBank',
        'DongABank',
        'BacABank',
        'StandardChartered',
        'Oceanbank',
        'VRB',
        'ABBANK',
        'VietABank',
        'Eximbank',
        'VietBank',
        'IndovinaBank',
        'BaoVietBank',
        'PublicBank',
        'SHB',
        'CBBank',
        'OCB',
        'KienLongBank',
        'CIMB',
        'HSBC',
        'DBSBank',
        'Nonghyup',
        'HongLeong',
        'IBK Bank',
        'Woori',
        'UnitedOverseas',
        'KookminHN',
        'KookminHCM',
        'COOPBANK',
        'Kasikorn Bank',
        'Siam Commercial Bank',
        'Bank of Ayudthya',
        'Krungthai Bank',
        'Bangkok Bank',
        'Thanachart Bank'
    ],
    // Sample data for static website
    sampleData: {
        categories: [
            {
                id: 1,
                name: 'Facebook',
                image: 'assets/img/facebook-icon.png',
                status: 1,
                stt: 1
            },
            {
                id: 2,
                name: 'Instagram',
                image: 'assets/img/instagram-icon.png',
                status: 1,
                stt: 2
            },
            {
                id: 3,
                name: 'TikTok',
                image: 'assets/img/tiktok-icon.png',
                status: 1,
                stt: 3
            }
        ],
        products: [
            {
                id: 1,
                name: 'Tài khoản Facebook',
                content: 'Tài khoản Facebook chất lượng cao',
                price: 50000,
                category_id: 1,
                flag: 'vn',
                sold: 1250,
                status: 1,
                stt: 1,
                preview: null,
                id_api: 0,
                api_stock: 0
            },
            {
                id: 2,
                name: 'Tài khoản Instagram',
                content: 'Tài khoản Instagram chất lượng cao',
                price: 75000,
                category_id: 2,
                flag: 'us',
                sold: 890,
                status: 1,
                stt: 2,
                preview: null,
                id_api: 0,
                api_stock: 0
            },
            {
                id: 3,
                name: 'Tài khoản TikTok',
                content: 'Tài khoản TikTok chất lượng cao',
                price: 60000,
                category_id: 3,
                flag: 'cn',
                sold: 650,
                status: 1,
                stt: 3,
                preview: null,
                id_api: 0,
                api_stock: 0
            }
        ],
        recentOrders: [
            {
                id: 1,
                buyer: 'abc123',
                amount: 1,
                product_id: 1,
                pay: 50000,
                create_time: Date.now() - 120000 // 2 minutes ago
            },
            {
                id: 2,
                buyer: 'xyz789',
                amount: 2,
                product_id: 2,
                pay: 150000,
                create_time: Date.now() - 300000 // 5 minutes ago
            },
            {
                id: 3,
                buyer: 'def456',
                amount: 1,
                product_id: 3,
                pay: 60000,
                create_time: Date.now() - 600000 // 10 minutes ago
            }
        ],
        recentInvoices: [
            {
                id: 1,
                user_id: 'abc123',
                amount: 500000,
                payment_method: 'Vietcombank',
                status: 1,
                create_time: Date.now() - 60000 // 1 minute ago
            },
            {
                id: 2,
                user_id: 'xyz789',
                amount: 1000000,
                payment_method: 'MOMO',
                status: 1,
                create_time: Date.now() - 180000 // 3 minutes ago
            },
            {
                id: 3,
                user_id: 'def456',
                amount: 200000,
                payment_method: 'Zalo Pay',
                status: 1,
                create_time: Date.now() - 480000 // 8 minutes ago
            }
        ]
    }
};

// Helper functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

function formatCash(amount) {
    return new Intl.NumberFormat('vi-VN').format(amount);
}

function timeAgo(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 60) {
        return `${minutes} phút trước`;
    } else if (hours < 24) {
        return `${hours} giờ trước`;
    } else {
        return `${days} ngày trước`;
    }
}

function getRowRealtime(table, id, field) {
    // Mock function for static data
    if (table === 'users') {
        return 'user' + id;
    } else if (table === 'products') {
        const product = config.sampleData.products.find(p => p.id === id);
        return product ? product[field] : '';
    } else if (table === 'categories') {
        const category = config.sampleData.categories.find(c => c.id === id);
        return category ? category[field] : '';
    }
    return '';
}

function getFlag(countryCode) {
    return `<img src="https://flagcdn.com/24x18/${countryCode}.png" alt="${countryCode}">`;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
}
