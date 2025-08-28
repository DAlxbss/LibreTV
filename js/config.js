// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com',
        adult: false
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv',
        adult: false
    },
    ruyi: {
        api: 'http://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
        detail: '',
        adult: false
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
        detail: '',
        adult: false
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
        detail: '',
        adult: false
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv',
        adult: false
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
        detail: '',
        adult: false
    },
    maotaizy: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台资源',
        detail: '',
        adult: false
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
        detail: '',
        adult: false
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com',
        adult: false
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
        detail: '',
        adult: false
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
        detail: '',
        adult: false
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
        detail: '',
        adult: false
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源',
        detail: '',
        adult: false
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源',
        detail: '',
        adult: false
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源',
        detail: '',
        adult: false
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧',
        detail: '',
        adult: false
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源',
        detail: '',
        adult: false
    },
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子资源站',
        detail: '',
        adult: false
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源',
        detail: '',
        adult: false
    },
    hongniu: {
        api: 'http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
        name: '紅牛資源',
        detail: '',
        adult: false
    },
    lziV2: {
        api: 'http://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
        name: '量子資源',
        detail: '',
        adult: false
    },
    openMovie: {
        api: 'http://vod-demo.onrender.com/pubdovod.php',
        name: '開放電影',
        detail: '',
        adult: false
    },
    highQuality: {
        api: 'http://api.1080zyku.com/inc/api.php/provide/vod',
        name: '优质资源库',
        detail: '',
        adult: false
    },
    movie39: {
        api: 'http://39kan.com/api.php/provide/vod',
        name: '39影視',
        detail: '',
        adult: false
    },
    heaven: {
        api: 'http://vipmv.cc/api.php/provide/vod',
        name: '天堂资源',
        detail: '',
        adult: false
    },
    lehuo: {
        api: 'http://lehootv.com/api.php/provide/vod',
        name: '乐活影视',
        detail: '',
        adult: false
    },
    tangrenjieV1: {
        api: 'http://tangrenjie.tv/api.php/provide/vod',
        name: '唐人街',
        detail: '',
        adult: false
    },
    kudianV1: {
        api: 'http://api.kuapi.cc/api.php/provide/vod',
        name: '酷点资源',
        detail: '',
        adult: false
    },
    wolongV2: {
        api: 'http://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
        detail: '',
        adult: false
    },
    kudianV2: {
        api: 'http://kudian10.com/api.php/provide/vod',
        name: '酷点资源',
        detail: '',
        adult: false
    },
    tangrenjieV2: {
        api: 'http://tangrenjie.tv/api.php/provide/vod/at/xm',
        name: '唐人街',
        detail: '',
        adult: false
    },
    senlin: {
        api: 'http://slapibf.com/api.php/provide/vod',
        name: '森林资源',
        detail: '',
        adult: false
    },
    yingku: {
        api: 'http://api.ykapi.net/api.php/provide/vod',
        name: '影库资源网',
        detail: '',
        adult: false
    },
    kuaicheV1: {
        api: 'http://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8',
        name: '快车资源',
        detail: '',
        adult: false
    },
    tantan: {
        api: 'http://apittzy.com/api.php/provide/vod',
        name: '探探资源',
        detail: '',
        adult: false
    },
    shandianV1: {
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '閃電資源',
        detail: '',
        adult: false
    },
    jinying: {
        api: 'http://jyzyapi.com/provide/vod/from/jinyingm3u8',
        name: '金鹰资源',
        detail: '',
        adult: false
    },
    guangsu: {
        api: 'http://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
        name: '光速资源',
        detail: '',
        adult: false
    },
    aosika: {
        api: 'http://aosikazy.com/api.php/provide/vod',
        name: '奥斯卡资源网',
        detail: '',
        adult: false
    },
    laoya: {
        api: 'http://api.apilyzy.com/api.php/provide/vod',
        name: '老鸭资源采集',
        detail: '',
        adult: false
    },
    ukuV1: {
        api: 'http://api.ukuapi.com/api.php/provide/vod',
        name: 'U酷资源',
        detail: '',
        adult: false
    },
    beidou: {
        api: 'http://m3u8.bdxzyapi.com/api.php/provide/vod',
        name: '北斗星资源',
        detail: '',
        adult: false
    },
    yinghuaV2: {
        api: 'http://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源网',
        detail: '',
        adult: false
    },
    kudianV3: {
        api: 'http://api.kuapi.cc/api.php/provide/vod',
        name: '酷点资源',
        detail: '',
        adult: false
    },
    shandianV2: {
        api: 'http://sdzyapi.com/api.php/provide/vod',
        name: '闪电资源',
        detail: '',
        adult: false
    },
    feisuV1: {
        api: 'http://feisuzy.com/api.php/provide/vod',
        name: '飞速资源',
        detail: '',
        adult: false
    },
    kuaibo: {
        api: 'http://www.kuaibozy.com/api.php/provide/vod',
        name: '快播资源',
        detail: '',
        adult: false
    },
    baiduV2: {
        api: 'http://api.apibdzy.com/api.php/provide/vod',
        name: '百度资源',
        detail: '',
        adult: false
    },
    aidan: {
        api: 'http://lovedan.net/api.php/provide/vod',
        name: '艾旦影视',
        detail: '',
        adult: false
    },
    piaohuaV1: {
        api: 'http://www.zzrhgg.com/api.php/provide/vod',
        name: '飘花电影',
        detail: '',
        adult: false
    },
    wangmin: {
        api: 'http://prinevillesda.org/api.php/provide/vod',
        name: '网民电影',
        detail: '',
        adult: false
    },
    siwa: {
        api: 'http://siwazyw.cc/api.php/provide/vod',
        name: '丝袜资源',
        detail: '',
        adult: true
    },
    tiankong: {
        api: 'http://m3u8.tiankongapi.com/api.php/provide/vod/from/tkm3u8',
        name: '天空資源',
        detail: '',
        adult: false
    },
    haiwaikanV1: {
        api: 'http://haiwaikan.com/api.php/provide/vod',
        name: '海外看資源',
        detail: '',
        adult: false
    },
    haiwaikanV2: {
        api: 'https://haiwaikan.com/api.php/provide/vod/',
        name: '海外看|点播',
        detail: '',
        adult: false
    },
    vod360: {
        api: 'https://360zy.com/api.php/provide/vod/',
        name: '360|点播',
        detail: '',
        adult: false
    },
    heimuerV2: {
        api: 'https://www.heimuer.tv/api.php/provide/vod',
        name: '黑木耳|点播',
        detail: '',
        adult: false
    },
    citong: {
        api: 'http://ys9.cttv.vip/api.php/provide/vod/',
        name: '刺桐|点播',
        detail: '',
        adult: false
    },
    official: {
        api: 'http://gwcms.cttv.vip/api.php/provide/vod/',
        name: '官网|点播',
        detail: '',
        adult: false
    },
    yeyu: {
        api: 'https://yyff.540734621.xyz/api.php/provide/vod/',
        name: '业余|点播',
        detail: '',
        adult: false
    },
    huaweibaV2: {
        api: 'https://hw8.live/api.php/provide/vod/',
        name: '华为吧|点播',
        detail: '',
        adult: false
    },
    xiaohuangren: {
        api: 'https://iqyi.xiaohuangrentv.com/api.php/provide/vod/',
        name: '小黄人|点播',
        detail: '',
        adult: false
    },
    niuniu: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod/',
        name: '牛牛|点播',
        detail: '',
        adult: false
    },
    yaya: {
        api: 'https://cj.yayazy.net/api.php/provide/vod/',
        name: '丫丫|点播',
        detail: '',
        adult: false
    },
    ukuV2: {
        api: 'https://api.ukuapi.com/api.php/provide/vod/',
        name: 'U酷|点播',
        detail: '',
        adult: false
    },
    haohua: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '豪华|点播',
        detail: '',
        adult: false
    },
    jisuV2: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速|点播',
        detail: '',
        adult: false
    },
    sijiu: {
        api: 'https://49zyw.com/api.php/provide/vod/',
        name: '四九|点播',
        detail: '',
        adult: false
    },
    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod/',
        name: '索尼|点播',
        detail: '',
        adult: false
    },
    ikunV2: {
        api: 'https://ikunzyapi.com/api.php/provide/vod/',
        name: 'ikun|点播',
        detail: '',
        adult: false
    },
    feifanV2: {
        api: 'http://cj.ffzyapi.com/api.php/provide/vod/',
        name: '非凡|点播',
        detail: '',
        adult: false
    },
    liangziV2: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子|点播',
        detail: '',
        adult: false
    },
    baofengV2: {
        api: 'https://bfzyapi.com/api.php/provide/vod/',
        name: '暴风|点播',
        detail: '',
        adult: false
    },
    hongniuV2: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod/',
        name: '红牛|点播',
        detail: '',
        adult: false
    },
    feisuV2: {
        api: 'https://www.feisuzyapi.com/api.php/provide/vod/',
        name: '飞速|点播',
        detail: '',
        adult: false
    },
    kuaikan: {
        api: 'https://www.kuaikan-api.com/api.php/provide/vod/',
        name: '快看|点播',
        detail: '',
        adult: false
    },
    xiongzhang: {
        api: 'https://xzcjz.com/api.php/provide/vod/',
        name: '熊掌|点播',
        detail: '',
        adult: false
    },
    kuaicheV2: {
        api: 'https://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8/',
        name: '快车|点播',
        detail: '',
        adult: false
    },
    shandianV3: {
        api: 'http://sdzyapi.com/api.php/provide/vod/',
        name: '闪电|点播',
        detail: '',
        adult: false
    },
    yinghuaV3: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod/',
        name: '樱花|点播',
        detail: '',
        adult: false
    },
    wolongV3: {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod/',
        name: '卧龙|点播',
        detail: '',
        adult: false
    },
    piaohuaV2: {
        api: 'http://www.ahjiuman.com/api.php/provide/vod/at/json',
        name: '飘花|点播',
        detail: '',
        adult: false
    },
    tianyi: {
        api: 'https://www.911ysw.top/tianyi.php/provide/vod/',
        name: '天翼|点播',
        detail: '',
        adult: false
    },
    huya: {
        api: 'https://www.huyaapi.com/api.php/provide/vod/',
        name: '虎牙|点播',
        detail: '',
        adult: false
    },
    baiduV3: {
        api: 'https://api.apibdzy.com/api.php/provide/vod/',
        name: '百度|点播',
        detail: '',
        adult: false
    },
    piaoling: {
        api: 'https://p2100.net/api.php/provide/vod/',
        name: '飘零|点播',
        detail: '',
        adult: false
    },
    wujinV2: {
        api: 'https://api.wujinapi.com/api.php/provide/vod/',
        name: '无尽|点播',
        detail: '',
        adult: false
    },
    subo: {
        api: 'https://subocaiji.com/api.php/provide/vod/',
        name: '速博|点播',
        detail: '',
        adult: false
    },
    moduV2: {
        api: 'https://caiji.moduapi.cc/api.php/provide/vod/',
        name: '魔都|点播',
        detail: '',
        adult: false
    },
    zuidaV2: {
        api: 'http://zuidazy.me/api.php/provide/vod/',
        name: '最大|点播',
        detail: '',
        adult: false
    },
    qihu: {
        api: 'https://caiji.qhzyapi.com/api.php/provide/vod/',
        name: '奇虎|点播',
        detail: '',
        adult: false
    },
    huohu: {
        api: 'https://hhzyapi.com/api.php/provide/vod/',
        name: '火狐|点播',
        detail: '',
        adult: false
    },
    xinlang: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod/',
        name: '新浪|点播',
        detail: '',
        adult: false
    },
    kuaiyun: {
        api: 'https://www.kuaiyunzy.com/api.php/provide/vod/',
        name: '快云|点播',
        detail: '',
        adult: false
    }
    //ARCHIVE https://telegra.ph/APIs-08-12
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
