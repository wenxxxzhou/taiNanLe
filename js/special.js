window.addEventListener('load', function () {
    // 获取元素
    const music_unlock = document.querySelector('#music-unlock');
    const mirror_set = document.querySelector('#mirror-set');
    const mirror_wiki = this.document.querySelector('#mirror-wiki');
    const mirror_google = this.document.querySelector('#mirror-google');
    const mirror_ytb = this.document.querySelector('#mirror-ytb');
    const mirror_twi = this.document.querySelector('#mirror-twi');
    const music_unlock_ul = music_unlock.children[0];
    const mirror_set_ul = mirror_set.children[0];
    const mirror_wiki_ul = mirror_wiki.children[0];
    const mirror_google_ul = mirror_google.children[0];
    const mirror_ytb_ul = mirror_ytb.children[0];
    const mirror_twi_ul = mirror_twi.children[0];
    // 存储の数据 音乐
    const music_unlock_data = [{
        link: 'https://mp3.aoleiao.com/',
        title: '酷Q网音乐格式转换',
    }, {
        link: 'https://unlock-music-ix.netlify.app/',
        title: '音乐解锁1',
    }, {
        link: 'https://github.com/unlock-music/unlock-music',
        title: 'Unlock Music 音乐解锁',
    }, {
        link: 'https://tool.whgpc.com/Tools/unlockmusic/',
        title: '音乐解锁2',
    }
    ];
    // 存储の数据 镜像
    // 1. 镜像集
    const mirror_set_data = [{
        link: 'https://searx.space/',
        title: 'searX'
    }, {
        link: 'https://invidious.io/',
        title: 'invidious，ytb镜像列表'
    }, {
        link: 'https://github.com/iv-org/invidious',
        title: 'invidious，ytb项目'
    }, {
        link: 'https://github.com/zedeus/nitter/wiki/Instances',
        title: 'twi_mirror-list'
    }, {
        link: 'https://tool.chinaz.com/',
        title: '暂时，站长'
    }, {
        link: 'https://www.aizhan.com/',
        title: '暂时，爱站'
    }];
    // 2. wiki
    const mirror_wiki_data = [{
        link: 'https://zh.wikipedia.wmmirror.live/wiki',
        title: '反代，有原条目链接',
    }, {
        link: 'https://cnwiki.tk/',
        title: '未知'
    }, {
        link: 'https://www.wikipedia.ahut.cf/',
        title: '反代，无原条目链接',
        // backup: 'https://www.wikipedia.ahau.cf/'
        // backup: ['https://www.wikipedia.ahau.cf/', 'https://www.wikipedia.hfut.cf/']
    }, {
        link: 'https://www.wikipedia.hfut.cf/',
        title: '反代，须改host，无原条目链接',
    }, {
        link: 'https://www.wikipedia.ahau.cf/',
        title: '反代，须改host，无原条目链接',
    }, {
        link: 'https://www.wikipedia.ryancray.com/',
        title: '反代，须改host，无原条目链接',
    }, {
        link: 'https://wiki.froth.zone/',
        title: '反代，wikiless实例，无原条目链接',
    }, {
        link: 'https://wiki604kph.xyz/',
        title: '反代，wikiless实例，无原条目链接',
    }, {
        link: 'https://wikiless.sethforprivacy.com',
        title: '反代，wikiless实例，无原条目链接',
    }, {
        link: 'https://en.jinzhao.wiki/wiki/Main_Page',
        title: '未知',
    }];
    // google
    const mirror_google_data = [{
        link: 'https://search.ahnu.cf/',
        title: '未知',
    }, {
        link: 'https://search.ecnu.cf/',
        title: '未知',
    }, {
        link: 'https://xgoogle.xyz/',
        title: '未知',
    }, {
        link: 'https://www.xn--flw351e.cf/',
        title: '未知',
    }, {
        link: 'https://www.soumao.cc/',
        title: '未知',
    }, {
        link: 'https://dhobi.win/',
        title: '未知',
    }, {
        link: 'https://goo.xbzxs.org/',
        title: '未知',
    }, {
        link: 'https://google.icloudnative.io/',
        title: '未知，（基于Google的Startpage）',
    }, {
        link: 'https://g48.i-research.edu.eu.org/',
        title: '未知，注意！',
    }, {
        link: 'https://googlehnzyc.azurewebsites.net/',
        title: '未知',
    }];
    // ytb
    const mirror_ytb_data = [{
        link: 'https://invidious.esmailelbob.xyz',
        title: '未知',
    }, {
        link: 'https://inv.bp.projectsegfau.lt',
        title: '未知',
    }, {
        link: 'https://invidious.sethforprivacy.com/feed/popular',
        title: '未知',
    }, {
        link: 'https://invidious.tiekoetter.com/feed/popular',
        title: '未知',
    }, {
        link: 'https://invidious.slipfox.xyz/feed/popular',
        title: '未知',
    }, {
        link: 'https://inv.vern.cc/feed/popular',
        title: '未知',
    }, {
        link: 'https://inv.privacy.com.de/feed/popular',
        title: '未知',
    }, {
        link: 'https://invidious.nerdvpn.de/',
        title: '未知',
    }];
    // twi
    const mirror_twi_data = [{
        link: 'https://nitter.garudalinux.org/',
        title: '未知',
    }, { // twi开始
        link: 'https://bird.trom.tf/',
        title: '未知，暂不可用',
    }, {
        link: 'https://nttr.stream/',
        title: '未知，暂不可用',
    }, {
        link: 'https://nitter.it/',
        title: '未知，暂不可用',
    }, {
        link: 'https://nitter.grimneko.de/',
        title: '未知，暂不可用',
    }, {
        link: 'https://twitter.censors.us/',
        title: '未知，暂不可用',
    }];
    // 输出渲染--尝试1
    setData(music_unlock_data, music_unlock_ul);
    setData(mirror_set_data, mirror_set_ul);
    setData(mirror_wiki_data, mirror_wiki_ul);
    setData(mirror_google_data, mirror_google_ul);
    setData(mirror_ytb_data, mirror_ytb_ul);
    setData(mirror_twi_data, mirror_twi_ul);
    // 渲染函数
    function setData(myData, father) {
        father.innerHTML = '';
        myData.forEach(function (value) {
            let dataOut = '<li><a href = ' + value.link + ' target = "blank" ><h4>' + value.title + '</h4><span>' + value.link + '</span></a></li >';
            // function hideBackup() {
            //     let backup_mirror_set = document.querySelector('#backup-mirror-search');
            //     backup_mirror_set.style.display = 'none';
            // }
            father.insertAdjacentHTML('beforeend', dataOut);
        });
    };
})