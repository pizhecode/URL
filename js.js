const sites = [
    { name: "首页", category: "kun", url: "https://kunkun.cool", image: "" },
    //邮箱
    { name: "163", category: "邮箱", url: "https://mail.163.com/", image: "https://mail.163.com/favicon.ico" },
    { name: "QQ邮箱", category: "邮箱", url: "https://mail.qq.com", image: "https://mail.qq.com/zh_CN/htmledition/images/favicon/qqmail_favicon_96h.png" },
    //工具
    { name: "图片格式转换", category: "工具", url: "http://www.ico8.net/index.php?action=make", image: "" },
    { name: "GPT0", category: "工具", url: "https://chat18.aichatos8.com/", image: "https://chat18.aichatos8.com/favicon.ico" },
    { name: "GPT1", category: "工具", url: "http://chat5.aiyunos.top/", image: "https://chat18.aichatos8.com/favicon.ico" },
    { name: "通义千问", category: "工具", url: "https://tongyi.aliyun.com/qianwen/", image: "https://img.alicdn.com/imgextra/i1/O1CN01AKUdEM1qP6BQVaYhT_!!6000000005487-2-tps-512-512.png" },
    { name: "文心一言", category: "工具", url: "https://yiyan.baidu.com/", image: "https://nlp-eb.cdn.bcebos.com/static/eb/asset/robin.e9dc83e5.png" },
    { name: "copilot", category: "工具", url: "https://copilot.microsoft.com/", image: "https://copilot.microsoft.com/rp/cgFxt_KTOKfjNNxtm5HS3A13G4I.jpg" },
    { name: "讯飞星火", category: "工具", url: "https://xinghuo.xfyun.cn/desk", image: "https://xhspdup.xfyun.cn/static/media/gpt-logo.e9ad4150a385435f5a90b50c44dad847.svg" },
    { name: "文心一格", category: "工具", url: "https://yige.baidu.com/", image: "https://yige.baidu.com/favicon.png" },
    { name: "PC软件下载", category: "工具", url: "https://pc.qq.com/", image: "https://pc1.gtimg.com/finance/softweb/fav/favicon_32x32.ico" },
    { name: "阿里巴巴图标库", category: "工具", url: "https://www.iconfont.cn/", image: "https://www.iconfont.cn/favicon.ico" },
    { name: "爱给网", category: "工具", url: "https://www.aigei.com/", image: "https://cdn-sqn.aigei.com/assets/site/img/logo/aigei_114-114.png" },
    { name: "免费下载电影", category: "工具", url: "http://www.kkkob.com/apps/index.html?id=211229kl", image: "" },
    // 学习
    { name: "NODEJS国内镜像", category: "学习", url: "https://nodejs.cn", image: "https://img.nodejs.cn/logo.svg" },
    { name: "免费CDN", category: "学习", url: "https://unpkg.com/", image: "https://unpkg.com/favicon.ico" },
    { name: "NPM", category: "学习", url: "https://www.npmjs.cn/", image: "https://www.npmjs.cn/images/favicon.ico" },
    { name: "美叶", category: "学习", url: "https://www.meiye.art", image: "https://icon.meiye.art/favicon.ico" },
    { name: "Uniapp", category: "学习", url: "https://uniapp.dcloud.net.cn", image: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788" },
    { name: "GO语言", category: "学习", url: "https://studygolang.com/dl", image: "https://studygolang.com/static/pkgdoc/index_files/pkg.png" },
    { name: "日期处理类库", category: "学习", url: "http://momentjs.cn", image: "" },
    { name: "web安全色", category: "学习", url: "http://www.bootcss.com/p/websafecolors/", image: "" },
    // { name: "", category: "学习", url: "", image: "" },
];

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const categoryList = document.getElementById('category-list');
const siteList = document.getElementById('site-list');

// 初始化加载所有网站
window.onload = function() {
    renderSites(sites);
};

// 监听搜索输入框输入事件
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredSites = sites.filter(site => 
        site.name.toLowerCase().includes(searchTerm) || site.category.toLowerCase().includes(searchTerm)
    );
    renderSites(filteredSites);
});

// 监听分类按钮点击事件
categoryList.addEventListener('click', function(event) {
    if (event.target.classList.contains('category-btn')) {
        const category = event.target.dataset.category;
        const filteredSites = category === '' ? sites : sites.filter(site => site.category === category);
        renderSites(filteredSites);
    }
});

// 渲染网站列表
function renderSites(sites) {
    siteList.innerHTML = '';
    sites.forEach(site => {
        const siteItem = document.createElement('div');
        siteItem.classList.add('site-item');
        
        // 判断是否有自定义的图片，否则使用默认图片
        const imageUrl = site.image ? (site.image.startsWith('http') ? site.image : 'images/' + site.image) : 'https://kunkun.cool/images/pz.jpg';
        
        siteItem.innerHTML = `
            <a href="${site.url}" target="_blank">
                <img src="${imageUrl}" alt="${site.name}">
                <h3>${site.name}</h3>
                <p>${site.category}</p>
            </a>
        `;
        siteList.appendChild(siteItem);
    });
}
