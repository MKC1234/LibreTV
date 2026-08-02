const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    source2: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '不知道',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
